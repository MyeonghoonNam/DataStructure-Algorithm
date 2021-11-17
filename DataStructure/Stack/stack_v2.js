class Node {
  constructor(value) {
    this.value  = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;

    this.size++;

    return;
  }

  pop() {
    const popNode = this.top;

    if(this.size === 1) {
      this.top = null;
    } else {
      this.top = popNode.next;
    }

    this.size--;

    return popNode.value;
  }

  peek() {
    return this.top.value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());

stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
