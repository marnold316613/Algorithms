const oNotation = require('./functions/oNotation');
const arrayDemo = require('./functions/arrays');
const hashDemo= require('./functions/hash');
const linkedListDemo = require('./functions/linkedlist');
const treesDemo = require('./functions/trees');
const graphDemo = require('./functions/graph');
const recursiveDemo = require('./functions/recursion');
const sortingDemo = require('./functions/sorting');
const dynamicDemo = require('./functions/dynamicprogramming');
//oNotation.helloWorld();
//arrayDemo.helloWorld();
// const large = new Array(100).fill('nemo');
// oNotation.findNemo(large);

//const boxes = [1,2,3,4,5];

//const recurringInt = [1,11,7,5,9,4,3,2,1];

//console.log(hashDemo.firstRecurringCharacter(recurringInt));

//console.log(hashDemo.firstRecurringCharacterUsingObject(recurringInt));
//const testStrings=['a','b','c','d','e','f'];

//testStrings.splice(2,1,'x');

//console.log(testStrings);

//oNotation.logAllPairsofArray(boxes);

// const myLinkedList = new linkedListDemo.LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(3);
// // myLinkedList.append(12);
// // myLinkedList.append(4);
// //myLinkedList.prepend(7);
// myLinkedList.insert(1,12);
// //myLinkedList.insert(0,33);
// myLinkedList.printlist();
// console.log('remove index 2');
// myLinkedList.remove(2);

// //console.log(myLinkedList);
// myLinkedList.printlist(true);

// myLinkedList.reverse();
// // console.log('normal');
// myLinkedList.printlist(true);
// console.log('reversed');
// newreverse.printlist();

//console.log("return of two sums",arrayDemo.twoSums([1,6],7));

// const tree = new treesDemo.BinarySearchTree();

// tree.insert(9);
// tree.insert(4);
// tree.insert(20);
// tree.insert(1);
// tree.insert(6);
// tree.insert(15);
// tree.insert(170);

// console.log('lookup 1', tree.lookup(1));
// console.log('lookup 170', tree.lookup(170));
// console.log('lookup 30', tree.lookup(30));


// console.log(tree);

//console.log('interative',recursiveDemo.findFactorialIterative(5));

//console.log('recursive',recursiveDemo.findFactorialRecursive(5));

//console.log('interative',recursiveDemo.findFibonacciIterative(7));

//console.log('recursive',recursiveDemo.findFibonacciRecursive(7));

//console.log('hello', recursiveDemo.reverseMe('hello'));

// Example usage:
 const arr = [5, 3, 8, 4, 2, 7, 1];
// console.log("Original array:", arr);
// const sortedArray = mergeSort(arr);
// console.log("Sorted array:", sortedArray);

//const letters = new Set([1,2,'e']);

//const letters = new Map([['a',1],['b',2]]);

// const test = {}
// letters.add("e");
// console.log('values',letters.values());
// console.log('keys',letters.keys());
// console.log('entries',letters.entries());
// console.log('size', letters.size);
// for(let x of letters){
//   console.log(x);
// }
// console.log('test size', Object.keys(test));
//console.log(letters.values());

//let masterfib =dynamicDemo.dynamicFindFibonacciRecursive();
//console.log(masterfib(7));

const myobj= {field1:"test", field2:"test2", field3:"test3"};
let n = "field1";
if (n in myobj) {
  console.log(true);
}

if (myobj["field4"]==='undefined')
{
  myobj["field4"]="test4";
}
myobj["field5"]="test5";
console.log(myobj);


const a = new Set([1,2,3,4])
a.add(5);

if (a.has(5)) {
  console.log('has 5');
}

console.log(a);

if (arr.includes(1)) {
  console.log('array has 1')
}
