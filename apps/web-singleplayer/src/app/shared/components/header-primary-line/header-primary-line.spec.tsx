import { render } from "@testing-library/react";

import { HeaderPrimaryLine } from "./header-primary-line";

describe("HeaderPrimaryLine", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<HeaderPrimaryLine />);
    expect(baseElement).toBeTruthy();
  });
});
