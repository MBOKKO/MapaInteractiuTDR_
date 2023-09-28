// Coordenades Taradell
var southWest = L.latLng(41.89793311806818, 2.252052404207019); // Coordenada surest
var northEast = L.latLng(41.844521402518744, 2.3174536668378476); // Coordenada nortest
var bounds = L.latLngBounds(southWest, northEast); // Limits

// Iniciar el mapa Leaflet 
var map = L.map('map', {
  maxBounds: bounds,
  minZoom: 14 //  zoom mínim (15)
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

// PART 2


var latZonaXX = [
  [], 
  []  
];

// VERDES : (COMENÇA A LA MADRIGUER)
var latZonaA1 = [
    [41.88638852030364, 2.280131119693212], // Punt 1
    [41.88608508181283, 2.2791872489068825]  // Punt 2
  ];
var latZonaA2 = [
    [41.88608508181283, 2.2791872489068825], 
    [41.88563341878185, 2.2794930313454125]  
  ];
var latZonaA3 = [
    [41.88563341878185, 2.2794930313454125], 
    [41.88592518097263, 2.280405135509809]  
  ];
var latZonaA4 = [
    [41.88563341878185, 2.2794930313454125], 
    [41.884384067471544, 2.2812467897974336]  
  ];

var latZonaA5 = [
    [41.88524241540259, 2.2800510248022525], 
    [41.885466043487675, 2.280694089514373]  
  ];
var latZonaA6 = [
    [41.88438784346085, 2.281247049005169], 
    [41.8845635232191, 2.281531282821532]  
  ];
var latZonaA7 = [ // ROCA
    [41.880586457179895, 2.292540645086807], 
    [41.8820075106799, 2.293595802884623]  
  ]; 

var latZonaA8 = [
    [41.8820075106799, 2.293595802884623], 
    [41.883844258554184, 2.294180453205619]  
];
var latZonaA9 = [
  [41.883844258554184, 2.294180453205619], 
  [41.88380876869061, 2.296739091126474]  
];
var latZonaA10 = [
  [41.88380876869061, 2.296739091126474], 
  [41.8846151007862, 2.2991735015968433]  
];
var latZonaA11 = [
  [41.8846151007862, 2.2991735015968433], 
  [41.8846151007862, 2.2991735015968433]  
];
var latZonaA12 = [
  [41.8846151007862, 2.2991735015968433], 
  [41.88468372550517, 2.302506669670153]  
];
var latZonaA13 = [
  [41.88468372550517, 2.302506669670153], 
  [41.88538621432164, 2.30494640363101]  
];
var latZonaA14 = [
  [41.88538621432164, 2.30494640363101], 
  [41.88537018083848, 2.3057251234294944]  
];
var latZonaA15 = [
  [41.88537018083848, 2.3057251234294944], 
  [41.88449952978713, 2.3063467804920017]  
];
var latZonaA16 = [
  [41.88449952978713, 2.3063467804920017], 
  [41.88312550438084,2.3068150360482913]  
];
var latZonaA17 = [
  [41.88312550438084,2.3068150360482913], 
  [41.88166453392572, 2.3084290205233997]  
];
var latZonaA18 = [
  [41.88312550438084,2.3068150360482913], 
  [41.88166453392572, 2.3084290205233997]  
];
var latZonaA19 = [
  [41.88166453392572, 2.3084290205233997], 
  [41.88093769052331, 2.3086441156600612]  
];
var latZonaA20 = [
  [41.88093769052331, 2.3086441156600612], 
  [41.8797111437348, 2.3091954380493234]  
];
var latZonaA21 = [
  [41.8797111437348, 2.3091954380493234], 
  [41.88060182904547, 2.304486091416425]  
];
var latZonaA22 = [
  [41.88060182904547, 2.304486091416425], 
  [41.879660282545004, 2.303962058947367]  
];
var latZonaA23 = [
  [41.879660282545004, 2.303962058947367], 
  [41.87981876459497, 2.3019102248811945]  
];
var latZonaA24 = [
  [41.87981876459497, 2.3019102248811945], 
  [41.88007834026517, 2.3019584576526113]  
];
var latZonaA25 = [
  [41.88007834026517, 2.3019584576526113], 
  [41.88080882304886, 2.2979457653420625]  
];
var latZonaA26 = [
  [41.88080882304886, 2.2979457653420625], 
  [41.88050164361907, 2.2978379858509705]  
];
var latZonaA27 = [
  [41.88050164361907, 2.2978379858509705], 
  [41.88074919995682, 2.294984530797888]  
];
var latZonaA28 = [
  [41.88074919995682, 2.294984530797888], 
  [41.8812124951503, 2.2939709725997175]  
];
var latZonaA29 = [
  [41.8812124951503, 2.2939709725997175], 
  [41.88042956174197, 2.2935149803930033]  
];
var latZonaA30 = [
  [41.88042956174197, 2.2935149803930033], 
  [41.880586457179895, 2.292540645086807]  
];
var latZonaA31 = [ //GOITALLOPS
  [41.865266880882075, 2.29121367840659], 
  [41.865011269366654, 2.290655936578308]  
];
var latZonaA32 = [ 
  [41.865011269366654, 2.290655936578308], 
  [41.86398048154148, 2.2912673892836155]  
];
var latZonaA33 = [ 
  [41.86398048154148, 2.2912673892836155], 
  [41.863045164896896, 2.291889522318265]  
];
var latZonaA34 = [ 
  [41.863045164896896, 2.291889522318265], 
  [41.86294565998851, 2.291809002993617]  
];
var latZonaA35 = [ 
  [41.86294565998851, 2.291809002993617], 
  [41.862925720025146, 2.2913693117103544]  
];
var latZonaA36 = [ 
  [41.862925720025146, 2.2913693117103544], 
  [41.86211509919619, 2.291589243754571]  
];
var latZonaA37 = [ 
  [41.86211509919619, 2.291589243754571], 
  [41.86183519290092, 2.291331760784146]  
];
var latZonaA38 = [ 
  [41.86183519290092, 2.291331760784146], 
  [41.860892036642745, 2.2924310844898925]  
];
var latZonaA39 = [ 
  [41.860892036642745, 2.2924310844898925], 
  [41.860380762946285, 2.293654578044402]  
];
var latZonaA40 = [ 
  [41.860380762946285, 2.293654578044402], 
  [41.85999762289037, 2.293740184389335]  
];
var latZonaA41 = [ 
  [41.85999762289037, 2.293740184389335], 
  [41.859737720563714, 2.2944372843670773]  
];
var latZonaA42 = [ 
  [41.859737720563714, 2.2944372843670773], 
  [41.85929818624572, 2.294421433646581]  
];
var latZonaA43 = [ 
  [41.85929818624572, 2.294421433646581], 
  [41.85899058919457, 2.295172346062309]  
];
var latZonaA44 = [ 
  [41.85899058919457, 2.295172346062309], 
  [41.85834325566136, 2.294636140729534]  
];
var latZonaA45 = [ 
  [41.85834325566136, 2.294636140729534], 
  [41.85792771365985, 2.2949525489273763]  
];
var latZonaA46 = [ 
  [41.85792771365985, 2.2949525489273763], 
  [41.85787152834557, 2.2948506492381697]  
];
var latZonaA47 = [ 
  [41.85787152834557, 2.2948506492381697], 
  [41.857631995798556, 2.2948614720560117]  
];
var latZonaA48 = [ 
  [41.857631995798556, 2.2948614720560117], 
  [41.857484286669134, 2.295016727916899]  
];
var latZonaA49 = [ 
  [41.857484286669134, 2.295016727916899], 
  [41.856649927592, 2.296604460744432]  
];
var latZonaA50 = [ 
  [41.856649927592, 2.296604460744432], 
  [41.85666583210589, 2.301690489895507]  
];
var latZonaA51 = [ 
  [41.85666583210589, 2.301690489895507], 
  [41.857004653178635, 2.3020327091217045]  
];
var latZonaA52 = [ 
  [41.857004653178635, 2.3020327091217045], 
  [41.85756885842768, 2.2980539359184786]  
];
var latZonaA53 = [ 
  [41.85756885842768, 2.2980539359184786], 
  [41.8609804231641, 2.295371778441999]  
];
var latZonaA54 = [ 
  [41.8609804231641, 2.295371778441999], 
  [41.864983259427035, 2.2919607846824346]  
];
var latZonaA55 = [ 
  [41.864983259427035, 2.2919607846824346], 
  [41.865266880882075, 2.29121367840659]  
];
var latZonaA56 = [ // INICI VERD POLIGON INDUS
  [41.86374095616623, 2.283693094780817], 
  [41.86523898626382, 2.2847077428641698]  
];
var latZonaA57 = [ 
  [41.86523898626382, 2.2847077428641698], 
  [41.86761240956258, 2.286939483253021]  
];
var latZonaA58 = [ 
  [41.86761240956258, 2.286939483253021], 
  [41.868003408755534, 2.2899965951960954]  
];
var latZonaA59 = [ 
  [41.868003408755534, 2.2899965951960954], 
  [41.87056029874356, 2.290747968425611]  
];
var latZonaA60 = [ 
  [41.87056029874356, 2.290747968425611], 
  [41.87241361240068, 2.2903727835521615]  
];
var latZonaA61 = [ 
  [41.87241361240068, 2.2903727835521615], 
  [41.873276218226245, 2.289932798196972]  
];
var latZonaA62 = [ 
  [41.873276218226245, 2.289932798196972], 
  [41.87338801927142, 2.2888049728561337]  
];
var latZonaA63 = [ 
  [41.87338801927142, 2.2888049728561337], 
  [41.874865113201224, 2.289299017730384]  
];
var latZonaA64 = [ 
  [41.874865113201224, 2.289299017730384], 
  [41.875529075681854, 2.2885693098423503]  
];
var latZonaA65 = [ 
  [41.875529075681854, 2.2885693098423503], 
  [41.8764236114485, 2.2890678596563023]  
];
var latZonaA66 = [ 
  [41.8764236114485, 2.2890678596563023], 
  [41.87593692518479, 2.289932422269923]  
];
var latZonaA67 = [ 
  [41.87593692518479, 2.289932422269923], 
  [41.87688696732318, 2.291176066847003]  
];
var latZonaA68 = [ 
  [41.87688696732318, 2.291176066847003], 
  [41.87654360495245, 2.293267826078269]  
];
var latZonaA69 = [ //CODINA
  [41.87654360495245, 2.293267826078269], 
  [41.876008830967116, 2.294169982061467]  
];
var latZonaA70 = [ 
  [41.876008830967116, 2.294169982061467], 
  [41.876192187239276, 2.296100811783535]  
];
var latZonaA71 = [ 
  [41.876192187239276, 2.296100811783535], 
  [41.87728636525734, 2.295885560515845]  
];
var latZonaA72 = [ 
  [41.87728636525734, 2.295885560515845], 
  [41.877166807720315, 2.2943463621108333]  
];
var latZonaA73 = [ 
  [41.877166807720315, 2.2943463621108333], 
  [41.878556673181656, 2.2932903569613887]  
];
var latZonaA74 = [ 
  [41.878556673181656, 2.2932903569613887], 
  [41.87936339092899, 2.2908384101622308]  
];
var latZonaA75 = [ 
  [41.87936339092899, 2.2908384101622308], 
  [41.87835695755319, 2.28763715773221]  
];
var latZonaA76 = [ 
  [41.87835695755319, 2.28763715773221], 
  [41.877458472441845, 2.2873514217235957]  
];
var latZonaA77 = [ 
  [41.877458472441845, 2.2873514217235957], 
  [41.87600844874599, 2.286820435288735]  
];
var latZonaA78 = [ 
  [41.87600844874599, 2.286820435288735], 
  [41.87590449009974, 2.28701344519771]  
];
var latZonaA79 = [ 
  [41.87590449009974, 2.28701344519771], 
  [41.87485016407177, 2.2873945705063825]  
];
var latZonaA80 = [ 
  [41.87485016407177, 2.2873945705063825], 
  [41.873839474592835, 2.287442598640093]  
];
var latZonaA81 = [ 
  [41.873839474592835, 2.287442598640093], 
  [41.87367965620752, 2.2873083457008474]  
];
var latZonaA82 = [ 
  [41.87367965620752, 2.2873083457008474], 
  [41.87349965780159, 2.2865089913285535]  
];
var latZonaA83 = [ 
  [41.87349965780159, 2.2865089913285535], 
  [41.8696173235547, 2.283408868543631]  
];
var latZonaA84 = [ 
  [41.8696173235547, 2.283408868543631], 
  [41.86935764988889, 2.283376701741329]  
];
var latZonaA85 = [ 
  [41.86935764988889, 2.283376701741329], 
  [41.86913822371303, 2.2830679680457204]  
];
var latZonaA86 = [ 
  [41.86913822371303, 2.2830679680457204], 
  [41.86616982554621, 2.281622380914601]  
];
var latZonaA87 = [ 
  [41.86616982554621, 2.281622380914601], 
  [41.86549807652593, 2.2822770536469466]  
];
var latZonaA88 = [ 
  [41.86549807652593, 2.2822770536469466], 
  [41.86367296252478, 2.2832260084218663]  
];
var latZonaA89 = [ 
  [41.86367296252478, 2.2832260084218663], 
  [41.86374095616623, 2.283693094780817]  
];
var latZonaA90 = [ 
  [41.86737236994315, 2.281618377716188], 
  [41.86918552507935, 2.282508619480575]  
];
var latZonaA91 = [ 
  [41.86918552507935, 2.282508619480575], 
  [41.86949310241172, 2.2824912317035966]  
];
var latZonaA92 = [ 
  [41.86949310241172, 2.2824912317035966], 
  [41.869816665384405, 2.282844987705768]  
];
var latZonaA93 = [ 
  [41.869816665384405, 2.282844987705768], 
  [41.86991677958964, 2.2831831537110063]  
];
var latZonaA94 = [ 
  [41.86991677958964, 2.2831831537110063], 
  [41.8729081919517, 2.285543940267849]  
];
var latZonaA95 = [ 
  [41.8729081919517, 2.285543940267849], 
  [41.874781623039915, 2.2855487256369904]  
];
var latZonaA96 = [ 
  [41.874781623039915, 2.2855487256369904], 
  [41.87460602634396, 2.2843797660578162]  
];
var latZonaA97 = [ 
  [41.87460602634396, 2.2843797660578162], 
  [41.87375955969042, 2.2826095550988783]  
];
var latZonaA98 = [ 
  [41.87375955969042, 2.2826095550988783], 
  [41.873184306630364, 2.2828398976538278]  
];
var latZonaA99 = [ 
  [41.873184306630364, 2.2828398976538278], 
  [41.87120708026634, 2.2823841146323036]  
];
var latZonaAA1 = [ 
  [41.87120708026634, 2.2823841146323036], 
  [41.871570445234134, 2.2811986494919716]  
];
var latZonaAA2 = [ 
  [41.871570445234134, 2.2811986494919716], 
  [41.87107534636286, 2.279782491638827]  
];
var latZonaAA3 = [ 
  [41.87107534636286, 2.279782491638827], 
  [41.87019243696319, 2.28073176019155]  
];
var latZonaAA4 = [ 
  [41.87019243696319, 2.28073176019155], 
  [41.86962903011522, 2.2817185599646055]  
];
var latZonaAA5 = [ 
  [41.86962903011522, 2.2817185599646055], 
  [41.86823119878008, 2.2799915553901777]  
];
var latZonaAA6 = [ 
  [41.86823119878008, 2.2799915553901777], 
  [41.86737634488161, 2.281616458669387]  
];

var polyline = L.polyline(latZonaA1, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA2, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA3, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA4, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA5, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA6, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA7, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA8, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA9, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA10, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA11, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA12, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA13, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA14, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA15, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA16, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA17, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA18, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA19, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA20, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA21, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA22, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA23, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA24, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA25, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA26, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA27, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA28, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA29, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA30, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA31, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA32, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA33, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA34, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA35, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA36, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA37, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA38, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA39, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA40, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA41, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA42, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA43, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA44, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA45, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA46, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA47, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA48, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA49, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA50, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA51, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA52, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA53, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA54, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA55, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA56, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA57, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA58, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA59, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA60, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA61, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA62, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA63, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA64, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA65, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA66, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA67, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA68, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA69, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA70, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA71, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA72, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA73, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA74, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA75, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA76, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA77, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA78, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA79, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA80, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA81, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA82, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA83, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA84, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA85, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA86, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA87, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA88, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA89, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA90, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA91, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA92, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA93, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA94, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA95, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA96, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA97, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA98, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaA99, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA1, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA2, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA3, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA4, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA5, { color: 'rgb(32, 221, 56)' }).addTo(map);
var polyline = L.polyline(latZonaAA6, { color: 'rgb(32, 221, 56)' }).addTo(map);




//GROGUES

var latZonaB1 = [
  [41.88649200749266, 2.2804848256728376], 
  [41.88467934329772, 2.2816968415688836]  
];
var latZonaB2 = [
  [41.88650016544026, 2.280485472934282], 
  [41.88639236527721, 2.2801368842916108]  
];
var latZonaB3 = [
  [41.886049081202856, 2.280785278557529], 
  [41.88592930238701, 2.280404512501684]  
];
var latZonaB4 = [
  [41.88559760114655, 2.2810803776350634], 
  [41.88547382882497, 2.280710337383623]  
];
var latZonaB5 = [
  [41.88467892657618, 2.2816970537857673], 
  [41.884575116055835,2.281546892524302]  
];
var latZonaB6 = [ // INICI CENTRE POBLE (començo x el poligon indus)
  [41.86364132351245, 2.283184041990176], 
  [41.865462572284336, 2.2822187195950776]  
];
var latZonaB7 = [ 
  [41.865462572284336, 2.2822187195950776], 
  [41.866165380275966, 2.2815633692846187]  
];
var latZonaB8 = [ 
  [41.866165380275966, 2.2815633692846187], 
  [41.86916986874593, 2.2830172175207775]  
];
var latZonaB9 = [ 
  [41.86359690848948, 2.2828881713527465], 
  [41.86543014026288, 2.281896034446676]
];
var latZonaB10 = [ 
  [41.86543014026288, 2.281896034446676], 
  [41.8661895508401, 2.2811772175890392]
];
var latZonaB11 = [ 
  [41.8661895508401, 2.2811772175890392], 
  [41.86920179512247, 2.2826903851696745]
];
var latZonaB12 = [ 
  [41.86920179512247, 2.2826903851696745], 
  [41.86948531826922, 2.2825879003682297]
];
var latZonaB13 = [ 
  [41.86948531826922, 2.2825879003682297], 
  [41.86976889880637, 2.282882834219771]
];
var latZonaB14 = [ 
  [41.86976889880637, 2.282882834219771], 
  [41.8698767898512, 2.283215463001809]
];
var latZonaB15 = [ 
  [41.8698767898512, 2.283215463001809], 
  [41.87240108845544, 2.2852592410902566]
];
var latZonaB16 = [ 
  [41.86916986874593, 2.2830172175207775], 
  [41.86935364051303, 2.2833176128037462]
];
var latZonaB17 = [ 
  [41.86935364051303, 2.2833176128037462], 
  [41.8696292217685, 2.2833389886207827]
];
var latZonaB18 = [ 
  [41.8696292217685, 2.2833389886207827], 
  [41.87233304328415, 2.285436213831038]
];
var latZonaB19 = [ 
  [41.87240108845544, 2.2852592410902566], 
  [41.87290453571573, 2.285661633075869]
];
var latZonaB20 = [ 
  [41.87290453571573, 2.285661633075869], // fi tram esquerre
  [41.874829684324226, 2.2856076887602943]
];
var latZonaB21 = [ 
  [41.87233304328415, 2.285436213831038], 
  [41.87354769177492, 2.286471708705085]
];
var latZonaB22 = [ 
  [41.87354769177492, 2.286471708705085], 
  [41.87371163059818, 2.2872763577670256]
];
var latZonaB23 = [ 
  [41.87371163059818, 2.2872763577670256], 
  [41.87383935730456, 2.2873889393014406]
];
var latZonaB24 = [ 
  [41.87383935730456, 2.2873889393014406], 
  [41.87482955761299, 2.287330162625834]
];
var latZonaB25 = [ 
  [41.87482955761299, 2.287330162625834], 
  [41.87586046162966, 2.2869544926852385]
];
var latZonaB26 = [ 
  [41.87586046162966, 2.2869544926852385], 
  [41.87598441174485, 2.286723959135109]
];
var latZonaB27 = [ 
  [41.87598441174485, 2.286723959135109], 
  [41.87747783507755, 2.2872924297994506]
];
var latZonaB28 = [ 
  [41.87747783507755, 2.2872924297994506], 
  [41.877473911030755, 2.2870290503529977]
];
var latZonaB29 = [ 
  [41.877473911030755, 2.2870290503529977], 
  [41.87619196314314, 2.2865949766321507]
];
var latZonaB30 = [ 
  [41.87619196314314, 2.2865949766321507], 
  [41.87577232501245, 2.2863371192505433]
];
var latZonaB31 = [ 
  [41.87577232501245, 2.2863371192505433],
  [41.875061697802884, 2.2862729902836065]
];
var latZonaB32 = [ 
  [41.875061697802884, 2.2862729902836065],
  [41.874981748823906, 2.284905554816468]
];
var latZonaB33 = [ 
  [41.874981748823906, 2.284905554816468],
  [41.87485751087854, 2.28432579900471]
];
var latZonaB34 = [ 
  [41.87485751087854, 2.28432579900471], // fi tram dalt (dreta)
  [41.8741668162443, 2.282679142465587]
];
var latZonaB35 = [ 
  [41.874829684324226, 2.2856076887602943],
  [41.87480182634179, 2.2850067936017027]
];
var latZonaB36 = [ 
  [41.87480182634179, 2.2850067936017027],
  [41.87468225368484, 2.284368346001076]
];
var latZonaB37 = [ 
  [41.87468225368484, 2.284368346001076],
  [41.87400733273875, 2.282786715803145]
];
var latZonaB38 = [ 
  [41.87400733273875, 2.282786715803145],
  [41.87417093736986, 2.282679163687291]
];
var latZonaB39 = [  // CAMP DE FUTBOL, POLI
  [41.86828720009145, 2.2800184456928823],
  [41.86962109308557, 2.281638042155785]
];
var latZonaB40 = [ 
  [41.86962109308557, 2.281638042155785],
  [41.87006038887963, 2.280801499141765]
];
var latZonaB41 = [ 
  [41.87006038887963, 2.280801499141765],
  [41.87109069224012, 2.279696871651367]
];
var latZonaB42 = [ 
  [41.87109069224012, 2.279696871651367],
  [41.87162234537016, 2.281192878830223]
];
var latZonaB43 = [ 
  [41.87162234537016, 2.281192878830223],
  [41.87126304441125, 2.282298127812839]
];
var latZonaB44 = [ 
  [41.87126304441125, 2.282298127812839],
  [41.872640777218656, 2.28268967272729]
];
var latZonaB45 = [ 
  [41.872640777218656, 2.28268967272729],
  [41.87209384661951, 2.280399505820694]
];
var latZonaB46 = [ 
  [41.87209384661951, 2.280399505820694],
  [41.870137075112744, 2.2779603357503713]
];
var latZonaB47 = [ 
  [41.870137075112744, 2.2779603357503713],
  [41.86828720009145, 2.2800184456928823]
];


var polyline = L.polyline(latZonaB1, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB2, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB3, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB4, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB5, { color: 'yellow' }).addTo(map); // FI madriguera
var polyline = L.polyline(latZonaB6, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB7, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB8, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB9, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB10, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB11, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB12, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB13, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB14, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB15, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB16, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB17, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB18, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB19, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB20, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB21, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB22, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB23, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB24, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB25, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB26, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB27, { color: 'yellow' }).addTo(map); 
var polyline = L.polyline(latZonaB28, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB29, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB30, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB31, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB32, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB33, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB34, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB35, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB36, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB37, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB38, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB39, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB40, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB41, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB42, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB43, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB44, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB45, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB46, { color: 'yellow' }).addTo(map);
var polyline = L.polyline(latZonaB47, { color: 'yellow' }).addTo(map);


// VERMELLES
var latZonaC1 = [
  [41.88705545520035, 2.2810601174724354], 
  [41.88455606340066, 2.282325762390465]  
];
var latZonaC2 = [
  [41.88705545520035, 2.2810601174724354], 
  [41.88747850607494, 2.2823040561214425]  
];
var latZonaC3 = [
  [41.88747850607494, 2.2823040561214425], 
  [41.88730316937081, 2.283580957386007]  
];
var latZonaC4 = [
  [41.88730316937081, 2.283580957386007], 
  [41.884699616763335, 2.283109173576308]  
];
var latZonaC5 = [
  [41.884699616763335, 2.283109173576308], 
  [41.88455142256529, 2.2823304083028]  
];
var latZonaC6 = [
  [41.88389663141432, 2.2841271412166098], 
  [41.88389663141432, 2.283290528474167]  
];
var latZonaC7 = [
  [41.88389663141432, 2.283290528474167], 
  [41.88325331354667, 2.2839505868462466]  
];
var latZonaC8 = [
  [41.88325331354667, 2.2839505868462466], 
  [41.8833415497879, 2.2840577948675866]  
];
var latZonaC9 = [
  [41.8833415497879, 2.2840577948675866], 
  [41.88389663141432, 2.2841271412166098]  
];
var latZonaC10 = [ // POLIGON INDUSTRIAL
  [41.86330495951559, 2.283328444716593], 
  [41.863449201616646, 2.2839029103862267]  
];
var latZonaC11 = [ 
  [41.863449201616646, 2.2839029103862267], 
  [41.861982679356295, 2.2846317466692327]  
];
var latZonaC12 = [ 
  [41.861982679356295, 2.2846317466692327], 
  [41.86241048838975, 2.2860804821159597]  
];
var latZonaC13 = [ 
  [41.86241048838975, 2.2860804821159597], 
  [41.861942943365534, 2.2862945919600146]  
];
var latZonaC14 = [ 
  [41.861942943365534, 2.2862945919600146], 
  [41.861551380256934, 2.284766146644422]  
];
var latZonaC15 = [ 
  [41.861551380256934, 2.284766146644422], 
  [41.86104018200987, 2.285012473313364]  
];
var latZonaC16 = [ 
  [41.86104018200987, 2.285012473313364], 
  [41.86095621920786, 2.284658670320301]  
];
var latZonaC17 = [ 
  [41.86095621920786, 2.284658670320301], 
  [41.86330495951559, 2.283328444716593]  
];
// POSAR MÉS? MIRAR NOTES (app)

var polyline = L.polyline(latZonaC1, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC2, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC3, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC4, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC5, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC6, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC7, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC8, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC9, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC10, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC11, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC12, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC13, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC14, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC15, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC16, { color: 'red' }).addTo(map);
var polyline = L.polyline(latZonaC17, { color: 'red' }).addTo(map);






// PUNTS DE MESURES

var puntCasa = [41.868906509568106, 2.2855564811107336];
var punt1 = L.marker(puntCasa).addTo(map);
punt1.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntCanCosta = [41.87129886903439, 2.284948257906492];
var punt2 = L.marker(puntCanCosta).addTo(map);
punt2.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntInsitut = [41.87242935276611, 2.289282689163166];
var punt3 = L.marker(puntInsitut).addTo(map);
punt3.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntPlaçaPilota = [41.87594771744512, 2.286407261412822];
var punt5 = L.marker(puntPlaçaPilota).addTo(map);
punt5.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntEAS = [41.872065621955876, 2.2825887793812516];
var punt6 = L.marker(puntEAS).addTo(map);
punt6.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntPinediques = [41.86480747347215, 2.2916051566243127];
var punt7 = L.marker(puntPinediques).addTo(map);
punt7.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntRoca1 = [41.88215162158002, 2.29387098134648];
var punt8 = L.marker(puntRoca1).addTo(map);
punt8.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntDeixalles = [41.86204332756388, 2.2853414020640006];
var punt9 = L.marker(puntDeixalles).addTo(map);
punt9.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntLuscoFusco = [41.873176234949796, 2.286031961335926];
var punt10 = L.marker(puntLuscoFusco).addTo(map);
punt10.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntRoca2 = [41.88324537402058, 2.302451253478957];
var punt11 = L.marker(puntRoca2).addTo(map);
punt11.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntMadriguera1 = [41.885913294168574, 2.2809517422582726];
var punt12 = L.marker(puntMadriguera1).addTo(map);
punt12.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntMadriguera2 = [41.885522133354314, 2.2796373309950417];
var punt13 = L.marker(puntMadriguera2).addTo(map);
punt13.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntPlaçaPinyo = [41.86112766858844, 2.294695273626313];
var punt14 = L.marker(puntPlaçaPinyo).addTo(map);
punt14.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntCasaJana = [41.878596422930634, 2.292543323445622];
var punt15 = L.marker(puntCasaJana).addTo(map);
punt15.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();

var puntSantQuirze = [41.880493456633666, 2.298696547395989];
var punt16 = L.marker(puntSantQuirze).addTo(map);
punt16.bindPopup('<span style="font-size: 20px;"><b>Mitjana del Mes de Agost:</b></span> <span style="font-size: 16px;">40db</span><br><span style="font-size: 14px;">Texto de abajo<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi venenatis, gravida nibh vel</span>').openPopup();



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
