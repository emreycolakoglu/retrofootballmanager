import { render } from "@testing-library/react";

import { AlertModal } from "./alert-modal";

describe("ErrorModal", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AlertModal />);
    expect(baseElement).toBeTruthy();
  });
});
