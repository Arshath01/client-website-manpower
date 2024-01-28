import React from "react";

export default function Mision() {
  const aboutUs = [
    {
      point: "Environmentally friendly cleaning solutions",
      description:
        "Our cleaning solutions prioritize environmental sustainability.",
    },
    {
      point: "Professional and reliable service",
      description:
        "Trust in our professional and dependable cleaning services.",
    },
    {
      point: "Customized cleaning plans",
      description:
        "Tailored cleaning plans to meet your specific needs and preferences.",
    },
    {
      point: "State-of-the-art cleaning equipment",
      description:
        "Utilizing cutting-edge cleaning equipment for optimal results.",
    },
    {
      point: "Dedicated to customer satisfaction",
      description:
        "Committed to ensuring our customers are satisfied with our services.",
    },
    {
      point: "Affordable and transparent pricing",
      description:
        "Transparent pricing structures to provide affordability and clarity.",
    },
  ];

  // Define an array of background colors for each point
  const backgroundColors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
  ];

  return (
    <section className="lg:w-[90%] mx-auto p-5" id="about">
      <div className="space-y-5">
        <h1 className="text-2xl font-bold uppercase">Know More About Us</h1>
        <img
          src="https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="min-h-60 max-h-[450px] w-full rounded-lg"
        />
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Explore Amogam Clean Carre's commitment:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutUs.map(({ point, description }, index) => (
            <div
              key={index}
              className={`p-4 border border-gray-300 rounded-lg ${backgroundColors[index]}`}
            >
              <h2 className="text-lg font-semibold mb-2">{point}</h2>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
