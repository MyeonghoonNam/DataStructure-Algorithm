'use strict';

// 분리 연결법 : 해시 테이블의 충돌을 연결 리스트로 해결하는 방법으로 구현

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(key, value) {
    const newNode = new Node(key, value);

    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  remove(key) {
    if (this.empty()) {
      console.log('해시테이블에 데이터가 존재하지 않습니다.');
      return;
    }

    let curNode = this.head;
    let prevNode = this.head;

    while (curNode) {
      if (curNode.key === key) {
        if (this.length === 1) {
          this.head = null;
          this.tail = null;

          console.log(`삭제한 데이터 값 : ${curNode.value}`);
        } else {
          if (curNode === this.head) {
            this.head = curNode.next;
          } else if (curNode !== this.head && curNode !== this.tail) {
            prevNode.next = curNode.next;
          } else {
            this.tail = prevNode;
            this.tail.next = null;
          }

          console.log(`삭제한 데이터 값 : ${curNode.value}`);
        }

        this.length--;

        return;
      }

      prevNode = curNode;
      curNode = curNode.next;
    }

    console.log('삭제하려는 데이터가 존재하지 않습니다.');

    return;
  }

  search(key) {
    let curNode = this.head;

    while (curNode) {
      if (curNode.key === key) {
        console.log(`조회한 데이터 값 : ${curNode.value}`);
        return;
      }

      curNode = curNode.next;
    }

    // 키값이 조회가 안되는 경우
    console.log('존재하지 않는 데이터 입니다.');
    return;
  }

  empty() {
    return this.length === 0 ? true : false;
  }
}

class HashTable {
  constructor() {
    this.table = new Array(23); // 해시테이블의 크기
    this.size = 0; // 해시테이블에 채워진 데이터 크기
  }

  getHash(key) {
    return key.length % this.table.length;
  }

  setValue(key, value) {
    const idx = this.getHash(key);

    if (!this.table[idx]) {
      const linkedList = new LinkedList();
      linkedList.add(key, value);
      this.table[idx] = linkedList;
    } else {
      this.table[idx].add(key, value);
    }

    this.size++;
  }

  getValue(key) {
    const idx = this.getHash(key);

    this.table[idx].search(key);

    return;
  }

  removeValue(key) {
    const idx = this.getHash(key);

    this.table[idx].remove(key);

    if (!this.table[idx].head) {
      delete this.table[idx];
    }

    return;
  }
}

const hashTable = new HashTable(23);

hashTable.setValue('mike', '010-1234-5678');
hashTable.setValue('smith', '010-1111-2222');
hashTable.setValue('sam', '010-4444-5555');
hashTable.setValue('sola', '010-6666-7777');

console.log(hashTable.table);

hashTable.getValue('mike');
hashTable.getValue('smith');
hashTable.getValue('sam');
hashTable.getValue('sola');
hashTable.getValue('soll');

// 하나씩 삭제해보며 결과값을 확인 해보자.
hashTable.removeValue('mike');
hashTable.removeValue('smith');
hashTable.removeValue('sam');
hashTable.removeValue('sola');

console.log(hashTable.table);
