// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//     hobbies: ["football", "music", "art"],
//     sayHello: function(){
//         console.log(`Hi my name is ${this.firstName}`);
//     }
// }

// console.log(person.firstName);
// console.log(person.lastName);
// person.sayHello();

// console.log(person.country);
// person.country = "USA";
// console.log(person.country);

// person.isStudient = true;
// console.log(person.isStudient);

// delete person.isStudient;

// console.log(person.isStudient);

// ---------------------------------------------------------------

// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },

//     subtract: function(a, b){
//         return a * b;
//     },
// }

// console.log(calculator.add(2, 5));
// console.log(calculator.subtract(2, 5));

// ---------------------------------------------------------------

// --- Constructor ---

// function Person(firstName, lastName, age){

//     this.FirstName = firstName;
//     this.LastName = lastName;
//     this.Age = age;
// }

// const person1 = new Person("John", "Doe", 25);
// const person2 = new Person("Jack", "Smith", 20);

// console.log(person1);
// console.log(person2);

// ---------------------------------------------------------------

// function CreateDog(dogName, dogBread) {
//   this.DogName = dogName;
//   this.DogBread = dogBread;
// }

// const dog = new CreateDog("KurtKapan", "Kangal");

// console.log(dog);

// ---------------------------------------------------------------

// function Animal(name){
//     this.Name = name;
// }

// function Dog(name, bread){
//     Animal.call(this, bread);

//     this.Bread = bread;
// }

// const dog = new Dog("Kurtkapan", "Kangal");

// console.log(dog);

// Animal.prototype.makeSound = function (){
//     console.log("Maked sound!");
// }

// Dog.prototype = Object.create(Animal.prototype);

// Animal.makeSound();

// ---------------------------------------------------------------


// String.prototype.ToMail = function (user){
//     return this+"@code.edu.az";
// }

// let user = "ali".ToMail();

// console.log(user);

// String.prototype.ToMail = function (domain = "code.edu.az"){

//     return this + "@" + domain;
// }

// let user = "ali".ToMail("gmail.com");

// console.log(user);

// ---------------------------------------------------------------

//! Classe s

// class Person {
//     constructor(firstName, lastName){
//         this.FirstName = firstName;
//         this.LastName = lastName;
//     }

//     greet(){
//         console.log(`Hello ${this.FirstName} ${this.LastName}`);
//     }
// }

// const person = new Person("Ali", "Imanov");

// console.log(person);

// -----

// class Circle{
//     constructor(radius){
//         this._radius = radius;
//     }

//     // encapsulation
    
//     get radius(){
//         return this._radius;
//     }

//     set radius(newRadius){
//         if(newRadius>0){
//             this._radius = newRadius;
//         }else{
//             console.log("Radius is negative!!");
//         }
//     }
// }

// const circle = new Circle(5);
// console.log(circle);


// class Circle{
//     constructor(radius){
//         this._radius = radius;
//     }

//     get radius(){
//         return this._radius;
//     }

//     set radius(newRadius){

//         if(newRadius<=0){
//             console.log("Radius should be positive!")
//         }else{
//             this._radius = newRadius;
//         }
//     }
// }

// const circle = new Circle(5);

// console.log(circle);