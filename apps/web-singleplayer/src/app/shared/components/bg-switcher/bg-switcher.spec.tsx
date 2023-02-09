import { render } from "@testing-library/react";

import { BgSwitcher } from "./bg-switcher";

describe("BgSwitcher", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BgSwitcher history="asd" />);
    expect(baseElement).toBeTruthy();
  });
});
