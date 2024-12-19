class Tree<T> {
  data: T;
  level: number;
  visible: boolean;
  uid: string;
  parent: null | Tree<T>;
  children: Tree<T>[];

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

  addChild(data: T): Tree<T> {
    const newChild = new Tree(data, this);
    this.children.push(newChild);
    return newChild;
  }

  changeParent(child: Tree<T>): void {
    this.children.push(child);
  }

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
