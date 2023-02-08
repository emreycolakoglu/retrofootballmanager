import { GetPlayerByIdUsecase } from '@rfm/int-usecases';
import db from '../dbInstance';

export async function getPlayerById(
  id: GetPlayerByIdUsecase.Input
): Promise<GetPlayerByIdUsecase.Output> {
  const player = db.players.get(id);
  return player;
}
