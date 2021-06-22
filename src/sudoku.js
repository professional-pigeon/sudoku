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

TestSequence.prototype.bigArray = function() {
  let numberArray = [this.number1, this.number2, this.number3, this.number4, this.number5, this.number6, this.number7, this.number8, this.number9]
  numberArray.sort()
  return numberArray
}

// TestSequence.prototype.bigTest = function() {
//   let numberArray = this.bigArray()
//   let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   if (numberArray === testArray)  {
//     return true
//   } else {
//     return false
//   }
// }

// number1 !== number2, number1 !== number3
//   return true

// each  number goes through loop. you are testing to confirm that the numberArray[1-9] evaluates true for every number.
 

// if(numberArray === testsequence[position])
//   ticker ++
//   total should be 9
//   fail would be less than 9

//   if (numberArray === testSequence)


// let numberArray = [9, 2, 3, 5, 4, 1, 6, 7, 8]
// numberArray.sort()




