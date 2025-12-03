let cores = ["blue", "green", "purple"];
let indiceCor = 0;

function proximaCor() {
    const cor = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length; // ciclo infinito
    return cor;
}

novanota.style.color = proximaCor();

function adicionarurgente() {
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="novanota"
    novanota.innerHTML=nota=document.getElementById("nota").value
    if(nota == ""){
        alert("Por favor, insira uma nota antes de adicionar.")
    }
    else{
    novanota.style.color = proximaCor();
    var div=document.getElementById("urgente")
    div.appendChild(novanota)}
    document.getElementById("nota").value = ""
}

function adicionarnaourgente() {
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="novanota2"
    novanota.innerHTML=nota=document.getElementById("nota").value
    if(nota == ""){
        alert("Por favor, insira uma nota antes de adicionar.")
    }
    else{
    novanota.style.color = proximaCor();
    var div=document.getElementById("naourgente")
    div.appendChild(novanota)}
    document.getElementById("nota").value = ""
}

function removerurg()
{
    var li=document.getElementById("novanota")
    if(li)
    {
        li.remove()
    }
    else
    {
        alert("Não há texto para remover.")
    }
}
function removernurg()
{
    var li=document.getElementById("novanota2")
    if(li)
    {
        li.remove()
    }
    else
    {
        alert("Não há texto para remover.")
    }
}
function removertudo()
{
    var li=document.getElementById("urgente")
    li.innerHTML=""
}
function removertudon()
{
    var li=document.getElementById("naourgente")
    li.innerHTML=""
}