// Coordenades Taradell
var southWest = L.latLng(41.868525, 2.279981); // Coordenada surest
var northEast = L.latLng(41.877704, 2.292463); // Coordenada nortest
var bounds = L.latLngBounds(southWest, northEast); // Limits

// Iniciar el mapa Leaflet 
var map = L.map('map', {
  maxBounds: bounds,
  minZoom: 16 //  zoom mínim
}).fitBounds(bounds);

// Proveïdor del mapa, OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setMaxBounds(bounds);

function mostrarCoordenadas(latlng) {
  var coordenadasElement = document.getElementById('coordenadas');
  coordenadasElement.textContent = 'Latitud: ' + latlng.lat + ', Longitud: ' + latlng.lng;
}

function obrirPestanya(carrer) {
  var carrerElement = document.getElementById('carrer');
  carrerElement.textContent = carrer;

  var textoElement = document.getElementById('texto');
  textoElement.innerHTML = ''; // Esborra el contingut anterior

  var mitjanes = textosCarrer[carrer];
  for (var mes in mitjanes) {
    var mitjana = mitjanes[mes];
    var mesItem = document.createElement('li');
    mesItem.textContent = mes + ': ' + mitjana;
    textoElement.appendChild(mesItem);
  }

  document.getElementById('sidebar').classList.add('activa'); //sidebar
}

function tancarPestanya() {
  document.getElementById('sidebar').classList.remove('activa'); // Eliminar la classe 'activa' 
}

// Evento click en el mapa
map.on('click', function(e) {
  var latlng = e.latlng;
  mostrarCoordenadas(latlng);
  var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + latlng.lat + '&lon=' + latlng.lng;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data && data.address && data.address.road) {
        var calle = data.address.road;
        obrirPestanya(calle);
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});

document.addEventListener('click', function(e) {
  if (!document.getElementById('sidebar').contains(e.target)) {
    tancarPestanya();
  }
});


// CREAR LINEA PER LIMITAR ZONES 
// ZONA A: RED 

var latZonaA1 = [
    [41.87234556200651, 2.2900653731070624], // Punt 1
    [41.87248561849289, 2.285480422182338]  // Punt 2
  ];
var latZonaA2 = [
      [41.87248561849289, 2.285480422182338], // Punt 1
      [41.872369501935516, 2.283843677444355]  // Punt 2
  ];
var latZonaA3 = [
      [41.872369501935516, 2.283843677444355], 
      [41.8725813727092, 2.2827332504913]  
  ];
var latZonaA4 = [
      [41.8725813727092, 2.2827332504913], 
      [41.872836690054676, 2.2827923773247965]  
  ];
var latZonaA5 = [
      [41.872836690054676, 2.2827923773247965], 
      [41.87320824729245, 2.282760108961535]  
  ];
var latZonaA6 = [
      [41.87320824729245, 2.282760108961535], 
      [41.873763411707266, 2.282583198369999]  
  ];
var latZonaA7 = [
      [41.873763411707266, 2.282583198369999], 
      [41.874146635780335, 2.282379752181063]  
  ];
var latZonaA8 = [
      [41.874146635780335, 2.282379752181063],  
      [41.87462619933245, 2.282341514581696]  
  ];
var latZonaA9 = [
      [41.87462619933245, 2.282341514581696],  
      [41.87560433850909, 2.2821862966166955]  
  ];
var latZonaA10 = [
      [41.87560433850909, 2.2821862966166955],  
      [41.87616786023877, 2.2821537781407035]  
  ];
var latZonaA11 = [
      [41.87616786023877, 2.2821537781407035],  
      [41.87622781327756, 2.2822449944688743]  
  ];
var latZonaA12 = [
      [41.87622781327756, 2.2822449944688743],  
      [41.87644328331411, 2.2835916225569934]  
  ];
var latZonaA13 = [
      [41.87644328331411, 2.2835916225569934],  
      [41.87647537255847, 2.2840204788957545]  
  ];
var latZonaA14 = [
      [41.87647537255847, 2.2840204788957545],  
      [41.876367740831874, 2.286660257633555]  
  ];
var latZonaA15 = [
      [41.876367740831874, 2.286660257633555],  
      [41.87472255143601, 2.2893953377530223]  
  ];
var latZonaA16 = [
      [41.87472255143601, 2.2893953377530223],  
      [41.87234556200651, 2.2900653731070624]  
  ];
  
// Crear línea 1
var polyline = L.polyline(latZonaA1, { color: 'red' }).addTo(map);
// 2
var polyline = L.polyline(latZonaA2, { color: 'red' }).addTo(map);
// 3
var polyline = L.polyline(latZonaA3, { color: 'red' }).addTo(map);
// 4
var polyline = L.polyline(latZonaA4, { color: 'red' }).addTo(map);
// 5
var polyline = L.polyline(latZonaA5, { color: 'red' }).addTo(map);
// 6
var polyline = L.polyline(latZonaA6, { color: 'red' }).addTo(map);
// 7
var polyline = L.polyline(latZonaA7, { color: 'red' }).addTo(map);
// 8
var polyline = L.polyline(latZonaA8, { color: 'red' }).addTo(map);
// 9
var polyline = L.polyline(latZonaA9, { color: 'red' }).addTo(map);
// 10
var polyline = L.polyline(latZonaA10, { color: 'red' }).addTo(map);
// 11
var polyline = L.polyline(latZonaA11, { color: 'red' }).addTo(map);
// 12
var polyline = L.polyline(latZonaA12, { color: 'red' }).addTo(map);
// 13
var polyline = L.polyline(latZonaA13, { color: 'red' }).addTo(map);
// 14
var polyline = L.polyline(latZonaA14, { color: 'red' }).addTo(map);
// 15
var polyline = L.polyline(latZonaA15, { color: 'red' }).addTo(map);
// 16
var polyline = L.polyline(latZonaA16, { color: 'red' }).addTo(map);


// ZONA B: BLUE

var latZonaB1 = [
    [41.87255319224477, 2.282717187553947], 
    [41.87259752983362, 2.2822090488117035]  
];
var latZonaB2 = [
    [41.87259752983362, 2.2822090488117035], 
    [41.8719300722538, 2.2814189392731876]  
];
var latZonaB3 = [
    [41.8719300722538, 2.2814189392731876], 
    [41.87152260561151, 2.28119369738101]  
];
var latZonaB4 = [
    [41.87152260561151, 2.28119369738101], 
    [41.871254955731914, 2.280153294355159]  
];
var latZonaB5 = [
    [41.871254955731914, 2.280153294355159], 
    [41.87068839305479, 2.279398888061524]  
];
var latZonaB6 = [
    [41.87068839305479, 2.279398888061524], 
    [41.86994664629068, 2.2785965506476162]  
];
var latZonaB7 = [
    [41.86994664629068, 2.2785965506476162], 
    [41.86913872363455, 2.279731387997628]  
];
var latZonaB8 = [
    [41.86913872363455, 2.279731387997628], 
    [41.867694199517295, 2.2826294530982465]  
];
var latZonaB9 = [
    [41.867694199517295, 2.2826294530982465], 
    [41.870097199665416, 2.2841611452106707]  
];
var latZonaB10 = [
    [41.870097199665416, 2.2841611452106707], 
    [41.87151456199699, 2.2853182072452154]  
];
var latZonaB11 = [
    [41.87151456199699, 2.2853182072452154], 
    [41.872453434041056, 2.285244451454061]  
];
var latZonaB12 = [
    [41.872453434041056, 2.285244451454061], 
    [41.87232165558024, 2.2838541091767928]  
];
var latZonaB13 = [
    [41.87232165558024, 2.2838541091767928], 
    [41.87255319224477, 2.282717187553947]  
];

// lines blue, zona B
var polyline = L.polyline(latZonaB1, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB2, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB3, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB4, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB5, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB6, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB7, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB8, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB9, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB10, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB11, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB12, { color: 'blue' }).addTo(map);
var polyline = L.polyline(latZonaB13, { color: 'blue' }).addTo(map);


// ZONA C: green

var latZonaC1 = [
    [41.87243737741519, 2.2852809094633924], 
    [41.87228959776213, 2.2900700205352646]  
];
var latZonaC2 = [
    [41.87228959776213, 2.2900700205352646], 
    [41.871486696286105, 2.2904568649673123]  
];
var latZonaC3 = [
    [41.871486696286105, 2.2904568649673123], 
    [41.870496379258825, 2.2905690099412994]  
];
var latZonaC4 = [
    [41.870496379258825, 2.2905690099412994], 
    [41.870288294105826, 2.289721698679506]  
];
var latZonaC5 = [
    [41.870288294105826, 2.289721698679506], 
    [41.869166008073925, 2.289882825247234]  
];
var latZonaC6 = [
    [41.869166008073925, 2.289882825247234], 
    [41.86873461185534, 2.28893884380498]  
];
var latZonaC7 = [
    [41.86873461185534, 2.28893884380498], 
    [41.868646750278046, 2.2883703564664564]  
];
var latZonaC8 = [
    [41.868646750278046, 2.2883703564664564], 
    [41.868874391388545, 2.28500199155838]  
];
var latZonaC9 = [
    [41.868874391388545, 2.28500199155838], 
    [41.869082063273474, 2.283570070903132]  
];
var latZonaC10 = [
    [41.869082063273474, 2.283570070903132], 
    [41.87005268335214, 2.284186760696363]  
];
var latZonaC11 = [
    [41.87005268335214, 2.284186760696363], 
    [41.87150270707153, 2.2853881932765057]  
];
var latZonaC12 = [
    [41.87150270707153, 2.2853881932765057], 
    [41.87243737741519, 2.2852809094633924]  
];


// linies green, zona C
var polyline = L.polyline(latZonaC1, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC2, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC3, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC4, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC5, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC6, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC7, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC8, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC9, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC10, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC11, { color: 'green' }).addTo(map);
var polyline = L.polyline(latZonaC12, { color: 'green' }).addTo(map);


// TEXTOS DE CADA CARRER.
var textosCarrer = {
  'Carrer de Ramon Pou': {
    'Mitjana mes d’Agost': 'X db',
    'Mijana mes de Juliol': 'Y db',
    'Mitjana de tot les mesures fetes': 'XX db',
    'Mitjana dies de Festa major': '100 db'
    // ...
  },

  'Carrer de la Vila': {
    'Mes d’Agost': 'X db',
    'Mes de Juliol': 'Y db',
    // ...
  },

  'Carretera de Balenyà': {
    'Mes d’Agost': 'X db',
    'Mes de Juliol': 'Y db',
    // ...
  },

  'carrer de Pompeu Fabra': {
    'Mes d’Agost': 'X db',
    'Mes de Juliol': 'Y db',
    // ...
  },
};
