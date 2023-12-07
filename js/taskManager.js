import { totalPrice } from "./totalprice.js";
export class TaskManager {
  #productos;

  constructor() {
    this.#productos = [];
  }

  get productos() {
    return this.#productos;
  }

  set productos(productos) {
    this.#productos = productos;
  }

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

    this.showInventory();
    totalPrice(this.productos);
  }

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

  deleteProduct(id) {
    this.productos = this.productos.filter((producto) => producto.id !== id); // Filtrar y actualizar la lista de productos
    localStorage.removeItem(`Producto: ${id}`); // Eliminar el producto del almacenamiento local
    this.showInventory(); // Actualizar la visualización del inventario
    totalPrice(this.productos);
  }

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
