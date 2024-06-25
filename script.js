Result Skip Results Iframe
let temp = 120;

if(temp >80) {
  console.log("Hot");
}

if(temp <=80&&temp >=70) {
  console.log("Warm");
}

if(temp <70) {
  console.log("Chilly");
}

if(temp >120) {
  for(let i = 0; i < 3; i++){ // runs the code segment 6 times, i is 0-5.
  console.log("DO NOT GO OUT"); // HI! is printed 6 times.
}

}

if(temp <1) {
  console.log("Beware Of The Coldness");
}

if(temp <-10) {
  console.log("You Die Of Coldness");
}