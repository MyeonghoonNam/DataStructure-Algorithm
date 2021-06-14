function BinarySearch(arr, data) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (arr[mid] > data) high = mid - 1;
    else if (arr[mid] < data) low = mid + 1;
    else return mid;
  }

  return -1;
}

function Solution() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21, 24, 26, 27,
  ];

  const findData = 14;
  const findIdx = BinarySearch(arr, findData);

  if (findIdx !== -1) {
    console.log(`탐색 결과 : ${findIdx + 1}번째에 원소가 존재합니다.`);
  } else {
    console.log(`탐색 결과 : 원소가 존재하지 않습니다.`);
  }

  return;
}

Solution();
