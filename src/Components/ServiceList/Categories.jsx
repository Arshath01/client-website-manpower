import React from "react";
import { services } from "./categoriesList.js";
import ServiceComponent from "./ServiceComponent.jsx";

export default function Categories() {
  return (
    <div className="lg:w-[90%] mx-auto p-5">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold uppercase">Our Services</h1>
        <h2 className="text-lg font-semibold text-neutral-600">
          We offer wide range of services
        </h2>
        <div>
          {services &&
            services.map((data, index) => (
              <div key={index}>
                <ServiceComponent services={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
