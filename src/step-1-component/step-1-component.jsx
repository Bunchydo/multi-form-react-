import "./step-1-component.css";
import { useState, useEffect } from "react";

export default function Step1Component({
  nextStepFunction,
  collectDataFunction,
  collectedData, // receive existing data from parent
}) {
  // Initialize state from parent collectedData
  const [fullname, setName] = useState(collectedData?.name || "");
  const [email, setEmail] = useState(collectedData?.email || "");
  const [phone, setPhone] = useState(collectedData?.phone || "");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  // Keep parent state updated whenever local state changes
  useEffect(() => {
    collectDataFunction({ name: fullname, email, phone });
  }, [fullname, email, phone, collectDataFunction]);

  const validate = () => {
    let tempErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!fullname.trim()) {
      tempErrors.name = "This field is required";
      isValid = false;
    }
    if (!email.trim()) {
      tempErrors.email = "This field is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!phone.trim()) {
      tempErrors.phone = "This field is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validate()) {
      nextStepFunction();
    }
  };

  const labelStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  };
  const errorSpanStyle = {
    color: "red",
    fontSize: "0.9rem",
    marginLeft: "10px",
  };

  return (
    <div className="step1-holder">
      <div className="personal-info-container">
        <div className="step1-title-info">
          <div className="personal-info-header">Personal info</div>
          <div className="personal-info-description grey-text">
            Please provide your name, email address, and phone number
          </div>
        </div>

        <form className="step1-form" action="">
          <div className="form-group">
            <label htmlFor="name" style={labelStyle}>
              Name
              {errors.name && <span style={errorSpanStyle}>{errors.name}</span>}
            </label>
            <input
              value={fullname}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              className="name input-custom"
              placeholder="e.g. Stephen King"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" style={labelStyle}>
              Email Address
              {errors.email && (
                <span style={errorSpanStyle}>{errors.email}</span>
              )}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              className="email input-custom"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" style={labelStyle}>
              Phone Number
              {errors.phone && (
                <span style={errorSpanStyle}>{errors.phone}</span>
              )}
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              type="text"
              className="phone-number input-custom"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>

      <div className="button-holder">
        <button onClick={handleNext} className="next-step-button custom-button">
          Next Step
        </button>
      </div>
    </div>
  );
}
