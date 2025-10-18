const TNode = require("./Tnode");
class BinaryTree {
  constructor(root = null) {
    this.root = root? new TNode(root) : null;
  }

  preOrder(node = this.root) {
    if (!this.root){
      console.log("tree is emoty");
      return;
    }
    if(!node)
      return ;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node = this.root) {
    if (!this.root){
      console.log("tree is emoty");
      return ;
    }
    if(!node)
      return ;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  postOrder(node = this.root, printing = "") {
    if (!this.root){
      console.log("tree is empty");
      return ;
    }
    if(!node)
      return ;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  print(node = this.root, indent = 0) {
    //console.log("current node :" , node);
    if (!this.root){
      console.log("tree is emoty");
      return;
    }
    if(!node)
      return ;
  
    this.print(node.right, indent + 4);

    console.log(" ".repeat(indent) + node.value);

    this.print(node.left, indent + 4);
  }

  findSecondMax() 
  {
    let current = this.root
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

}


module.exports = BinaryTree;

