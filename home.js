// let obj = new Object();

// obj.age = 30;

// console.log(obj.age);

// let obj = {
//     "bubirkey": "bubirdeyer",
//     "bu bir key": 30,
// }

// console.log(obj.bubirkey);
// console.log(obj["bu bir key"]);

// let obj = {
//     ad: "Ali",
//     yas: 26,
// }

// let key = prompt("Istediyin key-i daxil et.", "ad");

// alert(obj[key]);

// let obj = {
//     val: undefined,
// }

// console.log(obj.val);
// console.log("val" in obj);

// let obj1 = {
//     name: "Ali",
//     age: 26,
// }

// let obj2 = {
//     name: "Ali",
//     age: 26,
// }

// console.log(obj1 == obj2);

//! -----------------------------------------------

// let user = {};

// user.name = "Ali";
// user.surname = "Imanov";
// user.name = "Hesen";
// delete user.name;

// console.log(user);

//! -----------------------------------------------

// let obj = {};

// obj["name"] = "Ali";

// function isEmpty(object) {

//     for(key in object){
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(obj));

//! -----------------------------------------------

// let maaslar = {
//     Ahmet: 100,
//     Ali: 160,
//     Mazlum: 130
// }

// let toplam = 0;

// for (let maas in maaslar) {
//     toplam += maaslar[maas];
// }

// console.log(toplam);

//! -----------------------------------------------

// let menu = {
//     en: 200,
//     boy: 300,
//     baslik: "Menü"
// };

// function multiplyTwo(object) {

//     for (let key in object) {
//         if (typeof (object[key]) == "number") {
//             return object[key] *= 2;
//         }
//     }
// }
// // console.log(typeof(menu.en));

// console.log(multiplyTwo(menu));

//! -----------------------------------------------