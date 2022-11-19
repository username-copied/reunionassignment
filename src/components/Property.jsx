import React from "react";

const Property = ({ data }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-16">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <div className="hover:scale-95 duration-200">
                <img
                  className="h-[80%] rounded-xl animate__fadeInLeftBig animate__animated "
                  src={data.imgSrc}
                  alt="Property"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Property;
