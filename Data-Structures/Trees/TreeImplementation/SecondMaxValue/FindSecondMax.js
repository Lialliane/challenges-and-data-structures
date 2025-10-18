// using bst
function findSecondMaxSearch(searchTree)
  {
    let current = searchTree.root;
    let parent;

    if(!current)
      return null;

    while(current.right)
    {
      parent = current;
      current = current.right;
    }
    if(!current.left)
      return parent? parent.value: null;
    else
      current = current.left;

    while(current.right)
      current = current.right;
    return current.value;
  }

// using regular tree
function findSecondMax(tree) 
  {
    let current = tree.root
    if (!current) 
      return null;
    else if(!current.left && current.right)
      return null;

    let max = current.value;
    let second = null;
  
    function check(node) {
      if (!node) return;
      if (node.value > max) {
        second = max;
        max = node.value;
      } else if (second && node.value > second && node.value < max) {
        second = node.value;
      }
      check(node.left);
      check(node.right);
    }
    check(current);
    
    return second === null ? null : second;
  }

module.exports = {findSecondMax, findSecondMaxSearch};
