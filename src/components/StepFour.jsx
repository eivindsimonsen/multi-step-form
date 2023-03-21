import { useState, useEffect } from "react";

function StepFour(props) {
  const { summaryData, toggler, changePlan } = props;
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    if (summaryData.online[0]) {
      setOnline(true);
    } else {
      setOnline(false);
    }

    if (summaryData.storage[0]) {
      setStorage(true);
    } else {
      setStorage(false);
    }

    if (summaryData.profile[0]) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  }, [summaryData.online, summaryData.storage, summaryData.profile]);

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
              <h4 className="summary-option-title">
                {summaryData.plan} ({toggler ? "Yearly" : "Monthly"})
              </h4>
              <span
                onClick={changePlan}
                id="span-underline">
                Change
              </span>
            </div>
            <span id="blue-span-summary">
              ${summaryData.pricePlan}/{toggler ? "yr" : "mo"}
            </span>
          </div>
          <hr />
          {online ? (
            <div>
              <h4>{summaryData.online[0]}</h4>
              <span id="blue-span">
                +${summaryData.online[1]}/{toggler ? "yr" : "mo"}
              </span>
            </div>
          ) : null}
          {storage ? (
            <div>
              <h4>{summaryData.storage[0]}</h4>
              <span id="blue-span">
                +${summaryData.storage[1]}/{toggler ? "yr" : "mo"}
              </span>
            </div>
          ) : null}
          {profile ? (
            <div>
              <h4>{summaryData.profile[0]}</h4>
              <span id="blue-span">
                +${summaryData.profile[1]}/{toggler ? "yr" : "mo"}
              </span>
            </div>
          ) : null}
        </div>
        <div className="summary-total">
          <h4>Total {toggler ? "(per year)" : "(per month)"}</h4>
          <span id="purple-span-total">
            ${summaryData.pricePlan + summaryData.online[1] + summaryData.storage[1] + summaryData.profile[1]}/{toggler ? "yr" : "mo"}
          </span>
        </div>
      </div>
    </>
  );
}

export default StepFour;
