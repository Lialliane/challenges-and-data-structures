const BinarySearchTree = require("../BinarySearchTree");
const BinaryTree = require("../BinaryTree");
const Node = require("../Tnode")

let tree = new BinaryTree();
   
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(20);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(25);

tree.print();

console.log("second max is: ", tree.findSecondMax());

console.log("-------");

const searchtree = new BinarySearchTree();

searchtree.add(10);
searchtree.add(5);
searchtree.add(15);
searchtree.add(7);
searchtree.add(6);
searchtree.add(1);
searchtree.add(3);
searchtree.add(2);
searchtree.add(4);
searchtree.add(16);
searchtree.add(18);
searchtree.add(17);
searchtree.add(20);



searchtree.print();

console.log("second max is: ", searchtree.FindSecondMax());
