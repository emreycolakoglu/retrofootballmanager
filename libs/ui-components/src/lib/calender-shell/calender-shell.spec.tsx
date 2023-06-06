import { render } from "@testing-library/react";

import { CalenderShell } from "./calender-shell";

describe("CalenderShell", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CalenderShell />);
    expect(baseElement).toBeTruthy();
  });
});
