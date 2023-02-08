import { ICreatePlayerUsecase, PlayerModel } from "@rfm/interfaces";
import { RFMDatabase } from "../../dbInstance";

export class CreatePlayerUsecase implements ICreatePlayerUsecase.Usecase {
  constructor(private readonly dbInstance: RFMDatabase) {}

  async execute(player: PlayerModel.Base): Promise<PlayerModel.Base> {
    const newPlayerId = await this.dbInstance.players.add(player);
    return { id: newPlayerId, ...player };
  }
}
