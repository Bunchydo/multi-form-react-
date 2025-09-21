import "./step-3-component.css";
import { useState, useEffect } from "react";

export default function Step3Component(props) {
  const { isYearlyPlan, collectAddOns } = props;

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // ✅ Notify parent whenever selectedAddOns changes
  useEffect(() => {
    collectAddOns(selectedAddOns);
  }, [selectedAddOns, collectAddOns]);

  const toggleAddOn = (service) => {
    setSelectedAddOns((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
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
          {/* Service 1 */}
          <div
            className={
              selectedAddOns.includes("online")
                ? "services-container-active"
                : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={selectedAddOns.includes("online")}
                onChange={() => toggleAddOn("online")}
              />
              <div className="service-info">
                <div className="service-title">Online service</div>
                <div className="service-detail">
                  Access to multiplayer games
                </div>
              </div>
            </div>
            <div className="right-box-info">
              {isYearlyPlan ? "$10/yr" : "$1/mo"}
            </div>
          </div>

          {/* Service 2 */}
          <div
            className={
              selectedAddOns.includes("storage")
                ? "services-container-active"
                : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={selectedAddOns.includes("storage")}
                onChange={() => toggleAddOn("storage")}
              />
              <div className="service-info">
                <div className="service-title">Larger storage</div>
                <div className="service-detail">Extra 1TB of cloud save</div>
              </div>
            </div>
            <div className="right-box-info">
              {isYearlyPlan ? "$20/yr" : "$2/mo"}
            </div>
          </div>

          {/* Service 3 */}
          <div
            className={
              selectedAddOns.includes("custom")
                ? "services-container-active"
                : "services-container"
            }
          >
            <div className="left-box-info">
              <input
                type="checkbox"
                checked={selectedAddOns.includes("custom")}
                onChange={() => toggleAddOn("custom")}
              />
              <div className="service-info">
                <div className="service-title">Customizable profile</div>
                <div className="service-detail">
                  Custom theme on your profile
                </div>
              </div>
            </div>
            <div className="right-box-info">
              {isYearlyPlan ? "$20/yr" : "$2/mo"}
            </div>
          </div>
        </div>
      </div>

      <div className="button-holder-steps">
        <button
          className="go-back custom-button"
          onClick={props.goBackFunction}
        >
          Go Back
        </button>

        <button
          className="next-step-button custom-button"
          onClick={props.nextStepFunction}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
