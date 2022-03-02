// Arrow Function
// let sum = new Function('a', 'b', 'return a+b');
// alert(sum(1,2));
// hello = () => {
//     document.getElementById("demo").innerHTML +=this;

// }
// // window object calls the function
// window.addEventListener("load", hello);
// document.getElementById("button").addEventListener("click", hello); 


//Rest Parameter
// function fun(...input){
//     let sum = 0;
//     for(i of input){
//         sum+=i;

//     }
//     return sum;
// }
// console.log(fun(1,2));
// console.log(fun(1,2,4));
// console.log(fun(1,2,3,5));

//Spread Operator
// let arr = [1,2,3];
// let arr2 = [4,5,6];
// arr = [...arr, ...arr2];
// console.log(arr);

// Global Object
// alert ("Hello");
// window.alert("Hello")

// Function Object
// function sayHi(name){
//     alert("Hi");

// }

// alert(sayHi.name);
// function f2(a,b){}
// function many(a,b,c,... more){}
// alert(f2.length);
// alert(many.length);
// Set Timeout
// function sayHi(){
//     alert("Hello");
// }


// setTimeout(sayHi, 1000);

//set Interval

// let timerId = setInterval(() => alert('tick'), 2000)

// setTimeout(() => {clearInterval(timerId); alert('stop');}, 5000);

// Function bnding
// let user = {
//     firstName : "Obo"
// };
// function func(){
//     alert(this.firstName);
// }
// let funcUser = func.bind(user);
// funcUser();
// alert(funcUser);
 //Javascript namespaces
//  let num = 5;     // the num obj n str hv been correctly been declared by using the proper js keywords of let and var.
//  var obj = {};    //
//  var str = "Hello Edureka";   // 
//  function sum(x,y){
//      total = x + y;// the function scoped variable total is missing a declaration keyword Var.
//      return total;
//  }
//  numr = sum(3,3); // misspelling of the word number

//Prototypes
// features of prototypes 
// 1.prototypal inheritance
// let pet = {
//     eats : true,
//     shits : true,
//     poops : true,
//     dies : true

// };
// let dog = {
//     jumps : true
// };
// dog.__proto__ = pet;// Inherits all the properties of pet into dog 

// alert(dog.jumps);
// alert(dog.dies);

//2. Prototypes method, objectds witout __proto__
// let pet = {
//     eats : true
// };
// Create new object with pet as the prototype
// let dog = object.create(pet);

// alert (dog.eats);

// alert (object.getPrototypeOf(dog) === pet);

// object.setPrototypeOf(dog, {}); //change the prototype of dog to null

//ERROR HANDLING

// try{
//     alert ('Begin try run');
//     alert ('End try run');
// }catch(err){
//     alert ('catch is ignored coz it aint got no errors')
// }

// Modules
// var MODULE = (function(){
//     var module = {};
//     var privateVariable = 7;
//     function privateMethod(){

//     }
//     module.moduleProperty = 1;
//     module.moduleMethod = function(){

//     };
//     return module;
// }());
  
//CHAINING JAVASCRIPT METHODS 
// account.number('112343434').setBalance(15000).applyCredit(200);  

