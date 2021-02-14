'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // 큐의 최상단 요소 반환
  peek() {
    return this.first;
  }

  // 큐의 요소 삽입
  enqueue(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  // 큐의 요소 삭제
  dequeue() {
    if(!this.first) return null;
    if(this.first === this.last) {
      this.last = null;
    }
    const pointer = this.first;
    this.first = this.first.next;
    this.length--;

    return pointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
console.log(myQueue);
myQueue.enqueue('Matt');
console.log(myQueue);
myQueue.enqueue('Pavel');
console.log(myQueue);
myQueue.enqueue('hyunsol');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);