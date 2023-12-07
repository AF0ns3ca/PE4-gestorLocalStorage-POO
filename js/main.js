/**
 * Autor: Alvaro Fonseca Hernández
 * Github: https://github.com/AF0ns3ca/PE4-gestorLocalStorage-POO.git
 */

import { Producto } from "./producto.js";
import { TaskManager } from "./taskManager.js";
import { productStorage } from "./localStorage.js";
import { searchProducts } from "./searchProducts.js";
import {
  sortAuthor,
  sortPrice,
  sortQuantity,
  sortTitle,
} from "./sortProducts.js";

const tituloProducto = document.getElementById("product-title");
const autorProducto = document.getElementById("product-author");
const cantidadProducto = document.getElementById("product-quantity");
const precioProducto = document.getElementById("product-price");

const getRandomQuantity = () => {
  return Math.floor(Math.random() * 30) + 1;
  //floor es para redondear, ponemos 30 para generar hasta 20 los numeros random
};

const inventory = new TaskManager();

let defaultProducts = [
  new Producto(1, "Mistborn", "Brandon Sanderson", getRandomQuantity(), 15.5),
  new Producto(
    2,
    "The Way of Kings",
    "Brandon Sanderson",
    getRandomQuantity(),
    25.99
  ),
  new Producto(
    3,
    "The Eye of the World",
    "Robert Jordan",
    getRandomQuantity(),
    20.15
  ),
  new Producto(
    4,
    "Game of Thrones",
    "George R.R. Martin",
    getRandomQuantity(),
    45.99
  ),
  new Producto(
    5,
    "Tress of the Emerald See",
    "Brandon Sanderson",
    getRandomQuantity(),
    10.75
  ),
  new Producto(6, "The Poppy War", "R.F. Kuang", getRandomQuantity(), 7.99),
  new Producto(
    7,
    "The Hunger Games",
    "Suzanne Collins",
    getRandomQuantity(),
    9.99
  ),
  new Producto(
    8,
    "Warbreaker",
    "Brandon Sanderson",
    getRandomQuantity(),
    12.99
  ),
  new Producto(9, "Lord of Chaos", "Robert Jordan", getRandomQuantity(), 2.99),
  new Producto(10, "The Hobbit", "J.R.R. Tolkien", getRandomQuantity(), 19.99),
];

//Añadimos los productos por defecto al inventario
defaultProducts.forEach((producto) => {
  inventory.addProduct(producto);
});

//Ahora los añadimos al localStorage
productStorage(inventory.productos);

const addBtn = document.getElementById("btn-form");
addBtn.addEventListener("click", function (e) {
  const titulo = tituloProducto.value;
  const autor = autorProducto.value;
  const cantidad = cantidadProducto.value;
  const precio = precioProducto.value;
  const id = Date.now(); // Usar la fecha actual como id

  if (titulo && autor && cantidad && precio) {
    // Crear un nuevo producto con los valores obtenidos
    const product = new Producto(id, titulo, autor, cantidad, precio);
    // Añadir el producto al inventario
    inventory.addProduct(product);

    //Limpiamos los campos del formulario
    document.getElementById("product-title").value = "";
    document.getElementById("product-author").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";
  } else {
    alert("Por favor, rellene todos los campos");
  }
});

const saveBtn = document.getElementById("btn-save");
saveBtn.addEventListener("click", function (e) {
  const id = document.getElementById("product-id").value;
  const titulo = tituloProducto.value;
  const autor = autorProducto.value;
  const cantidad = cantidadProducto.value;
  const precio = precioProducto.value;

  if (titulo && autor && cantidad && precio) {
    // Añadir el producto al inventario
    inventory.updateProduct(id, titulo, autor, cantidad, precio);

    //Limpiamos los campos del formulario
    document.getElementById("product-id").remove();
    document.getElementById("product-title").value = "";
    document.getElementById("product-author").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";
  } else {
    alert("Por favor, rellene todos los campos");
  }
});

//Boton para buscar productos
const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", () => {
  searchProducts(inventory.productos);
});

//Filtros, para filtrar por cada uno de los campos hacer click en el encabezado de la tabla de cada elemento, mas informacion en sortProducts.js
const titleSort = document.getElementById("title-sort");
titleSort.addEventListener("click", () => {
  sortTitle(inventory.productos);
  inventory.showInventory();
});

const authorSort = document.getElementById("author-sort");
authorSort.addEventListener("click", () => {
  sortAuthor(inventory.productos);
  inventory.showInventory();
});

const quantitySort = document.getElementById("quantity-sort");
quantitySort.addEventListener("click", () => {
  sortQuantity(inventory.productos);
  inventory.showInventory();
});

const priceSort = document.getElementById("price-sort");
priceSort.addEventListener("click", () => {
  sortPrice(inventory.productos);
  inventory.showInventory();
});
