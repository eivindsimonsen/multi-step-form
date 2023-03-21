function StepThree(props) {
  // Fetches these states, functions etc from parent through props
  const { toggler, updateFields, checked, toggleChecked } = props;

  return (
    <>
      <div className="titles">
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
      </div>
      <div className="add-ons">
        <div
          onClick={() => {
            toggleChecked("online-service");
            if (checked["online-service"]) {
              updateFields({ online: [] });
            } else {
              updateFields({ online: ["Online service", toggler ? 10 : 1] });
            }
          }}
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
          <span id="purple-span">{toggler ? "+$10/yr" : "+$1/mo"}</span>
        </div>
        <div
          onClick={() => {
            toggleChecked("larger-storage");
            if (checked["larger-storage"]) {
              updateFields({ storage: [] });
            } else {
              updateFields({ storage: ["Larger storage", toggler ? 12 : 2] });
            }
          }}
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
          <span id="purple-span">{toggler ? "+$12/yr" : "+$2/mo"}</span>
        </div>
        <div
          onClick={() => {
            toggleChecked("customizable-profile");
            if (checked["customizable-profile"]) {
              updateFields({ profile: [] });
            } else {
              updateFields({ profile: ["Customizable profile", toggler ? 12 : 2] });
            }
          }}
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
          <span id="purple-span">{toggler ? "+$20/yr" : "+$2/mo"}</span>
        </div>
      </div>
    </>
  );
}

export default StepThree;
