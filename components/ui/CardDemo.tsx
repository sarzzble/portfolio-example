"use client";

import { FaLocationArrow } from "react-icons/fa6";

interface Props {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export function CardDemo({ title, des, img, iconLists, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="max-w-xs w-full">
        <div className="relative overflow-hidden rounded-md shadow-xl group transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="relative overflow-hidden rounded-t-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div className="p-4 bg-purple rounded-b-md">
            <h1 className="font-bold text-xl md:text-2xl text-gray-900 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-700 my-2 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              {des}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon} alt={icon} className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-l md:text-xs text-sm text-gray-500">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#9e9aa4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
