export class Product{
    #id;
    #titulo;
    #autor;
    #cantidad;
    #precio;

    constructor(id, titulo, autor, cantidad, precio){
        this.#id = id;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

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