'use strict';

class Node {
  constructor(value) {
    this.data = value;
    this.link = null;
  }
}

class SinglyLinkedList {
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
      curNode = curNode.link;
      count++;
    }

    if (!curNode) {
      console.log('해당 위치의 데이터가 존재 하지 않습니다.\n');
      return;
    }

    return curNode;
  }

  // 리스트의 맨 끝에 데이터 삽입 : 탐색 O(1) + 삽입 O(1) => O(1)
  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.link = newNode;
      this.tail = newNode;
    }

    this.length++;

    return;
  }

  // 리스트의 맨 끝 데이터 삭제 : 탐색 O(n) + 삭제 O(1) => O(n)
  removeLast() {
    const removeNode = this.tail;

    if (this.isEmpty()) {
      console.log('이미 데이터가 존재 하지 않습니다.');

      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      this.length--;

      return removeNode.data;
    }

    let curNode = this.head;
    while (curNode.link !== this.tail) {
      curNode = curNode.link;
    }

    curNode.link = null;
    this.tail = curNode;

    this.length--;

    return removeNode.data;
  }

  // 리스트의 맨 앞에 데이터 삽입 : 탐색 O(1) + 삽입 O(1) => O(1)
  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;

      this.head = newNode;
      this.head.link = temp;
    }

    this.length++;

    return;
  }

  // 리스트의 맨 앞 데이터 삭제 : 탐색 O(1) + 삭제 O(1) => O(1)
  removeFirst() {
    const removeNode = this.head;

    if (this.isEmpty()) {
      console.log('이미 데이터가 존재하지 않습니다.');

      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeNode.link;
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

    newNode.link = prevNode.link;
    prevNode.link = newNode;

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

    const prevNode = this.find(idx - 1);
    const removeNode = prevNode.link;

    prevNode.link = removeNode.link;

    this.length--;

    return removeNode;
  }

  // 리스트의 데이터 포함 여부
  isEmpty() {
    return this.length === 0 ? true : false;
  }

  // 리스트의 요소들을 보기 쉽게 프린트
  printList() {
    let cur = this.head;
    let str = '';

    while (cur) {
      str += cur.data + ' ';
      cur = cur.link;
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

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);
singlyLinkedList.printList();

singlyLinkedList.append(2);
singlyLinkedList.printList();

singlyLinkedList.removeLast();
singlyLinkedList.printList();

singlyLinkedList.removeLast();
singlyLinkedList.printList();

singlyLinkedList.prepend(1);
singlyLinkedList.printList();

singlyLinkedList.prepend(2);
singlyLinkedList.printList();

singlyLinkedList.removeFirst();
singlyLinkedList.printList();

singlyLinkedList.insert(1, 2);
singlyLinkedList.printList();

singlyLinkedList.insert(1, 3);
singlyLinkedList.printList();

singlyLinkedList.remove(1);
singlyLinkedList.printList();