import { FILTER_FIELD } from "../constants/constants";
export const getSelectedFieldAsArray = (items, selecteField) => {
  if (items == undefined) return;
  const result = items.map((item) => item[selecteField]);
  return result;
};
export const getUniqueItemForField = (items, selecteField) => {
  const result = Array.from(
    new Set(getSelectedFieldAsArray(items, selecteField))
  );
  return result.sort();
};

export const removeItem = (items, removItem) => {
  if (items == undefined) return;
  const result = items.filter(function (item) {
    return item !== removItem;
  });
  return result;
};

export const filterFunction = (selectecFilter) => {
  return function (item) {
    for (let field of FILTER_FIELD) {
      if (selectecFilter[field]?.indexOf(item[field]) >= 0) return true;
    }
    return false;
  };
};

export const searchCallback = (item, inputData) => {
  if (item?.name?.toLowerCase().indexOf(inputData?.toLowerCase()) > -1) {
    return true;
  } else if (
    item?.color?.toLowerCase().indexOf(inputData?.toLowerCase()) > -1
  ) {
    return true;
  } else return false;
};

export const getTotal = (total, item) => {
  return total + parseInt(item.cartqty) * parseInt(item.price);
};
