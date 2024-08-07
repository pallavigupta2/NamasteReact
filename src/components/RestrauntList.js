import { useDispatch } from "react-redux";
import { RESTRAUNT_MENU_IMAGES } from "../utils/constant";
import { addItems } from "../utils/CartSlice";

const RestrauntList = ({ items }) => {
  //console.log('items',items)
const dispatch = useDispatch();
  const handleAddItem=(item)=>{
dispatch(addItems(item))
  }
  return (
    <div>
      {items?.map((item) => (
        <div
          data-testid="resList"
          key={item.card.info.id}
          className="border-b-2 border-gray-200 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <img
              className="w-28 rounded-md"
              src={RESTRAUNT_MENU_IMAGES + item.card.info.imageId}
            />
            <div className="absolute mx-7 m-[-20px]">
              <button
                className="text-green-500 rounded-md bg-white px-4 py-2 shadow-md"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestrauntList;
