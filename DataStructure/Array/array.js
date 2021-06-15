'use strict';

class Array {
  constructor() {
    // 배열의 빈 공간을 제외한 데이터들의 개수
    this.length = 0;
    this.data = [];
  }

  // 배열의 원소 탐색
  // 인덱스를 알고 있다면 특정 원소에 접근하는 시간 복잡도는 O(1)이다.
  get(idx) {
    console.log(this.data[idx]);
  }

  // 배열의 맨 뒤에 원소 추가
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  // 배열의 맨 뒤 원소 제거
  pop() {
    const popValue = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return popValue;
  }

  // 배열의 맨 앞 원소 추가
  unshift(value) {
    this.pushArray(0);
    this.data[0] = value;
    this.length++;
  }

  // 배열의 맨 앞 원소 제거
  shift() {
    const shiftValue = this.data[0];

    delete this.data[0];

    this.pullArray(0);
    this.length--;

    return shiftValue;
  }

  // 배열의 맨 앞과 뒤가 아닌 특정 위치에 원소 추가
  insert(idx, value) {
    this.pushArray(idx);
    this.data[idx] = value;
    this.length++;
  }

  // 배열의 맨 앞과 뒤가 아닌 특정 위치에 원소 제거
  delete(idx) {
    const deleteValue = this.data[idx];

    delete this.data[idx];

    this.pullArray(idx);

    this.length--;

    return deleteValue;
  }

  // 배열의 데이터를 뒤로 밀기
  pushArray(idx) {
    for (let i = this.length - 1; i >= idx; i--) {
      this.data[i + 1] = this.data[i];
    }
  }

  // 배열의 데이터를 앞으로 당기기
  pullArray(idx) {
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
  }
}

const myArray = new Array();

myArray.push(1);
console.log(myArray);

myArray.push(2);
console.log(myArray);

myArray.push(3);
console.log(myArray);

myArray.delete(1);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.push(4);
console.log(myArray);

myArray.insert(1, 5);
console.log(myArray);

myArray.unshift(6);
console.log(myArray);

myArray.shift();
console.log(myArray);
