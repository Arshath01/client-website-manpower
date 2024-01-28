import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../Page/admin.css";

export default function Edit() {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState({
        id,
        mainPageTitle: "",
        mainPageImage: "",
        servicePageImage:"",
        servicePageTitle:"",
        servicePageDescription:"",
        categories: [],
    });

    useEffect(() => {
        async function fetchData() {
            const apiRes = await fetch(`https://amogamadminapi.vercel.app/admin/getService/${id}`);
            const resolve = await apiRes.json();
            setData({
                id: resolve._id,
                mainPageTitle: resolve.mainPageTitle,
                servicePageTitle: resolve.servicePageTitle,
                mainPageImage: resolve.mainPageImage,
                categories: resolve.categories,
                servicePageImage:resolve.servicePageImage,
                servicePageDescription:resolve.servicePageDescription
            });
            console.log(resolve);
        }
        fetchData();
    }, [])

    const handleInput = (e, index) => {
        const { name, value } = e.target;
        const updatedCategories = [...data.categories];
        updatedCategories[index][name] = value;

        setData({
            ...data,
            categories: updatedCategories,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const response = await fetch(`https://amogamadminapi.vercel.app/admin/updateService/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(response.ok);
    }

    return (
        <div className='min-h-screen lg:w-[900px] mx-auto lg:px-16 lg:py-8 px-8 py-4'>
            {data &&
                <div>
                    <h1>
                        {data.mainPageTitle}
                    </h1>
                    <input type="text" placeholder="Update Main Image" className='w-full p-3 rounded-lg' value={data.mainPageImage} name="mainPageImage" onChange={(e) => setData({...data,mainPageImage:e.target.value})} />
                    <h1>
                        {data.servicePageTitle}
                    </h1>
                    <input type="text" placeholder="Update service Image" className='w-full p-3 rounded-lg' value={data.servicePageImage} name="servicePageImage" onChange={(e) => setData({...data,servicePageImage:e.target.value})} />
                    <h1>
                        Service Page Description
                    </h1>
                    <input type="text" placeholder="Update service Image" className='w-full p-3 rounded-lg' value={data.servicePageDescription} name="servicePageDescription" onChange={(e) => setData({...data,servicePageDescription:e.target.value})} />
                    {data.categories.map((category, index) => (
                        <div key={index}>
                            <h2>{category.title}</h2>
                            <input type="text" placeholder={`Update ${category.title} Image`} className='w-full p-3 rounded-lg' value={category.image} name="image" onChange={(e) => handleInput(e, index)} />
                        </div>
                    ))}
                    <button onClick={handleSubmit} className="btn">
                        Submit
                    </button>
                </div>
            }
        </div>
    )
}
