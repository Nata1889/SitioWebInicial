function preguntarNombreyApellido(){
var nombre = prompt("Ingrese tu nombre");
var apellido = prompt("Ingrese su apellido");

    alert("Hola " + nombre  + " " + apellido)
   //alert(`Hola tu nombre es ${nombre} y tu apellido es ${apellido}`)
}
function ponerEnMayusculas(){
    var datosPersonales = document.getElementById("datos");
    datosPersonales.innerHTML= "DATOS PERSONALES";
    datosPersonales.style.background="white";
}

function ponercolorClaro(){
    var vBody= document.getElementById("cuerpo");
    vBody.style.background =  "gray"   ;
}
function ponercolorOscuro(){
    var vBody = document.getElementById("cuerpo");
    vBody.style.background = "black";

}


