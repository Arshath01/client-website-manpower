import React from 'react'
import cleaning from "../assets/about/cleaning.svg"
import environment from "../assets/about/environment.svg"

export default function About() {
  const aboutData = [
    {
      title: "Our Commitment to Cleanliness",
      img: "https://img.freepik.com/free-vector/partnership-concept-illustration_114360-5954.jpg?w=740&t=st=1702301485~exp=1702302085~hmac=a3150b917e7bfccdb07265a62a80caab6cd2683743a82d71c42a8f4c6f8788a8",
      description: "At CleanCare Services, we prioritize cleanliness and hygiene. Our dedicated team ensures a spotless environment for your comfort and well-being."
    },
    {
      title: "Experienced Cleaning Professionals",
      img: cleaning,
      description: "Meet our skilled and experienced cleaning professionals who are dedicated to providing top-notch cleaning services. Your satisfaction is our guarantee."
    },
    {
      title: "Environmentally Friendly Practices",
      img: environment,
      description: "We are committed to sustainability. Our cleaning practices incorporate eco-friendly solutions, contributing to a healthier environment for everyone."
    },
   
  ];
  
  return (
    <section className='lg:w-[90%] mx-auto p-5 lg:grid lg:grid-cols-4 gap-3 space-y-4 min-h-screen pt-12'>
      <div className='lg:col-span-2 col-span-4 w-full space-y-8 '>
        <h1 className='text-2xl font-bold text-center'>What we do ?</h1>
        <h2 className='text-lg font-semibold text-neutral-600'>We offer expert, customizable cleaning services for homes and businesses, emphasizing quality, customization, and eco-friendly practices.</h2>
        <img src="https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520631.jpg?w=740&t=st=1702301555~exp=1702302155~hmac=4e00bac2e965ac950b3b701f0530f3cbe69c7032021de72f8275631739031532" alt=""className="bg-green-200  max-h-80 w-full rounded-lg"/>
      </div>

      <div className='lg:col-span-2 col-span-4  py-4  my-auto h-full flex flex-col lg:pl-4 space-y-8'>

      {aboutData.map((data,index)=>(
        <div className="relative pl-16" key={index}>
        <dt className="text-base font-semibold leading-7 text-gray-900">
          <div className={`absolute left-0 top-0 border  flex h-12 w-12 items-center justify-center rounded-lg`}>
            <img src={data.img} alt="" />
          </div>
          {data.title}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-600">{data.description}</dd>
      </div>
      ))}
       
        </div>

    
    
    
    </section>
  )
}
