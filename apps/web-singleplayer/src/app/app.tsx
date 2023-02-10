import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DataCalenderShell,
  DataNewsScroller,
  DataVersionLabel,
} from "./game/data-components";
import LandingView from "./game/landing/views/landingView/landingView";
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
        </Routes>
      </Layout>
    </BgSwitcher>
  );
}

export default App;
