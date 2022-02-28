import { useState } from "react";
import logo from "./logo.svg";
import style from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className={style.appButton}
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
