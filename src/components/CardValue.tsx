import React, { JSX } from "react";

interface CardValueProps {
  icon?: React.ReactNode;
  title: JSX.Element;
  description: string;
}

const CardValue: React.FC<CardValueProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg max-w-[270px]">
    {icon && (
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100">
        {icon}
      </div>
    )}
    <h3 className="font-bold text-black text-lg mb-2">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default CardValue;
