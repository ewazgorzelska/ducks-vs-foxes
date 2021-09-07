export const getOrderedIds = (obj) => {
  const arrOfIds = [];

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      arrOfIds.push(obj[key].id);
    }
  });
  return arrOfIds;
};
