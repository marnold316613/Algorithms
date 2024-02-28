const helloWorld = () => {
  console.log('Hello World');
}
function sum(a, b) {
  return a + b;
}
//lookup - O(1) 
//push   - O(1)  --> adds to the end of the array
//unshift- O(n)  --> adds to the start of an array, because the new item is now 0, every other element must be shift one which is a loop thru the array
//splice   O(n)      --> modifies the array at some location by adding or removing items, or replacing
//pop    - O(1)  --> removes last item from an array
//insert - O(n)
//delete - O(n)

//static array vs dynamic array, javascript uses dynamic array vs c#, etc.
//lookup  O(1)
//push   O(1) -> O(n)
//insert
//delete



const twoSums = (sumArray, sum) => {

  return null;
}




module.exports = {
  helloWorld:helloWorld,
  twoSums:twoSums,
  sum:sum
}