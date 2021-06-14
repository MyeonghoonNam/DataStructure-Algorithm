'use strict';

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

console.log(
  selectionSort([
    710, 509, 733, 224, 654, 154, 474, 166, 699, 102, 72, 272, 176, 450, 390,
    217, 928, 641, 210, 892,
  ])
);
