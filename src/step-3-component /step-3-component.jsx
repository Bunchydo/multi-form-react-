import "./step-3-component.css";
import { useState } from "react";
{
  /*Some styles are sharing from the step-1-component css file. 
  I didn't realize     that would happen until I started. So they're using
  step-1 component class names. So i just stuck with it*/
}

export default function Step3Component(props) {
  let [isYearly1, setIsYearly1] = useState(false);
  let [isYearly2, setIsYearly2] = useState(false);
  let [isYearly3, setIsYearly3] = useState(false);
  const isYearly = props.dataCollected; // boolean true/false

  const handleChange1 = (event) => {
    setIsYearly1(event.target.checked); // true if checked, false if unchecked
  };
  const handleChange2 = (event) => {
    setIsYearly2(event.target.checked); // true if checked, false if unchecked
  };
  const handleChange3 = (event) => {
    setIsYearly3(event.target.checked); // true if checked, false if unchecked
  };
  return (
    <div className="step3-holder">
      <div className="personal-info-container3">
        <div className="step1-title-info">
          <div className="personal-info-header">Pick add-ons</div>
          <div className="personal-info-description grey-text">
            Add-ons help enhance your gaming experience.
          </div>
        </div>

        <div className="add-on-holder">
          {" "}
          {/*Service 1*/}
          <div
            className={
              isYearly1 ? "services-container-active" : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={isYearly1}
                onChange={handleChange1}
              />
              <div className="service-info">
                <div className="service-title">Online service</div>
                <div className="service-detail">
                  Access to multiplayer games
                </div>
              </div>
            </div>
            <div className="right-box-info">
              {" "}
              {isYearly ? "$10/yr" : "$1/mo"}
            </div>
          </div>
          {/*Service 2*/}
          <div
            className={
              isYearly2 ? "services-container-active" : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={isYearly2}
                onChange={handleChange2}
              />
              <div className="service-info">
                <div className="service-title">Online service</div>
                <div className="service-detail">
                  Access to multiplayer games
                </div>
              </div>
            </div>
            <div className="right-box-info">
              {" "}
              {isYearly ? "$20/yr" : "$2/mo"}
            </div>
          </div>
          {/*Service 3*/}
          <div
            className={
              isYearly3 ? "services-container-active" : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={isYearly3}
                onChange={handleChange3}
              />
              <div className="service-info">
                <div className="service-title">Online service</div>
                <div className="service-detail">
                  Access to multiplayer games
                </div>
              </div>
            </div>
            <div className="right-box-info">
              {" "}
              {isYearly ? "$20/yr" : "$2/mo"}
            </div>
          </div>
        </div>
      </div>

      <div className="button-holder-steps">
        <button
          className="go-back custom-button"
          onClick={props.goBackFunction} // triggers going back
        >
          Go Back
        </button>

        <button
          className="next-step-button custom-button"
          onClick={props.nextStepFunction} // triggers going forward
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
