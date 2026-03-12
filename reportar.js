async function salvar(){

let endereco = document.getElementById("endereco").value;
let tipo = document.getElementById("tipo").value;
let arquivoFoto = document.getElementById("foto").files[0];

let url = "https://nominatim.openstreetmap.org/search?format=json&q=" 
+ encodeURIComponent(endereco);

let resposta = await fetch(url);
let dados = await resposta.json();

if(dados.length === 0){
alert("Endereço não encontrado");
return;
}

let lat = parseFloat(dados[0].lat);
let lng = parseFloat(dados[0].lon);

// converter imagem
let leitor = new FileReader();

leitor.onload = function(){

let fotoBase64 = leitor.result;

let ocorrencias =
JSON.parse(localStorage.getItem("ocorrencias")) || [];

ocorrencias.push({
lat: lat,
lng: lng,
tipo: tipo,
endereco: endereco,
foto: fotoBase64
});

localStorage.setItem(
"ocorrencias",
JSON.stringify(ocorrencias)
);

alert("Ocorrência registrada!");

window.location.href="index.html";

};

if(arquivoFoto){
leitor.readAsDataURL(arquivoFoto);
}else{
alert("Selecione uma foto");
}

}