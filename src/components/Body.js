import RestrauntCards from "./RestrauntCards";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import useOnlineStatus from "../utils/useOnlineStatus";
const Body =()=>{
const [listOfRestraunt,setListOfRestraunts] = useState([]);
const [filteredRestraunt,setfilteredRestraunt] = useState([]);
const [text,setText] = useState("");
const onlineStatus = useOnlineStatus();
// We can write above usestate in different ways because it is basically a destructing of array
// const arr = useState(resList);
// const [listOfRestraunt,setListOfRestraunts]=arr
// const listOfRestraunt = arr[0];
// const setListOfRestraunts = arr[1];

useEffect(()=>{
    fetchData();
},[]);
const fetchData= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json()
    console.log('pallavi',json)
    setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
const filteredData = ()=>{
     const filteredList = listOfRestraunt.filter((res)=>res.info.avgRating > 4.3)
     setListOfRestraunts(filteredList)
}
if(onlineStatus === false) return <h2>Hay, It seems you'r offline. Please check your internet!!</h2>;
    return listOfRestraunt.length === 0 ? <Shimmer/>: (
        <div className='body'>
            <div className="flex flex-wrap p-1 m-3 justify-center">
            <div className="p-[10px]">
                <input className="border border-solid border-black w-[400px] rounded-md" type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button className="border border-solid px-3 py-0 ml-2 rounded-md bg-lime-200" onClick={()=>{
                    const filterData = listOfRestraunt.filter((item)=>item.info.name.toLowerCase().includes(text.toLowerCase()))
                    setfilteredRestraunt(filterData)
                
                }}>Search</button>
            </div>
            <div className="p-[10px]">
                <button className="border border-solid px-3 py-0 ml-2 rounded-md bg-green-200" onClick={filteredData}>Top Restraunts</button>
            </div>
            </div>
            <div className='flex flex-wrap'>
                {filteredRestraunt.map((item)=><RestrauntCards key={item.info.id} resData={item}/>)}
            </div>
        </div>
    )
}
export default Body;