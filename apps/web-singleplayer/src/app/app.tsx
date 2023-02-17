import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DataCalenderShell,
  DataNewsScroller,
  DataVersionLabel,
} from "./game/data-components";
import CreateGameView from "./game/landing/views/createGameView/createGameView";
import LandingView from "./game/landing/views/landingView/landingView";
import PlayerDetailView from "./game/players/views/playerDetailView/playerDetailView";
import {
  BgSwitcher,
  Layout,
  PrevNextButtons,
  SidebarShell,
} from "./shared/components";

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BgSwitcher history={location.key}>
      <Layout
        footerNode={<DataNewsScroller />}
        sideNode={
          <SidebarShell>
            <DataCalenderShell />
            <PrevNextButtons
              onPrev={() => {
                navigate(-1);
              }}
              onNext={() => {
                navigate(1);
              }}
            />
            <DataVersionLabel />
          </SidebarShell>
        }
      >
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/new" element={<CreateGameView />} />
          <Route path="/player/:id/*" element={<PlayerDetailView />} />
        </Routes>
      </Layout>
    </BgSwitcher>
  );
}

export default App;
