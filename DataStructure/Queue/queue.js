'use strict';

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 데이터 삽입
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return;
  }

  // 데이터 삭제
  dequeue() {
    const deleteNode = this.head;

    if (this.isEmpty()) {
      console.log('삭제할 데이터가 존재하지 않습니다. \n');

      return;
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = deleteNode.next;
    }

    this.length--;

    return deleteNode;
  }

  // 맨 앞 데이터 조회
  front() {
    console.log(`Front : ${this.head.data}`);

    return;
  }

  // 맨 뒤 데이터 조회
  rear() {
    console.log(`rear : ${this.tail.data}`);

    return;
  }

  // 큐 크기 조회
  size() {
    return this.length;
  }

  // 큐의 데이터 존재 여부 조회
  isEmpty() {
    return this.length === 0 ? true : false;
  }

  // 큐 데이터 프린트
  print() {
    let curNode = this.head;
    let str = '';

    while (curNode) {
      str += curNode.data + ' ';
      curNode = curNode.next;
    }

    if (str.length === 0) {
      console.log('데이터가 존재하지 않습니다.\n');
    } else {
      console.log(`Queue Size : ${this.length} \n${str} \n`);
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.print();

queue.enqueue(2);
queue.print();

queue.enqueue(3);
queue.print();

queue.dequeue();
queue.print();

queue.front();
queue.rear();
