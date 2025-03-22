export const filter = (allRestList) => {
  allRestList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(value.toLowerCase())
  );
};
