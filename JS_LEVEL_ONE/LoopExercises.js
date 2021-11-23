x=0;
while (x<5) {
  console.log("Hello World");
  x=x+1;
}

for (var i = 0; i < 5; i++) {
  console.log("Hello World");

}

y=1;
while (y<26) {
  if ((y%2)-1 === 0) {
    console.log(y);
  }
  y = y+1;
}

// alternate solution
// while (y<25) {
//   if (y%2 !== 0) {
//     console.log(y);
//   }
//   y = y+1;
// }

for (var i = 1; i < 26; i=i+2) {
  console.log(i);
}

// Alternate solution
// for (var i = 0; i < 25; i++) {
//   if (i%2 !== 0) {
//       console.log(i);
//     }
// }
