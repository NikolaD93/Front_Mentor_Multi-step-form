import { createContext, useState } from "react";

const AddOnsContext = createContext();

export const AddOnsProvider = ({ children }) => {
  const [addOns, setAddOns] = useState([
    {
      id: 1,
      value: "Online service",
      desc: "Acces to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      value: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      value: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ]);

  const [selectedAddOnsValue, setSelectedAddOnsValue] = useState([]);

  return (
    <AddOnsContext.Provider
      value={{
        addOns,
        setAddOns,
        selectedAddOnsValue,
        setSelectedAddOnsValue
      }}
    >
      {children}
    </AddOnsContext.Provider>
  );
};

export default AddOnsContext;
