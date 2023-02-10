import { lazy } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DataCalenderShell,
  DataNewsScroller,
  DataVersionLabel,
} from "./game/data-components";
import {
  BgSwitcher,
  Layout,
  PrevNextButtons,
  SidebarShell,
} from "./shared/components";

const LandingView = lazy(
  () => import("./game/landing/views/landingView/landingView")
);
const CreateGameView = lazy(
  () => import("./game/landing/views/createGameView/createGameView")
);

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
        </Routes>
      </Layout>
    </BgSwitcher>
  );
}

export default App;
