import Tree from "./tree";

/**
 * search for a child in the tree.
 * @param {Tree<string>} tree - The tree to search in.
 * @param {string} data - The data to search for.
 * @returns {Tree<string> | undefined} The child node if found, otherwise undefined.
 * @example
 * const tree = new Tree("/", null);
 * const child = tree.addChild("child");
 * const result = searchForChild(tree, "child");
 * console.log(result === child); // true
 * console.log(searchForChild(tree, "not found")); // undefined
 */
export function searchForChild(tree: Tree<string>, data: string) {
  let result: Tree<string> | undefined = undefined;
  tree.children.forEach((child) => {
    if (child.data === data) {
      result = child;
      return;
    }
  });
  return result;
}

/**
 * set all children of a tree to visible.
 * @param {Tree<string>} tree - The tree to set children visible.
 * @returns {void}
 * @example
 * const tree = new Tree("/", null);
 * tree.addChild("child");
 * setChildrenVisible(tree);
 * console.log(tree.visible); // true
 * console.log(tree.children[0].visible); // true
 */
export const setChildrenVisible = (tree: Tree<string>) => {
  tree.children.forEach((child) => {
    child.visible = true;
  });
};

/**
 * set all children of a tree to non-visible.
 * @param {Tree<string>} tree - The tree to set children non-visible.
 * @returns {void}
 * @example
 * const tree = new Tree("/", null);
 * tree.addChild("child");
 * setRecursivelyNonVisible(tree);
 * console.log(tree.visible); // true
 * console.log(tree.children[0].visible); // false
 */
export const setRecursivelyNonVisible = (tree: Tree<string>) => {
  tree.children.forEach((child) => {
    setRecursivelyNonVisible(child);
    child.visible = false;
  });
};

/**
 * depth first search of the tree.
 * @param {Tree<string>} node - The node to start the depth first search.
 * @returns {strata[]} The strata of the nodes in the tree.
 * @example
 * const tree = new Tree("/", null);
 * tree.addChild("child");
 * const result = depthFirstSearch(tree);
 * console.log(result); // [{data: "/", level: 0, visible: true}, {data: "child", level: 1, visible: true}]
 */
export function depthFirstSearch(node: Tree<string>): strata[] {
  let result: strata[] = [];
  result.push(node.getStrata());
  node.children.forEach((child) => {
    result = result.concat(depthFirstSearch(child));
  });
  return result;
}

/**
 * breadth first search of the tree.
 * @param {Tree<string>} root - The root node to start the breadth first search.
 * @returns {void}
 * @example
 * const tree = new Tree("/", null);
 * tree.addChild("child");
 * breadthFirstSearch(tree);
 * console.log(tree.getStrata()); // [{data: "/", level: 0, visible: true}, {data: "child", level: 1, visible: true}]
 */
export function breadthFirstSearch(root: Tree<string>): void {
  const queue: Tree<string>[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(node.data);
    node.children.forEach((child) => queue.push(child));
  }
}
