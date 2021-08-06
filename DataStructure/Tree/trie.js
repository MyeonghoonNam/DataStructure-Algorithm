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

class Node {
  constructor(value = '') {
    this.value = value; //현재 경로까지의 누적값
    this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {}; //자식
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let curNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (!curNode.child[char]) {
        curNode.child[char] = new Node(curNode.value + char);
      }

      curNode = curNode.child[char]; // 자식 노드로 이동한다.
    }

    curNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다.
  }

  search(string) {
    let curNode = this.root;

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (curNode.child[char]) {
        curNode = curNode.child[char];
      } else {
        return false;
      }
    }

    return curNode;
  }

  // 자동완성기능
  autoComplete(string) {

    const findNode = this.search(string); // 자동검색을 위한 입력 단어의 노드

    if(!findNode) return; // 입력단어가 존재 하지 않는 경우

    const queue = new Queue();
    const result = [] // 자동완성단어의 리스트

    queue.enqueue(findNode);

    while(queue.size()) {

      const curNode = queue.dequeue();

      if(curNode.end) result.push(curNode.value);

      Object.values(curNode.child).forEach((node) => {
        if(node) queue.enqueue(node);

      })
      
    }
    
    return result.sort(); // 자동완성된 단어들을 사전 순으로 정렬하여 반환하였다.
  }
}



const trie = new Trie();

trie.insert('be');
trie.insert('bee');
trie.insert('can');
trie.insert('cat');
trie.insert('cd');
trie.insert('catalina');

console.log(trie.autoComplete('cat'));

// trie.insert('be');
// trie.insert('bee');
// trie.insert('can');
// trie.insert('cat');
// trie.insert('cd');

// console.log(trie.autoComplete('c'));


// console.log(trie.search('can')); // 찾아야함
// console.log(trie.search('cbn'));
// console.log(trie.search('bee')); // 찾아야함
// console.log(trie.search('bt'));
