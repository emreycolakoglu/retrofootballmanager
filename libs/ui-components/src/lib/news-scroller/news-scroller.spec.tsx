import { render } from "@testing-library/react";

import { NewsScroller } from "./news-scroller";

describe("NewsScroller", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NewsScroller news={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
