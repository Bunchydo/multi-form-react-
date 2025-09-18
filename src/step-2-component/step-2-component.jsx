import "./step-2-component.css";
import arcadeImage from "../assets/images/icon-arcade.svg";
import advancedImage from "../assets/images/icon-advanced.svg";
import proImage from "../assets/images/icon-pro.svg";
import { useState } from "react";
{
  /*Some styles are sharing from the step-1-component css file. 
  I didn't realize     that would happen until I started. So they're using
  step-1 component class names. So i just stuck with it*/
}

export default function Step2Component(props) {
  let [isYearly, setIsYearly] = useState(false);
  {
  }
  const handleChange = (event) => {
    setIsYearly(event.target.checked); // true if checked, false if unchecked
  };

  return (
    <div className="step2-holder">
      <div className="personal-info-container2">
        <div className="step1-title-info">
          <div className="personal-info-header">Select your plan</div>
          <div className="personal-info-description grey-text">
            You have the option of monthly or yearly billing.
          </div>
        </div>

        <div className="plan-selection">
          <div className="arcade-plan plan-custom">
            <div className="icon-box">
              <img src={arcadeImage} alt="" />
            </div>
            <div className="plan-description">
              <div className="plan-title">Arcade</div>
              <div className="plan-cost">
                {isYearly ? (
                  <div className="is-yearly-option">
                    <div>$150/yr</div>
                    <div className="blue-text">2 months free</div>{" "}
                  </div>
                ) : (
                  "$9/mo"
                )}
              </div>
            </div>
          </div>
          <div className="advanced-plan plan-custom">
            <div className="icon-box">
              <img src={advancedImage} alt="" />
            </div>
            <div className="plan-description">
              <div className="plan-title">Advanced</div>
              <div className="plan-cost">
                {" "}
                {isYearly ? (
                  <div className="is-yearly-option">
                    <div>$150/yr</div>
                    <div className="blue-text">2 months free</div>{" "}
                  </div>
                ) : (
                  "$12/mo"
                )}
              </div>
            </div>
          </div>
          <div className="pro-plan plan-custom">
            <div className="icon-box">
              <img src={proImage} alt="" />
            </div>
            <div className="plan-description">
              <div className="plan-title">Pro</div>
              <div className="plan-cost">
                {" "}
                {isYearly ? (
                  <div className="is-yearly-option">
                    <div>$150/yr</div>
                    <div className="blue-text">2 months free</div>{" "}
                  </div>
                ) : (
                  "$15/mo"
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="monthly-yearly-select">
          <span className="monthly-title">Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={handleChange} />
            {props.collectDataFunction(isYearly)}
            <span className="slider"></span>
          </label>
          <span className="Yearly">Yearly</span>
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
