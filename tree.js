'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입
  insert(data) {
    let newNode = new Node(data);

    //// 루드가 설정되어 있지 않아 루트로 설정되는 경우
    if(!this.root) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    // 삽입되는 data와 현재 참고중인 current.data를 비교한다.
    while(current) {
      // 중복되는 값이 삽입되는 경우 아무 동작 없다.
      if(data === current.data) return;

      // 기준 data(current data) 보다 작다면 왼쪽에 넣어준다.
      if(data < current.data) {
        if(!current.left) {
          current.left = newNode;
          break;
        }

        // 이제 current data(기준)는 왼쪽의 data로 잡힌다.
        current = current.left;
      }

      // 기준 data(current data) 보다 크다면 오른쪽에 넣어준다.
      if(data > current.data){
        if(!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // 깊이 우선 탐색 (DFS)
  // 1. 전위 우선 탐색
  preOrder() {
    const printData = [];

    function traverse(node) {
      printData.push(node.data);
      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return printData;
  }

  // 2. 중위 우선 탐색
  inOrder() {
    const printData = [];

    function traverse(node) {
      if(!node.left && !node.right){
        printData.push(node.data);
      }

      if(node.left) {
        traverse(node.left);
        printData.push(node.data);
      }
      if(node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return printData;
  }

  // 3. 후위 우선 탐색
  postOrder() {
    const printData = [];

    function traverse(node) {
      if(!node.left && !node.right){
        printData.push(node.data);
      }
      
      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
        printData.push(node.data);
      }
    }

    traverse(this.root)
    return printData;
  }

  // 너비 우선 탐색 (BFS)
  bfs() {
    let node = this.root;
    let queue = [node];
    let printData = [];

    while(queue.length) {
      node = queue.shift();
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
      printData.push(node.data);
    }
    return printData;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(3);
tree.insert(6);
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.bfs());
