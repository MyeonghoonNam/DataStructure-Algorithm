'use strict';

// 단일 연결 리스트로 구현한 스택
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // 스택 최상위 요소 반환
  peek() {
    return this.top;
  }

  // 스택에 요소를 저장
  push(value) {
    const newNode = new Node(value);

    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }

  // 스택의 최상단 요소를 꺼내어 제거한다.
  pop() {
    if(!this.top) return null;
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    let popNode = this.top;
    this.top = this.top.next;
    this.length--;

    return popNode;
  }
}

const MyStack = new Stack();
console.log(MyStack);
MyStack.push('apple');
console.log(MyStack.peek());
MyStack.push('banana');
console.log(MyStack.peek());
MyStack.push('strawberry');
console.log(MyStack.peek());
console.log(MyStack);
MyStack.pop();
console.log(MyStack.peek());
MyStack.pop();
MyStack.pop();
console.log(MyStack);