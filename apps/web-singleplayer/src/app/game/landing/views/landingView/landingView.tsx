import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { Link, NavLink } from "react-router-dom";
import {
  Header,
  HeaderPrimaryLine,
  HeaderSecondaryLine,
  PanelWithTitle,
} from "@rfm/ui-components";
import styles from "./landingView.module.scss";

export default function LandingView() {
  // check if there is a savegame
  const game = useLiveQuery(() => db.game.get(0));

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
          {!game ? (
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <Link to="/new" className={styles.button}>
                  * New Game *
                </Link>
              </div>
              <div className="col-md-5 offset-md-1">
                <p className={styles["label"]}>{"* Create a new game *"}</p>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <button className={styles.button}>*Load Game*</button>
              </div>
              <div className="col-md-5 offset-md-1">
                <p className={styles["label"]}>
                  {"* Load your previous game *"}
                </p>
              </div>
            </div>
          )}
        </PanelWithTitle>
      </div>
    </>
  );
}
