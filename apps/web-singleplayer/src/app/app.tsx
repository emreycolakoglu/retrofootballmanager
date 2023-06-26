import { lazy, Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DataCalenderShell,
  DataNewsScroller,
  DataVersionLabel,
} from "./game/data-components";
import {
  BgSwitcher,
  FullscreenButton,
  Layout,
  PrevNextButtons,
  SidebarShell,
  useFullscreen,
} from "@rfm/ui-components";

const LandingView = lazy(
  () => import("./game/landing/views/landingView/landingView")
);
const CreateGameView = lazy(
  () => import("./game/landing/views/createGameView/createGameView")
);
const PlayerDetailView = lazy(
  () => import("./game/players/views/playerDetailView/playerDetailView")
);
const ClubDetailView = lazy(
  () => import("./game/clubs/views/clubDetailView/clubDetailView")
);

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { FullScreenComponent, handle } = useFullscreen();

  return (
    <FullScreenComponent handle={handle}>
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
              <FullscreenButton
                onClick={() => (handle.active ? handle.exit() : handle.enter())}
              >
                go full screen
              </FullscreenButton>
              <DataVersionLabel />
            </SidebarShell>
          }
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<LandingView />} />
              <Route path="/new" element={<CreateGameView />} />
              <Route path="/player/:id/*" element={<PlayerDetailView />} />
              <Route path="/club/:id/*" element={<ClubDetailView />} />
            </Routes>
          </Suspense>
        </Layout>
      </BgSwitcher>
    </FullScreenComponent>
  );
}

export default App;
