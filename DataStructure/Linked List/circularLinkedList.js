'use strict';

class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 리스트의 데이터 탐색 : O(n)
  find(idx) {
    let curNode = this.head;
    let count = 0;

    while (count !== idx) {
      if(curNode.next === this.head) break;

      curNode = curNode.next;
      count++;
    }

    if (!curNode) {
      console.log('해당 위치에 데이터가 존재하지 않습니다.');
      return;
    }

    return curNode;
  }

  // 리스트의 맨 끝에 데이터 삽입 : 탐색 O(1) + 삽입 O(1) => O(1)
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = this.head;

      this.head.prev = newNode;
      this.tail = newNode;

    }

    this.length++;

    return;
  }

  // 리스트의 맨 끝 데이터 삭제 : 탐색 O(1) + 삭제 O(1) => O(1)
  removeLast() {
    const removeNode = this.tail;

    if (this.isEmpty()) {
      console.log('이미 데이터가 존재하지 않습니다.\n');

      return;
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
    }

    this.length--;

    return removeNode;
  }

  // 리스트의 맨 앞에 데이터 삽입 : 탐색 O(1) + 삽입 O(1) => O(1)
  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;

      this.head = newNode;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    this.length++;

    return;
  }

  // 리스트의 맨 앞 데이터 삭제 : 탐색 O(1) + 삭제 O(1) => O(1)
  removeFirst() {
    const removeNode = this.head;

    if (this.isEmpty()) {
      console.log('이미 데이터가 존재하지 않습니다.\n');

      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeNode.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    this.length--;

    return removeNode;
  }

  // 맨 앞과 뒤를 제외한 임의의 위치에 데이터 삽입 : 탐색 O(n) + 삽입 O(1) => O(n)
  insert(idx, value) {
    if (idx >= this.length) {
      // 리스트에 존재하지 않은 인덱스 이다.
      // 그러므로 리스트의 맨 뒤에 삽입, append 시간복잡도 반영

      console.log(
        '리스트에 존재하지 않는 인덱스이므로 리스트의 마지막에 데이터를 삽입하겠습니다.'
      );
      return this.append(value);
    } else if (idx === 0) {
      // 리스트의 맨 앞에 삽입, prepend 시간복잡도 반영
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const prevNode = this.find(idx - 1);

    prevNode.next.prev = newNode;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    this.length++;

    return;
  }

  // 맨 앞과 뒤를 제외한 임의의 위치에 데이터 삭제 : 탐색 O(n) + 삭제 O(1) => O(n)
  remove(idx) {
    if (idx >= this.length) {
      // 리스트에 존재하지 않은 인덱스 이다.
      console.log('리스트에 존재하지 않는 인덱스입니다.');

      return;
    } else if (idx === 0) {
      // 리스트의 맨 앞 데이터 삭제이므로, removeFirst 시간복잡도 반영
      return this.removeFirst();
    } else if (idx === this.length - 1) {
      // 리스트의 맨 뒤 데이터 삭제이므로, removeLast 시간복잡도 반영
      return this.removeLast();
    }

    const removeNode = this.find(idx);
    const prevNode = removeNode.prev;

    prevNode.next = removeNode.next;
    removeNode.next.prev = prevNode;

    this.length--;

    return removeNode;
  }

  // 리스트의 데이터 포함 여부
  isEmpty() {
    return this.length === 0 ? true : false;
  }

  // 리스트의 요소들을 보기 쉽게 프린트
  printList() {
    let curNode = this.head;
    let str = '';

    while (curNode) {
      
      str += curNode.data + ' ';
      curNode = curNode.next;

      if(curNode === this.head) break;

    }

    if (str.length === 0) {
      console.log('데이터가 존재하지 않습니다.\n');
    } else {
      console.log(`List Size : ${this.size()} \n${str} \n`);
    }

    return;
  }

  size() {
    return this.length;
  }
}

const circularLinkedList = new CircularLinkedList();

circularLinkedList.append(1);
circularLinkedList.printList();

circularLinkedList.append(2);
circularLinkedList.printList();

circularLinkedList.append(3);
circularLinkedList.printList();

circularLinkedList.removeLast();
circularLinkedList.printList();

circularLinkedList.removeLast();
circularLinkedList.printList();

circularLinkedList.removeLast();
circularLinkedList.printList();

circularLinkedList.prepend(1);
circularLinkedList.printList();

circularLinkedList.prepend(2);
circularLinkedList.printList();

circularLinkedList.prepend(3);
circularLinkedList.printList();

circularLinkedList.removeFirst();
circularLinkedList.printList();

circularLinkedList.removeFirst();
circularLinkedList.printList();


circularLinkedList.insert(1, 2);
circularLinkedList.printList();

circularLinkedList.insert(1, 3);
circularLinkedList.printList();

circularLinkedList.remove(1);
circularLinkedList.printList();

console.log(circularLinkedList);
