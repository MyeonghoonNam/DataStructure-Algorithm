function SequentialSearch(arr, data) {
  let result = -1;

  arr.forEach((d, i) => {
    if (d === data) {
      result = i + 1;
      return result;
    }
  });

  return result;
}

function Solution() {
  const arr = [23, 25, 14, 5, 66, 72, 13, 224, 51];

  const findData = 14;
  const findIdx = SequentialSearch(arr, findData);

  if (findIdx !== -1) {
    console.log(`탐색 결과 : ${findIdx}번째에 원소가 존재합니다.`);
  } else {
    console.log(`탐색 결과 : 원소가 존재하지 않습니다.`);
  }

  return;
}

Solution();
