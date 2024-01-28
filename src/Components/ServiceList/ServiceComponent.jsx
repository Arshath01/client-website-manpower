import React from "react";
import { Link } from "react-router-dom";

export default function ServiceComponent({ services }) {
  console.log(services);
  return (
    <div
      className="flex flex-col my-5 lg:w-[90%] lg:flex-row gap-4  bg-white rounded-lg"
      id="services"
    >
      <div>
        <img
          src={services.bannerImg}
          alt={services.Category}
          className="w-full h-[300px] lg:h-[250px] lg:w-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4 lg:w-[60%] flex flex-col">
        <h1 className="text-xl font-semibold">{services.Category}</h1>
        <p className="lg:flex-grow">{services.description}</p>
        <div className="">
          <Link to={"/services/" + services.Category}>
            <button className="btn bg-blue-600  btn-sm rounded-sm lg:w-fit w-full text-white">
              Explore more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
