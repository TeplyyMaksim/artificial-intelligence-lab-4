const TreeNode = require('./TreeNode');

const graphANodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  graphBNodes = graphANodes.slice(),
  generateGraph = (nodeNames) => {
    const graph = {};

    nodeNames.forEach(name => graph[name] = new TreeNode(name));

    return graph;
  }

// Generating nodes
graphA = generateGraph(graphANodes);
graphB = generateGraph(graphBNodes);

// Conecting nodes
graphA.a.insert(graphA.b, graphA.e);
graphA.b.insert(graphA.c, graphA.d);
graphA.e.insert(graphA.f, graphA.g, graphA.h);

graphB.a.insert(graphB.f, graphB.e);
graphB.f.insert(graphB.c, graphB.d, graphB.b);
graphB.e.insert(graphB.g, graphB.h);

console.log(`Traversing from bottom graph A: ${graphA.a.traverseFromBottom()}`);
console.log(`Traversing from bottom graph B: ${graphB.a.traverseFromBottom()}`);
