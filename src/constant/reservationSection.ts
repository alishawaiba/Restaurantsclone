export const reservationFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    required: true,
  },
  {
    name: "time",
    label: "Time",
    type: "time",
    required: true,
  },
];

export const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5+", label: "5+ Guests" },
];
