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
  

function tancarPestaya() {
    document.getElementById('sidebar').classList.remove('activa'); // Eliminar la clase 'activa' 
}

// Evento click en el mapa
map.on('click', function(e) {
    var latlng = e.latlng;
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
