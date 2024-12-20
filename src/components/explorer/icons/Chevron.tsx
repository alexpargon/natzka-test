import styled from "styled-components";

/**
 * Icon component for Chevron.
 * @param className - The class name for styling the component.
 * @returns The rendered SVG icon component.
 */
export const IconChevron = styled(({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m13.9697 4.71967c-.2929.29289-.2929.76777 0 1.06066l6.2196 6.2196725-6.2196 6.2196975c-.2929.2929-.2929.7677 0 1.0606s.7677.2929 1.0606 0l6.75-6.75c.2929-.2929.2929-.7677 0-1.0606l-6.75-6.75003c-.2929-.29289-.7677-.29289-1.0606 0z"
        fill="#fff"
      />
    </svg>
  );
})<ChevronProps>`
  transition: all 0.5s;
  transform: ${(props) => (props.open ? `rotate(90deg)` : "")};
`;
