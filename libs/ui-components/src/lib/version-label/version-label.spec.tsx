import { render } from "@testing-library/react";

import { VersionLabel } from "./version-label";

describe("VersionLabel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<VersionLabel />);
    expect(baseElement).toBeTruthy();
  });
});
