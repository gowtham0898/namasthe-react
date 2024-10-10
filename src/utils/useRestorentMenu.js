import { useEffect, useState } from "react";

import { MENU_ITEMS } from "../utils/constants";

const useRestorentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const featchData = async () => {
    const resdata = await fetch(MENU_ITEMS + resId);
    const jsonData = await resdata.json();
    setResInfo(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };
  useEffect(() => {
    featchData();
  }, []);

  return resInfo;
};

export default useRestorentMenu;
