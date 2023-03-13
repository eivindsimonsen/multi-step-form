import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Completed from "./Completed";
import { useMultistepForm } from "./hooks/useMultistepForm";
import imageMobile from "../assets/images/bg-sidebar-mobile.svg";

function FormContainer() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<StepOne />, <StepTwo />, <StepThree />, <StepFour />]);
  const [actives] = useState(["1", "2", "3", "4"]);
  const [showCompleted, setShowCompleted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    return next();
  }

  function handleShowCompleted() {
    if (isLastStep) {
      alert("Is all info correct?");
      setShowCompleted(true);
    }
  }

  return (
    <>
      <header className="mobile-header">
        <img
          src={imageMobile}
          alt="Colorful background image"
        />
      </header>
      <main className="content-container">
        <div className="steps">
          {actives.map((active, index) => (
            <li
              className={index === currentStepIndex ? "active" : ""}
              key={index}>
              {active}
            </li>
          ))}
        </div>
        {showCompleted && <Completed />}
        {!showCompleted && (
          <form
            onSubmit={onSubmit}
            className="forms"
            id="form">
            {step}
          </form>
        )}
      </main>
      {!showCompleted && (
        <footer className="form-buttons-mobile">
          <button
            type="button"
            onClick={back}
            className={"cta " + (isFirstStep ? "cta-hidden" : "")}>
            Go back
          </button>
          <button
            form="form"
            type="submit"
            onClick={handleShowCompleted}
            className="cta cta-filled">
            {isLastStep ? "Confirm" : "Next step"}
          </button>
        </footer>
      )}
    </>
  );
}

export default FormContainer;
