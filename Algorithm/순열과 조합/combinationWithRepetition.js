const MAX = 4;

const combinationWithRepetition = () => {
  const arr = [1, 2, 3, 4]; // 조합에 사용되는 배열
  const selected = [];

  dfs(0, 0, arr, selected);
};

const dfs = (idx, cnt, arr, selected) => {
  if (cnt === 3) {
    console.log(selected.join(" "));

    return;
  }

  for (let i = idx; i < MAX; i++) {
    selected[cnt] = arr[i]; // Select[Cnt] = Arr[i]는 Cnt번째 뽑은 카드는 Arr[i]를 뜻한다.
    dfs(i, cnt + 1, arr, selected);
  }
};

combinationWithRepetition();
