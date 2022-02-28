import { useState } from "react";
import logo from "./logo.svg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  App: {
    textAlign: "center",
  },
  "@keyframes appLogoSpin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  AppLogo: {
    height: "40vmin",
    pointerEvents: "none",
    animation: "$appLogoSpin infinite 20s linear",
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  AppButton: {
    fontSize: "calc(10px + 2vmin)",
  },
});

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className={classes.AppButton}
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
