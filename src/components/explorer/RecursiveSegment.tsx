// import styled from "styled-components";
import { Segment } from "./Segment";
import Tree from "./utils/tree";
import { setChildrenVisible, setRecursivelyNonVisible } from "./utils/uitl";

function RecursiveSegment(props: RecursiveSegmentProps) {
  const { node, action } = props;

  const handleOpen = (open: boolean) => {
    action(node.getStrata());
    if (open) {
      setChildrenVisible(node);
    } else {
      setRecursivelyNonVisible(node);
    }
  };

  return (
    <>
      <Segment
        data={node.getStrata()}
        action={handleOpen}
        key={JSON.stringify(node.getStrata())}
      />
      {node.children.map((child: Tree<string>) => {
        return (
          <RecursiveSegment
            node={child}
            action={action}
            key={"r" + JSON.stringify(child.getStrata())}
          />
        );
      })}
    </>
  );
}

export { RecursiveSegment };
