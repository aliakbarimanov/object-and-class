// class Animal{
//     constructor(name){this.Name = name;}
//     speak = () => console.log(`${this.Name} makes a noise.`);
// }

// class Dog extends Animal{

//     constructor(name, breed){

//         super(name);
//         this.Breed = breed;
//     }

//     bark = () => console.log(`This ${this.Breed} barks.`);
// }

// const dog = new Dog("Qarabash", "Qurdbasar");

// dog.speak();
// dog.bark();

// -------------------------------------------------------------------------------------

// class Employee {
//     constructor(firstName="", lastName="", email="example.com", phone="", salary=0) {

//         this.FirstName = firstName;
//         this.LastName = lastName;
//         this.Email = email;
//         this.Phone = phone;
//         this.Salary = salary;
//     }
// }

// class Worker extends Employee { }

// class Manager extends Employee {
//     constructor(firstName, lastName, email, phone, salary, department="", reports="") {
//         super(firstName, lastName, email, phone, salary);

//         this.Department = department;
//         this.Reports = reports;
//     }
// }

// class Director extends Employee {
//     constructor(firstName, lastName, email, phone, salary, department="", reports="", bonus=0) {
//         super(firstName, lastName, email, phone, salary);

//         this.Department = department;
//         this.Reports = reports;
//         this.Bonus = bonus;
//     }
// }

// const worker = new Worker("Ali", "Imanov", salary=5, bonus=150);

// console.log(worker);

// -------------------------------------------------------------------------------------

// class Shape{
//     constructor(){
//         if(new.target === Shape){
//             throw new Error("This class directly not working!");
//         }
//     }
// }

// -------------------------------------------------------------------------------------

// class Animal {
//   speak() {
//     console.log("Animal speaks.");
//   }
// }

// class Dog extends Animal{
//     speak(){console.log("Dog speaks.")}
// }

// class Cat extends Animal{
//     speak(){}
// }

// const dog = new Dog();
// const cat = new Cat();

// // dog.speak();
// cat.speak();

// -------------------------------------------------------------------------------------

// const numbers = [1, 2, 3];

// let n1 = numbers[0];
// let n2 = numbers[1];
// let n3 = numbers[2];

// let [d1, d2, d3] = numbers;

// console.log(d1);
// console.log(d2);
// console.log(d3);

// -------------------------------------------------------------------------------------

// const fName = "Ali";
// const lName = "imanov";

// const employeeNew = {
//     fName,
//     lName,
//     greet: ()=>{console.log(fName +" "+ lName)}
// }

// console.log(employeeNew.fName);
// console.log(employeeNew.lName);
// employeeNew.greet();

// -------------------------------------------------------------------------------------

//!taged template

// function myTag(strings, ...values) {
// return strings[0]+values[0]+strings[1]+values[1]+strings[2]+values[2];

//   let result = "";

//   for (let i = 0; i < strings.length; i++) {
//     console.log(strings.length)
//     result += strings[i];

//     if (i < values.length) {
//       result += values[i];
//     }
//   }

//   return result;
// }

// const fName = "Ali";
// const lName = "Imanov";
// const age = 26;

// let result = myTag`Hi! I am ${fName} ${lName}, ${age} years old.`;
// console.log(result);
