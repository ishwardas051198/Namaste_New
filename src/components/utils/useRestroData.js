import { useEffect, useState } from "react";
import { Menu_API } from "./constants"
const useRestroData=(resId)=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuData();
      }, []);
      const fetchMenuData = async () => {
        const data = await fetch(
          Menu_API + resId
        );
        //console.log(`${Menu_API} + ${resId}`)- wrong as + will be part of the url.
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
      };
      return resInfo;

}

export default useRestroData;