
//El rest siempre va al final 
const Rest = (a, b, ...argumentos) => {
    console.log(a,b);
    console.log(argumentos);
}

//Rest(1, 2,  3, 4, 5);


// const obj = {
//     a: 1, b: 2, c: 3, d: 4
// };

//const { a, b, ...restAll } = obj;
//console.log(a, b, restAll);

//------------------------------------------
const array = [1, 2, 3, 4, 5];
const [a, ...rest] = array;
//console.log(a, rest);


const UseState = () => ['valor', () => {} ]
const [valor, setValor] = UseState();
console.log(valor, setValor)
