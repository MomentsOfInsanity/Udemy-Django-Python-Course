var carInfo = {make:"Toyota",year:1990,model:"Camry"};
// carInfo

var myNewO = {a:"hello",b:[1,2,3],c:{inside:['a','b']}};
// myNewO

for (k in carInfo){
  console.log(k);
  console.log(carInfo[k]);
}
