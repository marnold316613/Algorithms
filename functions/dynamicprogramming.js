


// 1. can be divided into a sub problem
// 2. recursive solution
// 3. are there repetitive sub problems
// 4. memoize subproblems
// 5. demand a raise from your boss

const dynamicFindFibonacciRecursive = n => {
    const cache = {};
    return function fib(n) {
      if (n in cache) {
        return cache[n];
      } else if (n<2) {
        return n;
      }
      cache[n]= fib(n-1) + fib(n-2);
      return cache[n];
    }
}






module.exports = {
  dynamicFindFibonacciRecursive:dynamicFindFibonacciRecursive
}