import Drinks1 from "../assets/Drinks1.jpeg";
import Drinks2 from "../assets/Drinks2.jpeg";
import Drinks3 from "../assets/Drinks3.jpeg";
import Drinks4 from "../assets/Drinks4.jpeg";
import Drinks5 from "../assets/Drinks5.jpeg";
import Drinks6 from "../assets/Drinks6.jpeg";
import Drinks7 from "../assets/Drinks7.jpeg";

interface Drink {
  id: number;
  name: string;
  image: string;
  prices: string[];
}

export const drinksData: Drink[] = [
  {
    id: 1,
    name: "Sauvignon Blanc",
    image: Drinks1,
    prices: ["125 ml $6", "Bottle $28"],
  },
  {
    id: 2,
    name: "Calvet Prestige Bordeaux",
    image: Drinks2,
    prices: ["125 ml $8", "Bottle $35"],
  },
  { id: 3, name: "Chardonnay", image: Drinks3, prices: ["125 ml $8"] },
  { id: 4, name: "Aperol Spritz", image: Drinks4, prices: ["125 ml $8"] },
  { id: 5, name: "Dry Martini", image: Drinks5, prices: ["125 ml $8"] },
  { id: 6, name: "Whisky", image: Drinks6, prices: ["125 ml $8"] },
  { id: 7, name: "Sparkling Water", image: Drinks7, prices: ["125 ml $8"] },
];
