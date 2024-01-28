import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllService() {
  // const [form, setForm] = useState({
  //   mainPageTitle: "",
  //   mainPageDescription: "",
  //   mainPageImage: "",
  //   servicePageTitle: "",
  //   servicePageSubTitle: "",
  //   servicePageImage: "",
  //   servicePageDescription: "",
  //   servicePageCategory: [],
  // });

  // const [category, setCategory] = useState({
  //   title: "",
  //   image: "",
  //   description: "",
  // });

  // const handleChange =(e)=>{
  //   console.log(e.target.value);
  // }
  // const handleCategory =(e)=>{
  //   console.log(e.target.value);
  // }
  // const handleCategorySubmit =(e)=>{
  //   console.log(e.target.value);
  // }
  // const handleSubmit =(e)=>{
  //   console.log(e.target.value);
  // }
  const [form, setForm] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const apiResponse = await fetch("https://amogamadminapi.vercel.app/admin/getService");
        if (!apiResponse.ok) {
          console.log("Error fetching data");
          return;
        }

        const responseData = await apiResponse.json();
        console.log(responseData)
        setForm(responseData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();

  }, []);

  const handleDelete = async(e)=>{
    e.preventDefault();
    const response = await fetch("https://amogamadminapi.vercel.app/admin/deleteService",{
      method:"Delete",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    if(response.ok){
      setForm([])
    }
  }
  const handleDeleteById = async(e,id)=>{
    e.preventDefault();
    console.log(id)
    const response = await fetch(`https://amogamadminapi.vercel.app/admin/deleteService/${id}`,{
      method:"Delete",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    if(response.ok){
      setForm([])
    }
  }

  return (
    
    <div className="min-h-screen  lg:px-16 px-8 py-4 lg:py-8 lg:w-[900px] mx-auto">
      <button className="btn btn-danger mx-auto my-2 " onClick={handleDelete}>
        Delete All Services
      </button>
      <div className="grid grid-cols-4 gap-2 ">
      {form ? form.map((data, index) => (
        <div key={index} className="h-full">
          <img src={data.mainPageImage} alt={data.mainPageTitle} className=" rounded-b-lg h-[120px] w-full" />
          <h1 className="text-lg font-bold">{data.mainPageTitle.slice(0,15)+"..."}</h1>
          <p className="">{data.mainPageDescription.slice(0,100)+"..."}</p>
          <button
            className="btn btn-primary btn-sm my-2 w-full "
            onClick={() => navigate("/admin/edit/"+data._id)}
          >
            Edit
          </button>
          <button
            className="btn bg-red-600 text-white  btn-sm my-2 w-full "
            onClick={(e)=>handleDeleteById(e,data._id)}
          >
            Delete
          </button>
        </div>
      )): "NO DATA"}
      </div>
      
    </div>
  );
}
