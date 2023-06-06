import { render } from "@testing-library/react";

import { HeaderSecondaryLine } from "./header-secondary-line";

describe("HeaderSecondaryLine", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<HeaderSecondaryLine />);
    expect(baseElement).toBeTruthy();
  });
});
