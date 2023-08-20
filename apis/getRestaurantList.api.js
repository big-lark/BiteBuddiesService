export const getRestaurantList = async () => {
  const result = await fetch("", {
    headers: { "Content-Type": `application/json` },
    method: "GET",
  });
  return result;
};
