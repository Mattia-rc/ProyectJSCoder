/* 
let PrecioJS = 1000;
let PrecioReact = 2000;
let PrecioNodeJS = 3000;
let ListaDeProductos = [];
let Carrito = []
let ProductoEliminar;
let DesicionEliminar
let Eleccion;
 let resultado = 0;


 function verCarrito() {
  alert(`los productos que tenes en el carrito son ${ListaDeProductos} y el total es ${resultado} `)
 }
 
function eliminarCosasCarrito() {

  //NO ME FUNCIONA TODAVIA//
  if (DesicionEliminar == 1) {
    ProductoEliminar = prompt("¿Que producto desea eliminar? 1 para JavaScript, 2 para NodeJS, 3 para React.")

   if(ProductoEliminar === 1){
    ListaDeProductos.splice(0, 1)
   }else if(ProductoEliminar === 2){
    ListaDeProductos.splice(1, 2);
   }else if(ProductoEliminar === 3){
    ListaDeProductos.splice(2, 3);
   }
  }
}

console.log(ListaDeProductos);
  
function crearSubtotal() {

  for (i = 0; i < (ListaDeProductos.length); i++) {

    name = ListaDeProductos[i]

    if (ListaDeProductos[i] == "JavaScript") {
      price = PrecioJS;
    } else if (ListaDeProductos[i] == "React") {
      price = PrecioReact
    } else if (ListaDeProductos[i] == "NodeJS") {
      price = PrecioNodeJS;
    }

    Carrito.push(
      { nombre: name, precio: price }
    )

   
  
  }
   resultado = Carrito.reduce((acc, productos)=>{
    return acc + productos.precio;
  }, 0)
  
  console.log(resultado);
  verCarrito();
}

function compra() {

  Eleccion = prompt("¿Que producto desea comprar? 1 para JavaScript, 2 para NodeJS, 3 para React.");

  if (Eleccion == 1) {
    ListaDeProductos.push("JavaScript");
  } else if (Eleccion == 2) {
    ListaDeProductos.push("NodeJS");
  } else if (Eleccion == 3) {
    ListaDeProductos.push("React");
  } else {
    alert("Opción incorrecta.");
  }

  let Repetir = prompt("¿Desea hacer más compras? Ingrese 1 para si, o 2 para no.");

  if (Repetir == 1) {
    compra()
  } else {
     DesicionEliminar = prompt("¿Desea eliminar algun producto? ingrese 1 para si, 0 2 para no")
     eliminarCosasCarrito();
  }

}

let Decision = prompt("¿Desea comprar productos? Ingrese 1 para si, o 2 para no.")

if (Decision == 1) {
  compra()
} else {
  alert("Ok, gracias por visitar.")
}


let DecisionCarrito = prompt("¿Desea ver los productos? Ingrese 1 para si, o 2 para no.")
if (DecisionCarrito == 1) {
  
} else {
  alert("Ok, gracias por visitar.")
}
crearSubtotal()
console.log(Carrito)

 */



let inscripcionJS = document.getElementById('JSInscripcion');
let contadorCarrito = 0;
let NumeroCarrito = document.getElementById('CuentaCarrito');
let inscripcionReact = document.getElementById('reactInscripcion');
let resultado = 0;
let inscripcionNodeJs = document.getElementById('NodejsInscripcion')
let carritoCompra = document.getElementById('carrito');
let boxNombres = document.getElementById('a_nombreProducto')
let NombreCursoJS = "Javascript"
let claseJs = document.querySelector('box_js-invisible');
let precio_box_cursos = document.getElementById('box_Precios')
let contadorCarritoJS = document.getElementById('contadorJS');
let contadorCarritoNumberJS = 0;


let cursos = [
  {id: 1, titulo: "React", precio: 2000},
  {id: 2, titulo: "NodeJS", precio: 3000},
  {id: 3, titulo: "Javascript", precio: 4000},
]



let contenedor = document.createElement("div");
contenedor.className = "flex_cursos"


let notificacion= document.createElement('div');
notificacion.classList.add('notificacion');
notificacion.textContent='Hola pepe'

for(let curso of cursos){
let cursoContainer = document.createElement("div")
let cursoBoton = document.createElement("button")
cursoBoton.textContent = "Agregar"
cursoBoton.className = "classBotonEdit"

cursoBoton.addEventListener("click", ()=> {
  ContadorCarritoFunction(curso)
  notificacion.innerHTML=` <p> Curso ${curso.titulo} fue agregado al carrito haz click aqui para mirar el carrito </p>
  <a href='carrito.html'>Haz click aqui</a>`
  notificacion.style.display='block';
  setTimeout(()=>notificacion.style.display='none',3000)

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
  NumeroCarrito.innerHTML =  contadorCarrito;
}

  function contadorCarritoJavascript(){
    contadorCarritoNumberJS++;
    contadorCarritoJS.innerHTML = contadorCarritoNumberJS;
  }



  

inscripcionNodeJs.addEventListener('click', function () {
  ContadorCarritoFunction();
})