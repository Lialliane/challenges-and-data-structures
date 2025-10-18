
const BinaryTree = require("../BinaryTree");
const BinarySearchTree = require("../BinarySearchTree");
const {findSecondMax, findSecondMaxSearch} = require("./FindSecondMax");

describe("Second Maximum Value Tests", () => {

  test("Binary tree example", () => {
    const tree = new BinaryTree();
    tree.root = { value: 10, left: { value: 5, left: { value: 3, left: null, right: null }, right: { value: 7, left: null, right: null } }, right: { value: 20, left: { value: 15, left: null, right: null }, right: { value: 25, left: null, right: null } } };

    expect(findSecondMax(tree)).toBe(20);
  });

  test("Binary tree with single node", () => {
    const tree = new BinaryTree();
    tree.root = { value: 42, left: null, right: null };

    expect(findSecondMax(tree)).toBeNull();
  });

  test("Binary tree with negative values", () => {
    const tree = new BinaryTree();
    tree.root = { value: -10, left: { value: -20, left: null, right: null }, right: { value: -5, left: null, right: null } };

    expect(findSecondMax(tree)).toBe(-10);
  });

  // BST-specific tests
  test("BST example from assignment", () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(20);
    bst.add(3);
    bst.add(7);
    bst.add(15);
    bst.add(25);

    expect(findSecondMaxSearch(bst)).toBe(20);
  });

  test("BST with single node", () => {
    const bst = new BinarySearchTree();
    bst.add(42);

    expect(findSecondMaxSearch(bst)).toBeNull();
  });

  test("BST with negative values", () => {
    const bst = new BinarySearchTree();
    bst.add(-10);
    bst.add(-20);
    bst.add(-5);

    expect(findSecondMaxSearch(bst)).toBe(-10);
  });

});
