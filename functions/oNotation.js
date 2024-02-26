const helloWorld = () => {
  console.log('Hello World');
}



//this is considered an O(n) function as it is 1 operation per 1 item in each array, so linear
//n is equal to the number of inputs in the notation O(n)
function findNemo(array) {
 let t0= performance.now();
  for(let i=0; i< array.length; i++)
  {
    if (array[i] ==='nemo') {
      console.log('Found Nemo');
    }
  }
  let t1= performance.now();
  console.log(`Call to find Nemo took ${t1-t0} milliseconds`);
}

// there is an O(1) = constant time, no matter what the function only does 1 process
// so we can pass 100,000 items into the array and it is only processing the first element so n=1 alway
// function findNemo(array) {
//        console.log(array[0]);
//  }
// if there are two items processes than notation is O(2)
// so all O(2), O(3),...O(1000)  gets rounded down to O(1) as this is a constant time, no matter the inputs the time never changes
// function findNemo(array) {
//        console.log(array[0]);
//        console.log(array[1]);
//  }

//rules of big O
// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs
// Rule 4: Drop Non Dominants

// this is an example of rule 3, because there are different inputs and the loops are not nested
// this would be an O(n1+n2) and not O(n)
// function findNemo(box1, box2) {
//  box1.foreach(box => {console.log(box}))
//  box2.foreach(box => {console.log(box}))
//  }



//this is an O(n^2) function because the loops are nested
function logAllPairsofArray(array)
{
  for(let i=0;i<array.length-1;i++)
  {
    for(let j=1;j<array.length;j++)
    {
      console.log(array[i],array[j]);
    }
  }
}
 
//O(n!) this is called factorial time, it should never exist in code, basically for every new item a nested loop would be created

//Three pillars of code
// 1. Readable
// 2. Scalable -> Speedy -> Time complexity
// 3. Memory -> Space complexity


//given two arrays, find if the arrays have any elements in common and return a boolean
// const array1 = [1,2,3,4,5]
// const array1 = [6,7,8,9]

// const array1 = [1,2,3,4,5]
// const array1 = [5,6,7,8]

//we have two inputs - will always be arrays
// and one output - will always be boolean

//how large can these arrays get, will help determine how to solve the problem, simple loop vs something more complex
// is time complexity more important than space complexity?

// brute force is just a loop within a loop and a break if anything is found, this is the simplest solution
// usually not the best as this is an o(n^2) or o(n1*n2) solution, getting ot o(n) would be better

function containsCommonItem(arr1, arr2) {
  //loop thru first array and create object where properties === items in the array, this also removes duplicates from the array
  let map ={};
  for(let i=0; i<arr1.length;i++)
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item]=true;
    }
  //loop thru second array and check if second item exists in created object
  for(let j=0; j<arr2.length;j++)
    if (map[arr2[j]]) {
      return true
    }
  return false;
}

//so how can i break the code above, what if both arrays are empty? what if the values are not just numbers but are strings, numbers, arrays, nulls
//check the variable names and make sure they make sense, can they be made more readable

function containsCommonItem2(arr1,arr2)
{
  return arr1.some(item => arr2.includes(item));  //this may or may not be better but it is more readable
}



module.exports = {
  helloWorld:helloWorld,
  findNemo:findNemo,
  logAllPairsofArray:logAllPairsofArray
}