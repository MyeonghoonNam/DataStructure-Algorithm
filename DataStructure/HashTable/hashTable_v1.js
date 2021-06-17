'use strict';

// 개방주소법 : 이중 해싱을 적용한 해시 테이블 구현

const myTableSize = 23; // 테이블 사이즈가 소수여야 효과가 좋다
const myHashTable = [];

const getSaveHash = (value) => value % myTableSize;

// 스텝 해시에 사용되는 수는 테이블 사이즈보다 약간 작은 소수를 사용한다.
const getStepHash = (value) => 17 - (value % 17);

const setValue = (value) => {
  let index = getSaveHash(value);
  let targetValue = myHashTable[index];
  while (true) {
    if (!targetValue) {
      myHashTable[index] = value;
      console.log(`${index}번 인덱스에 ${value} 저장! `);
      return;
    } else if (myHashTable.length >= myTableSize) {
      console.log('풀방입니다');
      return;
    } else {
      console.log(`${index}번 인덱스에 ${value} 저장하려다 충돌 발생!ㅜㅜ`);
      index += getStepHash(value);
      index = index > myTableSize ? index - myTableSize : index;
      targetValue = myHashTable[index];
    }
  }
};

setValue(1991);
setValue(6);
setValue(13);
setValue(21);

console.log(myHashTable);
