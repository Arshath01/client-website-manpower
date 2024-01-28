import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"

export default function Admin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mainPageTitle: "",
    mainPageDescription: "",
    mainPageImage: "",
    servicePageTitle: "",
    servicePageSubTitle: "",
    servicePageImage: "",
    servicePageDescription: "",
    servicePageCategory: [],
  });

  const [category, setCategory] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleCategory = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCategorySubmit =(e)=>{
    e.preventDefault();
    form.servicePageCategory.push(category);
    setCategory({
        title:"",
        image:"",
        description:""
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(form);
    const apiResponse = await fetch("https://amogamadminapi.vercel.app/admin/addService",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(form)
    })
    if(apiResponse.ok){
      setForm({
        mainPageTitle: "",
        mainPageDescription: "",
        mainPageImage: "",
        servicePageTitle: "",
        servicePageSubTitle: "",
        servicePageImage: "",
        servicePageDescription: "",
        servicePageCategory: [],
    })
    }
    else {
      console.error("Error:", apiResponse.status, apiResponse.statusText);
  }

  }
  return (
    <div className="p-4 rounded-dashed rounded-lg  lg:grid lg:grid-cols-3 lg:gap-2 px-8 py-4 lg:px-16 lg:py-8 lg:w[900px] mx-auto" >
      <div className="container">
        <h1>Main Page</h1>
        <h2>Title</h2>
        <input
          type="text"
          name="mainPageTitle"
          placeholder="main page title"
          value={form.mainPageTitle}
          onChange={handleChange}
        />
        <h2>Image</h2>
        <input
          type="text"
          name="mainPageImage"
          placeholder="main page image"
          value={form.mainPageImage}
          onChange={handleChange}
        />
        <h2>Description</h2>
        <input
          type="text"
          name="mainPageDescription"
          placeholder="main page description"
          value={form.mainPageDescription}
          onChange={handleChange}
        />
      </div>


      <div className="container">
      <h1>Service Page</h1>
        <h2>Title</h2>
        <input
            type="text"
            name="servicePageTitle"
            placeholder="service page title"
            value={form.servicePageTitle}
            onChange={handleChange}
        />
        <h2>Sub-Title</h2>
        <input
            type="text"
            name="servicePageSubTitle"
            placeholder="service page sub-title"
            value={form.servicePageSubTitle}
            onChange={handleChange}
        />
        <h2>Image</h2>
        <input
            type="text"
            name="servicePageImage"
            placeholder="service page image"
            value={form.servicePageImage}
            onChange={handleChange}
        />
        <h2>Description</h2>
        <input
            type="text"
            name="servicePageDescription"
            placeholder="service page description"
            value={form.servicePageDescription}
            onChange={handleChange}
        />
      </div>


      <div className="container">
      <h1>Categories</h1>
        <h2>Title</h2>
        <input
            type="text"
            name="title"
            value={category.title}
            onChange={handleCategory}
            placeholder="Title"
        />
        <h2>Image-1</h2>
        <input
            type="text"
            name="image"
            value={category.image}
            onChange={handleCategory}
            placeholder="Image"
        />
        <h2>Description-1</h2>
        <input
            type="text"
            name="description"
            value={category.description}
            onChange={handleCategory}
            placeholder="Description"
        />
        <button className="btn " onClick={handleCategorySubmit}>
            Add Category
        </button>
      </div>

      <button className="btn " onClick={handleSubmit}>
        Submit
      </button>
      <button className="btn btn-primary text-white font-bold uppercase" onClick={()=>navigate("/admin/allService")}>
        Edit services
      </button>

    </div>
  );
}