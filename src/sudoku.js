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

TestSequence.prototype.bigTest = function() {
  let testArray = this.bigArray();
  let bigString = testArray.toString()
  if (bigString === "1,2,3,4,5,6,7,8,9")  {
    return true
  } else {
    return false
  }
}

{
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  [10, 11, 12, 13, 14, 15, 16, 17, 18]
  [19, 20, 21]
  TestSequence individual boxes
    this.2 = 2
    .Column1(1, 10, 19, )
}