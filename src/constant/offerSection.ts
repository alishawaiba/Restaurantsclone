
import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";

import Brownie from "../assets/Browniejpg.jpg";
import CheeseCake from "../assets/CheeseCake.jpg";
import Pastries from "../assets/Pastries.jpg";

import SteaksImg from "../assets/steaks.jpg";
import FilletSteaks from "../assets/FilletSteaks.jpg";
import FlanksSteaks from "../assets/FlanksSteaks.jpg";

import Wine1 from "../assets/Drinks2.jpeg";
import Wine2 from "../assets/Drinks3.jpeg";
import Wine3 from "../assets/Drinks4.jpeg";

export interface Item {
  id: number;
  name: string;
  image: string;
  price: string;
}


export interface Offer {
  title: string;
  category: string;
  image: string;
  items: Item[];
}
export const offers: Offer[] = [
  {
    title: "We wish you a pleasant stay and enjoy dinner",
    category: "STEAKS",
    image: Offer1,
    items: [
      { id: 1, name: "Steaks", image: SteaksImg, price: "225g | $19" },
      { id: 2, name: "FileSteaks", image: FilletSteaks, price: "280g | $14" },
      { id: 3, name: "FlankSteaks", image: FlanksSteaks, price: "z | $22" },
    ],
  },
  {
    title: "Brownies and cheesecakes baked exclusively for Taar",
    category: "DESSERTS",
    image: Offer2,
    items: [
      { id: 1, name: "Brownie", image: Brownie, price: "$5.99" },
      { id: 2, name: "Cheesecake", image: CheeseCake, price: "$6.99" },
      { id: 3, name: "Pastries", image: Pastries, price: "$4.49" },
    ],
  },
  {
    title: "Browse our stock online with over 30 wines",
    category: "WINES",
    image: Offer3,
    items: [
      { id: 1, name: "Sauvignon Blanc", image: Wine1, price: "$15.00" },
      { id: 2, name: "Cabernet Sauvignon", image: Wine2, price: "$18.00" },
      { id: 3, name: "Merlot", image: Wine3, price: "$20.00" },
    ],
  },
];
