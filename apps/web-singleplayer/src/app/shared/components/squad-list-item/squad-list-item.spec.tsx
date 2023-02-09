import { render } from "@testing-library/react";

import { SquadListItem } from "./squad-list-item";

describe("SquadListItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SquadListItem />);
    expect(baseElement).toBeTruthy();
  });
});
