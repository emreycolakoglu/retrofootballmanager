import { createContext, useContext } from "react";
import { IGameContext } from "./interface";

export const GameContext = createContext<IGameContext>({});

export const GameContextProvider = (props: any) => {
  return (
    <GameContext.Provider
      value={{
        gameDate: 1654041600000,
        news: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Nam sed sem euismod, suscipit ex vel, aliquam orci.",
          "Curabitur nibh magna, placerat quis nulla sit amet, imperdiet tempus nisi.",
          "Sed finibus erat eu libero auctor viverra.",
          "Nunc ut metus quis eros feugiat malesuada sed vitae orci.",
          "Vestibulum blandit interdum sem a suscipit.",
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Donec porttitor vitae est at euismod.",
        ],
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
