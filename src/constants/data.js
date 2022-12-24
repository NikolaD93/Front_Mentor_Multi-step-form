import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

export const data = [
  {
    id: 1,
    step: "step 1",
    title: "your info",
    linkTo: "/",
  },
  {
    id: 2,
    step: "step 2",
    title: "select plan",
    linkTo: "selectplan",
  },
  {
    id: 3,
    step: "step 3",
    title: "add-ons",
    linkTo: "addons",
  },
  {
    id: 4,
    step: "step 4",
    title: "summary",
    linkTo: "summary",
  },
];

export const monthlyPlans = [
  {
    id: 1,
    img: arcade,
    title: "Arcade",
    price: 9,
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
];

export const yearlyPlans = [
  {
    id: 1,
    img: arcade,
    title: "Arcade",
    price: 90,
    extra: "2 months free",
  },
  {
    id: 2,
    img: advanced,
    title: "Advanced",
    price: 120,
    extra: "2 months free",
  },
  {
    id: 3,
    img: pro,
    title: "Pro",
    price: 150,
    extra: "2 months free",
  },
];
