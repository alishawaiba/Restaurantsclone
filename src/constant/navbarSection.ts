

export const logo =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTAgMThsNS01LTEgLTcgMTIgLTMtNCAtMi01LTQgLTIgLTExLTggLTQgeiIvPjxwYXRoIGQ9Ik01IDE3bDMtMTMiLz48cGF0aCBkPSJNMTAgMTZsMTQgLTMiLz48L3N2Zz4=";

export interface NavLink {
  section: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { section: "home", label: "Home" },
  { section: "menu-hero", label: "Menu" },
  { section: "drinks", label: "Drinks" },
  { section: "offer", label: "Offer" },
  { section: "ourstory", label: "Our Story" },
  { section: "restaurants", label: "Restaurants" },
  { section: "gallery-hero", label: "Gallery" },
  { section: "contact", label: "Contact" },
];
