const arr = [1, 2, 3, 3, 3, 4, 4, 6, 8, 9, 9];

// 중복된 값이 있더라도 그 값중에서 맨 앞의 위치를 반환한다.
console.log(lowerBound(arr, 3)); // 2

// 찾고자 하는 값이 존재하지 않더라도 5이상의 값의 위치를 반환한다.
console.log(lowerBound(arr, 5)); // 7
console.log(lowerBound(arr, 6)); // 7
console.log(lowerBound(arr, 9)); // 9

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
