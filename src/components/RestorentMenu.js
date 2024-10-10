import { useLocation, useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestorentMenu from "../utils/useRestorentMenu";
import AccordionMenu from "./AccordionMenu";
import { useState } from "react";
const RestorentManu = () => {
  const [openIndex, setOpenIndex] = useState(null);

    const {resId} = useParams();
    //#region  to create saperate custom hook to featch data
    //const[getCardMenu, setCardMenu] = useState(null);
    //console.log(resId);
    
    // useEffect(() => {
    //     fetchCardData();
    // },[])
    // const fetchCardData = async() =>{
    //     const carddata = await fetch(
    //         MENU_ITEMS + resId);
    //         const json = await carddata.json();
    //         //console.log();//?.cardGroupMap?.REGUALR?.cards[2]?.card?.card?.itemCards
    //         //console.log(json);
            
    //         setCardMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    // };
    //#endregion
   
    
    const getCardMenu = useRestorentMenu(resId);
    const location = useLocation();
    console.log("resto Card",location);
    
    const {name}  =  location.state ||{};


    const filteredItems = getCardMenu?.filter(item => item.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(filteredItems);
    if(getCardMenu === null) return <Shimmer />

    const getCardMenuForEachTitle = getCardMenu[2]?.card?.card?.itemCards;

    //console.log(getCardMenu);

    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };
  //   <div key = {menu.card.info.id}>
  //   <div className="menu-items">
  //     <p>{menu.card.info.name} (Rs : {menu.card.info.price})</p>
  //     <div>  <p> <b>description:</b> {menu.card.info.description} </p></div>
  //    <hr />
  //   </div>
  // </div>
    return (
      <div className="menu">
        <div className="m-8 ml-40 text-xl">
          {/* <b>{name}</b> */}
        </div>
        {filteredItems.map((menu,index) => (
          <AccordionMenu 
          key={index} 
          title={menu?.card?.card?.title}
          content = {menu?.card?.card?.itemCards}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
          />
         
        ))}
      </div>
    );
}

export default RestorentManu