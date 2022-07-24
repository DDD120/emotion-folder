import Main from "./pages/Main";
import Step from "./pages/Step";
import { useState } from "react";

function App() {
  const [startGame, setStartGame] = useState();

  return <>{startGame ? <Step /> : <Main setStartGame={setStartGame} />}</>;
}

export default App;
