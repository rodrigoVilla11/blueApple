'use client'
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

const Quotes = () => {
  const [state, setState] = useState(0);
  const people = [
    {
      name: "Fran Brandalise",
      role: "Founder",
      quote:
        "Quien sea primero en dominar el segmento más importante de un mercado, será el último en moverse en todo el mercado.",
      image: "/founder.jpg",
      imageAvatar: "/founder.jpg",
    },
    {
      name: "Facu Martin",
      role: "Custom success manager",
      quote:
        "Las malas ventas en lugar de un mal producto es el fracaso más común de los negocios.",
      image: "/manager.jpg",
      imageAvatar: "/managerAvatar.jpg",
    },
  ];

  const handlePrev = () => {
    setState((prevState) => (prevState === 0 ? people.length - 1 : prevState - 1));
  };

  const handleNext = () => {
    setState((prevState) => (prevState === people.length - 1 ? 0 : prevState + 1));
  };

  const person = people[state];

  return (
    <div className="w-full h-screen bg-white px-44 py-24">
      <div className="flex justify-center items-center bg-gray-100 rounded-xl">
        <div className="flex flex-col justify-center items-start w-2/3 p-20 gap-4">
          <Image
            alt="quotes"
            src="/quotes.svg"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <h4 className="text-2xl text-blue-darkBlueApple font-bold">
            {person.quote}
          </h4>
          <div className="flex justify-start items-center gap-4">
            <Avatar src={person.imageAvatar} size="lg" />
            <div className="flex flex-col justify-center items-start text-black">
              <p className="font-bold">{person.name}</p>
              <p>{person.role}</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-4 flex justify-center items-center">
          <div className="relative w-[350px] h-[400px]">
            <Image
              alt={person.name}
              src={person.image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={handlePrev}
          className={`h-4 w-4 rounded-full ${state === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
        ></button>
        <button
          onClick={handleNext}
          className={`h-4 w-4 rounded-full ${state === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
        ></button>
      </div>
    </div>
  );
};

export default Quotes;
