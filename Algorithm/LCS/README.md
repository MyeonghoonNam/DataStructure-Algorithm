## LCS 알고리즘

LCS 알고리즘은 주로 **최장 공통 부분수열(Longest Common Subsequence)**을 말하지만, **최장 공통 문자열(Longest Common Substring)**을 말하기도 한다.

![](https://velog.velcdn.com/images/codenmh0822/post/038bc5a0-346b-4fef-80e7-6b7957f35b2a/image.png)

예시의 이미지를 통해 살펴볼 수 있는 최장 공통 부분수열과 최장 공통 문자열의 가장 큰 차이는 **연속성의 차이**이다.

최장 공통 부분수열: 말그대로 부분수열이기에 문자 사이를 건너뛰어 공통되는 가장 긴 부분
최장 공통 문자열: 부분문자열이 아니기 때문에 한번에 이어져있는 공통되는 가장 긴 부분

---

## 최장 공통 문자열(Longest Common Substring)

최장 공통 부분수열 알고리즘을 구하기전에 최장 공통 문자열 알고리즘을 먼저 알아보자.
최장 공통 문자열 알고리즘이 좀 더 쉽고, 최장 공통 부분수열 알고리즘에 사용이 되기 때문이다.

#### 점화식

```javascript
if i == 0 or j == 0:  # 마진 설정
	LCS[i][j] = 0
elif string_A[i] == string_B[j]:
	LCS[i][j] = LCS[i - 1][j - 1] + 1
else:
	LCS[i][j] = 0
```

LCS라는 2차원 배열을 활용하여 두 문자열을 비교한다.

1. 문자열 A에 대해 문자열 B의 **한글자씩** 비교한다.
2. 두 문자가 **다르다면** `LCS[i][j]`에 `0`을 표시합니다.
3. 두 문자가 **같다면** `LCS[i - 1][j - 1]`에 `1`을 표시합니다.
4. 위 과정을 문자열 A에 대해 문자열 B에 모둔 문자에 대해 비교할 때 까지 반복한다.

#### 구현과정

![](https://velog.velcdn.com/images/codenmh0822/post/e6cc7331-d159-42c1-be52-e1d2974f79c9/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/5839b752-3be1-47b2-8680-79d17ce9e9b9/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/cbda1616-4d4e-4db5-9e9a-0bbaa20c641c/image.png)

#### 구현

```javascript
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
```

---

## 최장 공통 부분 수열(Longest Common Subsequence)

이번에는 최장 공통 부분 수열에 대해 알아보자.

#### 점화식

```javascript
if i == 0 or j == 0:  # 마진 설정
	LCS[i][j] = 0
elif string_A[i] == string_B[j]:
	LCS[i][j] = LCS[i - 1][j - 1] + 1
else:
	LCS[i][j] = max(LCS[i - 1][j], LCS[i][j - 1])
```

위와 마찬가지로 LCS라는 2차원배열을 활용하여 비교한다.

1. 문자열 A에 대해 문자열 B의 **한글자씩** 비교한다.
2. 두 문자가 **다르다면** `LCS[i-1][j]`와 `LCS[i][j-1]` 중에 큰값을 표시합니다.
3. 두 문자가 **같다면** `LCS[i - 1][j - 1]`의 값에 `+1`의 값을 표시합니다.
4. 위 과정을 문자열 A에 대해 문자열 B에 모둔 문자에 대해 비교할 때 까지 반복한다.

최장 공통 문자열을 구하는 과정과 다른부분은 **비교하는 두 문자가 다를 때** 입니다. 비교하는 두 문자가 같을 때는 같은 과정을 보여줍니다. 왜 어떤 부분은 다른 로직을, 어떤부분은 같은 로직을 사용하는지 상세히 살펴보자.

#### LCS[i - 1][j]와 LCS[i][j - 1]는 어떤 의미인가?

**부분수열은 연속된 값이 아닙니다.** 때문에 현재의 문자를 비교하는 과정 이전의 최대 공통 부분수열은 **계속해서 유지됩니다.** 현재의 문자를 비교하는 과정 이전의 과정이 바로 `LCS[i - 1][j]`와 `LCS[i][j - 1]`가 됩니다.

![](https://velog.velcdn.com/images/codenmh0822/post/0343dfb8-4073-47d4-aa33-5bde91477816/image.png)

#### 왜 문자가 같으면 LCS[i][j] = LCS[i - 1][j - 1] + 1인가?

문자열 ABC와 GBC를 비교하는 과정에서 LCS 배열은 `LCS[i - 1][j]`와 `LCS[i][j - 1]`의 비교를 통해 언제나 본인까지의 최대 공통 부분수열 값을 가지고 있습니다.
문자열 AB와 GB를 비교할때와 문자열 ABC와 GBC를 비교할 때 달라진 점은 **두 문자열 모두에 C가 추가된 점**입니다. 때문에 **기존의 최대 공통 부분수열인 B에 C를 더한 BC가 최대 공통 부분수열**이 되는 것입니다.

![](https://velog.velcdn.com/images/codenmh0822/post/99b03905-5922-4b31-ab78-0354c22da862/image.png)

#### 구현과정

![](https://velog.velcdn.com/images/codenmh0822/post/d8fddd22-49ac-468a-b1c3-d8e3b34f626a/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/aebf9fba-6063-412f-8a89-e6d92038c4c7/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/3838cf90-cfcb-4106-be9e-86b5db0c5b3d/image.png)

#### 최장 공통 부분 수열 찾기

위에서 LCS 구현과정을 통해 LCS 배열을 만들며 LCS의 길이(`LCS[i][j]`)를 구할 수 있었다. 이제 만든 LCS 배열을 이용해 최장 공통 부분수열의 값을 찾아보자. 경우에 따라 여러가지 답이 나올 수 있다.

1. LCS 배열의 **가장 마지막 값**에서 시작합니다. 결과값을 저장할 result 배열을 준비합니다.
2. `LCS[i - 1][j]`와 `LCS[i][j - 1]` 중 현재 값과 같은 값을 찾습니다.
   2-1. 만약 **같은 값이 있다면 해당 값**으로 이동합니다.
   2-2. 만약 **같은 값이 없다면 result배열에 해당 문자를 넣고** `LCS[i -1][j - 1]`로 이동합니다.
3. 2번 과정을 반복하다가 0으로 이동하게 되면 종료합니다. **result 배열의 역순이 LCS** 입니다.

#### 구현과정

![](https://velog.velcdn.com/images/codenmh0822/post/59e5b8d8-70ac-499d-bb6c-9ffc83729b48/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/40525e56-e526-46d1-bcff-6029df65e914/image.png)

![](https://velog.velcdn.com/images/codenmh0822/post/c455f471-a2e0-40af-ae7c-bdb049935e16/image.png)

#### 구현

```javascript
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
```
