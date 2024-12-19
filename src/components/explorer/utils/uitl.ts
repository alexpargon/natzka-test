import Tree from "./tree";

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

export const setChildrenVisible = (tree: Tree<string>) => {
  tree.children.forEach((child) => {
    child.visible = true;
  });
};

export const setRecursivelyNonVisible = (tree: Tree<string>) => {
  tree.children.forEach((child) => {
    setRecursivelyNonVisible(child);
    child.visible = false;
  });
};

export function depthFirstSearch(node: Tree<string>): strata[] {
  let result: strata[] = [];
  result.push(node.getStrata());
  node.children.forEach((child) => {
    result = result.concat(depthFirstSearch(child));
  });
  return result;
}

export function breadthFirstSearch(root: Tree<string>): void {
  const queue: Tree<string>[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(node.data);
    node.children.forEach((child) => queue.push(child));
  }
}
