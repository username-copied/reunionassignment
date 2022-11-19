import { useState } from "react";

const FilterBar = ({ beds, onBedsFilter, baths, onBathsFilter }) => {
  const [filters, setFilters] = useState({
    beds: "",
    baths: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "beds":
        onBedsFilter(value);
        break;
      case "baths":
        onBathsFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-items-center justify-center gap-16 bg-[#123795] p-8 m-8 rounded-xl  text-white">
      <div>
        <h4>Filters</h4>
      </div>
      <div className="flex gap-4 justify-center items-center justify-items-center">
        <label>No of Beds</label>
        <select
          className="form-control text-black"
          id="beds"
          onChange={handleInput("beds")}
        >
          <option value="">Select</option>
          {beds.map((beds) => (
            <option value={beds} key={beds}>
              {beds}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4 justify-center items-center justify-items-center">
        <label>No of Bathrooms</label>
        <select
          className="form-control text-black"
          id="beds"
          onChange={handleInput("baths")}
        >
          <option value="">Select</option>
          {baths.map((baths) => (
            <option value={baths} key={baths}>
              {baths}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
