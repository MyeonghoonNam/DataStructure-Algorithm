class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(node) {

    if(this.size() === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return;
  }
  
  dequeue() {
    if(this.size() === 0) {
      console.log('큐가 이미 비었습니다.');

      return;
    }

    const deleteNode = this.head;

    if(this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {

      this.head = deleteNode.next;
    }

    this.length--;

    return deleteNode;
  }

  size() {
    return this.length;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // 너비 우선 탐색 : Level Order 순회 방식
  levelOrder() {
    const queue = new Queue();

    queue.enqueue(this.root);

    while(queue.size()) {
      
      const currentNode = queue.dequeue();
      
      process.stdout.write(`${currentNode.value} `);

      if(currentNode.left) queue.enqueue(currentNode.left);
      if(currentNode.right) queue.enqueue(currentNode.right);
    }
  }

  // 깊이 우선 탐색 
  // 1. 전위 순회 방식
  preOrder(root = this.root) {

    // 노드가 존재하지 않는 경우
    if(!root) return;

    process.stdout.write(`${root.value} `);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  
  // 2. 중위 순회 방식
  inorder(root = this.root) {
    
    // 노드가 존재하지 않는 경우
    if(!root) return;
    
    this.inorder(root.left);
    process.stdout.write(`${root.value} `);
    this.inorder(root.right);
  }
  
  // 3. 후위 순회 방식
  postOrder(root = this.root) {

    // 노드가 존재하지 않는 경우
    if(!root) return;

    this.postOrder(root.left);
    this.postOrder(root.right);
    process.stdout.write(`${root.value} `);
  }
}

const tree = new Tree(new Node(9));

tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

// 너비 우선 탐색 : 레벨 순회 방식
// tree.levelOrder();

// 깊이 우선 탐색
// 1. 전위 순회 방식
// tree.preOrder();

// 2. 중위 순회 방식
// tree.inorder();

// 3. 후위 순회 방식
tree.postOrder();
