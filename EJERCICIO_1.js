// A partir de un array de números sumar todos los elementos y guardar el resultado en una variable sum.
// Ejemplos:

// nums[2,3,4] sum = 9 

// nums [0,0,0,1,1,1] sum = 3

let nums = [17, 19, 3, 2, 4];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log("EL SUMA DEL VECTOR ES: ", sum);