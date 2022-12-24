import React from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("submitted");
    navigate("/selectplan");
  };

  return (
    <div className="basis-[60%] w-[100%] h-[100%] pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Personal info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        <label className="text-primary-marineBlue font-[500] mb-2">Name</label>
        <input
          className="mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 focus:outline-primary-marineBlue"
          type="text"
          placeholder="e.g.Stephen King"
        />
        <label className="text-primary-marineBlue font-[500] mb-2">
          Email Adress
        </label>
        <input
          className="mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 focus:outline-primary-marineBlue"
          type="email"
          placeholder="e.g.stephenking@lorem.com"
        />
        <label className="text-primary-marineBlue font-[500] mb-2">
          Phone Number
        </label>
        <input
          className="mb-[50px] outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 focus:outline-primary-marineBlue"
          type="text"
          placeholder="e.g. +1 234 567 890"
        />
        <div className="flex justify-end items-end">
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
