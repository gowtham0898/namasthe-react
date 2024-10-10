import React from 'react'
import RestorentCard, { openStatusResto } from './RestorentCard'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [restoLists,setRestoLists] = useState([]);

    const [originalRestoLists,setOriginalRestoLists] = useState([]);

    const [searchInput,setSearchInput] = useState("");

    const [pageOffSet,setPageOffSet] = useState(null);
    const [loading,setLoading] = useState(false);
     const[restorentName,setRestoName] = useState(null);
    const onlineStatus = useOnlineStatus();
    const OpenStatus = openStatusResto(RestorentCard);
   
    const setNewList = () => {
        let filteredList = restoLists.filter((rest) => rest.info.avgRating > 4.3);
        setRestoLists(filteredList);
    };

    useEffect( () => {
        //console.log("initializes");
        fetchDate();
    },[])

    const fetchDate = async () => {
        const realData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8911245&lng=77.56910640000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await realData.json();
        const restorents = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //optional chaining
        setRestoLists(restorents);
        setOriginalRestoLists(restorents);
        
        //console.log(pageOffSet);
        
        setPageOffSet(json?.data?.pageOffset?.nextOffset);

        
    };
    
    const fetchMoreData = async () => {
        if (!pageOffSet || loading){
            console.log("inside if condetion");
            return;
        } 
        console.log("out side ");
        setLoading(true);

        // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       lat: 12.8911245,
        //       lng: 77.56910640000001,
        //       nextOffset: pageOffSet,
        //       widgetOffset: {
        //         "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "39",
        //       },
        //       filters: {},
        //       seoParams: {
        //         seoUrl: "https://www.swiggy.com/",
        //         pageType: "FOOD_HOMEPAGE",
        //         apiName: "FoodHomePage"
        //       },
        //       page_type: "DESKTOP_WEB_LISTING",
        //       _csrf: "t0OYWoP4dlNX-Hg3REPRqUtsS0L9Iiw1flnQVEs0"
        //     }),
        //   });
      
        //   // Log the response for debugging
        //   console.log('Response status:', response.status);
        //   const json = await response.json();
        //   console.log('Response data:', json);

        //setNextOffset(json?.data?.nextOffset);
        //https://corsproxy.io/?
        setLoading(false);     
    }
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
            fetchMoreData(); // Fetch more data when reaching the bottom
            //console.log("logs");
            
          }
    };
    
// Component mounts → useEffect runs → handleScroll is set up.
// User scrolls → handleScroll is triggered.
// If pageOffset or loading changes → useEffect runs again:
// The old event listener is removed.
// A new event listener is added.

    useEffect(() =>{
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[pageOffSet,loading])
   
//const name = null;
     const handelRestoName = (name) => {
      setRestoName(name);
     }
    if(onlineStatus === false)
        return(
            <h1>seema like your internet connection is off/low !!</h1>
        );
    
       // console.log(restoLists);
    return restoLists.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="flex m-2 mt-3 p-2">
          <input
            className="border-2 border-orange-200 rounded-lg py-2 px-4 mx-2 focus:outline-none focus:border-orange-500 transition duration-200"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search restaurants..."
          />

          <button
            className="mx-2 border-2 border-orange-200 bg-orange-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition duration-200"
            onClick={() => {
              const newList = originalRestoLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setRestoLists(newList);
            }}>
            Search
          </button>
          <button
            className=" mx-3 border border-green-500 text-green-500 font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-white"
            onClick={setNewList}>
            Top Resto's
          </button>
          <button
            className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
            onClick={() => {
              setRestoLists(originalRestoLists);
            }}>
            UnSet
          </button>
        </div>

        <div className="flex flex-wrap">
          {
            //console.log(restoList);

            restoLists.map((resto) => (
              <Link
                className="p-2 w-48 m-4 border-2 border-orange-200 bg-gray-100 hover:bg-orange-100"
                key={resto.info.id}
                to={"/restorent/" + resto.info.id}
                state={{name:restorentName}}>
                {resto.info.isOpen  ? (
                  <OpenStatus restoData={resto} restoName ={handelRestoName}/>
                ) : (
                  <div>
                    <label className="absolute bg-red-500 text-white bg-opacity-70 text-sm font-bold py-1 px-3 rounded-full mr-2">closed</label>
                    <RestorentCard restoData={resto} restoName ={handelRestoName}/>
                  </div>
                )}
              </Link>
            ))
          }
        </div>
      </div>
    );
}

export default Body