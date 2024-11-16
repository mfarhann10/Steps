/* eslint-disable react/prop-types */
function Step({ step, activeStep, notActiveStep }) {
  return (
    <div className="numbers flex justify-between">
      <div className={step >= 1 ? activeStep : notActiveStep}>1</div>
      <div className={step >= 2 ? activeStep : notActiveStep}>2</div>
      <div className={step >= 3 ? activeStep : notActiveStep}>3</div>
    </div>
  );
}

export default Step;
