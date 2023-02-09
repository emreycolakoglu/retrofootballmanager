import { render } from "@testing-library/react";

import { PrevNextButtons } from "./prev-next-buttons";

describe("PrevNextButtons", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PrevNextButtons />);
    expect(baseElement).toBeTruthy();
  });
});
