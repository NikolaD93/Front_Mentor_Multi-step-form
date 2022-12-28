import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (name === "") {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }

    if (email === "") {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    if (number === "") {
      setNumberAlert(true);
    } else {
      setNumberAlert(false);
    }

    if (name !== "" && email !== "" && number !== "") {
      navigate("/selectplan");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Personal info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g.Stephen King"
          />
          <span
            className={`${
              nameAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
          <label className="text-primary-marineBlue font-[500] mb-2">
            Email Adress
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="email"
            placeholder="e.g.stephenking@lorem.com"
          />
          <span
            className={`${
              emailAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[100px] right-[10px]`}
          >
            This field is required
          </span>
          <label className="text-primary-marineBlue font-[500] mb-2">
            Phone Number
          </label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
          <span
            className={`${
              numberAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>
        </div>
        <div className="flex justify-end items-end py-[2px] mt-[120px] sm:mt-[26px]">
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

export default PersonalInfo;
