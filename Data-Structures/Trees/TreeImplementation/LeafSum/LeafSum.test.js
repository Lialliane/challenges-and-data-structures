
const BinaryTree = require("../BinaryTree");
const {LeafSum} = require("./LeafSum");

describe("Leaf Sum Tests", () => {

  test("Binary tree example", () => {
    const tree = new BinaryTree();
    tree.root = { value: 10, left: { value: 5, left: { value: 3, left: null, right: null }, right: { value: 7, left: null, right: null } }, right: { value: 20, left: { value: 15, left: null, right: null }, right: { value: 25, left: null, right: null } } };
    expect(LeafSum(tree)).toBe(50);
  });

  test("Binary tree with single node", () => {
    const tree = new BinaryTree();
    tree.root = { value: 42, left: null, right: null };

    expect(LeafSum(tree)).toBe(42);
  });

  test("Binary tree with negative values", () => {
    const tree = new BinaryTree();
    tree.root = { value: -10, left: { value: -20, left: null, right: null }, right: { value: -5, left: null, right: null } };

    expect(LeafSum(tree)).toBe(-25);
  });

});
