

export interface Drink {
  name: string;
  img: string;
  prices: string[];
}


import Drinks1 from "../assets/Drinks1.jpeg";
import Drinks2 from "../assets/Drinks2.jpeg";
import Drinks3 from "../assets/Drinks3.jpeg";
import Drinks4 from "../assets/Drinks4.jpeg";
import Drinks5 from "../assets/Drinks5.jpeg";
import Drinks6 from "../assets/Drinks6.jpeg";
import Drinks7 from "../assets/Drinks7.jpeg";

export const drinksData: Drink[] = [
  { name: "Sauvignon Blanc", img: Drinks1, prices: ["125 ml $6", "Bottle $28"] },
  { name: "Calvet Prestige Bordeaux", img: Drinks2, prices: ["125 ml $8", "Bottle $35"] },
  { name: "Chardonnay", img: Drinks3, prices: ["125 ml $8"] },
  { name: "Aperol Spritz", img: Drinks4, prices: ["125 ml $8"] },
  { name: "Dry Martini", img: Drinks5, prices: ["125 ml $8"] },
  { name: "Whisky", img: Drinks6, prices: ["125 ml $8"] },
  { name: "Sparkling Water", img: Drinks7, prices: ["125 ml $8"] },
];
