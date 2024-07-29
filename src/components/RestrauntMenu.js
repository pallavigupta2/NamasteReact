import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTRAUNT_MENU_IMAGES } from "../utils/constant";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategories from "./RestrauntCategories";
import { useState } from "react";

const RestrauntMenu = () => {
  const { id } = useParams();
  const resInfo = useRestrauntMenu(id);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log('pallavi',resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  console.log(
    "pallavi",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log('prachi:',categories)
  return (
    <div className="m-5 mx-[100px]">
      <h2 className="text-lg font-bold text-center">{name}</h2>
      <div className="p-3 rounded-md bg-stone-300 text-center w-6/12 m-auto">
        <h5 className="text-sm">
          {avgRating} ({totalRatingsString})
        </h5>
        <h5 className="text-sm">{costForTwoMessage}</h5>
        <p
          dangerouslySetInnerHTML={{ __html: expectationNotifiers[0]?.text }}
        ></p>
      </div>
      {/* <h3 className="text-lg font-bold mt-5">Recommended</h3>
      {
        itemCards?.map((item,key)=>{
            return  <div key={item.card.info.id} className="p-5 flex space-x-32 bg-stone-200 mb-5 rounded-md">
            <div className="w-[100%]">
                <h3>{item.card.info.name}</h3>
                <h5> Rs. {(item.card.info.defaultPrice || item.card.info.price )/100}</h5>
                <p>{item.card.info.description}</p>
            </div>
            <div>
              <img className="w-48 rounded-md" src={RESTRAUNT_MENU_IMAGES+item.card.info.imageId}/>
            </div>
          </div>
        })
      } */}
      {categories.map((category, index) => (
        <RestrauntCategories
          showRestrauntList={showIndex === index ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestrauntMenu;
