import { IListContinentUsecase } from "@rfm/interfaces";
import { RFMDatabase } from "../../dbInstance";

export class ListContinentUsecase implements IListContinentUsecase.Usecase {
  constructor(private readonly dbInstance: RFMDatabase) {}

  async execute(
    query?: IListContinentUsecase.Input
  ): Promise<IListContinentUsecase.Output> {
    const continents = await this.dbInstance.continents.where(query).toArray();
    return continents;
  }
}
