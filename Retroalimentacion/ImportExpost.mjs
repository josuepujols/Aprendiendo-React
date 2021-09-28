
const array = ["Josue", "Pujols", 19];
export const AnotherArray = ["Yes", "Pedro"];
const ExportDatos = ["Test"];

// module.exports = {
//     array, 
//     AnotherArray
// };
const f1 = () => {
    console.log("This is a function");
}

function f2() {
    console.log("This is another function");
}

export { ExportDatos, f1, f2 };

export default array;
