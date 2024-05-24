import { useState, useEffect } from "react";

const MultiStepControll = (numberSteps = 5) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    console.log("mul", stepIndex);
  });

  const c = () => {
    return stepIndex;
  };

  const goBack = () => {
    if (stepIndex !== 0) {
      setStepIndex((p) => p - 1);
    } else {
      return;
    }
  };

  const goAfter = () => {
    if (stepIndex !== numberSteps - 1) {
      setStepIndex((p) => p + 1);
    } else return;
  };

  const goStep = (step) => {
    setStepIndex(step);
  };

  return {
    stepIndex,
    goAfter,
    goBack,
    goStep,
    c,
    fristStep: stepIndex === 0,
    lastStep: stepIndex === numberSteps - 2,
    conf: stepIndex === numberSteps - 1,
  };
};

export default MultiStepControll;
