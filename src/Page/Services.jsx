import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../Components/ServiceList/categoriesList";

export default function Services() {
  const { Category } = useParams();
  const [data, setData] = useState([]);
  const [highLights, setHighLights] = useState([]);
  const [bannerImg, setBannerImg] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    const CategoryList = services.filter(
      (service) => service.Category === Category
    );

    if (CategoryList.length === 0) {
      setData(null);
    } else {
      const CategoryServices = CategoryList[0].Services;
      setData(CategoryServices);
      setHighLights(CategoryList[0].highlights);
      setBannerImg(CategoryList[0].bannerImg);
      setDescription(CategoryList[0].description);
      window.scrollTo({ top: 0 });
    }
  }, [Category]);

  return (
    <div className=" py-3">
      <div className="max-w-screen-lg mx-auto p-4 lg:p-8 space-y-4 bg-white rounded-lg">
        <h1 className="text-3xl font-semibold uppercase border-b-2 pb-2 text-gray-800">
          {Category}
        </h1>
        <p className="text-gray-700">{description}</p>

        <h1 className="text-xl font-semibold text-gray-800 py-2">
          Explore Our Diverse Range of Additional Services
        </h1>

        <div>
          {data &&
            data.map((service, index) => (
              <div key={index} className="space-y-8 py-4 border-b-2 h-full">
                <h1 className="text-2xl font-semibold">{service.title}</h1>
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="h-[300px] w-full lg:w-[600px] rounded-md object-cover"
                />
                <p className="text-gray-700">{service.description}</p>
                {service.expandedServices &&
                  service.expandedServices.map((expandedService, index) => (
                    <div key={index} className="">
                      <h1 className="text-lg font-semibold bg-gray-800 text-white rounded-sm px-2 py-1 md:text-center md:rounded-lg md:p-2 flex flex-col gap-3 my-2">
                        {expandedService.service_title}
                      </h1>
                      <div className="flex gap-2 md:flex-row flex-col md:p-5 ">
                        {expandedService.img && (
                          <img
                            src={expandedService.img}
                            className="h-[300px] md:h-[330px] md:max-w-[70%] w-full rounded-md shadow-md my-4 md:my-2
                        "
                          />
                        )}
                        <p className="md:w-[80%] md:text-lg md:p-5 my-auto">
                          {expandedService.service_description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
