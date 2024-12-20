import { describe, it, expect } from "vitest";
import Tree from "./tree";

// testing the tree class
describe("Tree", () => {
  it("should create a new tree with the correct properties", () => {
    const tree = new Tree("/", null);
    expect(tree.data).toEqual("/");
    expect(tree.level).toEqual(0);
    expect(tree.visible).toEqual(false);
    expect(tree.parent).toBeNull();
    expect(tree.children).toEqual([]);
  });

  it("should add a child to the tree", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    expect(tree.children).toEqual([child]);
  });

  it("should change the parent of a child", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    const newParent = new Tree("/", null);
    child.changeParent(newParent);
    expect(tree.children).toEqual([]);
    expect(newParent.children).toEqual([child]);
  });

  it("should get the strata of the tree", () => {
    const tree = new Tree("/", null);
    expect(tree.getStrata()).toEqual({
      data: "/",
      level: 0,
      uid: tree.uid,
      visible: false,
    });
  });
});
