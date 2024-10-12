import { useReducer } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordionMenuItems = (props) => {
    console.log(props);
    
    const dispatch = useDispatch()

const addToCart = (props) => {
    dispatch(addItem(props))
}
const {name,description,price,defaultPrice,imageId} = props?.itemData?.card?.info;
    return (
        <div>
        <div className="flex items-center">
            <div className="flex-1">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600">Rs: {price ? price/100 : defaultPrice/100}</p>
            </div>
            <div className="ml-auto w-[10%]">   
                <img
                    alt="menu-list-image"
                    src={CDN_URL + imageId}
                    className="w-full object-cover rounded-full" // Use w-full to fill the parent div
                />
                <button className="absolute bg-transparent font-bold mt-[-2%] mb-[-2%] ml-[2%] mr-[2%] border border-orange-600 text-white  py-1 px-2 rounded hover:bg-orange-500"
                onClick={() =>addToCart(props)}>Add +</button>
            </div>
        </div>
        <hr className="my-2" />
    </div>
    );
}

export default AccordionMenuItems