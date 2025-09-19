import "./step-1-component.css";

export default function Step1Component(props) {
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
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="name input-custom"
              placeholder="e.g. Stephen King"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              className="email input-custom"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              className="phone-number input-custom"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </div>

      <div className="button-holder">
        <button
          onClick={props.nextStepFunction}
          className="next-step-button custom-button"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
