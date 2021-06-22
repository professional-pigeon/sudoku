import TestSequence from './../src/sudoku.js';

describe('TestSequence', () => {

  test('should correctly create a test sequence with nine numbers', () => {
    const testSequence = new TestSequence(1, 2, 3, 4, 5, 6, 7, 8, 9)  
      expect(testSequence.number1).toEqual(1);
      expect(testSequence.number2).toEqual(2);
      expect(testSequence.number3).toEqual(3);
      expect(testSequence.number4).toEqual(4);
      expect(testSequence.number5).toEqual(5);
      expect(testSequence.number6).toEqual(6);
      expect(testSequence.number7).toEqual(7);
      expect(testSequence.number8).toEqual(8);
      expect(testSequence.number9).toEqual(9);  
  });

  test('should create a number array of 9 numbers', () => {
    const testSequence = new TestSequence(1, 2, 3, 4, 5, 6, 7, 8, 9)
    expect(testSequence.bigArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should reorder array numerically', () =>  {
    const testSequence = new TestSequence(2, 4, 7, 1, 8, 9, 3, 6, 5)
    expect(testSequence.bigArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  test('should compare bigString to "1,2,3,4,5,6,7,8,9" and return true', () =>  {
    const testSequence = new TestSequence(2, 4, 7, 1, 8, 9, 3, 6, 5)
    expect(testSequence.bigTest()).toEqual(true);
  })

  test('should compare bigString to "1,2,3,4,5,6,7,8,9" and return false', () =>  {
    const testSequence = new TestSequence(2, 4, 7, 1, 8, 9, 6, 6, 5)
    expect(testSequence.bigTest()).toEqual(false);
  })

});