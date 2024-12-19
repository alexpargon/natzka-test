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

const Button = styled.button<ButtonProps>`
  .children {
    transition: all 0.5s;
    display: ${(props) => (props.open ? "none" : "initial")};
  }
`;

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
        <Button open={open} className="segment-button" onClick={handleOpen}>
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
