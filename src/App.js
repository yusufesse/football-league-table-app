import { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import League from "./components/League";

function App() {
  const [showLeague, setShowLeague] = useState(false);

  return (
    <>
      {showLeague && (
        <button onClick={() => setShowLeague(false)} className="btn btn--hide">
          Hide league table
        </button>
      )}
      {!showLeague && (
        <button onClick={() => setShowLeague(true)} className="btn btn-delete">
          Show league table
        </button>
      )}
      {showLeague && <League />}

      {ReactDOM.createPortal(
        <p className="copyright">
          Copyright &copy; 2022 by Yusuf. All rights reserved.
        </p>,
        document.body
      )}
    </>
  );
}

export default App;
