import { ICreateContinentUsecase } from "@rfm/interfaces";
import { RFMDatabase } from "../../dbInstance";

export class CreateContinentUsecase implements ICreateContinentUsecase.Usecase {
  constructor(private readonly dbInstance: RFMDatabase) {}

  async execute(
    continent: ICreateContinentUsecase.Input
  ): Promise<ICreateContinentUsecase.Output> {
    const newContinent = await this.dbInstance.continents.add(continent);
    return { id: newContinent, ...continent };
  }
}
