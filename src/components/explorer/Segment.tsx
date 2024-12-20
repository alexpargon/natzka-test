import { useState } from "react";
import styled from "styled-components";
import { IconChevron } from "./icons";

const Style = styled.div<SegmentStyle>`
  padding-left: ${(props) =>
    props.$level ? (props.$level * 8).toString() + "px" : "0"};
  display: ${(props) => (props.$visible ? "block" : "none")};
  .segment-button {
  }
  .segment-content {
    display: flex;
    .icon {
      align-self: center;
      opacity: 0.6;
      margin-right: 8px;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  transition: all 0.5s;
  &:hover {
    color: #aaa;
  }
`;

/**
 * Represents a segment component in the file explorer.
 * @param {SegmentProps} props - The props for the Segment component.
 * @param {strata} props.data - The data for the segment.
 * @param {Function} props.action - The callback function to be called when the segment is clicked.
 * @returns {JSX.Element} The rendered Segment component.
 */
function Segment(props: SegmentProps) {
  const { data, action } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    action(!open);
  };

  return (
    <Style $level={data.level} $visible={data.visible}>
      <li>
        <Button
          className="segment-button"
          onClick={handleOpen}
          aria-expanded={open}
          aria-controls={`segment-content-${data.uid}`}
          aria-hidden={!open}
          aria-label={data.data}
        >
          <div className="segment-content">
            <IconChevron open={open} className="icon" />
            <p>{data.data}</p>
          </div>
        </Button>
      </li>
    </Style>
  );
}

export { Segment };
