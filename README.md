# Multi-step form solution by Eivind Simonsen

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence.
- Go back to a previous step to update their selections.
- See a summary of their selections on the final step and confirm their order.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Receive form validation messages if:
  - A field has been missed.
  - The email address is not formatted correctly.
  - A step is submitted, but no selection has been made.

### Screenshot

![Design preview for the Multi-step form coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub repo](https://github.com/eivindsimonsen/multi-step-form)
- Live Site URL: [Live site](https://eas-multi-step-form.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

State management through components was the real big test, and you can see how I implemented it below.

FormContainer.jsx

```jsx
const { backToPlan, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
  <StepOne
    {...data}
    updateFields={updateFields}
    fullNameError={fullNameError}
    emailError={emailError}
    phoneError={phoneError}
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
    planError={planError}
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
```

StepTwo.jsx

```jsx
function StepTwo(props) {
  // const [toggler, setToggler] = useState(false);
  const { onTogglerChange, toggler, setToggler, updateFields, toggleOption, option, setOption, planError } = props;

  const togglePayment = () => {
    setToggler(!toggler);
    onTogglerChange(!toggler);
    setOption([false, false, false]);
  };

  return (
    <>
      <div className="titles">
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </div>
      <div className="option">
        <div
          onClick={() => {
            toggleOption(0);
            updateFields({ plan: "Arcade", pricePlan: toggler ? 90 : 9 });
          }}
          className={option[0] ? "option-active" : ""}>
          <div>
            <h4>Arcade</h4>
            <p>{toggler ? <span>$90/yr</span> : <span>$9/mo</span>}</p>
            {toggler && <p id="year-plan">2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => {
            toggleOption(1);
            updateFields({ plan: "Advanced", pricePlan: toggler ? 120 : 12 });
          }}
          className={option[1] ? "option-active" : ""}>
          <div>
            <h4>Advanced</h4>
            <p>{toggler ? <span>$120/yr</span> : <span>$12/mo</span>}</p>
            {toggler && <p id="year-plan">2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => {
            toggleOption(2);
            updateFields({ plan: "Pro", pricePlan: toggler ? 150 : 15 });
          }}
          className={option[2] ? "option-active" : ""}>
          <div>
            <h4>Pro</h4>
            <p>{toggler ? <span>$150/yr</span> : <span>$15/mo</span>}</p>
            {toggler && <p id="year-plan">2 months free</p>}
          </div>
        </div>
      </div>
      <div className="option-switch">
        <p id={toggler ? "" : "selected-payment-method"}>Monthly</p>
        <input
          type="checkbox"
          hidden="hidden"
          id="username"
          onChange={togglePayment}
          checked={toggler ? "checked" : ""}
        />
        <label
          className="switch"
          htmlFor="username"></label>
        <p id={toggler ? "selected-payment-method" : ""}>Yearly</p>
      </div>
      {planError && <div className="plan-error">Select a plan</div>}
    </>
  );
}
```

### Continued development

Project is considered finished.

## Author

- Website - [My portfolio](https://www.easimonsen.com/)
- Frontend Mentor - [@eivindsimonsen](https://www.frontendmentor.io/profile/eivindsimonsen)

## Acknowledgments

This tutorial by Web Dev Simplified helped me through the process - [youtube channel](https://www.youtube.com/watch?v=uDCBSnWkuH0&ab_channel=WebDevSimplified)
