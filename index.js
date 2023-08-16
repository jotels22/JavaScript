const iniciarSesion = document.querySelector (".logIn") 
const usuario = document.querySelector("#usuario")
const contraseña = document.querySelector("#contraseña")
const botonEnviar = document.querySelector("#enviar")
const usuarios = JSON.parse(localStorage.getItem("jugador")) || []

usuario.addEventListener("input", (event) => {
    usuario.value = event.target.value
    console.log(usuarios);
})

contraseña.addEventListener("input", (event) => {
    contraseña.value = event.target.value
    console.log(usuarios);
})


    
let nota = 0

function iniciarCuestionario() {

    iniciarSesion.innerHTML = `<div class="bienvenida"><span class="pSaludo">Felicidades por completar el cuestionario ${usuario.value}, tu nota fue un merecido ${nota}</span></div>`;

alert("Hola " + usuario.value + ", bienvenido")

const pregunta1 = prompt("Pregunta 1 : ¿Cual es la capital de Argentina? \n 1- Buenos aires \n 2- Santiago \n 3- La Paz \n 4- La Plata")
let respuestaCorrecta = pregunta1 == "1"

if(respuestaCorrecta){
    alert("¡Correcto!")
    nota++
    console.log(nota);
} else {
    alert("Incorrecto...")
}

const pregunta2 = prompt("Pregunta 2 : ¿Cuáles son los primeros 6 dígitos de pi? \n 1- 3.14897 \n 2- 4.21321 \n 3- 3.14159")
let respuestaCorrecta2 = pregunta2 == "3"
if(respuestaCorrecta2){
    alert("Muy bien!!")
    nota++
    console.log(nota);
} else {
    alert("MAL")
}

const pregunta3 = prompt("Pregunta 3 : Nombrar uno de los 8 planetas del sistema solar")
let respuestaCorrecta3 = pregunta3 
switch(pregunta3){
    case "venus":
        alert("¡Correcto! \n Buena eleccion ")
        nota++
        console.log(nota);
        break
    case "marte":
        alert("¡Correcto! \n Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de planeta rojo.")
        nota++
        console.log(nota);
        break
    case "mercurio":
        alert("¡Correcto!")
        nota++
        console.log(nota);
        break
    case "tierra":
        alert("¡Correcto! \n Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. ")
        nota++
        console.log(nota);
        break
    case "jupiter":
        alert("¡Correcto! \n Júpiter es un gigante hecho de gas, y no tiene una superficie sólida, pero puede tener un núcleo interno sólido de aproximadamente el tamaño de la Tierra.")
        nota++
        console.log(nota);
        break
    case "saturno":
        alert("¡Correcto! \n Cuenta con un precioso grupo de siete anillos separados por espacio entre ellos.")
        nota++
        console.log(nota);
        break
    case "neptuno":
        alert("¡Correcto!\n Su atmósfera se compone de hidrógeno, helio y metano.")
        nota++
        console.log(nota);
        break
    case "urano":
        alert("¡Correcto! \n Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. ")
        nota++
        console.log(nota);
        break
    case "pluton":
        alert("¡Incorrecto! \n Caíste en la trampa de pensar que es un planeta ")
        break
    default:
        alert("¡Incorrecto! \n Sea lo q sea eso, no es un planeta")
        break
}


for (let i = 0; i < 3; i++) {
    const pregunta4 = parseInt(prompt("Pregunta 4 : ¿Cuántas Champions League ganó messi? (esta pregunta tiene varios intentos)"))
    
if(pregunta4 < 4){
    alert("Casi... un poco mas")
} 
if(pregunta4 > 4){ 
    alert("Un poco menos...")
    console.log(nota);
}
if (pregunta4 == 4) {
    alert("Perfecto!! Muy bien 10")
    nota++
    console.log(nota);
    break

}
 }

class pregunta{
    constructor(color1,color2,color3,color4){
        this.color1 = color1
        this.color2 = color2
        this.color3 = color3
        this.color4 = color4  
    }}

    const islaMauricio = new pregunta("azul","amarillo","verde","rojo")

    const EAU = new pregunta("verde","blanco","negro","rojo")


const pregunta6 = prompt("Nombrar el unico color NO PRIMARIO de la bandera de la Isla Mauricio")

if (pregunta6 === islaMauricio.color3){
    alert("Perfecto")
    nota++
    console.log(nota)
} else{
    alert("mal")
    console.log(nota);
     
}

const pregunta7 = prompt("Nombrar el único color PRIMARIO en la bandera de Emiratos Árabes Unidos")

if (pregunta7 === EAU.color4){
    alert("Muy bien, rojo es correcto")
    nota++
    console.log(nota)
} else {
    alert("no...")
    console.log(nota);
}
const paisesLimitrofes = [
   {
       nombre:"Chile",
       capital:"Santiago",
       poblacion:19000000 ,
   },
   {
       nombre:"Uruguay",
       capital:"Montevideo",
       poblacion:3400000,
   },
   {
       nombre:"Paraguay",
       capital:"Asunción",
       poblacion:7000000,
   },
   {
       nombre:"Brasil",
       capital:"Brasilia",
       poblacion:214000000,
   },
   {
       nombre:"Bolivia",
       capital:"La Paz",
       poblacion:12000000
   },
  ]

  for (let i = 0; i < 1; i++) {
   const pais = paisesLimitrofes[i];

   const capitalPais = paisesLimitrofes.map((pais) => "\n" + pais.capital) ;

    const pregunta8 = prompt("Dadas las siguientes capitales, ¿De que país hablamos si este es limitrofe con los países de dichas capitales ?:" + "\n" + capitalPais)

    if (pregunta8 === "argentina" || pregunta8 === "Argentina") {
        alert("Bieenn")
       nota++
       console.log(nota);
    } else {
        alert("No bro")
        console.log(nota);
    }

  }

  for (let i = 0; i < 1; i++) {
   const pais = paisesLimitrofes[i];

   const infoPaises = paisesLimitrofes.map((pais)=> pais.nombre + " - " + pais.capital + " - " + pais.poblacion + `\n`)
   alert("Dada al siguiente información (PAIS - CAPITAL - POBLACION), responder :" + "\n" + infoPaises);

   const pregunta9 = prompt("¿Cuál es el país con mas población?")

   if (pregunta9 === "brasil" || pregunta9 === "Brasil" || pregunta9 === "brazil") {
       alert("Bien")
       nota++
       console.log(nota);
   } else {
       alert("Mal")
       console.log(nota);
   }
   const suma1 = paisesLimitrofes.find((pais) => pais.nombre === "Paraguay")
   const suma2 = paisesLimitrofes.find((pais) => pais.nombre === "Bolivia")
   const suma3 = suma1.poblacion + suma2.poblacion

   const pregunta10 = prompt("¿Cuánto da la suma entre la población de Paraguay y Bolivia?")

   if (pregunta10 == suma3 || pregunta10 == "19 millones" || pregunta10 == "19m") {
       alert("Muy bien")
       nota++
       console.log(nota);
   } else {
       alert("Tamos flojos en matemática,,, o en la memoria")
       console.log(nota);
   }
  } 

  const numeroRandom = Math.random().toFixed(3) * 6 

  const pregunta11 = prompt("Dado el siguiente numero aleatorio, ¿es mayor o menor a PI? (Escribir `mayor` o `menor` segun el caso) PI = " + (Math.PI).toFixed(4) + " \n" + numeroRandom.toFixed(4)) 

  if (numeroRandom >= Math.PI && pregunta11 === "mayor" || numeroRandom <= Math.PI && pregunta11 === "menor") {
   if (pregunta11 === "mayor") {
       alert("Efectivamente " + numeroRandom.toFixed(4) + " es mayor a PI") 
   } else{
       alert("Muy bien " + numeroRandom.toFixed(4) + " es menor a PI") 
   }
   nota++
   
  } else {
   alert("Incorrecto")
  }


 
  if(nota <= 5){
   alert("Mal ahí desaprobaste, tu nota es un " + nota )
  } 
  if (nota == 6) {
   alert("Raspando pero aprobado, te sacaste un " + nota )
  }
  if (nota >=6 && nota <=8) {
   alert("Bastante bien, te sacase un " + nota)
  }
  if (nota > 8) {
   alert("Impresionante *clap* *clap* , un merecido " + nota)
  }


  
  localStorage.setItem("jugador", JSON.stringify(usuarios));

  const jugadoresAlmacenados = JSON.parse(localStorage.getItem("jugador"));
 const jugadoresInfo = jugadoresAlmacenados.map((jugador, index) => {
    return `${index + 1}. Nombre: ${jugador.nombre}, Contraseña: ${jugador.contraseña}, Nota: ${jugador.nota}`;
}).join('\n');
alert("Información de jugadores:\n" + jugadoresInfo);


}

botonEnviar.addEventListener("click", () => {

        iniciarCuestionario();

        const nuevoUsuario = {
            nombre:usuario.value,
            contraseña:contraseña.value,
            nota:nota}
        usuarios.push(nuevoUsuario)

        localStorage.setItem("jugador", JSON.stringify(usuarios));
        localStorage.setItem("usuario", JSON.stringify(usuario.value))
        localStorage.setItem("contraseña", JSON.stringify(contraseña.value))

        console.log(usuarios);
        localStorage.setItem("jugador", JSON.stringify(usuarios))


    })