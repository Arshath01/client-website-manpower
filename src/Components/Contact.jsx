import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [formSubmit, setFormSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", formData);
    await fetch("https://amogamadminapi.vercel.app/admin/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setLoading(false);
        setFormSubmit(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          description: "",
        });
        setTimeout(() => setFormSubmit(false), 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="lg:w-[90%] mx-auto p-5 space-y-4" id="contact">
      <h1 className="text-2xl font-bold uppercase lg:text-center py-4">
        Contact us
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <form
          onSubmit={handleSubmit}
          className="order-2  space-y-4 col-span-1 rounded"
        >
          <h2 className="text-lg font-semibold">Name</h2>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border  border-gray-300 rounded"
            required
          />

          <h2 className="text-lg font-semibold">Email</h2>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <h2 className="text-lg font-semibold">Mobile Number</h2>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <h2 className="text-lg font-semibold">Description</h2>
          <textarea
            id="description"
            name="description"
            placeholder="Leave your thoughts here"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            {loading && (
              <span className="loading loading-spinner loading-md"></span>
            )}
            {formSubmit && (
              <div className="px-4 p-2 rounded text-green-400 font-semibold uppercase">
                Message Sent ✔
              </div>
            )}
          </div>
        </form>

        <div className="col-span-1 lg:order-2">
          <img
            src="https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
