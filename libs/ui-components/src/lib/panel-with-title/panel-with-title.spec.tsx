import { render } from "@testing-library/react";

import PanelWithTitle from "./panel-with-title";

describe("PanelWithTitle", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PanelWithTitle />);
    expect(baseElement).toBeTruthy();
  });
});
