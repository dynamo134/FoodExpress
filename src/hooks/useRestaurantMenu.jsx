import React from "react";
import { RESTAURANT_MENU } from "../api/EndPoints";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = React.useState(null);
  useEffect(() => {
    getRestaaurantMenu();
  }, []);

  async function getRestaaurantMenu() {
    const response = await fetch(RESTAURANT_MENU + resId);
    const data = await response.json();
    console.log(data);
    setRestaurantData(data);
  }

  return restaurantData;
};

export default useRestaurantMenu;
