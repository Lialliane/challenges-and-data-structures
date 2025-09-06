const LinkedList = require("./LinkedList");
const reverse = require("./reverse/reverse");


const list = new LinkedList();
console.log("EXAMPLE 1");
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
list.reverse();
list.display();

console.log("\nEXAMPLE 2");
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
list1.reverse();
list1.display();
list1.reverse();
list1.display();

console.log("\nEXAMPLE 3");
console.log("---------------------");


const list2 = new LinkedList();
list2.add(1);
list2.display();
list2.reverse();
list2.display();


console.log("\nEXAMPLE 4");
console.log("---------------------");

const list3 = new LinkedList();
list3.reverse();

console.log("\nEXAMPLE 5");
console.log("---------------------");

const list4 = new LinkedList();
list4.add("apple");
list4.add("banana");
list4.add("strawberry");
list4.add("mango");
list4.display();
reverse(list4);
list4.display();


console.log("\nEXAMPLE 6");
console.log("---------------------");

const list5 = new LinkedList();
list5.add(1);
list5.add(2);
list5.add(3);
list5.display();

const list6 = new LinkedList();
list6.add(2);
list6.add(4);
list6.add(6);
list6.display();

const list56 = LinkedList.mergeSortLists(list5, list6);
list56.display();

console.log("\nEXAMPLE 7");
console.log("---------------------");

const list7 = new LinkedList();
list7.add(1);
list7.add(2);
list7.add(3);
list7.display();

const list8 = new LinkedList();
list8.display();

const list78 = LinkedList.mergeSortLists(list7, list8);
list78.display();

console.log("\nEXAMPLE 8");
console.log("---------------------");

const list9 = new LinkedList();

const list10 = new LinkedList();

const list910 = LinkedList.mergeSortLists(list9, list10);