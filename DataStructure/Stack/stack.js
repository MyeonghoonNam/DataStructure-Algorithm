'use strict';

class Stack {
  constructor() {
    this.storage = [];
    this.top = 0;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('스택이 비어 있습니다.');
      return;
    }

    return this.storage[--this.top];
  }

  push(data) {
    this.storage[this.top++] = data;

    return;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('스택이 비어 있습니다.');
      return;
    }

    console.log(this.storage[this.top - 1]);

    return;
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }
}

const stack = new Stack();

stack.push(1);
stack.peek();

stack.push(2);
stack.peek();

stack.push(3);
stack.peek();

stack.pop();
stack.peek();

stack.pop();
stack.peek();

stack.pop();
stack.peek();
