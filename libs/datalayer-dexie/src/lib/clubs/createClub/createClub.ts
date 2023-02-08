import { ICreateClubUsecase } from "@rfm/interfaces";
import { RFMDatabase } from "../../dbInstance";

export class CreateClubUsecase implements ICreateClubUsecase.Usecase {
  constructor(private readonly dbInstance: RFMDatabase) {}

  async execute(
    club: ICreateClubUsecase.Input
  ): Promise<ICreateClubUsecase.Output> {
    const newClub = await this.dbInstance.clubs.add(club);
    return { id: newClub, ...club };
  }
}
