import { useLocation, useNavigate } from "react-router-dom";
import { BgSwitcher } from "./shared/components/bg-switcher/bg-switcher";
import { CalenderShell } from "./shared/components/calender-shell/calender-shell";
import { Layout } from "./shared/components/layout/layout";
import NewsScroller from "./shared/components/news-scroller/news-scroller";
import { PrevNextButtons } from "./shared/components/prev-next-buttons/prev-next-buttons";
import { SidebarShell } from "./shared/components/sidebar-shell/sidebar-shell";
import { VersionLabel } from "./shared/components/version-label/version-label";

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
      ></Layout>
    </BgSwitcher>
  );
}

export default App;
