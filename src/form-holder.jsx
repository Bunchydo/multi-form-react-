import { useState } from "react";
import "./form-holder.css";
import Step1Component from "./step-1-component/step-1-component.jsx";
import Step2Component from "./step-2-component/step-2-component.jsx";
import Step3Component from "./step-3-component /step-3-component.jsx";
import Step4Component from "./step-4-component/step-4-component.jsx";

export default function FormContainer() {
  const [collectedData, setCollectedData] = useState();
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  {
    /*Collecting user choice from step 2 component for 
    monthly or yearly to use in other components*/
  }
  function collectData(data) {
    console.log("data collected:", data);
    setCollectedData(data);
    setIsYearlyPlan(data); // store plan choice here

    return;
  }
  {
    /*Tracking state for buttons clicked to switch*/
  }
  let [step1Clicked, setStep1Clicked] = useState(true);
  let [step2Clicked, setStep2Clicked] = useState(false);
  let [step3Clicked, setStep3Clicked] = useState(false);
  let [step4Clicked, setStep4Clicked] = useState(false);

  {
    /* Tracking state to switch text and background color when button
    is clicked*/
  }
  const [button1IsClicked, setButton1IsClicked] = useState(true);
  const [button2IsClicked, setButton2IsClicked] = useState(false);
  const [button3IsClicked, setButton3IsClicked] = useState(false);
  const [button4IsClicked, setButton4IsClicked] = useState(false);

  function changeStep(direction = "next") {
    if (direction === "next") {
      if (step1Clicked) {
        setStep1Clicked(false);
        setButton1IsClicked(false);
        setStep2Clicked(true);
        setButton2IsClicked(true);
      } else if (step2Clicked) {
        setStep2Clicked(false);
        setButton2IsClicked(false);
        setStep3Clicked(true);
        setButton3IsClicked(true);
      } else if (step3Clicked) {
        setStep3Clicked(false);
        setButton3IsClicked(false);
        setStep4Clicked(true);
        setButton4IsClicked(true);
      }
    } else if (direction === "back") {
      if (step4Clicked) {
        setStep4Clicked(false);
        setButton4IsClicked(false);
        setStep3Clicked(true);
        setButton3IsClicked(true);
      } else if (step3Clicked) {
        setStep3Clicked(false);
        setButton3IsClicked(false);
        setStep2Clicked(true);
        setButton2IsClicked(true);
      } else if (step2Clicked) {
        setStep2Clicked(false);
        setButton2IsClicked(false);
        setStep1Clicked(true);
        setButton1IsClicked(true);
      }
    }
  }

  return (
    <div className="form-container">
      {/* Left side with form steps*/}
      <div className="left-side-steps">
        <div className="step1 step-styling">
          <button
            type="button"
            onClick={() => {
              if (step1Clicked) {
              } else {
                setStep1Clicked((prev) => !prev);
                setButton1IsClicked((prev) => !prev);
              }
              if (step2Clicked) {
                setStep2Clicked((prev2) => !prev2);
                setButton2IsClicked((prev) => !prev);
              }
              if (step3Clicked) {
                setStep3Clicked((prev3) => !prev3);
                setButton3IsClicked((prev) => !prev);
              }
              if (step4Clicked) {
                setStep4Clicked((prev4) => !prev4);
                setButton4IsClicked((prev) => !prev);
              }
            }}
            className={
              button1IsClicked
                ? "button-selected"
                : "number1-button steps-button"
            }
          >
            1
          </button>
          <div className="step-info">
            <div className="step-number">STEP 1</div>
            <div className="step-description">YOUR INFO</div>
          </div>
        </div>
        {/* Step 2*/}
        <div className="step2 step-styling">
          {/*Using state and storing things in memory to verify things*/}
          <button
            type="button"
            onClick={() => {
              if (step2Clicked) {
              } else {
                setStep2Clicked((prev2) => !prev2);
                setButton2IsClicked((prev) => !prev);
              }
              if (step1Clicked) {
                setStep1Clicked((prev) => !prev);
                setButton1IsClicked((prev) => !prev);
              }
              if (step3Clicked) {
                setStep3Clicked((prev3) => !prev3);
                setButton3IsClicked((prev) => !prev);
              }
              if (step4Clicked) {
                setStep4Clicked((prev4) => !prev4);
                setButton4IsClicked((prev) => !prev);
              }
            }}
            className={
              button2IsClicked
                ? "button-selected"
                : "number1-button steps-button"
            }
          >
            2
          </button>
          <div className="step-info">
            <div className="step-number">STEP 2</div>
            <div className="step-description">SELECT PLAN</div>
          </div>
        </div>{" "}
        {/*Step 3*/}
        <div className="step1 step-styling">
          <button
            type="button"
            onClick={() => {
              if (step3Clicked) {
              } else {
                setStep3Clicked((prev3) => !prev3);
                setButton3IsClicked((prev) => !prev);
              }
              if (step2Clicked) {
                setStep2Clicked((prev2) => !prev2);
                setButton2IsClicked((prev) => !prev);
              }
              if (step1Clicked) {
                setStep1Clicked((prev) => !prev);
                setButton1IsClicked((prev) => !prev);
              }
              if (step4Clicked) {
                setStep4Clicked((prev4) => !prev4);
                setButton4IsClicked((prev) => !prev);
              }
            }}
            className={
              button3IsClicked
                ? "button-selected"
                : "number1-button steps-button"
            }
          >
            {" "}
            3
          </button>
          <div className="step-info">
            <div className="step-number">STEP 3</div>
            <div className="step-description">ADD-ONS</div>
          </div>
        </div>{" "}
        <div className="step1 step-styling">
          <button
            onClick={() => {
              if (step4Clicked) {
              } else {
                setStep4Clicked((prev4) => !prev4);
                setButton4IsClicked((prev) => !prev);
              }
              if (step2Clicked) {
                setStep2Clicked((prev2) => !prev2);
                setButton2IsClicked((prev) => !prev);
              }
              if (step1Clicked) {
                setStep1Clicked((prev) => !prev);
                setButton1IsClicked((prev) => !prev);
              }
              if (step3Clicked) {
                setStep3Clicked((prev3) => !prev3);
                setButton3IsClicked((prev) => !prev);
              }
            }}
            className={
              button4IsClicked
                ? "button-selected"
                : "number1-button steps-button"
            }
          >
            4
          </button>
          <div className="step-info">
            <div className="step-number">STEP 4</div>
            <div className="step-description">SUMMARY</div>
          </div>
        </div>
      </div>
      {/* Right side with form details*/}
      <div className="component-holding-box-right">
        {step1Clicked && (
          <Step1Component nextStepFunction={() => changeStep("next")} />
        )}
        {step2Clicked && (
          <Step2Component
            nextStepFunction={() => changeStep("next")}
            goBackFunction={() => changeStep("back")}
            collectDataFunction={collectData}
            isYearlyPlan={isYearlyPlan}
          />
        )}
        {step3Clicked && (
          <Step3Component
            nextStepFunction={() => changeStep("next")}
            goBackFunction={() => changeStep("back")}
            dataCollected={collectData}
          />
        )}
        {step4Clicked && (
          <Step4Component
            goBackFunction={() => changeStep("back")}
            dataCollected={collectedData}
          />
        )}
      </div>
    </div>
  );
}
