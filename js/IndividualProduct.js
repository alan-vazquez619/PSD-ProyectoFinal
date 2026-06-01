const params = new URLSearchParams(window.location.search);
const id = Number (params.get('id'));
const producto = PRODUCTS.find(function(p) { return p.id == id; })

if(producto) {
    document.getElementById("nombre-producto").textContent = producto.name;
    document.getElementById("precio-producto").textContent = producto.price;
    document.getElementById("description-producto").textContent = producto.description;
    document.getElementById("image-product").src = producto.img;
    document.getElementById("sizes-product1").textContent = producto.sizes1;
    document.getElementById("sizes-product2").textContent = producto.sizes2;
    document.getElementById("sizes-product3").textContent = producto.sizes3;
}

function seleccionar(boton){

    let botones = document.querySelectorAll(".btn-blanco");

    botones.forEach(function(btn){
        btn.classList.remove("active-size");
    });

    boton.classList.add("active-size");

}