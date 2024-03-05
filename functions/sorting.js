function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and merge them into the result array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
          result.push(leftArr[leftIndex]);
          leftIndex++;
      } else {
          result.push(rightArr[rightIndex]);
          rightIndex++;
      }
  }

  // Copy any remaining elements from left array
  while (leftIndex < leftArr.length) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
  }

  // Copy any remaining elements from right array
  while (rightIndex < rightArr.length) {
      result.push(rightArr[rightIndex]);
      rightIndex++;
  }

  return result;
}



function quickSort(arr) {
  if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  const leftArr = [];
  const rightArr = [];

  // Partition the array into two halves: elements smaller than pivot and elements larger than pivot
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          leftArr.push(arr[i]);
      } else {
          rightArr.push(arr[i]);
      }
  }

  // Recursively sort the two halves
  const sortedLeftArr = quickSort(leftArr);
  const sortedRightArr = quickSort(rightArr);

  // Concatenate the sorted halves with the pivot and return
  return sortedLeftArr.concat(pivot, sortedRightArr);
}

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = current;
  }
  return arr;
}

























module.exports = {
  
}