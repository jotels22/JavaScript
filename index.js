
const iniciarSesion = document.querySelector(".logIn")
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

botonEnviar.addEventListener("click", () => {

    const nuevoUsuario = {
        nombre: usuario.value,
        contraseña: contraseña.value,
        nota: nota
    }
    usuarios.push(nuevoUsuario)
    //usuarios.length = 0
    localStorage.setItem("jugador", JSON.stringify(usuarios));
    localStorage.setItem("usuario", JSON.stringify(usuario.value))
    localStorage.setItem("contraseña", JSON.stringify(contraseña.value))

    console.log(usuarios);
    localStorage.setItem("jugador", JSON.stringify(usuarios))


})

