'use strict';

// 단일 연결 리스트
class MyLinkedList {
  constructor(value) {
    this.head = {
      value : value,
      link : null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value : value,
      link : null
    }

    this.tail.link = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value : value,
      link : this.head
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  // 탐색
  lookUp(index) {
    let counter = 0;
    let currentNode = this.head;

    while( counter !== index){
      currentNode = currentNode.link;
      counter++;
    }

    return currentNode;

  }

  // 중간 삽입
  insert(index, value) {
    if(index >= this.length) {
      console.log("리스트에 존재하지 않는 인덱스입니다. 그러므로 리스트의 맨 마지막에 삽입하겠습니다.");
      return this.append(value);
    } else if(index === 0) {
      // 맨 처음의 삽입이므로 prepend 실행
      return this.prepend(value);
    }

    const newNode = {
      value : value,
      link : null
    }

    let prevNode = this.lookUp(index - 1);
    newNode.link = prevNode.link;
    prevNode.link = newNode;
    this.length++;

    return this;
  }

  // 맨 앞 제거
  removeOfFront() {
    let removeNode = this.head;
    this.head = removeNode.link;
    this.length--;

    return this;
  }

  // 맨 뒤 제거
  delete() {
    let currentNode = this.head;
    let prevNode = null;
    while(currentNode.link !== null){
      prevNode = currentNode;
      currentNode = currentNode.link;
    }

    prevNode.link = null;
    this.tail = prevNode;
  }

  // 중간 제거
  remove(index) {
    let prevNode = this.lookUp(index-1);
    let removeNode = prevNode.link;
    prevNode.link = removeNode.link;
    this.length--;

    return this;
  }

  printValue() {
    const arr = [];

    let currentNode = this.head;
    
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.link;
    }

    console.log(arr);
    return arr;
  }
}

// let List = new MyLinkedList(10);
// List.append(20);
// List.prepend(5);
// console.log(List);
// List.insert(2, 15);
// console.log(List);
// List.removeOfFront();
// List.remove(1);
// console.log(List);
// List.printValue();
// List.delete();
// console.log(List);
// List.printValue();

// 이중 연결 리스트
class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value : value,
      lLink : null,
      rLink : null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value : value,
      lLink : this.tail,
      rLink : null
    }

    this.tail.rLink = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // 맨 뒤 제거
  delete() {
    this.tail = this.tail.lLink;
    this.tail.rLink = null;
    this.length--;
  }

  prepend(value) {
    const newNode = {
      value : value,
      lLink : null,
      rLink : this.head
    }

    this.head.lLink = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  // 탐색
  lookUp(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.rLink;
      counter++;
    }

    return currentNode;

  }

  // 중간 삽입
  insert(index, value) {
    if(index >= this.length) {
      console.log("리스트에 존재하지 않는 인덱스입니다. 그러므로 리스트의 맨 마지막에 삽입하겠습니다.");
      return this.append(value);
    } else if(index === 0) {
      // 맨 처음의 삽입이므로 prepend 실행
      return this.prepend(value);
    }

    const newNode = {
      value : value,
      lLink : null,
      rLink : null,
    }

    let prevNode = this.lookUp(index - 1);
    newNode.lLink = prevNode;
    newNode.rLink = prevNode.rLink;
    prevNode.rLink = newNode;

    let nextNode = newNode.rLink;
    nextNode.lLink = newNode;

    this.length++;

    return this;
  }

  // 맨 앞 제거
  removeOfFront() {
    let removeNode = this.head;
    this.head = removeNode.rLink;
    this.head.lLink = null;
    this.length--;

    return this;
  }

  // 중간 제거
  remove(index) {
    let prevNode = this.lookUp(index-1);
    
    let removeNode = prevNode.rLink;
    if(removeNode.rLink === null) {
      this.delete(); // 맨 끝 삭제의 경우
    } else if(removeNode.lLink === null){
      // 맨 앞 삭제의 경우
      this.removeOfFront();
    } else {
      // 중간삭제
      let nextNode = removeNode.rLink;
  
      prevNode.rLink = nextNode;
      nextNode.lLink = prevNode;
      this.length--;

    }

    return this;
  }

  printValue() {
    const arr = [];

    let currentNode = this.head;
    
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.rLink;
    }

    console.log(arr);
    return arr;
  }
}

let List = new DoubleLinkedList(10);
List.append(20);
List.append(25);
List.prepend(5);
List.insert(2, 15);
List.removeOfFront();
List.remove(1);
List.delete();
console.log(List);
List.printValue();