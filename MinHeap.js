class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    // 맨 뒤에 추가된 요소를 부모와 비교하여 스왑한다.
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor( (currentIdx-1) / 2 );

    while(this.heap[parentIdx] > value) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor( (currentIdx-1) / 2 );
    }

    return this.printData();
  }

  pop() {
    let currentIdx = 0;
    let lastIdx = this.heap.length - 1;

    this.swap(currentIdx, lastIdx);
    const popNode = this.heap.pop();

    while(currentIdx < lastIdx) {
      let leftChildIdx = (currentIdx * 2) + 1;
      let rightChildIdx = (currentIdx * 2) + 2;

      // 자식 노드가 없는 경우
      if(leftChildIdx > lastIdx) {

        break;

      } else if(rightChildIdx > lastIdx) { // 왼쪽 자식 노드만 존재하는 경우

        if(this.heap[leftChildIdx] < this.heap[currentIdx]) { // 왼쪽 자식 노드가 현재 노드 보다 더 작은 경우
          this.swap(currentIdx, leftChildIdx);
          currentIdx = leftChildIdx;
        } else {
          break;
        }
      } else { // 왼쪽, 오른쪽 자식 노드가 둘 다 존재하는 경우

        // 모든 자식 노드가 현재 노드 보다 작은 경우
        if(this.heap[leftChildIdx] < this.heap[currentIdx] && this.heap[rightChildIdx] < this.heap[currentIdx]) {
          
          // 왼쪽 자식 노드와 오른쪽 자식 노드 중에서 더 작은 노드를 현재 노드와 스왑
          if(this.heap[leftChildIdx] < this.heap[rightChildIdx]) {

            this.swap(currentIdx, leftChildIdx);
            currentIdx = leftChildIdx;

          } else {

            this.swap(currentIdx, rightChildIdx);
            currentIdx = rightChildIdx;

          }
        } else if(this.heap[leftChildIdx] < this.heap[currentIdx]) { // 왼쪽 자식 노드만 현재 노드 보다 작은 경우

          this.swap(currentIdx, leftChildIdx);
          currentIdx = leftChildIdx;

        } else if(this.heap[rightChildIdx] < this.heap[currentIdx]) { // 오른쪽 자식 노드만 현재 노드 보다 작은 경우

          this.swap(currentIdx, rightChildIdx);
          currentIdx = rightChildIdx;

        } else { // 자식 노드 2개 모두 현재 노드 보다 클 경우

          break;
        }
      }
    }

    return popNode;
  }

  printData() {
    console.log(this.heap);
  }
}

const heap = new MinHeap();
heap.push(2);
heap.push(10);
heap.push(3);
heap.push(20);
heap.push(3);
heap.push(15);
heap.pop();
heap.printData();