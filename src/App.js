import { useContext } from "react";
import ProgressContext from "./store/progress";
import Main from "./pages/Main";
import Intro from "./pages/Intro";

function App() {
  const progress = useContext(ProgressContext);
  return (
    <ProgressContext.Provider>
      {progress === 0 && <Main />}
      {progress === 1 && <Intro />}
    </ProgressContext.Provider>
  );
}

export default App;
