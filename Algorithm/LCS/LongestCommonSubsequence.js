const A = "ABCDEF";
const B = "GBCDFE";
const LCS = Array.from(new Array(A.length + 1), () =>
  new Array(B.length + 1).fill(0)
);

// 최장 공통 부분 수열 구하기
for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
    } else {
      LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    }
  }
}

// 최장 공통 부분 수열에 해당하는 문자열 찾기
let i = A.length;
let j = B.length;
let result = [];

while (i > 0 && j > 0) {
  if (LCS[i][j] === LCS[i - 1][j]) {
    i--;
  } else if (LCS[i][j] === LCS[i][j - 1]) {
    j--;
  } else if (LCS[i][j] === LCS[i - 1][j - 1] + 1) {
    result.push(A[i - 1]);
    i--;
    j--;
  }
}

console.log(LCS); // LCS 2차원 배열
console.log(LCS[A.length][B.length]); // LCS 길이
console.log(result.reverse().join("")); // LCS 문자열
