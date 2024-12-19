// Testing RecursiveSegment.tsx
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecursiveSegment } from "./RecursiveSegment";
import Tree from "./utils/tree";

describe("RecursiveSegment", () => {
  const node = new Tree<string>("/", null);
  node.addChild("usr");
  node.addChild("var");

  test("renders RecursiveSegment component", () => {
    render(<RecursiveSegment node={node} action={() => {}} />);
    const segmentElement = screen.getByText("/");
    const segmentChild = screen.getByText("usr");
    const segmentSecondChild = screen.getByText("var");
    expect(segmentElement).toBeInTheDocument();
    expect(segmentChild).toBeInTheDocument();
    expect(segmentSecondChild).toBeInTheDocument();
  });
});
