import { useEffect, useState } from "react";
import styled from "styled-components";
import Tree from "./utils/tree";
import { depthFirstSearch, searchForChild } from "./utils/uitl";
import { Segment } from "./Segment";

type ExplorerProps = {
  data: string[];
};

const Style = styled.div`
  font-weight: 200;
`;

const Explorer = (props: ExplorerProps) => {
  const [tree, setTree] = useState<Tree<string>>();

  const handleSegment = (data: strata) => {
    console.log("segment was pressed: ", data);
  };

  useEffect(() => {
    const { data } = props;

    // use shallow copy to trigger update when using setTree but avoid excessive computation that would entail a deep clone
    const newTree: Tree<string> = new Tree("/", null);
    // starting with root
    let currentParent = newTree;

    for (let i = 0; i < data.length; i += 1) {
      currentParent = newTree;
      const pathStrings: string[] = data[i].split("/").filter((p) => p !== "");
      pathStrings.forEach((nodeName) => {
        const findChild = searchForChild(newTree, nodeName);
        if (findChild !== undefined) {
          // skip
          currentParent = findChild;
        } else {
          const child = currentParent.addChild(nodeName);
          currentParent = child;
        }
      });
    }
    // console.log("resulting tree structure: ", newTree);
    setTree(newTree);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateNode = (elem: strata) => {
    return (
      <Segment data={elem} key={elem.uid} action={handleSegment}></Segment>
    );
  };

  const nodes = tree
    ? depthFirstSearch(tree).map((elem) => {
        return generateNode(elem);
      })
    : [<></>];

  const loading: JSX.Element = <div>loading</div>;

  return <Style>{tree === undefined ? loading : <ul>{nodes}</ul>}</Style>;
};

export { Explorer };
