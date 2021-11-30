var country1 = "USA"
var country2 = "Germany"
var country3 = "China"

var countries = ["USA", "Germany", "China"]

var mixed = [true, 20, "string"]
mixed.length

var myArr = ['one', 'two', 'three']

// removes last item from Arrays
var lastItem = myyArr.pop()

// Addeds a item to the end of a array
myArr.push("new_item")

//indexes length
myArr[myArr.length -1]


var matrix = [[1,2,3], [4,5,6], [7,8,9]]

//Array Iteration

var arr = ["A","B","C"]
for(var i = 0;i<arr.length;i++){
  console.log(arr[i]);
}

for (letter of arr){
  console.log(letter);
}

arr.forEach(alert);

function addAwesome(name) {
  console.log(name+" is awesome!");
}

addAwesome("django")

var topics = ["python", 'django', "science"]

topics.foreach(addAwesome)
