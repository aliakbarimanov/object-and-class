//! Rest parameters

// function sumAll(...args){

//     let sum = 0;

//     for(let i=0; i<args.length; i++){
//         sum += args[i];
//     }

//     return sum;
// }

// console.log(sumAll(1,2,3));

// function me(name, surname, ...about){
//     return  about;
// }

// console.log(me("Ali", "Imanov", 26, 177));

//? -----------------------------------------------------

//! Spread operators

function sum() {

    const arr = [1, 2, 3, 4, 5];

    let result = 0;

    for(value of [...arr]){
        result += value;
    }

    return result;
}

console.log(sum());