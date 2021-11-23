// function helloYou(name){
//   console.log("Hello " + name);
// }

// function addNum(num1,num2) {
//   console.log(num1+num2);
// }

// function helloSOmeone(name="Frankie") {
//   console.log("Hello" + name);
// }

// function formal(name="Sam", title='Sir') {
//   // code
//   return title + " " + name
// }

// function timesFive(numInput) {
//   // Local scope to the function
//   var result = numInput * 5
//   return result
// }

// Global Scope
var v = "Global V"
var stuff = "Global Stuff"

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff insde func"
  console.log(stuff);
}

fun()
console.log(stuff);
