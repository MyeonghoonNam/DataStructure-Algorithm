const arr = [1, 2, 3, 3, 3, 4, 4, 6, 8, 9];

// 중복된 값이 있더라도 그 값중에서 맨 앞의 위치를 반환한다.
console.log(lowerBound(arr, 3));

// 찾고자 하는 값이 존재하지 않더라도 5초과의 값의 위치를 반환한다.
console.log(lowerBound(arr, 5));

function lowerBound(arr, data) {
  let result = Number.MAX_SAFE_INTEGER;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // lowerBound는 arr[mid] < data이다.
    if (arr[mid] <= data) {
      start = mid + 1;

      continue;
    }

    result = Math.min(result, mid);
    end = mid - 1;
  }

  return result;
}
