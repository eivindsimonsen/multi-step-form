import { useState } from "react";

function StepThree() {
  const [checked, setChecked] = useState({});

  const toggleChecked = (id) => {
    setChecked((prevChecked) => {
      const updatedChecked = { ...prevChecked };
      updatedChecked[id] = !updatedChecked[id];
      return updatedChecked;
    });
  };

  console.log(checked);

  return (
    <>
      <div className="titles">
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
      </div>
      <div className="add-ons">
        <div
          onClick={() => toggleChecked("online-service")}
          className={"add-ons-container " + (checked["online-service"] ? "add-ons-checked" : "")}>
          <div>
            <input
              type="checkbox"
              id="add-on"
              onChange={() => toggleChecked("online-service")}
              checked={checked["online-service"] || false}
            />
            <div>
              <h4>Online Service</h4>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <span id="purple-span">+$1/mo</span>
        </div>
        <div
          onClick={() => toggleChecked("larger-storage")}
          className={"add-ons-container " + (checked["larger-storage"] ? "add-ons-checked" : "")}>
          <div>
            <input
              type="checkbox"
              id="add-on"
              onChange={() => toggleChecked("larger-storage")}
              checked={checked["larger-storage"] || false}
            />
            <div>
              <h4>Larger storage</h4>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <span id="purple-span">+$2/mo</span>
        </div>
        <div
          onClick={() => toggleChecked("customizable-profile")}
          className={"add-ons-container " + (checked["customizable-profile"] ? "add-ons-checked" : "")}>
          <div>
            <input
              type="checkbox"
              id="add-on"
              onChange={() => toggleChecked("customizable-profile")}
              checked={checked["customizable-profile"] || false}
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
