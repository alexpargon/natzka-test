import { useEffect, useState } from "react";
import styled from "styled-components";
import Tree from "./utils/tree";
import { searchForChild } from "./utils/uitl";
import { RecursiveSegment } from "./RecursiveSegment";

const Style = styled.div`
  font-weight: 200;
`;

const Explorer = (props: ExplorerProps) => {
  const { onSelect } = props;
  const [tree, setTree] = useState<Tree<string>>();

  const handleSegment = (data: strata) => {
    onSelect(data);
  };

  useEffect(() => {
    const { data } = props;

    // use shallow copy to trigger update when using setTree but avoid excessive computation that would entail a deep clone
    const newTree = new Tree("/", null);
    newTree.visible = true;
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

  const loading = <div>loading</div>;

  return (
    <Style>
      {tree === undefined ? (
        loading
      ) : (
        <ul>
          {
            <RecursiveSegment
              node={tree}
              action={handleSegment}
              key={"r" + JSON.stringify(tree.getStrata())}
            ></RecursiveSegment>
          }
        </ul>
      )}
    </Style>
  );
};

export { Explorer };
