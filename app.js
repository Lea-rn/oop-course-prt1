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
class Student {
    constructor (name , birth){
    this.firstName = name ; 
    this.birthYear = birth ; 
    ///// d'ont do that :: 
    // this.calcAge = function (){
    //     console.log(2025-this.birthYear)
    // }
    }

   
    calcAge(){
        console.log(2025-this.birthYear)
    }
}

const jhon = new Student ("jhon" , 2000) 

console.log(jhon)