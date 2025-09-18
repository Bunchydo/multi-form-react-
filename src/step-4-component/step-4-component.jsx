import "./step-4-component.css";
{
  /*Some styles are sharing from the step-1-component css file. 
  I didn't realize     that would happen until I started. So they're using
  step-1 component class names. So i just stuck with it*/
}

export default function Step4Component(props) {
  return (
    <div className="step4-holder">
      <div className="personal-info-container4">
        <div className="step1-title-info">
          <div className="personal-info-header">Finishing up</div>
          <div className="personal-info-description grey-text">
            Double-check everything looks OK before confirming.
          </div>
        </div>

        <div className="finishing-up-info">
          <div className="final-details">
            <div className="finishing-plan-row1">
              <div className="finishing-plan-left">
                <div className="finishing-title finishing-main">
                  Arcade (Monthly)
                </div>
                <div className="finishing-change-text ">Change</div>
              </div>

              <div className="finishing-plan-right-top">$9/mo</div>
            </div>

            <hr />
            <div className="finishing-plan-row1">
              <div className="finishing-plan-left">
                <div className="finishing-title finishing-title-text">
                  Arcade (Monthly)
                </div>
              </div>
              <div className="finishing-plan-right">+$1/mo</div>
            </div>
            <div className="finishing-plan-row1">
              <div className="finishing-plan-left">
                <div className="finishing-title finishing-title-text">
                  Arcade (Monthly)
                </div>
              </div>

              <div className="finishing-plan-right">+$2/mo</div>
            </div>
          </div>

          <div className="total-per-month">
            <div className="total-title">Total (per month)</div>
            <div className="total-amount">+$12/mo</div>
          </div>
        </div>
      </div>

      <div className="button-holder-steps">
        <button
          className="go-back custom-button"
          onClick={props.goBackFunction} // triggers going back
        >
          Go Back
        </button>{" "}
        <button className="next-step-button custom-button">Confirm</button>
      </div>
    </div>
  );
}
