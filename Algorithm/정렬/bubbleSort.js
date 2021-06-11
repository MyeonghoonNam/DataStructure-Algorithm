'use strict';

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}

const array = [5, 4, 3, 2, 1];
console.log(BubbleSort(array));
