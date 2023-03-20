import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Completed from "./Completed";
import { useMultistepForm } from "./hooks/useMultistepForm";
import imageMobile from "../assets/images/bg-sidebar-mobile.svg";
import imageDesktop from "../assets/images/bg-sidebar-desktop.svg";

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  pricePlan: "",
  addOns: {
    online: "",
    storage: "",
    profile: "",
  },
};

function FormContainer() {
  const [toggler, setToggler] = useState(false);
  const [actives] = useState(["1", "2", "3", "4"]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  console.log(data.plan);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <StepOne
      {...data}
      updateFields={updateFields}
    />,
    <StepTwo
      toggler={toggler}
      setToggler={setToggler}
      onTogglerChange={handleTogglerChange}
      {...data}
      updateFields={updateFields}
    />,
    <StepThree
      toggler={toggler}
      {...data}
      updateFields={updateFields}
    />,
    <StepFour
      {...data}
      updateFields={updateFields}
    />,
  ]);

  function handleTogglerChange(newValue) {
    setToggler(newValue);
  }

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
      <div className="content-wrapper">
        <main className="content-container">
          <div className="steps-container">
            <img
              src={imageDesktop}
              alt="Colorful background image"
            />
            <div className="steps">
              {actives.map((active, index) => (
                <div
                  key={index}
                  className="steps-list">
                  <li className={index === currentStepIndex ? "active" : ""}>{active}</li>
                  <div className="steps-list-text">
                    <p>STEP {active}</p>
                    {index === 0 && <h3>Your Info</h3>}
                    {index === 1 && <h3>Select plan</h3>}
                    {index === 2 && <h3>Add-ons</h3>}
                    {index === 3 && <h3>Summary</h3>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showCompleted && <Completed />}
          {!showCompleted && (
            <>
              <form
                onSubmit={onSubmit}
                className="forms"
                id="form">
                {step}
                <footer className="form-buttons form-buttons-desktop">
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
                    className={"cta " + (isLastStep ? "cta-last-step" : "cta-filled")}>
                    {isLastStep ? "Confirm" : "Next step"}
                  </button>
                </footer>
              </form>
            </>
          )}
        </main>
        {!showCompleted && (
          <footer className="form-buttons form-buttons-mobile">
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
              className={"cta " + (isLastStep ? "cta-last-step" : "cta-filled")}>
              {isLastStep ? "Confirm" : "Next step"}
            </button>
          </footer>
        )}
      </div>
    </>
  );
}

export default FormContainer;
