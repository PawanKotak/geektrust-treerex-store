import { useState, useEffect, useContext } from "react";
import {
  getSelectedFieldAsArray,
  getUniqueItemForField,
  removeItem,
} from "../../utility/utility";
import { dataContext } from "../../context/context";
import { FILTER_FIELD } from "../../constants/constants";

const Filter = () => {
  const { products, selectedFilter, setSelectedFilter, allproducts } =
    useContext(dataContext);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    let resultFilter = [];
    for (let field of FILTER_FIELD) {
      const uniqueValues = getUniqueItemForField(allproducts, field);
      resultFilter = [...resultFilter, { type: field, value: uniqueValues }];
    }
    setFilters(resultFilter);
  }, [allproducts]);

  const handlerChange = (event) => {
    //console.log(JSON.parse(event.target.value));
    const filterItem = JSON.parse(event.target.value);
    if (event.target.checked) {
      // console.log("Condition :", filterItem.type in selectedFilter);
      if (filterItem.type in selectedFilter) {
        setSelectedFilter({
          ...selectedFilter,
          [filterItem.type]: [
            ...selectedFilter[filterItem.type],
            filterItem.value,
          ],
        });
      } else {
        // Add
        setSelectedFilter({
          ...selectedFilter,
          [filterItem.type]: [filterItem.value],
        });
      }
    } else {
      const updateItems = removeItem(
        selectedFilter[filterItem.type],
        filterItem.value
      );

      // Delete
      if (updateItems?.length === 0) {
        //Delete field if empty
        const updateObj = selectedFilter;
        delete updateObj[filterItem.type];
        setSelectedFilter({
          ...updateObj,
        });
      } else if (Array.isArray(updateItems)) {
        setSelectedFilter({
          ...selectedFilter,
          [filterItem.type]: [...updateItems],
        });
      }
    }
  };

  return (
    <div
      className="card mt-4 rounded-0 shadow-lg mx-5 text-start"
      title="filter"
    >
      {/* {JSON.stringify(selectedFilter)} */}
      <ul className="list-group list-group-flush">
        {filters.map((filter, index) => {
          return (
            <li
              key={filter.type.toUpperCase()}
              className="list-group-item border-0"
            >
              <h5>{filter.type.toUpperCase()}</h5>
              {filter.value.map((item) => {
                return (
                  <div
                    key={filter?.type?.toUpperCase() + item}
                    className="form-check"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={JSON.stringify({ type: filter.type, value: item })}
                      id={`checkbox-${item}`}
                      onChange={handlerChange}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-${item}`}
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
