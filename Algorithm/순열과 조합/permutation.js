const MAX = 5;
const result = [];

const permutation = () => {
  const arr = [1, 2, 3, 4, 5]; // 순열에 사용되는 배열
  const selected = new Array(MAX).fill(false); // 이 배열을 통햏 중복을 허용하지 않도록 해야한다.

  dfs(0, arr, selected);
};

const dfs = (cnt, arr, selected) => {
  // 조합과 달리 idx 변수가 없어진 이유는 조합과 달리 순열은 시작점을 무시하면 안되기 때문이다.
  // cnt는 현재 뽑은 원소의 갯수를 결정해주는 변수이다. 현재 뽑은 원소의 갯수가 우리가 최종적으로 뽑고자 하는 원소의 갯수와 일치한다면, 그 다음 프로세스를 진행하면 된다.

  if (cnt === 3) {
    console.log(result.join(" "));

    return;
  }

  for (let i = 0; i < MAX; i++) {
    if (selected[i] === true) continue;

    selected[i] = true;
    result.push(arr[i]);
    dfs(cnt + 1, arr, selected);
    result.pop();
    selected[i] = false;
  }
};

permutation();
