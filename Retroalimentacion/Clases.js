
// const Rectangulo = class {

// }

//hoisting: cuando declaramos variables con var y funciones con function. Las lleva al principio del archivo
class Rectangulo {

}

const rObject = new Rectangulo();

//Clase completa 
class Car {
    //constructor 
    Propiedad = "I am here";
    #Gasolina;
    static propiedad_estatica = 56;
    constructor(estado, gasolina = false) {
        //console.log(`Modelo: ${modelo}. Marca: ${marca}. Color: ${this.color}`);
        this.estado = estado;
        this.#Gasolina = gasolina;
    }
    Run() {
        return `El auto esta ${this.estado} ${this.#Gasolina ? 'con gasolina' : 'sin gasolina'}`;
    }
    //Metodos staticos
    //Los metodos estaticos no pueden acceder a las propiedades de las clases  
    static Reparar() {
        return this.propiedad_estatica;
    }

}

// const ForFocus = new Car("For", "Focus");
// const HondaCivic = new Car("Honda", "Civic");
const car = new Car("en movimiento", true);
console.log(car.Run());
console.log(Car.Reparar());
//console.log(car.Run());  