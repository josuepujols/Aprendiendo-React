
const array = [7, 1, 2, 3, 4, 5];

const result = array.filter((element, i) => {
    

    if (element < 10) {
        console.log(i);
    }
    return element < 10;
});

console.log(result);

