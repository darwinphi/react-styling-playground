import { useState } from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
  background: ${(props) => (props.bgColor == "primary" ? "palevioletred" : "")};
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppButton = styled.button`
  font-size: calc(10px + 2vmin);
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} bgColor="" />
        <p>Hello Vite + React!</p>
        <p>
          <AppButton onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </AppButton>
        </p>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;
