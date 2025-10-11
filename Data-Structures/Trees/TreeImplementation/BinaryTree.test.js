const BinaryTree = require("./BinaryTree");

const Tnode = require("./Tnode");

describe("BinaryTree Traversals", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new Tnode("A");
    tree.root.left = new Tnode("B");
    tree.root.right = new Tnode("C");
    tree.root.left.left = new Tnode("D");
    tree.root.left.right = new Tnode("E");
  });

  test("PreOrder traversal should return Root-Left-Right", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.preOrder();

    console.log = originalLog;
    expect(result).toEqual(["A", "B", "D", "E", "C"]);
  });

  test("InOrder traversal should return Left-Root-Right", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.inOrder();

    console.log = originalLog;
    expect(result).toEqual(["D", "B", "E", "A", "C"]);
  });

  test("PostOrder traversal should return Left-Right-Root", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.postOrder();

    console.log = originalLog;
    expect(result).toEqual(["D", "E", "B", "C", "A"]);
  });
});


