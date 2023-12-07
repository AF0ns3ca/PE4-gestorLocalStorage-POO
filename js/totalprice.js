export function totalPrice(productos) {
    const total = document.getElementById("total-price-label");
    let totalPrice = 0;
    productos.forEach(product => {
        totalPrice += (product.cantidad*product.precio)
    })
    total.innerHTML = `$${totalPrice.toLocaleString()}`;
  }