'use strict';

// 개방주소법 : 이중 해싱을 적용한 해시 테이블 구현

// 테이블 사이즈가 소수여야 효과가 좋다
// 스텝 해시에 사용되는 수는 테이블 사이즈보다 약간 작은 소수를 사용한다.

// 테이블사이즈와 두 번째 해시함수 둘 중에 하나가 소수가 아니라면 결국 언젠가 같은 해싱이 반복되기 때문이다.

class HashTable {
  constructor(size) {
    this.table = new Array(size); // 해시테이블의 크기
    this.size = 0; // 해시테이블에 채워진 데이터 크기
  }

  getFirstHash(key) {
    return Number(key) % this.table.length;
  }

  getSecondHash(key) {
    return this.table.length - 6 - (key % (this.table.length - 6));
  }

  setValue(data) {
    let idx = this.getFirstHash(Object.keys(data)[0]);

    while (true) {
      if (!this.table[idx]) {
        this.table[idx] = data;
        console.log(`${idx}번 인덱스에 ${Object.values(data)[0]} 저장 !`);
        this.size++;
        return;
      } else if (this.size >= this.table.length) {
        console.log('해시테이블이 가득 찼습니다.');
        return;
      } else {
        console.log(
          `${idx}번 인덱스에 ${Object.values(data)[0]} 저장하려다 충돌 발생 !`
        );
        idx += this.getSecondHash(Object.keys(data));
        idx = idx > this.table.size ? idx - this.table.length : idx;
      }
    }
  }

  getValue(key) {
    let idx = this.getFirstHash(key);

    if (!this.table[idx]) {
      console.log('존재하지 않는 데이터입니다.');
      return;
    }

    while (true) {
      if (Object.keys(this.table[idx]).includes(String(key))) {
        console.log(Object.values(this.table[idx])[0]);
        return;
      } else {
        idx += this.getSecondHash(key);
        idx = idx > this.table.size ? idx - this.table.length : idx;
      }
    }
  }
}

const hashTable = new HashTable(23);

hashTable.setValue({ 1991: 1 });
hashTable.setValue({ 6: 2 });
hashTable.setValue({ 13: 3 });
hashTable.setValue({ 21: 4 });

hashTable.getValue(1991);
hashTable.getValue(6);
hashTable.getValue(13);
hashTable.getValue(21);

console.log(hashTable);
