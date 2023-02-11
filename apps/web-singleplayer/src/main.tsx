import { seedData } from "@rfm/seeders";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import { GameContextProvider } from "./app/shared/contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

seedData();

root.render(
  <StrictMode>
    <BrowserRouter>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </BrowserRouter>
  </StrictMode>
);
