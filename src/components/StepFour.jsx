import React from "react";

function StepFour() {
  return (
    <>
      <div className="titles">
        <h1>Personal info</h1>
        <h2>Please provide your name, email, address, and phone number.</h2>
      </div>
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
    </>
  );
}

export default StepFour;
