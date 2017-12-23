const MAX_VAL = 25,
  MIN_VAL = -25;

module.exports = class TreeNode {
  constructor(name, value) {
    this.childNodes = [];
    this.name = name;
    this.value = value || value === 0
      ? value
      : Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1) + MIN_VAL);
  }

  insert(...nodes) {
    nodes.forEach(node => this.childNodes.push(node));
  }

  traverseFromBottom() {
    const floors = [[this]];

    for (let i = 0; i < floors.length; i++) {
      let nextFloorNodes = [];

      floors[i].forEach(node => nextFloorNodes = nextFloorNodes.concat(node.childNodes));

      if (nextFloorNodes.length) {
        floors.push(nextFloorNodes);
      }
    } 

    return floors
      .reduceRight((a, b) => a.concat(b))
      .reduce((a, b) => a + b.name, '');
  }
}