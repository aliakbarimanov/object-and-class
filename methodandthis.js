// let obj = {
//     name: "Ali",
//     surname: "Imanov",
//     sayHi() { console.log("Hello!") },
// }

// console.log(obj.name, obj.surname);
// obj.sayHi();


// let obj = {
//     age: 26,
//     sayAge() { console.log(`I am ${this.age} years old.`) }
// }

// obj.sayAge();

// let age = obj.sayAge;  // basqa deyisene beraber olundugu ucun this undifend - dir.

// age();

//! Arrow function-larda this islemir.

// const obj = {
//     name: "Ali",
//     sayHi: () => console.log(`Hi! ${this.name}`),  // this = undefined.
// }

// obj.sayHi();


// let kullanici = {
//     isim: "İhsan",
//     selamVer: function () { console.log(this.isim) }
// }

//     (kullanici.selamVer)()

// function createUser() {
//     return {
//         name: "Ali",
//         ref: this,
//     }
// }

// let user = createUser();

// console.log(user.ref.name);

// let calculator = {
//     first: 2,
//     second: 3,
//     read() { console.log(`${this.first} ${this.second}`) },
//     sum() { console.log(`sum: ${this.first}+${this.second}`) },
//     multipy() { console.log(`multipy: ${this.first}*${this.second}`) },
// }

// calculator.read();
// calculator.sum();
// calculator.multipy();


// const stairCase = {
//     stair: 0,
//     up() { this.stair += 1 },
//     down() { this.stair -= 1 },
// }

// stairCase.up();
// stairCase.up();
// stairCase.down();

// console.log(stairCase.stair);