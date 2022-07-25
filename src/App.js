import Main from "./pages/Main";
import Step from "./pages/Step";
import { useProgress } from "./store/Progress";

function App() {
  const { startGame } = useProgress();

  return <>{startGame ? <Step /> : <Main />}</>;
}

export default App;
