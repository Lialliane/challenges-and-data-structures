
function LeafSum(tree)
{
  let current = tree.root
  if (!current) 
    return 0;
  else if(!current.left && current.right)
    return current.value;

  let sum = 0;

  function sumNodes(node) {
    if (node.left) 
      sumNodes(node.left);
    if (node.right) 
      sumNodes(node.right);
    if (!node.left && !node.right)
      sum += node.value;
  }
  sumNodes(current);

  return sum;
}

module.exports = {LeafSum};