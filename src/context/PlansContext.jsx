import { createContext, useState } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  const [monthlyPlans, setMonthlyPlans] = useState([
    { id: 1, 
      img: arcade, 
      title: "Arcade", 
      price: 9 
    },
    {
      id: 2,
      img: advanced,
      title: "Advanced",
      price: 12,
    },
    {
      id: 3,
      img: pro,
      title: "Pro",
      price: 15,
    },
  ]);

  const [yearlyPlans, setYearlyPlans] = useState([
    {
      id: 4,
      img: arcade,
      title: "Arcade",
      price: 90,
      extra: "2 months free",
    },
    {
      id: 5,
      img: advanced,
      title: "Advanced",
      price: 120,
      extra: "2 months free",
    },
    {
      id: 6,
      img: pro,
      title: "Pro",
      price: 150,
      extra: "2 months free",
    },
  ]);


  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState({
    title: "",
    price : null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState({
    title: "",
    price: null
  })

  return (
    <PlansContext.Provider
      value={{
        monthlyPlans,
        setMonthlyPlans,
        yearlyPlans,
        setYearlyPlans,
        selectedMonthlyPlan,
        setSelectedMonthlyPlan,
        selectedYearlyPlan,
        setSelectedYearlyPlan
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default PlansContext;
