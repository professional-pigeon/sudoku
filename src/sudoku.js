let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function TestSequence(number1, number2, number3, number4, number5, number6, number7, number8, number9)  {
  this.number1 = number1
  this.number2 = number2
  this.number3 = number3
  this.number4 = number4
  this.number5 = number5
  this.number6 = number6
  this.number7 = number7
  this.number8 = number8
  this.number9 = number9
}









// numberArray.forEach(function(number) {
//   let fail = 0;
//   for (let index = 0; index < numberArray.length; index ++) {
//     if (number === number[index]) {
//       fail ++;
//     } else {
//       /* empty */
//     }

//     if (fail >= 2) {
//       console.log("does not pass")
//     } else {
//       console.log("hooray you've passed")
//     }
//   }
// });