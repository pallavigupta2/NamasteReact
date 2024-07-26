import { useEffect,useState } from "react";
import { MENU_API } from "./constant";

const useRestrauntMenu = (id)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData()

    },[])
    const fetchData = async () => {
        const data = await fetch(MENU_API+id);
        const json = await data.json();
        
        console.log("restraunt", json);
        setResInfo(json?.data);
      };
    return resInfo;
}

export default useRestrauntMenu;