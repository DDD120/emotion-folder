import { useProgress } from "../store/Progress";

const Step = () => {
  const [step] = useProgress();
  console.log(step);
  return (
    <>
      <h1>In Game</h1>
      {step === 1 && "step1"}
      {step === 2 && "step2"}
      {step === 3 && "step3"}
      {step === 4 && "step4"}
      {step === 5 && "step5"}
    </>
  );
};

export default Step;
