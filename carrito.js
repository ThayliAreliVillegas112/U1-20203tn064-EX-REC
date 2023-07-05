
const producto ={
    nombre: null,
    precio: 0,
    cantidad: 0,
    calcularTotal: ()=>{
        let totalProducto;
        return totalProducto = precio*cantidad;
    } 
}
console.log("resultado");
console.log(producto);

// function randomString(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// let randomFolio = randomString(5);
// console.log(randomString(5));

const carrito = {
    productos: [],
    folio: (length)=>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    },
    subTotal: ()=>{
        // producto
    },
    total: 0,
    cerrar: ()=>{

    }
}

// let nombre1 = document.getElementById('nombre').value;
// let precio1 = document.getElementById('nombre').value;
// let cantidad1 = document.getElementById('nombre').value;
// console.log(nombre);

function agregarProducto(){
    producto.nombre =document.getElementById('nombre').value;
    producto.precio= document.getElementById('precio').value;
    producto.cantidad =document.getElementById('cantidad').value;
    console.log("producto agregado");
    let productos=[];
    var pro = new producto(producto.nombre, producto.precio, producto.cantidad)
    productos.push(pro);
    console.log(productos);

//     let nombre = document.getElementById('nombre').value;
// console.log(nombre);
}

