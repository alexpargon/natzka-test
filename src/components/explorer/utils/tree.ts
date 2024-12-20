/**
 * Represents a tree node in a hierarchical data structure.
 *
 * @template T - The type of data stored in the tree node.
 */
class Tree<T> {
  /**
   * The data stored in the tree node.
   */
  data: T;
  /**
   * The level of the tree node in the hierarchy.
   */
  level: number;
  /**
   * Indicates whether the tree node is visible.
   */
  visible: boolean;
  /**
   * The unique identifier of the tree node.
   */
  uid: string;
  /**
   * The parent tree node.
   */
  parent: null | Tree<T>;
  /**
   * The child tree nodes.
   */
  children: Tree<T>[];

  /**
   * Creates a new instance of the Tree class.
   *
   * @param data - The data to be stored in the tree node.
   * @param parent - The parent tree node, or null if it is the root node.
   */
  constructor(data: T, parent: null | Tree<T>) {
    this.data = data;
    this.level = parent != null ? parent.level + 1 : 0;
    this.visible = false;
    this.uid =
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, "0");
    this.parent = parent;
    this.children = [];
  }

  /**
   * Adds a child tree node to the current tree node.
   *
   * @param data - The data to be stored in the child tree node.
   * @returns The newly created child tree node.
   */
  addChild(data: T): Tree<T> {
    const newChild = new Tree(data, this);
    this.children.push(newChild);
    return newChild;
  }

  /**
   * Changes the parent of a child tree node.
   * The child tree node is removed from the current parent and added to the new parent.
   * @param newParent - The new parent tree node.
   * @returns {void}
   */
  changeParent(newParent: Tree<T>): void {
    if (this.parent === null) {
      return;
    }
    this.parent.children = this.parent.children.filter(
      (child) => child !== this
    );
    this.parent = newParent;
    newParent.children.push(this);
  }

  /**
   * Retrieves the strata representation of the tree node.
   * The strata representation is an object containing the data, level, uid, and visibility of the tree node.
   * @returns The strata representation of the tree node.
   */
  getStrata(): strata {
    return {
      data: this.data as string,
      level: this.level,
      uid: this.uid,
      visible: this.visible,
    };
  }
}

export default Tree;
