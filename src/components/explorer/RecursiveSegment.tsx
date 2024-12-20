// import styled from "styled-components";
import { Segment } from "./Segment";
import Tree from "./utils/tree";
import { setChildrenVisible, setRecursivelyNonVisible } from "./utils/uitl";

/**
 * Renders a recursive segment of the file explorer.
 * @param {RecursiveSegmentProps} props - The props for the RecursiveSegment component.
 * @param {Tree<string>} props.node - The node to be rendered.
 * @param {Function} props.action - The callback function to be called when a segment is selected.
 * @returns {JSX.Element} The rendered RecursiveSegment component.
 */
function RecursiveSegment(props: RecursiveSegmentProps) {
  const { node, action } = props;

  /**
   * Handles the opening of the segment.
   * @param {boolean} open - The flag to indicate if the segment is open.
   * @returns {void}
   */
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
