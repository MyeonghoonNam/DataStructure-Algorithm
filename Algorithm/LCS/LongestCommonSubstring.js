const A = "ABCDEF";
const B = "GBCDFE";
const LCS = Array.from(new Array(A.length + 1), () =>
  new Array(B.length + 1).fill(0)
);

let maxLCSLength = 0;

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
    }

    // 최종 공통 문자열 길이
    if (LCS[i][j] > maxLCSLength) {
      maxLCSLength = LCS[i][j];
    }
  }
}

console.log(LCS);
console.log(maxLCSLength);
