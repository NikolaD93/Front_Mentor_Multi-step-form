import { createContext } from "react";

const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  let monthlyTitle = " ";
  let monthlyPrice = 0;
  let yearlyTitle = " ";
  let yearlyPrice = 0;

  return (
    <PlansContext.Provider
      value={{ monthlyTitle, monthlyPrice, yearlyTitle, yearlyPrice }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default PlansContext;
