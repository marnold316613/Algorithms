









const findFactorialRecursive =(number) => {
  if (number===2) {
    return 2;
  }
  return number* findFactorialRecursive(number-1);
}

const findFactorialIterative = (number) => {
  let answer=1;
  for(let i = 2; i<= number;i++) {
    answer*=i;
  }
  return answer;
}

const findFibonacciIterative = n => {
  value1=0;
  value2=1;
  for(let i =2;i<=n;i++) {
    tempvalue=value1;
    value1=value2;
    value2=tempvalue+value1;
  }

  return value2;
}

const findFibonacciRecursive = n => {
  if (n<2) {
    return n;
  }
  return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2);

}
let answer="";
const reverseMe = s => {
  if (s.length===1) {
    return s;
  }
  return s[s.length-1] + reverseMe(s.substring(0,s.length-1));
}









module.exports = {
  findFactorialIterative:findFactorialIterative,
  findFactorialRecursive:findFactorialRecursive,
  findFibonacciIterative:findFibonacciIterative,
  findFibonacciRecursive:findFibonacciRecursive,
  reverseMe:reverseMe
}