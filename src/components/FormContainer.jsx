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
  pricePlan: 0,
  online: ["", 0],
  storage: ["", 0],
  profile: ["", 0],
};

function FormContainer() {
  const [toggler, setToggler] = useState(false);
  const [actives] = useState(["1", "2", "3", "4"]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  // Saves picked plan to state in step two component
  const [option, setOption] = useState([false, false, false]);
  const toggleOption = (index) => {
    const newOptions = option.map((value, i) => i === index);
    setOption(newOptions);
  };

  // Saves picked add-ons to state in step three component
  const [checked, setChecked] = useState({});
  const toggleChecked = (id) => {
    setChecked((prevChecked) => {
      const updatedChecked = { ...prevChecked };
      updatedChecked[id] = !updatedChecked[id];
      return updatedChecked;
    });
  };

  // Sends values from components to data state in parent, which is passed down to each comp so values are stored
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const changePlan = () => {
    backToPlan();
  };

  const { backToPlan, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <StepOne
      {...data}
      updateFields={updateFields}
    />,
    <StepTwo
      {...data}
      toggler={toggler}
      setToggler={setToggler}
      onTogglerChange={handleTogglerChange}
      updateFields={updateFields}
      toggleOption={toggleOption}
      option={option}
      setOption={setOption}
    />,
    <StepThree
      toggler={toggler}
      {...data}
      updateFields={updateFields}
      checked={checked}
      toggleChecked={toggleChecked}
    />,
    <StepFour
      {...data}
      updateFields={updateFields}
      summaryData={data}
      toggler={toggler}
      changePlan={changePlan}
    />,
  ]);

  function handleTogglerChange(newValue) {
    setToggler(newValue);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log("YOUR FORM HAS BEEN SENT!");
    setShowCompleted(true);
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
