import { createContext, useContext, useMemo, useState } from "react";

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const action = useMemo(
    () => ({
      new() {
        setStep(1);
        localStorage.setItem("step", 1);
      },
      increase() {
        setStep((prev) => prev + 1);
        localStorage.setItem("step", step + 1);
      },
      loadGame() {
        const stepIndex = localStorage.getItem("step");
        setStep(Number(stepIndex));
      },
      startGame() {
        setStartGame(true);
      },
      goHome() {
        setStartGame(false);
      },
    }),
    [step]
  );

  const value = useMemo(
    () => ({ step, action, startGame, setStartGame }),
    [step, action, startGame, setStartGame]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

const useProgress = () => {
  const value = useContext(ProgressContext);
  if (value === undefined) {
    throw new Error("useProgress should be used within ProgressProvider");
  }
  return value;
};

export { ProgressProvider, useProgress };
