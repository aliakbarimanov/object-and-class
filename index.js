//! FindCustom

// Array.prototype.findCustom = function (callBackFn) {
//   let newElement;

//   for (let i = 0; i < this.length; i++) {
//     if (callBackFn(this[i], i, this)) {
//       newElement = callBackFn(this[i], i, this);
//     }
//   }

//   return newElement;
// };

// let res = [1, 2, 3].findCustom((val) => {
//   if (val > 2) {
//     return val;
//   }
// });

// console.log(res);

// --------------------------------------------------------------

//! FilterCustom

// Array.prototype.filterCustom = function (callBackFn) {
//   let newArray = [];

//   if (callBackFn) {
//     for (let i = 0; i < this.length; i++) {
//       if (callBackFn(this[i], i, this)) {
//         newArray.push(callBackFn(this[i], i, this));
//       }
//     }
//   }

//   return newArray;
// };

// let res = [1, 2, 3].filterCustom((val) => {
//   if (val > 1) {
//     return val;
//   }
// });

// console.log(res);

// --------------------------------------------------------------

//! FindIndexCustom