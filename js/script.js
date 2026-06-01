var contenedor = document.getElementById("contenedor-productos")


for(let i= 0; i<PRODUCTS.length; i++){
    contenedor.innerHTML +=
    `
     <div class="enlista">
            <a href="IndividualProducts.html?id=${PRODUCTS[i].id}">
            <img class="product-img" src="${PRODUCTS[i].img}" width="140px" height="140px">
            </a>
            <br>

            <div class="price-bag">
            <p>${PRODUCTS[i].name}</p>
            <a href="ShoppingCart.html"> 
            <img class="bag" src="/Imagenes/shopping bag-01.png" width="12px" height="12px"> 
            </a>

             </div>

           
            <h4>${PRODUCTS[i].price}</h4>

            

        </div>
    `}

/*Checkout*/    
function seleccionar(card){

    let tarjetas = document.querySelectorAll(".delivery-card");

    tarjetas.forEach(function(tarjeta){
        tarjeta.classList.remove("active-card");
    });

    card.classList.add("active-card");

}
