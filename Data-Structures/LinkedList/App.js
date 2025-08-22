const LinkedList = require("./LinkedList");

const list = new LinkedList();
console.log("LIST 1");
console.log("---------------------");

list.insertAt(0,0);
list.insertAt(1,1);
list.insertAt(2,2)
list.add(3);;
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.display();
list.insertAt(5,"new");
list.display();
list.remove("new");
list.display();


console.log("\n\nLIST 2");
console.log("---------------------");

const list1 = new LinkedList();

list1.add(5);
list1.add(7);
list1.add(12);
list1.add(14);
list1.display();
list1.remove(12)

list1.display();

list1.remove(11);

list1.insertAt(0, 22);
list1.display();

console.log("does 22 exist?", list1.include(22));

list1.insertAt(3, 11);
list1.display();
