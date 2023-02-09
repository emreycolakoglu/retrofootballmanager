import { render } from "@testing-library/react";

import { SidebarShell } from "./sidebar-shell";

describe("SidebarShell", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SidebarShell />);
    expect(baseElement).toBeTruthy();
  });
});
