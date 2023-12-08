//Función que calculará el precio total de los productos que hay en el inventario. Se le pasa el array de productos que es una instancia de la clase TaskManager en este caso.
export function totalPrice(productos) {
    const total = document.getElementById("total-price-label");
    let totalPrice = 0;
    productos.forEach(product => {
        totalPrice += (product.cantidad*product.precio)
    })
    total.innerHTML = `$${totalPrice.toLocaleString()}`;
  }