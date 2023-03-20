function StepOne({ name, email, phone, updateFields }) {
  return (
    <>
      <div className="titles">
        <h1>Personal info</h1>
        <h2>Please provide your name, email, address, and phone number.</h2>
      </div>
      <div className="form-inputs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </>
  );
}

export default StepOne;
