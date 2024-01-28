import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center p-8 py-16 bg-gradient-to-br from-green-100 via-blue-100/20 to-green-200/50">
      <div className="text-center space-y-8 lg:w-3/4 mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Providing Exceptional Manpower and Clean Care Services
        </h1>
        <p>
          We specialize in delivering top-notch manpower solutions and
          comprehensive clean care services. Our commitment is to ensure your
          workforce is skilled, and your spaces are impeccably maintained.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-center mx-auto space-y-2 lg:space-y-0 lg:space-x-2">
          <a
            href="#services"
            className="bg-green-500 text-white font-bold p-2 lg:w-1/4"
          >
            <button className="">Our Services</button>
          </a>
          <a
            href="#contact"
            className="border p-2 bg-white/60 font-bold shadow-sm lg:w-1/4"
          >
            <button className="">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
