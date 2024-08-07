import React, { useState } from 'react';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import '../components/CustomStepper.css';

const steps = [
  { title: 'Platform setup', image: icon1, path: '/setup/platform' },
  { title: 'Integration setup', image: icon2, path:'/integration?integrationName=Storage%20Analysis' },
  { title: 'Setup analytics', image: icon3, path:'/setup/analytics'},
  { title: 'Summarise dashboards', image: icon4 }
];

function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
    
    // Check if the step has a path and navigate accordingly
    if (steps[index].path) {
      window.location.href = steps[index].path;
    }
  };

  return (
    <div className="custom-stepper">
      {steps.map((step, index) => (
        <div key={index} className="step-container" style={{ marginLeft: index > 0 ? -10 : 0 }}>
          <div
            className={`step ${index === activeStep ? 'active' : ''}`}
            onClick={() => handleStepClick(index)}
          >
            <div className="step-circle">
              <img src={step.image} alt={`Step ${index + 1}`} className="step-image" />
            </div>
            <span className="step-title"><b>{step.title}</b></span>
          </div>
          {index < steps.length - 1 && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
}

export default CustomStepper;
