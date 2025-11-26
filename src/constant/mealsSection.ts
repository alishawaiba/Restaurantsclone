import Meal1 from "../assets/Mealexplore1.jpg";
import Meal2 from "../assets/Mealexplore2.jpg";
import Meal3 from "../assets/Mealexplore3.jpg";
import type { Feature } from "./ourstorySection";

export const mealsData = [
  { id: 1, title: "Special Meal 1", image: Meal1 },
  { id: 2, title: "Special Meal 2", image: Meal2 },
  { id: 3, title: "Special Meal 3", image: Meal3 },
];
export const features: Feature[] = [
  {
    title: "Fress",
    description: "Our cuisine is characterized by the fresh meals",
    icon: <Check>/>,/
  },
  {
    title: "Tasty",
    description: "We provide tasty food in a pleasant atmosphere",
    icon: <Check>/>,/
  },
  {
    title: "Local",
    description: "Quality meat and ingredients from our farm",
    icon: <Check>/>,/
  },
];
