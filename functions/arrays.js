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

const arrayIsValid = (myArray, minimumElements) => 
{
 return   (Array.isArray(myArray) && myArray.length>=minimumElements && minimumElements>0) ? true : false; 
}

const twoSums = (sumArray, sum) => {
  if(!arrayIsValid(sumArray,2)) {return null;}
  for(let i=0; i<sumArray.length-1;i++){
    for(let j=i+1;j<sumArray.length;j++) {
      if ((sumArray[i]+sumArray[j])===sum ){
        return [i,j];
      }
    }
  }
  return null;

}

const twoSumsHash = (sumArray, sum) => {
  if(!arrayIsValid(sumArray,2)) {return null;}
  const ntfHash= {};
  for(let i=0; i<sumArray.length-1;i++){
    const ntf = sum-sumArray[i];
    if (ntfHash[sumArray[i]]) {

    }
    else {

    }
  }
  return null;

}




module.exports = {
  helloWorld:helloWorld,
  twoSums:twoSums,
  sum:sum
}