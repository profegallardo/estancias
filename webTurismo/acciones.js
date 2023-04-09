let masCircuito= document.getElementById("circuito");
let masCaminatas=  document.getElementById("caminatas");
let masArqueologia= document.getElementById("arqueologia");
let contenedorSlider= document.getElementById("contenedorSlider")
let ocultar= document.getElementById("ocultar")

function agregar(){

    contenedorSlider.style.display="block";

}
function cerrar(){
    contenedorSlider.style.display="none";
    
}
masCircuito.onclick=agregar;
ocultar.onclick=cerrar;

masCaminatas.onclick=agregar;
masArqueologia.onclick=agregar;