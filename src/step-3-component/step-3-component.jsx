import "./step-3-component.css";

export default function Step3Component({
  isYearlyPlan,
  collectedAddOns, // renamed to match what parent passes
  collectAddOns,
  goBackFunction,
  nextStepFunction,
}) {
  const toggleAddOn = (service) => {
    if (collectedAddOns.includes(service)) {
      collectAddOns(collectedAddOns.filter((item) => item !== service));
    } else {
      collectAddOns([...collectedAddOns, service]);
    }
  };

  const services = [
    {
      id: "online",
      title: "Online service",
      detail: "Access to multiplayer games",
      priceMonthly: "$1/mo",
      priceYearly: "$10/yr",
    },
    {
      id: "storage",
      title: "Larger storage",
      detail: "Extra 1TB of cloud save",
      priceMonthly: "$2/mo",
      priceYearly: "$20/yr",
    },
    {
      id: "custom",
      title: "Customizable profile",
      detail: "Custom theme on your profile",
      priceMonthly: "$2/mo",
      priceYearly: "$20/yr",
    },
  ];

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
          {services.map((service) => (
            <div
              key={service.id}
              className={
                collectedAddOns.includes(service.id)
                  ? "services-container-active"
                  : "services-container"
              }
            >
              <div className="left-box-info">
                <input
                  type="checkbox"
                  checked={collectedAddOns.includes(service.id)}
                  onChange={() => toggleAddOn(service.id)}
                />
                <div className="service-info">
                  <div className="service-title">{service.title}</div>
                  <div className="service-detail">{service.detail}</div>
                </div>
              </div>
              <div className="right-box-info">
                {isYearlyPlan ? service.priceYearly : service.priceMonthly}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button-holder-steps">
        <button className="go-back custom-button" onClick={goBackFunction}>
          Go Back
        </button>

        <button
          className="next-step-button custom-button"
          onClick={nextStepFunction}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
