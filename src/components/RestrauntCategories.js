import { useState } from "react";
import RestrauntList from "./RestrauntList";

const RestrauntCategories = ({ data,showRestrauntList,setShowIndex }) => {
//console.log('showRestrauntList',showRestrauntList)
const [showList,setShowList]=useState(showRestrauntList)
  const handleToggle = ()=>{
    setShowIndex()
    setShowList(!showList)
    //console.log('toggle',showRestrauntList)
  }
  return (
    <div data-testid="category">
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleToggle}>
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {showList && <RestrauntList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestrauntCategories;
