var map = L.map('map').setView([0.0349,-51.0694],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'OpenStreetMap'
}).addTo(map);


var iconeBuraco = L.icon({
iconUrl: '/icons/buraco.png',
iconSize: [42,42]
});

var iconePoste = L.icon({
iconUrl: 'icons/poste.png',
iconSize: [42,42]
});

var iconeLixo = L.icon({
iconUrl: 'icons/lixo.png',
iconSize: [42,42]
});

var iconeAlagamento = L.icon({
iconUrl: 'icons/alagamento.png',
iconSize: [42,42]
});


// ocorrências exemplo
var exemplos = [

{
lat:0.035,
lng:-51.070,
tipo:"Buraco na rua"
},

{
lat:0.040,
lng:-51.065,
tipo:"Poste sem iluminação"
}

];

exemplos.forEach(o=>{


    let icone;

if(o.tipo === "Buraco na rua"){
icone = iconeBuraco;
}

else if(o.tipo === "Poste sem iluminação"){
icone = iconePoste;
}

else if(o.tipo === "Lixo acumulado"){
icone = iconeLixo;
}

else if(o.tipo === "Alagamento"){
icone = iconeAlagamento;
}

L.marker([o.lat,o.lng], {icon: icone})
.addTo(map)
.bindPopup(o.tipo);

});


// carregar localStorage

/*

var dados = JSON.parse(localStorage.getItem("ocorrencias")) || [];

dados.forEach(o => {

L.marker([o.lat, o.lng])
.addTo(map)
.bindPopup(o.tipo + "<br>" + o.endereco);

}); */



var dados = JSON.parse(localStorage.getItem("ocorrencias")) || [];

dados.forEach(o=>{

let icone;

if(o.tipo === "Buraco na rua"){
icone = iconeBuraco;
}

else if(o.tipo === "Poste sem iluminação"){
icone = iconePoste;
}

else if(o.tipo === "Lixo acumulado"){
icone = iconeLixo;
}

else if(o.tipo === "Alagamento"){
icone = iconeAlagamento;
}

let popup = `
<b>${o.tipo}</b><br>
${o.endereco}<br>
<img src="${o.foto}" width="200">
`;

L.marker([o.lat,o.lng], {icon: icone})
.addTo(map)
.bindPopup(popup);

});