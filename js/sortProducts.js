import { TaskManager } from "./taskManager.js";
//Filtros
//No es la forma más efectiva ni eficiente de realizar este tipo de filtros pero fue un añadido de ultima hora 
//Filtrar por titulo, cuando se da un click filtra alfabeticamente de A a Z, si se le da otra vez, filtra de Z a A y si se le da una vez más deja el orden como estaba al principio
const titleSort = document.getElementById("title-sort");
export const sortTitle = (inventory) => {
  //Esto cambia la cabecera de las demas celdas de la tabla que es por lo que se guian los metodos de filtrado. Como he dicho no es para nada la manera mas eficiente pero fue un añadido de ultima hora
  authorSort.innerHTML = "Autor";
  quantitySort.innerHTML = "Cantidad";
  priceSort.innerHTML = "Precio";
  if (
    !titleSort.innerHTML.includes("↑") &&
    !titleSort.innerHTML.includes("↓")
  ) {
    inventory.sort((a, b) => a.titulo.localeCompare(b.nombre));
    titleSort.innerHTML = "Titulo &#8593;";
  } else if (!titleSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => b.titulo.localeCompare(a.nombre));
    titleSort.innerHTML = "Titulo &#8595;";
  } else if (titleSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.id - b.id);
    titleSort.innerHTML = "Titulo";
  }
};

//Filtrar por autor, cuando se da un click filtra alfabeticamente de A a Z, si se le da otra vez, filtra de Z a A y si se le da una vez más deja el orden como estaba al principio
const authorSort = document.getElementById("author-sort");
export const sortAuthor = (inventory) => {
  titleSort.innerHTML = "Titulo";
  quantitySort.innerHTML = "Cantidad";
  priceSort.innerHTML = "Precio";
  if (
    !authorSort.innerHTML.includes("↑") &&
    !authorSort.innerHTML.includes("↓")
  ) {
    inventory.sort((a, b) => a.autor.localeCompare(b.autor));
    authorSort.innerHTML = "Autor &#8593;";
  } else if (!authorSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => b.autor.localeCompare(a.autor));
    authorSort.innerHTML = "Autor &#8595;";
  } else if (authorSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.id - b.id);
    authorSort.innerHTML = "Autor";
  }
};

//Filtrar por cantidad, cuando se da un click filtra alfabeticamente de A a Z, si se le da otra vez, filtra de Z a A y si se le da una vez más deja el orden como estaba al principio
const quantitySort = document.getElementById("quantity-sort");
export const sortQuantity = (inventory) => {
  titleSort.innerHTML = "Titulo";
  authorSort.innerHTML = "Autor";
  priceSort.innerHTML = "Precio";
  if (
    !quantitySort.innerHTML.includes("↑") &&
    !quantitySort.innerHTML.includes("↓")
  ) {
    inventory.sort((a, b) => b.cantidad - a.cantidad);
    quantitySort.innerHTML = "Cantidad &#8593;";
  } else if (!quantitySort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.cantidad - b.cantidad);
    quantitySort.innerHTML = "Cantidad &#8595;";
  } else if (quantitySort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.id - b.id);
    quantitySort.innerHTML = "Cantidad";
  }
};

//Filtrar por precio, cuando se da un click filtra alfabeticamente de A a Z, si se le da otra vez, filtra de Z a A y si se le da una vez más deja el orden como estaba al principio
const priceSort = document.getElementById("price-sort");
export const sortPrice = (inventory) => {
  titleSort.innerHTML = "Titulo";
  authorSort.innerHTML = "Autor";
  quantitySort.innerHTML = "Cantidad";
  if (
    !priceSort.innerHTML.includes("↑") &&
    !priceSort.innerHTML.includes("↓")
  ) {
    inventory.sort((a, b) => b.precio - a.precio);
    priceSort.innerHTML = "Precio &#8593;";
  } else if (!priceSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.precio - b.precio);
    priceSort.innerHTML = "Precio &#8595;";
  } else if (priceSort.innerHTML.includes("↓")) {
    inventory.sort((a, b) => a.id - b.id);
    priceSort.innerHTML = "Precio";
  }
};
