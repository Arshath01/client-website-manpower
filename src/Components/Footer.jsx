import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white  py-6 px-5 ">
      <div className="flex lg:flex-row flex-col justify-between lg:w-[95%] space-y-4 mx-auto">
        {/* Contact Information */}
        <div className="">
          <h1 className="text-xl font-bold mb-2">
            Amogam Manpower & Cleancare Services.
          </h1>
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p>
            <strong>Office Address:</strong> No.4/5, Ganesh Nagar, Kondapalayam
            Road, Sholinghur, Ranipet District - 631 102.
          </p>
          <p>
            <strong>Contact No:</strong> +91 99629 97075, +91 70929 36572
          </p>
          <p>
            <strong>Email ID:</strong> amogamcleancare@gmail.com
          </p>
        </div>

        <div className="mt-auto pr-12">
          <h2 className="text-xl font-bold mb-2">Connect with Us</h2>
          <div className="flex space-x-4 lg:justify-between gap-3">
            <a href="#" className="text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
