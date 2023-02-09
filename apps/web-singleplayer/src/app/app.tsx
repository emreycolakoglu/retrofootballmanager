import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./shared/database/dexie";

export function App() {
  const [p, setP] = useState<any>(null);

  useEffect(() => {
    db.players.get(1).then((_p) => setP(_p));
  }, []);

  return (
    <>
      <pre>{JSON.stringify(p)}</pre>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{" "}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
