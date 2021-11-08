
const array = [-1, -2, -3, -4, -5];

// const GetMax = (a, b) => {
//     return Math.max(a, b);
// }

// const array_1 = array.reduce(GetMax);

const users = [
    {id: 1, name: "Josue"},
    {id: 2, name: "Joel"},
    {id: 3, name: "Pedro"}
];

const array_1 = users.reduce((acc, el) => 
    `${acc === '' ? '' : `${acc}, `} ${el.name} `, ''
);


const r1 = users.reduce((acc, el) => {
    if (el.id < 2) {
        return acc;
    }
    return acc.concat(el);
}, []);

console.log(r1);
