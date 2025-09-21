import { useState } from "react";
import "./form-holder.css";
import Step1Component from "./step-1-component/step-1-component.jsx";
import Step2Component from "./step-2-component/step-2-component.jsx";
import Step3Component from "./step-3-component/step-3-component.jsx";
import Step4Component from "./step-4-component/step-4-component.jsx";
import Confirmation from "./confirmation.jsx";

export default function FormContainer() {
  // Step data
  const [collectedData, setCollectedData] = useState({});
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);
  const [selectedPlanHolder, setSelectedPlanHolder] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Step navigation
  const [step1Clicked, setStep1Clicked] = useState(true);
  const [step2Clicked, setStep2Clicked] = useState(false);
  const [step3Clicked, setStep3Clicked] = useState(false);
  const [step4Clicked, setStep4Clicked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Step buttons
  const [button1IsClicked, setButton1IsClicked] = useState(true);
  const [button2IsClicked, setButton2IsClicked] = useState(false);
  const [button3IsClicked, setButton3IsClicked] = useState(false);
  const [button4IsClicked, setButton4IsClicked] = useState(false);

  // Step errors
  const [stepErrors, setStepErrors] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  // Collecting functions
  function collectSelectedPlan(data) {
    setSelectedPlanHolder(data);
    setSelectedPlan(data);
  }

  function collectData(data) {
    setCollectedData(data);
  }

  function collectAddOns(data) {
    setSelectedAddOns(data);
  }

  // Validation
  const validateStep1 = () => {
    if (!collectedData.name || !collectedData.email || !collectedData.phone) {
      setStepErrors((prev) => ({ ...prev, step1: true }));
      return false;
    }
    setStepErrors((prev) => ({ ...prev, step1: false }));
    return true;
  };

  const validateStep2 = () => {
    if (!selectedPlan) {
      setStepErrors((prev) => ({ ...prev, step2: true }));
      return false;
    }
    setStepErrors((prev) => ({ ...prev, step2: false }));
    return true;
  };

  const validateStep3 = () => {
    if (selectedAddOns.length === 0) {
      setStepErrors((prev) => ({ ...prev, step3: true }));
      return false;
    }
    setStepErrors((prev) => ({ ...prev, step3: false }));
    return true;
  };

  const validateAll = () =>
    validateStep1() && validateStep2() && validateStep3();

  // Step navigation
  const changeStep = (direction = "next") => {
    if (direction === "next") {
      if (step1Clicked && !validateStep1()) return;
      if (step2Clicked && !validateStep2()) return;
      if (step3Clicked && !validateStep3()) return;

      if (step1Clicked) {
        setStep1Clicked(false);
        setStep2Clicked(true);
        setButton1IsClicked(false);
        setButton2IsClicked(true);
      } else if (step2Clicked) {
        setStep2Clicked(false);
        setStep3Clicked(true);
        setButton2IsClicked(false);
        setButton3IsClicked(true);
      } else if (step3Clicked) {
        setStep3Clicked(false);
        setStep4Clicked(true);
        setButton3IsClicked(false);
        setButton4IsClicked(true);
      }
    } else if (direction === "back") {
      if (step4Clicked) {
        setStep4Clicked(false);
        setStep3Clicked(true);
        setButton4IsClicked(false);
        setButton3IsClicked(true);
      } else if (step3Clicked) {
        setStep3Clicked(false);
        setStep2Clicked(true);
        setButton3IsClicked(false);
        setButton2IsClicked(true);
      } else if (step2Clicked) {
        setStep2Clicked(false);
        setStep1Clicked(true);
        setButton2IsClicked(false);
        setButton1IsClicked(true);
      }
    }
  };

  // Step buttons click
  const handleStepClick = (step) => {
    if (step === 1) {
      setStep1Clicked(true);
      setStep2Clicked(false);
      setStep3Clicked(false);
      setStep4Clicked(false);
      setButton1IsClicked(true);
      setButton2IsClicked(false);
      setButton3IsClicked(false);
      setButton4IsClicked(false);
    }
    if (step === 2 && validateStep1()) {
      setStep1Clicked(false);
      setStep2Clicked(true);
      setStep3Clicked(false);
      setStep4Clicked(false);
      setButton1IsClicked(false);
      setButton2IsClicked(true);
      setButton3IsClicked(false);
      setButton4IsClicked(false);
    }
    if (step === 3 && validateStep1() && validateStep2()) {
      setStep1Clicked(false);
      setStep2Clicked(false);
      setStep3Clicked(true);
      setStep4Clicked(false);
      setButton1IsClicked(false);
      setButton2IsClicked(false);
      setButton3IsClicked(true);
      setButton4IsClicked(false);
    }
    if (step === 4 && validateAll()) {
      setStep1Clicked(false);
      setStep2Clicked(false);
      setStep3Clicked(false);
      setStep4Clicked(true);
      setButton1IsClicked(false);
      setButton2IsClicked(false);
      setButton3IsClicked(false);
      setButton4IsClicked(true);
    }
  };

  // Confirm: shows confirmation page
  const handleConfirm = () => {
    setStep1Clicked(false);
    setStep2Clicked(false);
    setStep3Clicked(false);
    setStep4Clicked(false);
    setShowConfirmation(true);
  };

  return (
    <div className="form-container">
      {/* Left side steps */}
      <div className="left-side-steps">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className={`step${step} step-styling`}>
            <button
              onClick={() => handleStepClick(step)}
              className={
                (step === 1 && button1IsClicked) ||
                (step === 2 && button2IsClicked) ||
                (step === 3 && button3IsClicked) ||
                (step === 4 && button4IsClicked)
                  ? "button-selected"
                  : "number1-button steps-button"
              }
            >
              {step}
            </button>
            <div className="step-info">
              <div className="step-number">STEP {step}</div>
              <div className="step-description">
                {step === 1
                  ? "YOUR INFO"
                  : step === 2
                  ? "SELECT PLAN"
                  : step === 3
                  ? "ADD-ONS"
                  : "SUMMARY"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side */}
      <div className="component-holding-box-right">
        {showConfirmation && <Confirmation />}
        {!showConfirmation && step1Clicked && (
          <Step1Component
            nextStepFunction={() => changeStep("next")}
            collectDataFunction={setCollectedData}
            collectedData={collectedData}
          />
        )}
        {!showConfirmation && step2Clicked && (
          <Step2Component
            nextStepFunction={() => changeStep("next")}
            goBackFunction={() => changeStep("back")}
            selectedPlanHolder={collectSelectedPlan}
            collectedSelectedPlanHolder={selectedPlan}
            isYearlyPlan={isYearlyPlan}
            collectDataFunction={setIsYearlyPlan}
          />
        )}
        {!showConfirmation && step3Clicked && (
          <Step3Component
            nextStepFunction={() => changeStep("next")}
            goBackFunction={() => changeStep("back")}
            isYearlyPlan={isYearlyPlan}
            collectedAddOns={selectedAddOns}
            collectAddOns={setSelectedAddOns}
          />
        )}
        {!showConfirmation && step4Clicked && (
          <Step4Component
            goBackFunction={() => changeStep("back")}
            collectedData={collectedData}
            selectedPlan={selectedPlan}
            isYearlyPlan={isYearlyPlan}
            selectedAddOns={selectedAddOns}
            confirmFunction={handleConfirm}
          />
        )}
      </div>
    </div>
  );
}
