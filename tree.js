'use strict';

// 트리중에서 가장 대표적인 이진탐색트리 구현
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
    this.traversal = '';
    this.length = 0;
  }

  // 노드 삽입
  insert(data) {
    let newNode = new Node(data);

    // 루트가 설정되어 있지 않아 루트로 설정되는 경우
    if (!this.root) {
      this.root = newNode;
      this.length++;

      return this;
    }

    let current = this.root;

    // 삽입되는 data와 현재 참고중인 current.data를 비교한다.
    while (current) {
      // 중복되는 값이 삽입되는 경우 아무 동작 없다.
      if (data === current.data) return;

      // 기준 data(current data) 보다 작다면 왼쪽에 넣어준다.
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          break;
        }

        // 이제 current data(기준)는 왼쪽의 data로 잡힌다.
        current = current.left;
      }

      // 기준 data(current data) 보다 크다면 오른쪽에 넣어준다.
      if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }

    this.length++;
  }

  // 깊이 우선 탐색 (DFS)
  // 1. 전위 우선 탐색
  preOrder(root = this.root) {
    if (!root) return;

    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  // 2. 중위 우선 탐색
  inOrder(root = this.root) {
    if (!root) return;

    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  // 3. 후위 우선 탐색
  postOrder(root = this.root) {
    if (!root) return;

    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
  }

  // 너비 우선 탐색 (BFS)
  bfs() {
    let node = this.root;
    let queue = [node];
    let printData = [];

    while (queue.length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
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
tree.preOrder();
tree.inOrder();
tree.postOrder();
console.log(tree.bfs());
