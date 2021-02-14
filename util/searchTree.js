module.exports.search = function (tree, value, key = "role", reverse = false) {
  const stack = [tree];
  while (stack.length) {
    const node = stack[reverse ? "pop" : "shift"]();
    if (node[key] === value) return node;
    node.descendants && stack.push(...node.descendants);
  }
  return null;
};
