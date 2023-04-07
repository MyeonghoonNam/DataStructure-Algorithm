const combination = () => {
  const arr = [1, 2, 3, 4, 5]; // 조합에 사용되는 배열
  const selected = new Array(5).fill(false); // 이 배열을 통햏 중복을 허용하지 않도록 해야한다.

  dfs(0, 0, arr, selected);
};

const dfs = (idx, cnt, arr, selected) => {
  // idx는 시작점을 결정해주는 변수이다. Idx를 시작점으로 삼는 순간, idx이전에 나온 원소는 무시
  // cnt는 현재 뽑은 원소의 갯수를 결정해주는 변수이다. 현재 뽑은 원소의 갯수가 우리가 최종적으로 뽑고자 하는 원소의 갯수와 일치한다면, 그 다음 프로세스를 진행하면 된다.

  if (cnt === 3) {
    const result = [];

    for (let i = 0; i < 5; i++) {
      if (selected[i] === true) {
        result.push(arr[i]);
      }
    }

    console.log(result.join(" "));

    return;
  }

  for (let i = idx; i < 5; i++) {
    if (selected[i] === true) continue;

    selected[i] = true;
    dfs(i, cnt + 1, arr, selected);
    selected[i] = false;
  }
};

combination();
