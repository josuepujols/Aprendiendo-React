
const array = [1, 2, 3, 4, 5];

// const mydata = array.map((element) => {
//     return `<h1>Numero: ${element}<h1/>`;
// });

const users = [
    {id: 1, name: "Josue"},
    {id: 2, name: "Joel"},
    {id: 3, name: "Pedro"}
];

const mapped = users.map((user) => {
    return `<h1>Usuario: ${user.name}</h1>`;
});

console.log(mapped);

