import { createContext, useState } from "react";

const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  const newMonthlyPlans = [
    {
      id: 0,
      monthlyTitle: "",
      monthlyPrice: 0,
    },
  ];

  return (
    <PlansContext.Provider
      value={{
        newMonthlyPlans
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default PlansContext;
