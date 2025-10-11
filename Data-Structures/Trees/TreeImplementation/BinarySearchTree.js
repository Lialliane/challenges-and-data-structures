const TNode = require("./Tnode");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {

  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  remove(value, node = this.root, parent = null) {
    if (!node) 
      return null;
    // keep traversing until we find value
    if (value < node.value) 
      node.left = this.remove(value, node.left, node);
    else if (value > node.value) 
      node.right = this.remove(value, node.right, node);
    // value found
    else {
      // if leaf, delete normally
      if (!node.left && !node.right) 
        return null; 
      // if it has single child, replace parent
      if (!node.left) 
        return node.right;
      if (!node.right) 
        return node.left;

      // else, find smallest value in the right subtree and replace it
      let minRight = node.right;
      while (minRight.left) 
        minRight = minRight.left;
      node.value = minRight.value;
      node.right = this.remove(minRight.value, node.right);
    }

    return node;
  }
}

module.exports = BinarySearchTree;