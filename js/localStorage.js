// Almacenaremos los productos en el localStorage del navegador.
export function productStorage(productos) {

  localStorage.clear(); // Limpiar el localStorage para comenzar con un inventario vacío en cada inicio de sesión. Se podría cambiar para que se mantenga el inventario en el localStorage y se pueda seguir trabajando con el inventario anterior. Habría que cambiar el método de añadir productos al inventario para que no se dupliquen los productos. 

  productos.forEach((product) => {
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
