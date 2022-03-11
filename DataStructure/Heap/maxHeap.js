class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  // 삽입연산 : 힙을 구성
  insert(value) {
    this.heap.push(value);
    this.moveUp();
    this.size++;
  }

  // 삭제연산 : 최댓값을 뽑아내는 연산
  pop() {
    if (this.size === 0) return;

    // 최대값을 저장
    const max = this.heap[0];

    // 힙의 가장 마지막 요소를 루트에 저장
    this.heap[0] = this.heap.pop();
    // 루트노드 부터 아래로 대소 비교 시작하여 위치 조정
    this.moveDown(0);
    this.size--;

    return max;
  }

  // 힙의 하단에서 부터 상단으로 값을 변경한다.
  moveUp() {
    // 힙의 맨 마지막 요소에 값이 추가 되었으므로
    let curIdx = this.heap.length - 1;

    // 최댓값을 가장 최상단으로 올리는 작업을 반복
    while (curIdx > 0) {
      const parentIdx = Math.floor((curIdx - 1) / 2);

      if (this.heap[parentIdx] >= this.heap[curIdx]) break;

      [this.heap[parentIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parentIdx],
      ];

      curIdx = parentIdx;
    }
  }

  // 힙의 상단에서 부터 하단으로 값을 변경한다.
  moveDown(idx = 0) {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let maxIdx = idx;

    // 힙의 왼쪽 자식과 변경 여부
    if (leftIdx < this.size && this.heap[leftIdx] > this.heap[maxIdx]) {
      maxIdx = leftIdx;
    }

    // 힙의 왼쪽 자식으로 인덱스 바뀌어 있어도 오른쪽이 더 큰 요소였다면 오른쪽 인덱스 요소로 변경된다.
    if (rightIdx < this.size && this.heap[rightIdx] > this.heap[maxIdx]) {
      maxIdx = rightIdx;
    }

    // swap 후 재귀 호출울 통해 계속 값 변경
    if (maxIdx !== idx) {
      [this.heap[idx], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[idx]];

      this.moveDown(maxIdx);
    }
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(4);
maxHeap.insert(7);
maxHeap.insert(6);
maxHeap.insert(5);
maxHeap.insert(2);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(3);

console.log(maxHeap.heap);

const result = [];
while (maxHeap.size !== 0) {
  result.push(maxHeap.pop());
}

console.log(result);
