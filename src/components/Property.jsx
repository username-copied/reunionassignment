import React from "react";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";

const Property = ({ data }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-16">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <div className="w-full max-w-sm bg-[#123795] rounded-lg shadow-md  dark:border-gray-700">
                <a href="#a">
                  <img
                    className="p-8 rounded-t-lg hover:scale-95 duration-200 rounded-lg"
                    src={data.imgSrc}
                    alt="product "
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#a">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      <span>Property number : </span>
                      {data.id}
                    </h5>
                  </a>
                  <div className="flex items-center text-white mt-2.5 mb-5">
                    {data.address}
                  </div>
                  <div className="flex items-center gap-4 text-white mt-2.5 mb-5">
                    <div className="flex items-center gap-2">
                      <FaBed />
                      {data.beds} beds
                    </div>
                    <div className="flex items-center gap-2">
                      <MdBathroom />
                      {data.baths} bathrooms
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Area -</span>
                      <div>
                        {data.area}
                        sq.mt
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {data.price}
                    </span>
                    <a
                      href="#a"
                      className="text-white bg-[#4276fa] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Take a look
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Property;
/*
 


 */
