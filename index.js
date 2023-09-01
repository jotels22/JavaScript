
const iniciarSesion = document.querySelector(".logIn")
const usuario = document.querySelector("#usuario")
const contraseña = document.querySelector("#contraseña")
const botonEnviar = document.querySelector("#enviar")
const usuarios = JSON.parse(localStorage.getItem("jugador")) || []

const verificarCampos = () => {
    return new Promise((resolve, reject) => {
      if (usuario.value.trim() !== "" && contraseña.value.trim() !== "") {
        resolve();
      } else {
        reject("Completa ambos campos.");
      }
    });
  };

usuario.addEventListener("input", (event) => {
    usuario.value = event.target.value
    console.log(usuarios);        
    console.log(usuario.value);

})

contraseña.addEventListener("input", (event) => {
    contraseña.value = event.target.value
    console.log(usuarios);
})

let nota = 0

botonEnviar.addEventListener("click", (event) => {  

    verificarCampos()
      .then(() => {
      })
      .catch(error => {
        Swal.fire(
            error,
            'porfavor :(',
            'error'
          )
        usuarios.length = 0
        event.preventDefault()
      });  

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

