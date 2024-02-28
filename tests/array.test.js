const twoSums = require('../functions/arrays');

// test('adds 1 + 2 to equal 3', () => {
//   expect(twoSums.sum(1,2)).toBe(3);
// })

test('find index of two sums equal to 11', () => {
  expect(twoSums.twoSums([1,3,7,9,2],11)).toEqual([3,4]);
})

test('find index of two sums equal to 25 answer should be null', () => {
  expect(twoSums.twoSums([1,3,7,9,2],25)).toEqual(null);
})

test('find index of two sums equal to 7 answer should be null', () => {
  expect(twoSums.twoSums([1,6],7)).toEqual(null);
})

test('find index of two sums equal to 0  answer should be null', () => {
  expect(twoSums.twoSums([1,3,7,9,2],0)).toEqual(null);
})

test('find index of two sums where no sum is given answer should be null', () => {
  expect(twoSums.twoSums([1,3,7,9,2])).toEqual(null);
})

test('find index of two sums with 1 item in array and 0 sum passing answer should be null', () => {
  expect(twoSums.twoSums([5],5)).toEqual(null);
})

test('find index of two sums with empty array and sum equal to 11 answer should be null', () => {
  expect(twoSums.twoSums([],11)).toEqual(null);
})

test('find index of two sums with empty array and 0 sum passing answer should be null', () => {
  expect(twoSums.twoSums([],0)).toEqual(null);
})

test('find index of two sums with empty array and no sum passing answer should be null', () => {
  expect(twoSums.twoSums([])).toEqual(null);
})

test('find index of two sums with no array and no sum passing answer should be null', () => {
  expect(twoSums.twoSums()).toEqual(null);
})

test('find index of two sums with no array and sum equal to 11 passing answer should be null', () => {
  expect(twoSums.twoSums(11)).toEqual(null);
})

test('find index of two sums with no array and 0 sum passing answer should be null', () => {
  expect(twoSums.twoSums(0)).toEqual(null);
})