import React from "react";

function StepFour() {
  return (
    <>
      <div className="titles">
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
      </div>
      <div className="summary">
        <div className="summary-bg">
          <div>
            <div>
              <h4 className="summary-option-title">Arcade (Yearly)</h4>
              <span id="span-underline">Change</span>
            </div>
            <span id="blue-span-summary">$90/yr</span>
          </div>
          <hr />
          <div>
            <h4>Online service</h4>
            <span id="blue-span">+$10/yr</span>
          </div>
          <div>
            <h4>Larger storage</h4>
            <span id="blue-span">+$20/yr</span>
          </div>
        </div>
        <div className="summary-total">
          <h4>Total (per year)</h4>
          <span id="purple-span-total">$120/yr</span>
        </div>
      </div>
    </>
  );
}

export default StepFour;
