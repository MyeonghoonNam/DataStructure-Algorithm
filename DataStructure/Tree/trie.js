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
        return '해당 단어를 찾지 못했습니다.';
      }
    }

    return curNode.value;
  }
}

const trie = new Trie();

trie.insert('be');
trie.insert('bee');
trie.insert('can');
trie.insert('cat');
trie.insert('cd');

console.log(trie.search('can')); // 찾아야함
console.log(trie.search('cbn'));
console.log(trie.search('bee')); // 찾아야함
console.log(trie.search('bt'));
