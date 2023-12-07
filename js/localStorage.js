// Almacenaremos los productos en el localStorage del navegador.
export function productStorage(productos) {

  localStorage.clear(); // Limpiar el localStorage

  productos.forEach((product) => {
    // Verifica que el producto tenga un nombre, autor, cantidad y precio
      // Crea un nuevo objeto con los detalles del producto y se envia a localStorage convertido en JSON.
      const producto = {
        id: product.id,
        titulo: product.titulo,
        autor: product.autor,
        cantidad: product.cantidad,
        precio: product.precio,
      };
      localStorage.setItem(`Producto: ${product.id}`, JSON.stringify(producto));
    //}
  });
}
