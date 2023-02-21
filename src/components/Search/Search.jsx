import { dataContext } from "../../context/context";
import { useContext, useState } from "react";
import { searchCallback } from "../../utility/utility";
const Search = () => {
  const { setSearchItem, showFilterSD, setShowFilterSD } =
    useContext(dataContext);

  const handlerChange = () => {
    setShowFilterSD(!showFilterSD);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        className="border-0 border-bottom border-dark w-50"
        onChange={(e) => setSearchItem(e.target.value)}
      ></input>
      <button
        type="submit"
        className="px-3 border rounded-2 text-white bg-secondary ms-2"
      >
        <i className="bi bi-search"></i>
      </button>
      <button
        type="submit"
        className="px-3 border rounded-2 text-white bg-secondary ms-2  d-inline-block d-md-none"
        onClick={handlerChange}
      >
        <i className="bi bi-funnel-fill"></i>
      </button>
    </div>
  );
};

export default Search;
