import { useState } from "react";

function StepOne(props) {
  const [steps, setSteps] = useState(["1", "2", "3", "4"]);
  const activeIndex = 0; // the index of the active step

  return (
    <>
      <div className="steps">
        {steps.map((step, index) => (
          <li
            className={index === activeIndex ? "active" : ""}
            key={index}>
            {step}
          </li>
        ))}
      </div>
      <div className="titles">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
      <form className="forms">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
}

export default StepOne;
