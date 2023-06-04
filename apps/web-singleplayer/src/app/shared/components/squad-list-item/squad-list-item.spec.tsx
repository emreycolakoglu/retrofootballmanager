import { render } from "@testing-library/react";

import { SquadListItem } from "./squad-list-item";
import {
  PlayerPosition,
  PlayerQuality,
  PlayerStyle,
  generatePlayer,
} from "@rfm/factories";
import { Button } from "../button/button";

describe("SquadListItem", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <SquadListItem
        player={generatePlayer({
          ageTemplate: {
            min: 20,
            max: 30,
          },
          quality: PlayerQuality.REGULAR,
          style: PlayerStyle.BOX_2_BOX,
          position: PlayerPosition.ATTACKINGMIDFIELD,
          clubId: "1",
          nationality: { name: "" } as any,
        })}
        buttonNode={
          <Button
            style={{
              minHeight: 22,
              height: 22,
              borderRadius: 5,
            }}
          >
            GK
          </Button>
        }
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
