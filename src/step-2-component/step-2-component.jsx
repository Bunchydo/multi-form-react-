import "./step-2-component.css";
import arcadeImage from "../assets/images/icon-arcade.svg";
import advancedImage from "../assets/images/icon-advanced.svg";
import proImage from "../assets/images/icon-pro.svg";
import { useState } from "react";

export default function Step2Component({
  nextStepFunction,
  goBackFunction,
  selectedPlanHolder,
  collectedSelectedPlanHolder,
  isYearlyPlan,
  collectDataFunction,
}) {
  const [selectedPlan, setSelectedPlan] = useState(
    collectedSelectedPlanHolder || null
  );
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!selectedPlan) {
      setError("Please select a plan");
      return;
    }
    selectedPlanHolder(selectedPlan);
    setError("");
    nextStepFunction();
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setError("");
  };

  const errorStyle = { color: "red", fontSize: "0.9rem", marginBottom: "10px" };

  return (
    <div className="step2-holder">
      <div className="personal-info-container2">
        <div className="step1-title-info">
          <div className="personal-info-header">Select your plan</div>
          <div className="personal-info-description grey-text">
            You have the option of monthly or yearly billing.
          </div>
        </div>

        {error && <div style={errorStyle}>{error}</div>}

        <div className="plan-selection">
          <div
            onClick={() => handleSelectPlan("arcade")}
            className={
              selectedPlan === "arcade"
                ? "arcade-plan-active"
                : "arcade-plan plan-custom"
            }
          >
            <img src={arcadeImage} alt="Arcade" />
            <div className="plan-title">Arcade</div>
            <div className="plan-cost">{isYearlyPlan ? "$90/yr" : "$9/mo"}</div>
          </div>

          <div
            onClick={() => handleSelectPlan("advanced")}
            className={
              selectedPlan === "advanced"
                ? "advanced-plan-active"
                : "advanced-plan plan-custom"
            }
          >
            <img src={advancedImage} alt="Advanced" />
            <div className="plan-title">Advanced</div>
            <div className="plan-cost">
              {isYearlyPlan ? "$120/yr" : "$12/mo"}
            </div>
          </div>

          <div
            onClick={() => handleSelectPlan("pro")}
            className={
              selectedPlan === "pro"
                ? "pro-plan-active"
                : "pro-plan plan-custom"
            }
          >
            <img src={proImage} alt="Pro" />
            <div className="plan-title">Pro</div>
            <div className="plan-cost">
              {isYearlyPlan ? "$150/yr" : "$15/mo"}
            </div>
          </div>
        </div>

        <div className="monthly-yearly-select">
          <span className="monthly-title">Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isYearlyPlan}
              onChange={(e) => collectDataFunction(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <span className="Yearly">Yearly</span>
        </div>
      </div>

      <div className="button-holder-steps">
        <button className="go-back custom-button" onClick={goBackFunction}>
          Go Back
        </button>
        <button className="next-step-button custom-button" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}
