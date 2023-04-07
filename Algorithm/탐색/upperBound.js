const arr = [1, 2, 3, 3, 3, 4, 4, 6, 8, 9, 9];

// 중복된 값이 있더라도 그 값중에서 맨 앞의 위치를 반환한다.
console.log(upperBound(arr, 3)); // 5

// 찾고자 하는 값이 존재하지 않더라도 5초과의 값의 위치를 반환한다.
console.log(upperBound(arr, 5)); // 7
console.log(upperBound(arr, 6)); // 8
console.log(upperBound(arr, 9)); // 11

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
