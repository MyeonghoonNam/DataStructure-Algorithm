const MAX = 3;

const permutationWithRepetition = () => {
  const arr = [1, 2, 3];
  const selected = [];

  dfs(0, arr, selected);
};

const dfs = (cnt, arr, selected) => {
  if (cnt === 3) {
    console.log(selected.join(" "));

    return;
  }

  for (let i = 0; i < MAX; i++) {
    selected[cnt] = arr[i];
    dfs(cnt + 1, arr, selected);
  }
};

permutationWithRepetition();
