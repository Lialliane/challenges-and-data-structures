const BinarySearchTree = require("./BinaryTree");

const searchtree = new BinarySearchTree();

searchtree.add(10);
searchtree.add(5);
searchtree.add(15);
searchtree.add(7);

searchtree.print();

console.log("does it contain 7?", searchtree.contains(7));

searchtree.remove(5);

searchtree.print();

console.log("does it contain 5?", searchtree.contains(5));

searchtree.remove(10);

searchtree.print();

searchtree.add(6);
searchtree.add(1);
searchtree.add(3);
searchtree.add(2);
searchtree.add(4);


searchtree.add(16);
searchtree.add(18);
searchtree.add(17);
searchtree.add(20);

console.log("-------");

searchtree.print();


console.log("---PREORDER----");
searchtree.preOrder();

console.log("---INORDER----");
searchtree.inOrder();
console.log("---POSTORDER----");
searchtree.postOrder();


