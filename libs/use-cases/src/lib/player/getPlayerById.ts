/* eslint-disable @typescript-eslint/no-empty-interface */
import { PlayerModel } from '@rfm/entities';

export namespace GetPlayerByIdUsecase {
  export interface Input extends Number {}
  export interface Output extends PlayerModel.Base {}
}
