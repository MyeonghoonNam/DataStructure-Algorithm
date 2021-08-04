const graph = Array.from(new Array(7), () => []);

graph[1].push(2);
graph[1].push(3);
graph[2].push(1);
graph[2].push(3);
graph[2].push(4);
graph[3].push(1);
graph[3].push(2);
graph[3].push(4);
graph[3].push(5);
graph[4].push(2);
graph[4].push(3);
graph[4].push(5);
graph[4].push(6);
graph[5].push(3);
graph[5].push(4);
graph[6].push(4);

console.log(graph);
