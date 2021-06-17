'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 덱의 맨 앞에 데이터 삽입
  push_front(value) {
    const newNode = new Node(value);

    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;

      this.head = newNode;
    }

    this.length++;
  }

  // 덱의 맨 뒤에 데이터 삽입
  push_back(value) {
    const newNode = new Node(value);

    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;

      this.tail = newNode;
    }

    this.length++;
  }

  // 덱의 맨 앞 데이터 삭제
  pop_front() {
    if (this.empty()) return -1;

    const popNode = this.head;

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return popNode.value;
  }

  // 덱의 맨 뒤 데이터 삭제
  pop_back() {
    if (this.empty()) return -1;

    const popNode = this.tail;

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;

    return popNode.value;
  }

  // 덱의 크기
  size() {
    return this.length;
  }

  // 덱이 비었는지에 대한 여부
  empty() {
    return this.length === 0 ? 1 : 0;
  }

  // 덱의 가장 앞 데이터 조회
  front() {
    console.log(`Front : ${this.head.value}`);

    return this.empty() ? -1 : this.head.value;
  }

  // 덱의 가장 뒤 데이터 조회
  back() {
    console.log(`back : ${this.tail.value}`);

    return this.empty() ? -1 : this.tail.value;
  }

  // 덱의 데이터 출력
  print() {
    let curNode = this.head;
    let str = '';

    while (curNode) {
      str += curNode.value + ' ';
      curNode = curNode.next;
    }

    if (str.length === 0) {
      console.log('데이터가 존재하지 않습니다.\n');
    } else {
      console.log(`Deque Size : ${this.length} \n${str} \n`);
    }
  }
}

const deque = new Deque();

deque.push_front(1);
deque.print();

deque.push_front(2);
deque.print();

deque.push_back(3);
deque.print();

deque.push_back(4);
deque.print();

deque.pop_front();
deque.print();

deque.pop_back();
deque.print();

deque.front();

deque.back();
