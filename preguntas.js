const usuarios = JSON.parse(localStorage.getItem("jugador"))
console.log(usuarios);
const usuario = localStorage.getItem("usuario")
console.log(usuario); 
let nota = 0
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const pregunta1 = document.querySelector(".pregunta1")
const btn1RtaCorrecta = document.querySelector("#btn1-RtaCorrecta");
const btn1RtasIncorrectas = document.querySelectorAll(".btn1-RtaInorrecta");




btn1RtaCorrecta.addEventListener("click", () => {
    pregunta1.innerHTML = `<p class="resultado"> ✅ ¡CORRECTO!</p>`
    nota++
    console.log(nota);
            
    setInterval(()=>{
    
        Swal.fire({
        title: `             ¡SUERTE!


                            //Espacio Publicitado Por NyanCat//
        `,
        width: 600,
        padding: '3em',
        color: '#fff' ,
        background: `#1AAB8A url("/img/nyan-cat-4k.gif") `,
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/nyan-cat-4k.gif")
          cover
          repeat
        `
      })
    
    },6000
    )
}
)
btn1RtasIncorrectas.forEach(btn => {
    btn.addEventListener("click", () => {
        pregunta1.innerHTML = `<p class="resultado-"> ❌ MAL</p>`

        setInterval(()=>{
    
            Swal.fire({
            title: `             ¡SUERTE!
    
    
                                //Espacio Publicitado Por NyanCat//
            `,
            width: 600,
            padding: '3em',
            color: '#fff' ,
            background: `#1AAB8A url("/img/nyan-cat-4k.gif") `,
            backdrop: `
              rgba(0,0,123,0.4)
              url("/img/nyan-cat-4k.gif")
              cover
              repeat
            `
          })
        
        },6000
        )
    }
    )
})

const pregunta2 = document.querySelector(".pregunta2")
const btn2RtaCorrecta = document.querySelector("#btn2-RtaCorrecta");
const btn2RtasIncorrectas = document.querySelectorAll(".btn2-RtaInorrecta");

btn2RtaCorrecta.addEventListener("click", () => {
    pregunta2.innerHTML = `<p class="resultado"> ✅ Muy bien en matematica</p>`
    nota++
    console.log(nota);
}
)
btn2RtasIncorrectas.forEach(btn => {
    btn.addEventListener("click", () => {
        pregunta2.innerHTML = `<p class="resultado-"> ❌ Nop, ¿Flojos en matematica?</p>`
    }
    )
})

const pregunta3 = document.querySelector(".pregunta3")
const input3 = document.querySelector("#input3")
const btn3 = document.querySelector("#btn3")

input3.addEventListener("input", (event) => {
    input3.value = event.target.value.trim()
    console.log(input3.value);})

    btn3.addEventListener("click", (event) => {
        const respuestaUsuario = input3.value.toLowerCase()

        switch (respuestaUsuario) {
            case "venus":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Buena eleccion </p>`
                nota++
                console.log(nota);
                break
            case "marte":
                pregunta3.innerHTML = `<p class="resultado">¡Correcto! \n Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de planeta rojo.</p>`
                nota++
                break
            case "mercurio":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Buena eleccion </p>`
                nota++
                console.log(nota);
                break
            case "tierra":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso.</p>`
                nota++
                break
            case "jupiter":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Júpiter es un gigante hecho de gas, y no tiene una superficie sólida, pero puede tener un núcleo interno sólido de aproximadamente el tamaño de la Tierra.</p>`
                nota++
                break
            case "saturno":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Cuenta con un precioso grupo de siete anillos separados por espacio entre ellos." </p>`
                nota++
                break
            case "neptuno":
                pregunta3.innerHTML = `<p class="resultado"> ✅ Correcto!\n Su atmósfera se compone de hidrógeno, helio y metano.</p>`
                nota++
                break
            case "urano":
                pregunta3.innerHTML = `<p class="resultado"> ✅ ¡Correcto! \n Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. </p>`
                nota++
                break
            case "pluton":
                pregunta3.innerHTML = `<p class="resultado-"> ❌ ¡Incorrecto! \n Caíste en la trampa de pensar que es un planeta" </p>`
                break
            default:
                pregunta3.innerHTML = `<p class="resultado-"> ❌ ¡Incorrecto! \n Sea lo q sea eso, no es un planeta</p>`
                break
        }
    })


const pregunta4 = document.querySelector(".pregunta4")
const input4 = document.querySelector("#input4")
const btn4 = document.querySelector("#btn4")
let intentos = 4

input4.addEventListener("input", (event) => {
    input4.value = event.target.value

    btn4.addEventListener("click", (event) => {

    if (input4.value != 4) {
        --intentos        
        console.log(intentos);
        input4.value = ""

    } else {
        pregunta4.innerHTML = `<p class="resultado"> ✅  ✅ Muy bien, las gano en 2006, 2009, 2011 y 2015</p>`
        nota++
        console.log(nota);
    }
    if (intentos === 0) {
        pregunta4.innerHTML = `<p class="resultado-"> ❌ Te quedaste sin intentos :(</p>`
    }
    })})

class pregunta {
    constructor(color1, color2, color3, color4) {
        this.color1 = color1
        this.color2 = color2
        this.color3 = color3
        this.color4 = color4
    }
}

const islaMauricio = new pregunta("azul", "amarillo", "verde", "rojo")
const EAU = new pregunta("verde", "blanco", "negro", "Rojo")

const pregunta5 = document.querySelector(".pregunta5")
const input5 = document.querySelector("#input5")
const btn5 = document.querySelector("#btn5")

input5.addEventListener("input", (event) => {
    input5.value = event.target.value })
    
    btn5.addEventListener("click", (event) => {
        if (input5.value === islaMauricio.color3) {
            pregunta5.innerHTML = `<p class="resultado"> ✅ Yess, ${islaMauricio.color3} es el correcto¡¡!¡</p>`
            nota++
            console.log(nota);
        } else {
            pregunta5.innerHTML = `<p class="resultado-"> ❌ Nop ${input5.value} no esta bien... :/</p>`            
        }
    })

const pregunta6 = document.querySelector(".pregunta6")
const btn6RtaCorrecta = document.querySelector("#btn6-RtaCorrecta");
const btn6RtasIncorrectas = document.querySelectorAll(".btn6-RtaInorrecta");


btn6RtaCorrecta.innerHTML = `<p>${EAU.color4}</p>`

btn6RtaCorrecta.addEventListener("click", () => {
    pregunta6.innerHTML = `<p class="resultado"> ✅ Era facil...</p>`
    nota++
    console.log(nota);
}
)
btn6RtasIncorrectas.forEach(btn => {
    btn.addEventListener("click", () => {
        pregunta6.innerHTML = `<p class="resultado-"> ❌ Eso no es un color primario</p>`
    }
    )
})

const pregunta7 = document.querySelector(".pregunta7")
const btn7RtaCorrecta = document.querySelector("#btn7-RtaCorrecta");
const btn7RtasIncorrectas = document.querySelectorAll(".btn7-RtaInorrecta");

btn7RtaCorrecta.addEventListener("click", () => {
    pregunta7.innerHTML = `<p class="resultado"> ✅ Muy bien, media tramposa</p>`
    nota++
    console.log(nota);
}
)
btn7RtasIncorrectas.forEach(btn => {
    btn.addEventListener("click", () => {
        pregunta7.innerHTML = `<p class="resultado-"> ❌❌❌❌</p>`
    }
    )
})

const paisesLimitrofes = [
    {
        nombre: "Chile",
        capital: "Santiago",
        poblacion: 19000000,
    },
    {
        nombre: "Uruguay",
        capital: "Montevideo",
        poblacion: 3400000,
   },
    {
        nombre: "Paraguay",
        capital: "Asunción",
        poblacion: 7000000,
    },
    {
        nombre: "Brasil",
        capital: "Brasilia",
        poblacion: 214000000,
    },
    {
        nombre: "Bolivia",
        capital: "La Paz",
        poblacion: 12000000
    },
]

const suma = paisesLimitrofes[2].poblacion + paisesLimitrofes[4].poblacion
const sumaParseada = suma.toString()


const pregunta8 = document.querySelector(".pregunta8")
const btn8RtaCorrecta = document.querySelector("#btn8-RtaCorrecta");
const btn8RtasIncorrectas = document.querySelectorAll(".btn8-RtaInorrecta");

btn8RtaCorrecta.innerHTML = `<p>${paisesLimitrofes[3].nombre}</p>`

btn8RtaCorrecta.addEventListener("click", () => {
    pregunta8.innerHTML = `<p class="resultado"> ✅ PeRFEcto</p>`
    nota++
    console.log(nota);
}
)
btn8RtasIncorrectas.forEach(btn => {
    btn.addEventListener("click", () => {
        pregunta8.innerHTML = `<p class="resultado-"> ❌ Terrible lo tuyo </p>`
    }
    )
})

const pregunta9 = document.querySelector(".pregunta9")
const input9 = document.querySelector("#input9")
const btn9 = document.querySelector("#btn9")

input9.addEventListener("input", (event) => {
    input9.value = event.target.value
    console.log(input9.value); })

    btn9.addEventListener("click", (event) => {
        if (input9.value === sumaParseada) {
            pregunta9.innerHTML = `<p class="resultado"> ✅ Y si... 9 + 12?</p>`
            nota++
            console.log(nota);
        } else {
            pregunta9.innerHTML = `<p class="resultado-"> ❌ No</p>`
        }
    })



function mostrarNota () {


    main.innerHTML =    ` <h1 class="h1-tabla">Tabla de Jugadores</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Jugador</th>
                <th>Nota</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jose</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Fernando</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Ismael</td>
                <td>6</td>
            </tr>
            <tr>
                <td>${usuarios[0]?.nombre}</td>
                <td>${nota}</td>
            </tr>
        </tbody>
    </table>`


 if(nota <= 5){
  footer.innerHTML = ` <footer class="footer"><p>Mal ahí desaprobaste, tu nota es un ${nota}</p></footer>
` } 
 if (nota == 6) {
  footer.innerHTML = ` <footer class="footer"><p>Raspando pero aprobado, te sacaste un ${nota} </p></footer>`
 }
 if (nota >=6 && nota <=8) {
  footer.innerHTML = ` <footer class="footer"><p>Bastante bien, te sacase un ${nota}</p></footer>
` }
 if (nota > 8) {
  footer.innerHTML = ` <footer class="footer"><p>Impresionante *clap* *clap* , un merecido ${nota}</p></footer>
` }



}
const pregunta10 = document.querySelector(".pregunta10")
const btn10 = document.querySelector("#btn10")
const btn11 = document.querySelector("#btn11")
const IdPregunta10 = document.querySelector("#pregunta10")
const numeroRandom = Math.random().toFixed(3) * 6

IdPregunta10.innerHTML = `Pregunta : 10 Dado el siguiente numero aleatorio, ¿es mayor o menor a PI? (Escribir mayor o menor segun el caso) PI = ${(Math.PI).toFixed(4) + " ---> Número : " + numeroRandom.toFixed(4)} `

btn10.addEventListener("click", () => {
    if (numeroRandom >= Math.PI) {
        pregunta10.innerHTML = `<p class="resultado"> ✅ Espléndido</p>`
        nota++
        console.log(nota);
        usuarios.push(nota)
    } else {
        pregunta10.innerHTML = `<p class="resultado-"> ❌ ÑO</p>`
    }
    mostrarNota()

})

btn11.addEventListener("click", () => {
    if (numeroRandom >= Math.PI) {
        pregunta10.innerHTML = `<p class="resultado-"> ❌ WRONG!</p>`
        nota++
        usuarios.push()
        console.log(nota);
    } else {
        pregunta10.innerHTML = `<p class="resultado"> ✅ BIENNN</p>`
    }
    mostrarNota()

})