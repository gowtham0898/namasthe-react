import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestorentManu from "./components/RestorentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))



const AppLayout = () => {

const [userAuthName,setUserAuthName] = useState();

useEffect(() => {
// will do some auth API call will get data as
const userinfo = {
  name:"auth_name"
}
setUserAuthName(userinfo.name)
},[])

//const provider = Provider(appStore);

  return (
    //this will called by provider
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userAuthName, setUserAuthName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restorent/:resId",
        element: <RestorentManu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// RouterProvider is given by react-router-dom
root.render(<RouterProvider router={appRouter} />);
