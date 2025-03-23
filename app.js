// ////// constructor function ::

// const Person = function (name, birth) {
//   /// instences (propreties)
//   this.firstName = name;
//   this.birthYear = birth;

//   /////// dont do that :::: 
// //   this.calcAge = function () {
// //     console.log(2025 - birth);
// //   };
// };

// Person.prototype.calcAge = function (){
//     console.log(2025 - this.birthYear);
// }

// Person.prototype.welcome = function (){
//     console.log(`good morning ${this.firstName}`)
// }

// ///// inheritance (el wirataha)

// const persone1 = new Person("jessica", 1990);
// const persone2 = new Person("mohamed", 1800);
// const x = new Person("maha", 1555); /// x.firstName = maha
// console.log(persone1);



// const obj = {
//     name : "ali"
// }
// obj.gender = "male"

///// class declarartion :: 
// class Student {
//     constructor (name , birth){
//     this.firstName = name ; 
//     this.birthYear = birth ; 
//     ///// d'ont do that :: 
//     // this.calcAge = function (){
//     //     console.log(2025-this.birthYear)
//     // }
//     }

   
//     calcAge(){
//         console.log(2025-this.birthYear)
//     }
// }

// const jhon = new Student ("jhon" , 2000) 

// console.log(jhon)



///// challange correction :::: :  


/////////methode2///////
////// counstructor function ::: 
// const Car = function (make, speed){
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//  this.speed = this.speed + 10 
//  console.log(`the ${this.make} accelerate to ${this.speed} km/h`)
// }
// Car.prototype.break = function () {
//     // this.speed = this.speed - 5 
//     this.speed -= 5 
//     console.log(`the ${this.make} slows down to ${this.speed} km/h`)
// }
// const car1 = new Car ('BMW', 120);  //// car1.speed =   (130) ; 
// const car2 = new Car ('mercedes', 95);

// console.log(car1)

// car1.accelerate()
// car1.accelerate()
// car1.accelerate()
// car1.break()
// console.log(car1)
