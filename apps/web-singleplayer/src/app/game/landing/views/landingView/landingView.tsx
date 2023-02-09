import {
  Header,
  HeaderPrimaryLine,
  HeaderSecondaryLine,
  PanelWithTitle,
} from "../../../../shared/components";
import styles from "./LandingView.module.scss";

export default function LandingView() {
  // check if there is a savegame

  // check if db is seeded
  return (
    <>
      <Header backgroundColor="#ffffff" textColor="#111f41">
        <HeaderPrimaryLine title="* Welcome to Futbolico *" />
        <HeaderSecondaryLine subtitle="* Sign in *" />
      </Header>

      <div className="col-md-6 offset-md-3">
        <PanelWithTitle
          title={"* Please choose from the following options *"}
          titleAlign={"left"}
          style={{ marginTop: 8 }}
        >
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <button className={styles.button}>Start Playing</button>
            </div>
            <div className="col-md-5 offset-md-1">
              <p className={styles["label"]}>
                {"* Sign in and start playing *"}
              </p>
            </div>
          </div>
        </PanelWithTitle>
      </div>
    </>
  );
}
