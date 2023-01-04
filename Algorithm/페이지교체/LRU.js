/**
  Least Recently Used Algorithm
  캐시에서 메모리를 다루기 위해 사용되는 알고리즘으로, 메모리 상에서 가장 최근에 사용된 적이 없는 캐시의 메모리부터 대체하며 새로운 데이터로 갱신시켜준다.
*/

class LRU {
  constructor(size) {
    this.cache = [];
    this.capacity = size;
    this.missTime = 5;
    this.hitTime = 1;
  }

  put(value) {
    if (this.capacity === this.cache.length) {
      // 캐시 용량 포화
      this.cache.shift();
      this.cache.push(value);
    } else {
      // 캐시 용량 여분 존재
      this.cache.push(value);
      // this.capacity++;
    }
  }

  get(value) {
    const index = this.cache.findIndex((e) => e === value);

    // 캐시에 값 있는 경우
    if (index !== -1) {
      this.put(...this.cache.splice(index, 1));
      return this.hitTime; // 캐시 있는 경우의 실행시간
    }

    // 캐시에 값 없는 경우
    this.put(value);
    return this.missTime; // 캐시 없는 경우의 실행시간
  }
}

const data = [1, 2, 1, 3, 4, 5];
const cache = new LRU(3);

let totalRuntime = 0;

data.forEach((v) => {
  const time = cache.get(v);
  totalRuntime += time;

  console.log(cache, `Runtime: ${totalRuntime}`);
});
