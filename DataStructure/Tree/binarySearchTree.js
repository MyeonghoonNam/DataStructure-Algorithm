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
    this.length = 0;
  }

  // 노드 탐색
  search(value) {
    let curNode = this.root;

    while (curNode) {
      if (curNode.value === value) {
        console.log('찾으시는 노드는 존재합니다.');
        return;
      }

      if (curNode.value > value) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    console.log('찾으시는 노드는 존재하지 않습니다.');

    return;
  }

  // 노드 삽입
  insert(value) {
    let newNode = new Node(value);
    let curNode = this.root;

    if (!this.root) {
      this.root = newNode;
      this.length++;

      return;
    }

    while (curNode) {
      // 이진탐색트리는 중복값을 허용하지 않는다.
      if (value === curNode.value) return;

      // 추가되는 값이 루트노드의 값보다 작은 경우 왼쪽 서브트리
      if (value < curNode.value) {
        if (!curNode.left) {
          curNode.left = newNode;
          break;
        }

        curNode = curNode.left;
      } else {
        // 추가되는 값이 루트노드의 값보다 큰 경우 오른쪽 서브트리
        if (!curNode.right) {
          curNode.right = newNode;
          break;
        }

        curNode = curNode.right;
      }
    }

    this.length++;
  }

  // 노드 삭제
  remove(value) {
    const removeNode = (node, value) => {
      // 트리가 존재하지 않은 경우
      if (!node) return null;

      if (value === node.value) {
        // 삭제할 노드가 자식 노드가 없는 경우
        if (!node.left && !node.right) {
          return null;
        } else if (!node.right) {
          // 삭제할 노드가 왼쪽 자식 노드만 존재하는 경우
          return node.left;
        } else if (!node.left) {
          // 삭제할 노드가 오른쪽 자식 노드만 존재하는 경우
          return node.right;
        } else {
          // 왼쪽, 오른쪽 모두 자식노드가 있는 경우
          // 삭제할 노드의 오른쪽 자식 중에서 가장 왼쪽 아래의 자식을 선택하여 삭제할 노드의 위치로 변경하는 방법 사용
          let curNode = node.right;

          while (curNode.left) {
            curNode = curNode.left;
          }

          node.value = curNode.value;
          node.right = removeNode(node.right, curNode.value);

          return node;
        }
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };

    this.root = removeNode(this.root, value);
    this.length--;
  }

  // Bfs : 너비우선탐색
  bfs() {
    let curNode = this.root;

    const queue = [curNode];

    let printTree = '';

    while (queue.length) {
      curNode = queue.shift();
      printTree += curNode.value + ' ';

      if (curNode.left) {
        queue.push(curNode.left);
      }

      if (curNode.right) {
        queue.push(curNode.right);
      }
    }

    console.log(printTree);

    return;
  }

  // Dfs : 깊이우선탐색
  // 1. 전위 순회(Prerder Traversal)
  preOrder(root = this.root) {
    // 데이터가 없는 경우
    if (!root) return;

    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  // 2. 중위 순회(Inorder Traversal)
  inOrder(root = this.root) {
    // 데이터가 없는 경우
    if (!root) return;

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  // 3. 후위 순회(Postorder Traversal)
  postOrder(root = this.root) {
    // 데이터가 없는 경우
    if (!root) return;

    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(9);
bst.insert(4);
bst.insert(7);
bst.insert(13);

bst.bfs();
console.log('----------');

bst.preOrder();
console.log('----------');

bst.inOrder();
console.log('----------');

bst.postOrder();
console.log('----------');

bst.remove(10);
bst.preOrder();

console.log(bst.root);
