'use strict';

function ShellSort(arr) {
  let gap = parseInt(arr.length / 2);

  while (gap > 0) {
    for (let i = 0; i < arr.length - gap; i++) {
      let curIdx = i;
      let shiftIdx = i + gap;

      while (curIdx >= 0) {
        if (arr[curIdx] >= arr[shiftIdx]) {
          [arr[curIdx], arr[shiftIdx]] = [arr[shiftIdx], arr[curIdx]];
        }

        shiftIdx = curIdx;
        curIdx -= gap;
      }
    }

    gap = parseInt(gap / 2);
  }

  return arr;
}

console.log(ShellSort([1, 3, 5, 6, 2, 0, 8, 9, 7, 4]));
