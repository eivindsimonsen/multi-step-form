function StepOne({ fullName, email, phone, updateFields, fullNameError, emailError, phoneError }) {
  return (
    <>
      <div className="titles">
        <h1>Personal info</h1>
        <h2>Please provide your name, email, address, and phone number.</h2>
      </div>
      <div className="form-inputs">
        <div>
          <label htmlFor="fullName">Name</label>
          {fullNameError && <span>This field is required</span>}
        </div>
        <input
          type="text"
          autoFocus
          id="fullName"
          placeholder="e.g. Stephen King"
          value={fullName}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          className={fullNameError ? "form-error" : ""}
        />
      </div>
      <div className="form-inputs">
        <div>
          <label htmlFor="email">Email Address</label>
          {emailError && <span>This field is required</span>}
        </div>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className={emailError ? "form-error" : ""}
        />
      </div>
      <div className="form-inputs">
        <div>
          <label htmlFor="phone">Phone Number</label>
          {phoneError && <span>This field is required</span>}
        </div>
        <input
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
          className={phoneError ? "form-error" : ""}
        />
      </div>
    </>
  );
}

export default StepOne;
