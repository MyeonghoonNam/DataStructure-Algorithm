'use strict';

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const mid = parseInt((left + right) / 2);
  const pivot = arr[mid];
  const partition = Devide(arr, left, right, pivot);

  QuickSort(arr, left, partition - 1);
  QuickSort(arr, partition, right);

  return arr;
}

function Devide(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) left++;

    while (arr[right] > pivot) right--;

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}

console.log(QuickSort([1, 12, 5, 26, 7, 14, 3, 7, 2]));
