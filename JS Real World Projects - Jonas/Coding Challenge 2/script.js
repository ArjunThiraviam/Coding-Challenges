var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103;
var mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123;

var johnAvg = johnScore1 + johnScore2 + johnScore3;
var mikeAvg = mikeScore1 + mikeScore1 + mikeScore3;

if(johnAvg > mikeAvg ) {
  console.log("John wins");
} else if (johnAvg < mikeAvg ){
  console.log("Mike wins");
} else {
  console.log("match is draw");
}

var maryScore1 = 97, maryScore2 = 134, maryScore3 = 105;

var maryAvg = maryScore1 + maryScore2 + maryScore3;


if((johnAvg > mikeAvg) && (johnAvg > maryAvg)) {
  console.log("John wins");
} else if ((mikeAvg > johnAvg) && (mikeAvg > maryAvg)){
  console.log("Mike wins");
} else if ((maryAvg > johnAvg) && (maryAvg > mikeAvg)){
  console.log("Mary wins");
} else {
  console.log("match is draw");
}
