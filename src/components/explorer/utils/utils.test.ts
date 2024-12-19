// testing the utils functions
import { describe, it, expect, vi } from "vitest";
import {
  breadthFirstSearch,
  depthFirstSearch,
  searchForChild,
  setChildrenVisible,
  setRecursivelyNonVisible,
} from "./uitl";
import Tree from "./tree";

// testing the searchForChild function
describe("searchForChild", () => {
  it("should return the child if it exists", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    expect(searchForChild(tree, "child")).toEqual(child);
  });

  it("should return undefined if the child does not exist", () => {
    const tree = new Tree("/", null);
    tree.addChild("child");
    expect(searchForChild(tree, "nonexistent")).toBeUndefined();
  });
});

// testing the setChildrenVisible function
describe("setChildrenVisible", () => {
  it("should set the visible property of all children to true", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    setChildrenVisible(tree);
    expect(child.visible).toEqual(true);
  });
});

// testing the setRecursivelyNonVisible function
describe("setRecursivelyNonVisible", () => {
  it("should set the visible property of all children to false", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    setChildrenVisible(tree);
    setRecursivelyNonVisible(tree);
    expect(child.visible).toEqual(false);
  });
});

// testing the depthFirstSearch function
describe("depthFirstSearch", () => {
  it("should return an array of strata in depth-first order", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    const grandchild = child.addChild("grandchild");
    const greatGrandchild = grandchild.addChild("greatGrandchild");
    const result = [
      { data: "/", level: 0, uid: tree.uid, visible: false },
      { data: "child", level: 1, uid: child.uid, visible: false },
      { data: "grandchild", level: 2, uid: grandchild.uid, visible: false },
      {
        data: "greatGrandchild",
        level: 3,
        uid: greatGrandchild.uid,
        visible: false,
      },
    ];
    expect(depthFirstSearch(tree)).toEqual(result);
  });
});

// testing the breadthFirstSearch function

describe("breadthFirstSearch", () => {
  it("should log the data of each node in breadth-first order", () => {
    const tree = new Tree("/", null);
    const child = tree.addChild("child");
    const grandchild = child.addChild("grandchild");
    grandchild.addChild("greatGrandchild");
    const spy = vi.spyOn(console, "log");
    breadthFirstSearch(tree);
    expect(spy).toHaveBeenCalledWith("/");
    expect(spy).toHaveBeenCalledWith("child");
    expect(spy).toHaveBeenCalledWith("grandchild");
    expect(spy).toHaveBeenCalledWith("greatGrandchild");
  });
});
