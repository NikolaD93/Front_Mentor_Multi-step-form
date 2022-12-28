import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddOnsContext from "../context/AddOnsContext";

const AddOns = () => {
  const navigate = useNavigate();
  const { addOns, setAddOns } = useContext(AddOnsContext);
  let { selectedAddOnsValue, setSelectedAddOnsValue } = useContext(AddOnsContext);

  const [num, setNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summary");
  };

  const handleChange = (e, id) => {
    setSelectedAddOnsValue((prev) => [...prev, addOns[id]]);
    console.log(selectedAddOnsValue);
    setNum(id + 1);
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Pick add-ons
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col relative space-y-4"
      >
        {addOns.map((item, idx) => {
          return (
            <div
              key={item.id}
              className={`${
                num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
              } border-2 ${
                num != idx + 1
                  ? "border-neutral-lightGray"
                  : "border-primary-purplishBlue"
              } rounded-md flex items-center justify-between p-4 cursor-pointer transition-all duration-300 hover:border-primary-purplishBlue`}
            >
              <div className="flex items-center space-x-6">
                <div>
                  <input
                    className="h-5 w-5 cursor-pointer"
                    onChange={(e) => handleChange(e, idx)}
                    type="checkbox"
                    value={item.value}
                  />
                </div>
                <div>
                  <p className="font-[500] text-primary-marineBlue">
                    {item.value}
                  </p>
                  <p className="text-neutral-coolGray text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-primary-purplishBlue">+${item.price}/mo</p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center pt-[100px] sm:pt-[47px]">
          <button
            onClick={() => navigate("/selectplan")}
            className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
          >
            Go back
          </button>

          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="sumbit"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOns;
