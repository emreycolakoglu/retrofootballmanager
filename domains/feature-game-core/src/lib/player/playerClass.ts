import { PlayerGenerator } from "@rfm/feature-create-game";
import { calculatePlayerPositionName } from "./calculatePlayerPositionName";
import { calculatePlayerPositionLabel } from "./calculatePlayerPositionLabel";

export class Player {
  firstName: string;
  lastName: string;
  age: number;
  technical: any;
  mental: any;
  physical: any;
  goalkeeping: any;
  position: any;
  prestige: any;

  constructor(values: PlayerGenerator.Outcome) {
    this.firstName = values.firstName;
    this.lastName = values.lastName;
    this.age = values.age;
    this.technical = values.technical;
    this.mental = values.mental;
    this.physical = values.physical;
    this.goalkeeping = values.goalkeeping;
    this.position = values.position;
    this.prestige = values.prestige;
  }

  get positionString() {
    return calculatePlayerPositionLabel(this.position);
  }
}
