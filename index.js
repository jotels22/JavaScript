
alert("Bienvenido a este cuestionario de preguntas, para seleccionar la opcion correcta ingrese el numero de la opcion.")

const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")

function saludar(nombre) {
    alert("¡Hola, " + nombre + "!");
  }
  
  // Llamando a la función
  saludar(nombre);


const pregunta1 = prompt("Pregunta 1 : ¿Cual es la capital de Argentina? 1-Buenos aires 2-Santiago 3-La Paz 4-La Plata")
let respuestaCorrecta = pregunta1 == "1"

if(respuestaCorrecta){
    alert("¡Correcto!")
} else {
    alert("Incorrecto...")
}

const pregunta2 = prompt("Pregunta 2 : ¿Cuáles son los primeros 6 dígitos de pi?           1-3.14897   2-4.21321  3-3.14159")
let respuestaCorrecta2 = pregunta2 == "3"
if(respuestaCorrecta2){
    alert("Muy bien!!")
} else {
    alert("MAL")
}

const pregunta3 = prompt("Pregunta 3 : Nombrar uno de los 8 planetas del sistema solar")
let respuestaCorrecta3 = pregunta3 
switch(pregunta3){
    case "venus":
        alert("¡Correcto!, buena eleccion ")
        break
    case "marte":
        alert("¡Correcto!, Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de planeta rojo.")
        break
    case "mercurio":
        alert("¡Correcto!")
        break
    case "tierra":
        alert("¡Correcto!, Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. ")
        break
    case "jupiter":
        alert("¡Correcto!, Júpiter es un gigante hecho de gas, y no tiene una superficie sólida, pero puede tener un núcleo interno sólido de aproximadamente el tamaño de la Tierra.")
        break
    case "saturno":
        alert("¡Correcto!, cuenta con un precioso grupo de siete anillos separados por espacio entre ellos.")
        break
    case "neptuno":
        alert("¡Correcto!, Su atmósfera se compone de hidrógeno, helio y metano.")
        break
    case "urano":
        alert("¡Correcto!,Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. ")
        break
    case "pluton":
        alert("¡Incorrecto! , Caíste en la trampa de pensar que es un planeta ")
        break
    default:
        alert("¡Incorrecto!, sea lo q sea eso, no es un planeta")
        break
}


for (let i = 0; i < 4; i++) {
    const pregunta4 = parseInt(prompt("Pregunta 4 : ¿Cuántas Champions League ganó messi? (esta pregunta tiene varios intentos)"))
    
if(pregunta4 < 4){
    alert("Casi... un poco mas")
} 
if(pregunta4 > 4){ 
    alert("Un poco menos...")
}
if (pregunta4 == 4) {
    alert("Perfecto!! Muy bien 10")
    break

}
}



