import { IGetPlayerByIdUsecase } from "@rfm/interfaces";
import { RFMDatabase } from "../../dbInstance";

export class GetPlayerByIdUsecase implements IGetPlayerByIdUsecase.Usecase {
  constructor(private readonly dbInstance: RFMDatabase) {}

  async execute(
    playerId: IGetPlayerByIdUsecase.Input
  ): Promise<IGetPlayerByIdUsecase.Output> {
    const player = this.dbInstance.players.get(playerId);
    return player;
  }
}
