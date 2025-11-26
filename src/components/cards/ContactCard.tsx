import React from "react";

type ContactCardProps = {
  id: number;
  title: string;
  value: string;
};

export default function ContactCard({ title, value }: ContactCardProps) {
  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold">{title}</h3>
      <p>{value}</p>
    </div>
  );
}
