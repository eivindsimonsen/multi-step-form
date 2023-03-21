// Import the 'useState' hook from the React library.
import { useState } from "react";

// Define a custom hook called 'useMultistepForm', which takes an array of 'steps' as a parameter.
export function useMultistepForm(steps) {
  // Use the 'useState' hook to define a state variable called 'currentStepIndex', which defaults to 0.
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Define a function called 'next', which increments the 'currentStepIndex' state variable by 1, unless the current step is the last one.
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  // Define a function called 'back', which decrements the 'currentStepIndex' state variable by 1, unless the current step is the first one.
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function backToPlan() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 2;
    });
  }

  // Define a function called 'goTo', which sets the 'currentStepIndex' state variable to a given index.
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  // Return an object containing several properties and functions:
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    backToPlan,
  };
}
