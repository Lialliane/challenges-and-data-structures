const BinarySearchTree = require("./BinarySearchTree");


describe("BinarySearchTree Operations", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);
  });

  test("Add() should insert nodes correctly", () => {
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
    expect(bst.root.left.left.value).toBe(2);
    expect(bst.root.left.right.value).toBe(7);
  });

  test("Contains() should find existing values", () => {
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

  test("Contains() should return false for missing values", () => {
    expect(bst.contains(100)).toBe(false);
  });

  test("Remove() should remove a leaf node", () => {
    bst.remove(2);
    expect(bst.contains(2)).toBe(false);
  });

  test("Remove() should remove node with one child", () => {
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });

  test("Remove() should remove node with two children", () => {
    bst.remove(10);
    expect(bst.contains(10)).toBe(false);
  });
});
