// Testing Segment.tsx
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Segment } from "./Segment";

describe("Segment", () => {
  const data: strata = {
    level: 0,
    uid: "0",
    data: "test",
    visible: true,
  };

  test("renders Segment component", () => {
    render(<Segment data={data} action={() => {}} />);
    const segmentElement = screen.getByText(data.data);
    expect(segmentElement).toBeInTheDocument();
  });
});
