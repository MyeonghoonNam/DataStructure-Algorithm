const graph = Array.from(new Array(7), () => new Array(7).fill(0));

graph[1][2] = 1;
graph[1][3] = 1;
graph[2][1] = 1;
graph[2][3] = 1;
graph[2][4] = 1;
graph[3][1] = 1;
graph[3][2] = 1;
graph[3][4] = 1;
graph[3][5] = 1;
graph[4][2] = 1;
graph[4][3] = 1;
graph[4][5] = 1;
graph[4][6] = 1;
graph[5][3] = 1;
graph[5][4] = 1;
graph[6][4] = 1;

for(let i = 1; i < graph.length; i++) {
  console.log(graph[i].slice(1).join(' ')); // 0번 정점이 없으므로 제거
}

// 0 1 1 0 0 0
// 1 0 1 1 0 0
// 1 1 0 1 1 0
// 0 1 1 0 1 1
// 0 0 1 1 0 0
// 0 0 0 1 0 0