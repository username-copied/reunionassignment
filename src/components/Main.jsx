import React, { useState } from "react";
import { data } from "../sample_data";
import "animate.css";
import Pagination from "./Pagination";
import Property from "./Property";
import FilterBar from "./FilterBar";

const Main = () => {
  const [allData, setData] = useState(data);
  //States and variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Functions for filters:
  const generateBedsDataForDropdown = () => {
    return [...new Set(data.map((item) => item.beds))];
  };
  const generatebathroomsDataForDropdown = () => {
    return [...new Set(data.map((item) => item.baths))];
  };

  const handleFilterBeds = (beds) => {
    const filteredData = data.filter((item) => {
      if (item.beds === beds) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterBaths = (baths) => {
    const filteredData = data.filter((item) => {
      if (item.baths === baths) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterState = (address) => {
    const filteredData = data.filter((item) => {
      const stateInAddress = `${item.address}`;
      if (stateInAddress.toLowerCase().includes(address.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterCity = (address) => {
    const filteredData = data.filter((item) => {
      const stateInAddress = `${item.address}`;
      if (stateInAddress.includes(address)) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <>
      <FilterBar
        beds={generateBedsDataForDropdown()}
        onBedsFilter={handleFilterBeds}
        baths={generatebathroomsDataForDropdown()}
        onBathsFilter={handleFilterBaths}
        onStateFilter={handleFilterState}
        onCityFilter={handleFilterCity}
      />
      <Property data={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </>
  );
};

export default Main;
