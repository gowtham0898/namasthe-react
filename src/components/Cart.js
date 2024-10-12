import { useDispatch, useSelector } from "react-redux"
import AccordionMenuItems from "./AccordionMenuItems"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const itemList = useSelector((store) => store.cart.item);
    
    const dispatch = useDispatch();
    const emptyCart = () => {
        dispatch(clearCart())
    }
    
    return (
      <div className="m-4 p-4">
        <div className="w-8/12 m-auto flex justify-between  text-2xl font-bold">
          <div className="w-auto">cart</div>
          <button
            className="border-2 font-normal text-base border-red-200 bg-red-300 text-white py-1 px-2 rounded-lg hover:bg-red-400 transition duration-200"
            onClick={emptyCart}>
            clear cart
          </button>
        </div>

        <hr className="my-2" />
        
        <div className="w-8/12 m-auto">
        {itemList.length === 0 && <h1>Your cart is empty 🙃, add items ✋</h1>}
          {itemList.map((item) => (
            <AccordionMenuItems key={item?.card?.info?.id} {...item} />
          ))}
        </div>
      </div>
    );
}

export default Cart