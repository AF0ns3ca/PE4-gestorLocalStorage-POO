//Clase Producto que representa un producto de la tienda, uno de los libros en este caso
export class Producto{
    //Atributos privados
    #id;
    #titulo;
    #autor;
    #cantidad;
    #precio;

    //Constructor por parametros
    constructor(id, titulo, autor, cantidad, precio){
        this.#id = id;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

    //Getters y setters
    get id(){
        return this.#id;
    }

    get titulo(){
        return this.#titulo;
    }

    get autor(){
        return this.#autor;
    }

    get cantidad(){
        return this.#cantidad;
    }

    get precio(){
        return this.#precio;
    }

    set id(id){
        this.#id = id;
    }

    set titulo(titulo){
        this.#titulo = titulo;
    }

    set autor(autor){
        this.#autor = autor;
    }

    set cantidad(cantidad){
        this.#cantidad = cantidad;
    }

    set precio(precio){
        this.#precio = precio;
    }
}