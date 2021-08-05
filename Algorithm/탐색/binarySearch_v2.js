// 이진 탐색 트리를 활용한 이진 탐색 구현
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;

      return;
    }

    let currentNode = this.root;

    while(currentNode !== null) {
    
      // 이진탐색트리는 중복값을 허용하지 않는다.
      if (value === currentNode.value) return;

      // 추가되는 값이 루트 보다 크면 오른쪽 서브트리
      if(currentNode.value < value) {

        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      } else {

        // 추가되는 값이 루트 보다 작으면 왼쪽 서브트리
        if(currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while(currentNode !== null) {

      if(currentNode.value === value) return true;

      if(currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);

console.log(tree.has(7)); // true
console.log(tree.has(1)); // false