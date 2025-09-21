import "./step-4-component.css";
import { useState } from "react";

export default function Step4Component(props) {
  const {
    isYearlyPlan,
    selectedPlan,
    selectedAddOns,
    collectedData,
    goBackFunction,
  } = props;
  const [errors, setErrors] = useState({ personal: "", plan: "", addOns: "" });

  // Plan pricing
  const planPrices = {
    arcade: isYearlyPlan ? 90 : 9,
    advanced: isYearlyPlan ? 120 : 12,
    pro: isYearlyPlan ? 150 : 15,
  };

  // Add-on pricing
  const addOnPrices = {
    online: isYearlyPlan ? 10 : 1,
    storage: isYearlyPlan ? 20 : 2,
    custom: isYearlyPlan ? 20 : 2,
  };

  // Add-on labels
  const addOnLabels = {
    online: "Online service",
    storage: "Larger storage",
    custom: "Customizable profile",
  };

  // Base plan cost
  const planCost = planPrices[selectedPlan] || 0;

  // Add-ons cost
  const addOnsCost = selectedAddOns.reduce(
    (sum, addOn) => sum + (addOnPrices[addOn] || 0),
    0
  );

  // Total
  const totalCost = planCost + addOnsCost;

  const errorStyle = {
    color: "red",
    fontSize: "0.9rem",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const handleConfirm = () => {
    let tempErrors = { personal: "", plan: "", addOns: "" };
    let valid = true;

    // Validate personal info
    if (
      !collectedData ||
      !collectedData.name ||
      !collectedData.email ||
      !collectedData.phone
    ) {
      tempErrors.personal = "Please fill out all personal info fields";
      valid = false;
    }

    // Validate plan
    if (!selectedPlan) {
      tempErrors.plan = "Please select a plan";
      valid = false;
    }

    // Validate add-ons
    if (!selectedAddOns || selectedAddOns.length === 0) {
      tempErrors.addOns = "Please select at least one add-on";
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      alert("Form successfully confirmed!");
    }
  };

  return (
    <div className="step4-holder">
      <div className="personal-info-container4">
        <div className="step1-title-info">
          <div className="personal-info-header">Finishing up</div>
          <div className="personal-info-description grey-text">
            Double-check everything looks OK before confirming.
          </div>
        </div>

        {/* Errors */}
        {errors.personal && <div style={errorStyle}>{errors.personal}</div>}
        {errors.plan && <div style={errorStyle}>{errors.plan}</div>}
        {errors.addOns && <div style={errorStyle}>{errors.addOns}</div>}

        <div className="finishing-up-info">
          <div className="final-details">
            {/* Selected Plan */}
            <div className="finishing-plan-row1">
              <div className="finishing-plan-left">
                <div className="finishing-title finishing-main">
                  {selectedPlan
                    ? `${
                        selectedPlan.charAt(0).toUpperCase() +
                        selectedPlan.slice(1)
                      } (${isYearlyPlan ? "Yearly" : "Monthly"})`
                    : "No plan selected"}
                </div>
                <div className="finishing-change-text">Change</div>
              </div>

              <div className="finishing-plan-right-top">
                {isYearlyPlan ? `$${planCost}/yr` : `$${planCost}/mo`}
              </div>
            </div>

            <hr />

            {/* Selected Add-ons */}
            {selectedAddOns.length > 0 ? (
              selectedAddOns.map((addOn) => (
                <div className="finishing-plan-row1" key={addOn}>
                  <div className="finishing-plan-left">
                    <div className="finishing-title finishing-title-text">
                      {addOnLabels[addOn]}
                    </div>
                  </div>
                  <div className="finishing-plan-right">
                    {isYearlyPlan
                      ? `$${addOnPrices[addOn]}/yr`
                      : `$${addOnPrices[addOn]}/mo`}
                  </div>
                </div>
              ))
            ) : (
              <div className="finishing-plan-row1">
                <div className="finishing-title finishing-title-text">
                  No add-ons selected
                </div>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="total-per-month">
            <div className="total-title">
              Total ({isYearlyPlan ? "per year" : "per month"})
            </div>
            <div className="total-amount">
              {isYearlyPlan ? `$${totalCost}/yr` : `$${totalCost}/mo`}
            </div>
          </div>
        </div>
      </div>

      <div className="button-holder-steps">
        <button className="go-back custom-button" onClick={goBackFunction}>
          Go Back
        </button>
        <button
          className="next-step-button custom-button"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
