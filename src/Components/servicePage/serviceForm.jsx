import React, { useState } from "react";

export default function ServiceForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleHireUsClick = () => {

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Description:", description);
    // Add further logic, e.g., sending the form data
  };

  return (
    <div className="p-5 grid grid-cols-2 gap-2">
      <div className="col-span-1 p-4 border space-y-5 rounded-xl">
        <h1 className="text-2xl font-bold uppercase">
          Fill the form to use our service
        </h1>

        <div className="space-y-3 items-center">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="rounded-xl bg-gray-200 p-3 w-full"
            placeholder="Enter your name..."
            value={name}
            onChange={handleNameChange}
          />

          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="rounded-xl bg-gray-200 p-3 w-full"
            placeholder="Enter your email..."
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="phone" className="block">
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            className="rounded-xl bg-gray-200 p-3 w-full"
            placeholder="Enter your phone number..."
            value={phone}
            onChange={handlePhoneChange}
          />

          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            id="description"
            className="rounded-xl bg-gray-200 p-3 w-full"
            rows="4"
            placeholder="Enter your description..."
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <button
          className="px-3 p-2 rounded-xl bg-blue-500 uppercase text-white font-bold"
          onClick={handleHireUsClick}
        >
          Hire Us
        </button>
      </div>

      <div className="col-span-1 h-full bg-green-500 rounded-xl"></div>
    </div>
  );
}
