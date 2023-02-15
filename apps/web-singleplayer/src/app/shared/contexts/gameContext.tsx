import { createContext, useContext } from "react";
import { IGameContext } from "./interface";

export const GameContext = createContext<IGameContext>({});

export const GameContextProvider = (props: any) => {
  return (
    <GameContext.Provider value={{}}>{props.children}</GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
