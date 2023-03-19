import { useState } from "react";

function StepTwo() {
  const [option, setOption] = useState([false, false, false]);
  const [toggler, setToggler] = useState(false);

  const toggleOption = (index) => {
    const newOptions = option.map((value, i) => i === index);
    setOption(newOptions);
  };

  const togglePayment = () => {
    setToggler(!toggler);
  };

  return (
    <>
      <div className="titles">
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </div>
      <div className="option">
        <div
          onClick={() => toggleOption(0)}
          className={option[0] ? "option-active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40">
            <g
              fill="none"
              fillRule="evenodd">
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#FFAF7E"></circle>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 00-1 1V29a1 1 0 001 1h9.995a1 1 0 001-1v-9.995a1 1 0 00-1-1zm-5.997 8.996h-2v-1.999h2v2zm2-11.175a2.999 2.999 0 10-2 0v2.18h2v-2.18z"></path>
            </g>
          </svg>
          <div>
            <h4>Arcade</h4>
            <p>{toggler ? <span>$90/yr</span> : <span>$9/mo</span>}</p>
            {toggler && <p id="year-plan">2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => toggleOption(1)}
          className={option[1] ? "option-active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40">
            <g
              fill="none"
              fillRule="evenodd">
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#F9818E"></circle>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15zM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988zm5.347.393a.862.862 0 01-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856a.863.863 0 01-.87.855zm1.9 1.866a.86.86 0 01-.87-.852.86.86 0 01.87-.855c.48 0 .87.38.87.855a.86.86 0 01-.87.852zm0-3.736a.862.862 0 01-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 01-.87.854zm1.899 1.87a.862.862 0 01-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 01-.868.855z"></path>
            </g>
          </svg>
          <div>
            <h4>Advanced</h4>
            <p>{toggler ? <span>$120/yr</span> : <span>$12/mo</span>}</p>
            {toggler && <p id="year-plan">2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => toggleOption(2)}
          className={option[2] ? "option-active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40">
            <g
              fill="none"
              fillRule="evenodd">
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="#483EFF"></circle>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M26.666 13H13.334A3.333 3.333 0 0010 16.333v7.193a3.447 3.447 0 002.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 003.56.8 3.447 3.447 0 002.14-3.24v-7.193A3.333 3.333 0 0026.666 13zm-9.333 6H16v1.333a.667.667 0 01-1.333 0V19h-1.333a.667.667 0 010-1.334h1.333v-1.333a.667.667 0 111.333 0v1.333h1.333a.667.667 0 110 1.334zm7.333 2a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333zM26 18.333a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"></path>
            </g>
          </svg>
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
          onClick={togglePayment}
        />
        <label
          className="switch"
          htmlFor="username"></label>
        <p id={toggler ? "selected-payment-method" : ""}>Yearly</p>
      </div>
    </>
  );
}

export default StepTwo;
