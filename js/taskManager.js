//Clase TaskManager que representa el inventario de la tienda. 
//Tendrá un constructor que inicializará el array de productos y los metodos para añadir, editar y borrar productos del inventario.
import { totalPrice } from "./totalprice.js";
export class TaskManager {
  //Atributos privados
  #productos;

  //Constructor por parametros
  constructor() {
    this.#productos = [];
  }

  //Getters y setters
  get productos() {
    return this.#productos;
  }

  set productos(productos) {
    this.#productos = productos;
  }

  //Metodo añadir producto al inventario, se le pasa el producto que es una instancia de la clase Producto
  addProduct(producto) {
    this.#productos.push(producto);
    // Crea un nuevo objeto con los detalles del producto y se envia a localStorage convertido en JSON.
    const productoNormal = {
      id: producto.id,
      titulo: producto.titulo,
      autor: producto.autor,
      cantidad: producto.cantidad,
      precio: producto.precio,
    };
    localStorage.setItem(
      `Producto: ${producto.id}`,
      JSON.stringify(productoNormal)
    );

    //Volvemos a mostrar el inventario para que se actualice la tabla
    this.showInventory();
    //Calculamos el precio total de los productos que hay en el inventario con el nuevo producto añadido
    totalPrice(this.productos);
  }

  //Metodo editar producto del inventario, se le pasa el id del producto que se quiere editar. 
  //Lo que hace es mandar al formulario de añadir producto los datos del producto que se quiere editar para que se puedan modificar
  editProduct(id) {
    //SI existe el elemento input con id product-id, lo borramos
    if (document.getElementById("product-id")) {
        document.getElementById("product-id").remove();
    }

    let producto = this.productos.find((producto) => producto.id === id); // Encontrar el producto por id
    document.getElementById("product-title").value = producto.titulo;
    document.getElementById("product-author").value = producto.autor;
    document.getElementById("product-quantity").value = producto.cantidad;
    document.getElementById("product-price").value = producto.precio;

    //creamos un elemento oculto para guardar el id del producto
    let hiddenId = document.createElement("input");
    hiddenId.setAttribute("type", "hidden");
    hiddenId.setAttribute("id", "product-id");
    hiddenId.setAttribute("name", producto.id);
    hiddenId.setAttribute("value", producto.id);
    document.getElementById("add-form").appendChild(hiddenId);
  }

  //Metodo update que coge los datos del formulario de añadir producto y actualiza el producto que se quiere editar y lo vuelve a mostrar en el inventario a la vez que se guarda en el localStorage
  updateProduct(id, titulo, autor, cantidad, precio) {
    let producto = this.productos.find((producto) => producto.id == id); // Encuentra el producto por id
    localStorage.removeItem(`Producto: ${id}`); // Elimina la versión anterior del producto del almacenamiento local

    // Actualiza la información del producto
    producto.titulo = titulo;
    producto.autor = autor;
    producto.cantidad = cantidad;
    producto.precio = precio;
    this.showInventory(); // Actualiza la visualización del inventario
    totalPrice(this.productos);

    const productoNormal = {
      id: producto.id,
      titulo: producto.titulo,
      autor: producto.autor,
      cantidad: producto.cantidad,
      precio: producto.precio,
    };
    localStorage.setItem(
      `Producto: ${producto.id}`,
      JSON.stringify(productoNormal)
    );

    //Cambiamos el boton Guardar por el de Añadir
    const saveBtn = document.getElementById("btn-save");
    const addBtn = document.getElementById("btn-form");
    if (!saveBtn.classList.contains("hidden")) {
      saveBtn.classList.toggle("hidden");
      addBtn.classList.toggle("hidden");
    }
  }

  //Metodo borrar producto del inventario, se le pasa el id del producto que se quiere borrar y tambien se borra del localStorage
  deleteProduct(id) {
    this.productos = this.productos.filter((producto) => producto.id !== id); // Filtrar y actualizar la lista de productos
    localStorage.removeItem(`Producto: ${id}`); // Eliminar el producto del almacenamiento local
    this.showInventory(); // Actualizar la visualización del inventario
    totalPrice(this.productos);
  }

  //Metodo para mostrar el inventario, se le pasa el array de productos que es una instancia de la clase TaskManager en este caso y lo muestra en la tabla creando las celdas y añadiendolas a la tabla
  showInventory() {
    const cleanTable = document.getElementById("inventTable");
    cleanTable.innerHTML = "";

    // Itera sobre los productos y agrega las filas a la tabla
    this.productos.forEach((producto) => {
      const row = cleanTable.insertRow();

      //Cell creation
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);

      //Cell data insertion
      cell1.innerHTML = `${producto.titulo}`;
      cell2.innerHTML = `${producto.autor}`;
      cell3.innerHTML = `${producto.cantidad} uds`;
      cell4.innerHTML = `$ ${producto.precio}`;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Borrar";
      deleteButton.addEventListener("click", () => {
        this.deleteProduct(producto.id);
      });
      cell5.appendChild(deleteButton); //con esta linea estamos insertando el boton delete en la celda correspondiente
      const editButton = document.createElement("button");
      editButton.innerText = "Editar";
      editButton.addEventListener("click", () => {
        //Hacemos que cuando se pulse, la pantalla se desplace hasta el formulario de añadir producto
        document.getElementById("add-form").scrollIntoView();
        this.editProduct(producto.id);
        // Cambiar el botón de guardar por el de editar
        const saveBtn = document.getElementById("btn-save");
        const addBtn = document.getElementById("btn-form");
        if (saveBtn.classList.contains("hidden")) {
          saveBtn.classList.toggle("hidden");
          addBtn.classList.toggle("hidden");
        }
      });
      cell5.appendChild(editButton);
    });
  }
}
