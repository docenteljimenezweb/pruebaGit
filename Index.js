/*alert("¡Bienvenido a mi pagina!");
let frutas=[];
saludar();
const usuario = prompt("ingrese un numero");
AgregarFruta();
alert(`El numero ingresado  ${Espar(numero)}`);*/


/*if (usuario) {
    //alert(`Hola ${usuario}, encantado de conocerte!`);
    console.log(`El visitante se llama: ${usuario}`);
} else {
    alert("No quisiste decirme tu nombre :(");
}
 let edad = prompt ("Ingresa tu edad")
// Confirmaciones
const quiereVer = confirm("¿Quieres ver el contenido completo?");
if (quiereVer) {
    console.log("El usuario aceptó ver el contenido");
    alert(`!Hola! \n ${usuario} tu edad es ${edad}`);
} else {
    console.log("El usuario rechazó ver el contenido");
}*/
const btn = document.createElement("button");
const node = document.createTextNode("This is new.");
btn.appendChild(node);
btn.addEventListener("dblclick",clickedTwice);
const form=  document.querySelector("#miFormulario"); 
form.appendChild(btn);
function saludar() {
   alert ("Entraste a una función");
}

function Espar(numero) {
    return numero%2? "no es par" : "es par";
}

function AgregarFruta() {
    let fruta = prompt("Ingrese una fruta");
    frutas.push(fruta);
    console.log(frutas);
}

function validarFormulario() {
    let todosValidos = true;
       const nombre = document.querySelector("#nameinput");
       const apellido = document.querySelector("#lastnameinput");
       let message = "";
       if (nombre.value.trim() === '') {
            message += "El campo nombre es requerido.\n";
            nombre.setAttribute('class', 'invalido');
            todosValidos = false;
       }
       else{
            nombre.setAttribute('class', 'valido');
       }
       if (apellido.value.trim() === '') {
            message += "El campo apellido es requerido.\n";
            todosValidos = false;
       }
       if (!todosValidos) {
            alert(message);
       }
       else
        {
            alert('Validación exitosa.');
        }
}

function clickedTwice(){
    alert ("me clickeo dos veces");
}