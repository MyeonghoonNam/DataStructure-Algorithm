const A = "ABCDEF";
const B = "GBCDFE";
const LCS = Array.from(new Array(A.length + 1), () =>
  new Array(B.length + 1).fill(0)
);

let maxLCSLength = 0;
let maxLCSIndex = 0;

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
    }

    if (LCS[i][j] > maxLCSLength) {
      maxLCSLength = LCS[i][j];
      maxLCSIndex = i;
    }
  }
}

console.log(LCS); // LCS 2차원 배열
console.log(maxLCSLength); // 최장 공통 문자열 길이
console.log(A.slice(maxLCSIndex - maxLCSLength, maxLCSIndex)); // 최장 공통 문자열
