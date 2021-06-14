'use strict';

function HeapSort(arr) {
  for (let i = parseInt(arr.length / 2); i >= 0; i--) {
    Heapify(arr, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    Heapify(arr, 0, i);
  }

  return arr;
}

function Heapify(arr, idx, length = arr.length) {
  let leftIdx = idx * 2 + 1;
  let rightIdx = idx * 2 + 2;
  let max = idx;

  if (leftIdx < length && arr[leftIdx] > arr[max]) {
    max = leftIdx;
  }

  if (rightIdx < length && arr[rightIdx] > arr[max]) {
    max = rightIdx;
  }

  if (max !== idx) {
    [arr[idx], arr[max]] = [arr[max], arr[idx]];
    Heapify(arr, max, length);
  }

  return arr;
}

console.log(HeapSort([6, 5, 3, 1, 8, 7, 2, 4]));
