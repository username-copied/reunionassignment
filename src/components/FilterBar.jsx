import { useState } from "react";

const FilterBar = ({
  beds,
  onBedsFilter,
  baths,
  onBathsFilter,
  onStateFilter,
  onCityFilter,
}) => {
  const [filters, setFilters] = useState({
    beds: "",
    baths: "",
    state: "",
    city: "",
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
      case "state":
        onStateFilter(value);
        break;
      case "city":
        onCityFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-items-center justify-center gap-16 bg-[#123795]  p-4 m-4 sm:p-8 sm:m-8 rounded-xl  text-white">
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
      <div className="flex gap-4 justify-center items-center justify-items-center">
        <label htmlFor="name">Enter the State Initials</label>
        <input
          type="text"
          className="form-control text-black"
          id="state"
          onChange={handleInput("state")}
        />
      </div>
      <div className="flex gap-4 justify-center items-center justify-items-center">
        <label htmlFor="name">Enter the City</label>
        <input
          type="text"
          className="form-control text-black"
          id="city"
          onChange={handleInput("city")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
