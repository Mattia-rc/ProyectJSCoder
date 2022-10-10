

//VARIABLES DECLARADOS//
let contenedorCursos = document.getElementById('contenedor_cursos')
let verCarrito = document.getElementById("verCarrito")
let carrito = [];
let pantallaHeader = document.getElementById('contenedor_Header')
let resultado = 0;
let compraFinalizada = document.getElementById("contenedor-Compra");
let AgradecimientoCompra = document.getElementById("AgradecimientoCompra")
let contenedorContadorProductos = document.getElementById("contadorContenedor");
let contadorProductos = 0;
//ASIGNACION DE CLASES//
compraFinalizada.className = "Pantalla-Compra_Finalizada"
pantallaHeader.className = "Pantalla-Diseño"
AgradecimientoCompra.className = "pantalla-agradecimiento"

//MOSTRAR CURSOS EN HTML//

fetch("data.json")
.then((res)=>res.json())
.then((data)=>{
data.forEach((curso) => {
  let container = document.createElement("div");
  container.className = "CardContainer"
  container.innerHTML = `
  <img>${curso.img}</img>
  <h3 class="color_h3">${curso.titulo}</h3>
  <h4 class="color_h3">$ ${curso.precio}</h4>
  `
  contenedorCursos.appendChild(container)

//CREACION DE BOTON
  let comprarBoton = document.createElement("button")
  comprarBoton.textContent = "Agregar al Carrito";

 
//ASIGNACION DE CLASE AL BOTON
  comprarBoton.className = "BotonCompraEdit"

  //EVENTO DE CLICK EN BOTON DE COMPRA-CARRITO
  comprarBoton.addEventListener('click', () => {
   
    carrito.push({
      id: curso.id,
      img: curso.img,
      titulo: curso.titulo,
      precio: curso.precio
    })
    

    console.log(carrito);
    contadorProductos++;
    console.log(contadorProductos);
    contenedorContadorProductos.className = "contenedorProductosSize"
    contenedorContadorProductos.innerHTML = contadorProductos;
  })


  container.appendChild(comprarBoton)
})

})




//CLICK EN LOGO CARRITO PARA VISUALIZARLO//
verCarrito.addEventListener('click', () => {
  pantallaHeader.innerHTML = ""
  pantallaHeader.style.display = "flex "
  let pantalla = document.createElement("div");
  pantalla.className = "pantallaVIsta"

//PANTALLA Q MUESTRA CARRITO//
  pantalla.innerHTML = `
    <h3class = "modalPantalla">Carrito</h3>
  `
  pantallaHeader.appendChild(pantalla)

  let botonEscPantalla = document.createElement("h1");
  botonEscPantalla.textContent = "❌";
  botonEscPantalla.className = "BotonEscPantalla";

  pantalla.appendChild(botonEscPantalla)
  botonEscPantalla.addEventListener('click', () => {

    pantallaHeader.style.display = 'none'

  })

//RECORRE EL ARRAY DE CARRITO Y LA MUESTRA EN PANTALLA//
  carrito.forEach((curso) => {

    let carritoContenido = document.createElement("div");
    carritoContenido.className = "carrito-estilo";
    carritoContenido.innerHTML = `
        <p>ID de Producto ${curso.id} </p>
        <img>${curso.img}</img>
        <h3>${curso.titulo}</h3>
        <h4>$ ${curso.precio}</h4>
        `
    pantallaHeader.appendChild(carritoContenido)
    guardadoStorage()
  })
//SUBTOTAL DE PRECIO CARRITO//
  resultado = carrito.reduce((accum, p) => {

    return accum + p.precio

  }, 0);

  let subtotalCarrito = document.createElement("div");
  subtotalCarrito.innerHTML = `<h4>El total es de: ${resultado} </h4>`
  pantallaHeader.appendChild(subtotalCarrito)

  let divCompras = document.createElement("div")
  divCompras.className = "ComprasStyle"
  let finalizarCompra = document.createElement("button");
  finalizarCompra.textContent = "Finalizar Compra"

  finalizarCompra.className = "BotonCompras"

  let vaciarCarrito = document.createElement("button");
  vaciarCarrito.className = "BotonCompras"
  vaciarCarrito.textContent = "Vaciar Carrito"

  divCompras.appendChild(finalizarCompra);
  divCompras.appendChild(vaciarCarrito);

  pantallaHeader.appendChild(divCompras)

//VACIAR CARRITO//

vaciarCarrito.addEventListener('click', () => {
  carritoVaciar()
  pantallaHeader.style.display = "none"
  contadorProductos = 0;
  contenedorContadorProductos.innerHTML = contadorProductos;
})



  /*  compraFinalizada */
//FORMULARIO DE COMPRA FINALIZACION//
  finalizarCompra.addEventListener('click', () => {
    let contenedorFlexIcons = document.createElement("div")
    contenedorFlexIcons.className = "ContenedorFlexIcons"
    pantallaHeader.style.display = "none";
    let textCompra = document.createElement("h3");
    let botonCerrarFormulario = document.createElement("h1");
    botonCerrarFormulario.textContent = "❌"
    textCompra.textContent = "Finalizacion De Compra"
    let formulario = document.createElement("div");
    formulario.className = "formulario-css"
    formulario.innerHTML = `<input type="text" required placeholder="Ingrese su correo"></input>
      <input type="password" required placeholder="Ingrese su Contraseña"></input>
      <input type="text" required placeholder="Ingrese su tarjeta"></input>

      <h3>Su total es de: ${resultado} </h3>

      
      `

    contenedorFlexIcons.appendChild(textCompra)
   contenedorFlexIcons.appendChild(botonCerrarFormulario)
   compraFinalizada.appendChild(contenedorFlexIcons)
    compraFinalizada.appendChild(formulario)
    let botonFinalizarCompra = document.createElement("button");
    botonFinalizarCompra.className = "BotonClassEdit"
    botonFinalizarCompra.textContent = "Finalizar Compra"

    compraFinalizada.appendChild(botonFinalizarCompra)

    botonCerrarFormulario.addEventListener('click', ()=>{
      compraFinalizada.style.display = "none"
    })
//BOTON DE FINALIZADO//
    botonFinalizarCompra.addEventListener('click', () => {

      Swal.fire({
        title: 'Felicitaciones!',
        text: 'Haz finalizado tu compra en CoderHome',
        icon: 'success',
        confirmButtonText: 'Cool'
        
      })
      desmostrar()
    })
   

  })



})


  //guardo los datos en localStorage//
function guardadoStorage() {
  const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
  guardarLocal("listaProductos", JSON.stringify(carrito))
}
function carritoVaciar(){
    carrito = []
}
function desmostrar(){
  
  compraFinalizada.style.display = "none"
  contadorProductos = 0;
  
  carrito = []
  contenedorContadorProductos.innerHTML = contadorProductos;
}