import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlansContext from "../context/PlansContext";
import AddOnsContext from "../context/AddOnsContext";

const Summary = () => {
  const navigate = useNavigate();
  const { selectedMonthlyPlan } = useContext(PlansContext);
  const { selectedYearlyPlan } = useContext(PlansContext);
  let { selectedAddOnsValue, setSelectedAddOnsValue } =
    useContext(AddOnsContext);

  console.log(selectedAddOnsValue);
  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] text-center">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Finshing up
      </h1>
      <p className="text-neutral-coolGray mb-6 hidden sm:block">
        Double-check everything looks OK before confirming.
      </p>
      <p className="text-neutral-coolGray mb-6 sm:hidden">
        Double-check everything <br /> looks OK before confirming.
      </p>
      <div className="bg-neutral-alabaster rounded-lg p-5">
        <div className="plan flex justify-between items-center mb-4">
          <div>
            <span className="text-primary-marineBlue font-[800]">
              {selectedMonthlyPlan.title} {selectedYearlyPlan.title}
            </span>
            {selectedMonthlyPlan.title ? (
              <span className="text-primary-marineBlue font-[800]">
                {" "}
                (Monthly)
              </span>
            ) : (
              <span className="text-primary-marineBlue font-[800]">
                {" "}
                (Yearly)
              </span>
            )}
            <p
              onClick={() => navigate("/selectplan")}
              className="text-neutral-coolGray underline cursor-pointer"
            >
              Change
            </p>
          </div>
          <div>
            <span className="text-primary-marineBlue font-[800]">
              ${selectedMonthlyPlan.price} {selectedYearlyPlan.price}
            </span>
            {selectedMonthlyPlan.price ? (
              <span className="text-primary-marineBlue font-[800]">/mo</span>
            ) : (
              <span className="text-primary-marineBlue font-[800]">/yr</span>
            )}
          </div>
        </div>

        <hr />

        {selectedAddOnsValue.map((item) => {
          return (
            <div key={item.id} className="plan flex justify-between items-center mt-4">
              <div>
                <p className="text-neutral-coolGray">{item.value}</p>
              </div>
              <div>
                <p className="text-primary-marineBlue mb-2 text-[14px] font-[500]">
                  +${item.price}/mo
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between p-5">
        <div>
          <p className="text-neutral-coolGray">Total (per month)</p>
        </div>
        <div className="text-primary-purplishBlue font-[800]">+$??/mo</div>
      </div>

      <div className="flex justify-around sm:justify-between items-center pt-[260px] sm:pt-[79px]">
        <button
          onClick={() => navigate("/addons")}
          className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
        >
          Go back
        </button>

        <button
          className="bg-primary-purplishBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
          onClick={() => navigate("/thankyou")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
