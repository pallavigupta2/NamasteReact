import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestrauntCards=(props)=>{
    const {resData} = props;
    const {name,cuisines,cloudinaryImageId,costForTwo,avgRating,sla,id}=resData?.info;
    return(
       <Link to={"/restraunt/"+id}> 
       <div className='w-56 m-3 p-3 bg-gray-200 rounded-md hover:bg-gray-600'>
           <img className='w-full rounded-md h-40' src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold mb-2">{name}</h3>
            <h4 className="text-xs m-1">{cuisines.join(', ')}</h4>
            <h4 className="text-xs m-1">{costForTwo}</h4>
            <h3 className="text-xs m-1">{avgRating}</h3>
            <h3 className="text-xs m-1">{sla.slaString}</h3>
        </div>
        </Link>
    )
}

export const EnhancedRestrauntCards = (RestrauntCards)=>{
    return (props)=>{
        return(
            <div>
                <label className="bg-green-400 absolute p-1 rounded-md text-white m-3">Veg!</label>
                <RestrauntCards {...props}/>
            </div>
        )
    }
}

export default RestrauntCards;