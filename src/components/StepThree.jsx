import React from "react";

function StepThree() {
  return (
    <>
      <div className="titles">
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
      </div>
      <div className="add-ons">
        <div className="add-ons-container">
          <div>
            <input
              type="checkbox"
              id="add-on"
            />
            <div>
              <h4>Online Service</h4>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <span id="purple-span">+$1/mo</span>
        </div>
        <div className="add-ons-container">
          <div>
            <input
              type="checkbox"
              id="add-on"
            />
            <div>
              <h4>Larger storage</h4>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <span id="purple-span">+$2/mo</span>
        </div>
        <div className="add-ons-container">
          <div>
            <input
              type="checkbox"
              id="add-on"
            />
            <div>
              <h4>Customizable profile</h4>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <span id="purple-span">+$2/mo</span>
        </div>
      </div>
    </>
  );
}

export default StepThree;
