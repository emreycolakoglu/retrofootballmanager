import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingView from "./game/landing/views/landingView/landingView";
import {
  BgSwitcher,
  CalenderShell,
  Layout,
  NewsScroller,
  PrevNextButtons,
  SidebarShell,
  VersionLabel,
} from "./shared/components";

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BgSwitcher history={location.key}>
      <Layout
        footerNode={
          <NewsScroller
            news={[
              {
                label: "Welcome",
              },
            ]}
          />
        }
        sideNode={
          <SidebarShell>
            <CalenderShell line1="sth" line2="sth" line3="sth" />
            <PrevNextButtons
              onPrev={() => {
                navigate(-1);
              }}
              onNext={() => {
                navigate(1);
              }}
            />
            <VersionLabel version={"0.0.1"} />
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
