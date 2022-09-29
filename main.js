/* 
let contadorCarrito = 0;
let NumeroCarrito = document.getElementById('CuentaCarrito');
let resultado = 0;
let carritoCompra = document.getElementById('carrito');
let boxNombres = document.getElementById('a_nombreProducto')
let claseJs = document.querySelector('box_js-invisible');
let precio_box_cursos = document.getElementById('box_Precios')
let contadorCarritoJS = document.getElementById('contadorJS');
let contadorCarritoNumberJS = 0;
let res;
 */



/* 

let contenedor = document.createElement("div");
contenedor.className = "flex_cursos"

let arrayProductos = [];

let notificacion = document.createElement('div');
notificacion.classList.add('notificacion');
notificacion.textContent = 'Hola pepe'

for (let curso of cursos) {
  let cursoContainer = document.createElement("div")
  let cursoBoton = document.createElement("button")
  cursoBoton.textContent = "Agregar"
  cursoBoton.className = "classBotonEdit"

  cursoBoton.addEventListener("click", () => {
    ContadorCarritoFunction(curso)
    notificacion.innerHTML = ` <p> Curso ${curso.titulo} fue agregado al carrito haz click aqui para mirar el carrito </p>
  <a href='carrito.html'>Haz click aqui</a>`
    notificacion.style.display = 'block';
    setTimeout(() => notificacion.style.display = 'none', 3000)

    
    //introduzco cursos a array//
    arrayProductos.push(curso)
    console.log(arrayProductos);

    //guardo los datos en localStorage//
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("listaProductos", JSON.stringify(arrayProductos))

    
    //SUBTOTAL//
    res = arrayProductos.reduce((accum, p)=>{

      return accum + p.precio
      
    }, 0);
    
    console.log(res);
    let subContenedor = document.createElement("div");

    subContenedor.innerHTML = `<h3> El Subtotal es: ${res} </h4> `;
    
    
    subtotalContenedor.appendChild(subContenedor)
    
    
    console.log(subtotalContenedor);


  })

  

  cursoContainer.innerHTML = `<h4>Curso: ${curso.titulo}</h4>
<p>Precio: ${curso.precio}</p>
`
  cursoContainer.appendChild(cursoBoton)
  contenedor.appendChild(cursoContainer);
  contenedor.appendChild(notificacion)
}
 

document.body.appendChild(contenedor)
function ContadorCarritoFunction(tipoDeCurso) {
  contadorCarrito++;
    console.log(tipoDeCurso) 
  NumeroCarrito.innerHTML = contadorCarrito;
}

 function contadorCarritoJavascript() {
  contadorCarritoNumberJS++;
  contadorCarritoJS.innerHTML = contadorCarritoNumberJS;
}



let subtotalContenedor = document.getElementById('contenedorSubtotal');


*/

let contenedorCursos = document.getElementById('contenedor_cursos')
let verCarrito = document.getElementById("verCarrito")
let carrito = [];
let pantallaHeader = document.getElementById('contenedor_Header')
let resultado = 0;
let compraFinalizada = document.getElementById("contenedor-Compra");
let AgradecimientoCompra = document.getElementById("AgradecimientoCompra")

  compraFinalizada.className = "Pantalla-Compra_Finalizada"
pantallaHeader.className = "Pantalla-Diseño"
AgradecimientoCompra.className = "pantalla-agradecimiento"
cursos.forEach((curso) => {
  let container = document.createElement("div");


  container.innerHTML = `
  <img>${curso.img}</img>
  <h3>${curso.titulo}</h3>
  <h4>$ ${curso.precio}</h4>
  `
  contenedorCursos.appendChild(container)


  let comprarBoton = document.createElement("button")
  comprarBoton.textContent = "Agregar al Carrito";

  container.appendChild(comprarBoton)



  comprarBoton.addEventListener('click', () => {

    carrito.push({

      id: curso.id,
      img: curso.img,
      titulo: curso.titulo,
      precio: curso.precio
    })

    console.log(carrito);
  })


})

verCarrito.addEventListener('click', () => {
  pantallaHeader.innerHTML = ""
  pantallaHeader.style.display = "flex "
  let pantalla = document.createElement("div");
  pantalla.className = "pantallaVIsta"


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

  })

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


  vaciarCarrito.addEventListener('click', ()=>{
    carrito = []
      
  })

 /*  compraFinalizada */

    finalizarCompra.addEventListener('click', ()=>{
      let containerMainFinalizacion
      pantallaHeader.style.display = "none";
      let textCompra = document.createElement("h3");
      textCompra.textContent = "Finalizacion De Compra"
      let formulario = document.createElement("div");
      formulario.className = "formulario-css"
      formulario.innerHTML = `<input type="text" required placeholder="Ingrese su correo"></input>
      <input type="password" required placeholder="Ingrese su Contraseña"></input>
      <input type="text" required placeholder="Ingrese su tarjeta"></input>

      <h3>Su total es de: ${resultado} </h3>

      
      `
    
  
      compraFinalizada.appendChild(textCompra)
      compraFinalizada.appendChild(formulario)
      let botonFinalizarCompra = document.createElement("button");
      botonFinalizarCompra.className = "BotonClassEdit"
      botonFinalizarCompra.textContent = "Finalizar Compra"

      compraFinalizada.appendChild(botonFinalizarCompra)


      botonFinalizarCompra.addEventListener('click', ()=>{
        compraFinalizada.style.display = "none"
        let textAgradecimientoCompra  = document.createElement("h2");
        textAgradecimientoCompra.textContent = "MUCHISIMAS GRACIAS"
        AgradecimientoCompra.appendChild(textAgradecimientoCompra)
      })


    })

    

})


