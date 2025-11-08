const BinaryTree = require("../BinaryTree");
const Node = require("../Tnode")


let Btree = new BinaryTree();
Btree.root = new Node(9);
Btree.root.left = new Node(8);
Btree.root.right = new Node(12);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(17);
Btree.root.right.right = new Node(23);
Btree.root.left.left.right = new Node(4);

Btree.print();
console.log("leaf sum: ", Btree.leafSum());