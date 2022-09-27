
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

let cursos = [
  { id: 1, titulo: "React", precio: 2000 },
  { id: 2, titulo: "NodeJS", precio: 3000 },
  { id: 3, titulo: "Javascript", precio: 4000 },
  { id: 4, titulo: "Full Stack", precio: 10000 },
]




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
    
    console.log(res);
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
  /*  console.log(tipoDeCurso) */
  NumeroCarrito.innerHTML = contadorCarrito;
}

function contadorCarritoJavascript() {
  contadorCarritoNumberJS++;
  contadorCarritoJS.innerHTML = contadorCarritoNumberJS;
}



let subtotalContenedor = document.getElementById('contenedorSubtotal');


