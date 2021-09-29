
const fn = (a, b, c) => {
    //console.log(a + b + c);
}

const array = [1, 2, 3, 4];
const AnotherArray = [5, 6];

const all =  [...array, ...AnotherArray];
//console.log(all);

//El SpreadOperator Permite mappear los elementos de un array segun los parametros de la funcion
fn(...array);

const AnotherWay = [...array, -1, -2];
//console.log(AnotherWay);
array[0] = "Josue";
//console.log(array,AnotherWay);
//const all = array.concat(AnotherArray);
//console.log(all)

//Spred para objetos 
const obj = {a: 1, b: 2};
const obj2 = {b: 5, c: "Test"};

const obj3 = {...obj};
obj.a = 10;
// console.log(obj3, obj);

//Objeto hibrido a partir de un existente y propiedades nuevas 
const obj4 = {
    ...obj,
    load : true,
    data: {
        name: 'Fred',
        age: 25
    }
};


console.log(obj4);

