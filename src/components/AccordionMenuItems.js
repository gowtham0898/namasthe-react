import { CDN_URL } from "../utils/constants";

const AccordionMenuItems = (props) => {
//console.log("accordianItems",props);
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
            </div>
        </div>
        <hr className="my-2" />
    </div>
    );
}

export default AccordionMenuItems