//Metodo para buscar dentro del array del inventario, se le pasa el array inventory que es una instancia de la clase TaskManager en este caso. 
//Se podrá buscar en funcion de dos valores, titulo y autor
export const searchProducts = (inventory) => {
    let productFound = false;
    cleanClasses(inventory);
    const cleanTable = document.getElementById("inventTable");
    const searchBar = document.getElementById("search");
    const selectFilter = document.getElementById("select-group").value;
    if(searchBar.value !== ""){
      inventory.forEach((item, i) => {
          if (selectFilter === "title") {
            if (item.titulo.toLowerCase() === searchBar.value.toLowerCase()) {
              cleanTable.rows[i].classList.add("found");
              productFound = true;
            }
          } else if (selectFilter === "author") {
            if (item.autor.toLowerCase() === searchBar.value.toLowerCase()) {
              cleanTable.rows[i].classList.add("found");
              productFound = true;
            }
          }
        });
        productFound ? null : alert("No hay coincidencias");
        searchBar.value = "";
    } else {
      alert("Ingrese un valor para buscar");
    }
  };
  
  const cleanClasses = (inventory) => {
    const cleanTable = document.getElementById("inventTable");
    inventory.forEach((item, i) => {
      cleanTable.rows[i].classList.remove("found");
    });
  };