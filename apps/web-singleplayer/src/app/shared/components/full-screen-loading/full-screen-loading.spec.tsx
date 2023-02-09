import { render } from "@testing-library/react";

import { FullScreenLoading } from "./full-screen-loading";

describe("FullScreenLoading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FullScreenLoading />);
    expect(baseElement).toBeTruthy();
  });
});
