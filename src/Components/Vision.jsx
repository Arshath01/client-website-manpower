import React from 'react';

const Vision = () => {
  const chooseUs = [
    {
      title: "Quality of Service",
      img: "https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?w=740&t=st=1702173900~exp=1702174500~hmac=aff3360b04b39b764e7ca32fb9092949f692753fc0890db0c6acad94b1d53775"
    },
    {
      title: "Customized Solution",
      img: "https://img.freepik.com/free-vector/gradient-insights-illustration_23-2149322241.jpg?w=740&t=st=1702173758~exp=1702174358~hmac=cd12829c38fdfe2a6ade12fded4d2e84328b3807aa0769528ce9ee53fdd06caa"
    },
    {
      title: "Transparent Pricing",
      img: "https://img.freepik.com/free-vector/remittance-money-forward-cash-overseas-direct-funding-give-allowance-spare-sum-getting-payroll-transferring-forex-money-drop-coin-vector-isolated-concept-metaphor-illustration_335657-2159.jpg?w=740&t=st=1702173845~exp=1702174445~hmac=00d9f71cce67dabfee2952cfe1838fbefbc2ab7d3b685beff35034d87cbbde48"
    },
    {
      title: "Adjustable schedule.",
      img: "https://img.freepik.com/free-vector/online-calendar-concept-illustration_114360-5121.jpg?w=740&t=st=1702434814~exp=1702435414~hmac=76fbe163126bcb064f66d09333e356530c30006cf2d63b11d517e196aae09263"
    },
  ];

  const ChooseUsComponent = ({ title, img }) => (
    <div className='rounded-xl w-full h-full p-3 border'>
      <img
        src={img}
        alt={title}
        width={200}
        className="rounded-full mx-auto "
      />
      <h1 className='text-base font-semibold leading-6 text-gray-900 text-center'>{title}</h1>
    </div>
  );

  return (
    <div className='lg:w-[90%] mx-auto p-4 space-y-4'>
      <h1 className='text-2xl lg:col-span-1 my-auto font-extrabold uppercase py-3 text-center'>Why Choose Us?</h1>

      <div className='grid lg:grid-cols-4 lg:col-span-2 grid-cols-2 gap-2 justify-center p-5'>
        {chooseUs.map((data, index) => (
          <div key={index} className="mx-auto w-full">
            <ChooseUsComponent title={data.title} img={data.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
