'use strict';

function MergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = parseInt(arr.length / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return Merge(MergeSort(leftArr), MergeSort(rightArr));
}

function Merge(leftArr, rightArr) {
  const sortArr = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      sortArr.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      sortArr.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  return sortArr.concat(leftArr.slice(leftIdx), rightArr.slice(rightIdx));
}

console.log(MergeSort([38, 27, 43, 3, 9, 82, 10]));
