import { Check } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element;
}

export interface Stat {
  label: string;
  value: string;
  subtitle: string;
}

export const storyTexts = {
  mainHeading: "Our Story",
  mainDescription:
    "It all started with the opening of the first Taor restaurant in 1980. A journey of passion, flavors, and unforgettable experiences.",
  mealsInfo:
    "We offer a variety of fresh and local meals and drinks, including breakfast, lunch, dinner, and excellent desserts.",
  sections: [
    {
      title: "F R E S S",
      description:
        "Our food is freshly cooked and baked to order by our main chef, using the finest and most promising ingredients.",
    },
    {
      title: "S T O C K S",
      description:
        "We are proud of our wine stock with over 130 wines from around the world. Our choices are from Italy, Turkey, USA, Hungary, and Brasil.",
    },
    {
      title: "ABOUT",
      description:
        "Traditional restaurant in the heart of the town with the finest local cuisine.",
    },
    {
      title: "C U I S I N E",
      description: "Seeking unique tastes in the everyday.",
    },
  ],
};

export const stats: Stat[] = [
  { label: "Open", value: "12", subtitle: "Restaurants" },
  { label: "Since", value: "1980", subtitle: "Brands" },
  { label: "Daily", value: "+400", subtitle: "Customers" },
];
