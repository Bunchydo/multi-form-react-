import "./confirmation.css";
import confirmImage from './assets/images/icon-thank-you.svg'
export default function Confirmation() {
  return (
    <div className="confirmation">
      <div className="first-row">
        <img src={confirmImage} alt="" />
      </div>
      <div className="second-row">Thank you!</div>
      <div className="third-row">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgmaing.com
      </div>
    </div>
  );
}
