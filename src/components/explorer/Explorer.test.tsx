// Testing Explorer.tsx
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Explorer } from "./Explorer";

describe("Explorer", () => {
  const data = ["/usr", "/var"];

  test("renders Explorer component", () => {
    render(<Explorer data={data} onSelect={() => {}} />);
    const segmentRoot = screen.queryByText("/");
    const segmentElement = screen.queryByText("usr");
    const segmentChild = screen.queryByText("var");
    expect(segmentRoot).toBeInTheDocument();
    expect(segmentElement).toBeInTheDocument();
    expect(segmentChild).toBeInTheDocument();
  });
});
