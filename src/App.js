import React, {useState, useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";
import Guards from "./Pages/Guards";
import MobileSecurity from "./Pages/MobileSecurity";
import SiteDetection from "./Pages/SiteDetection";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import LoadScreen from "./Pages/LoadScreen";



  

const Layout = () =>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate a loading delay
      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
  }, []);

  return(
    <div className="app">
        <NavBar/>
        {/* {loading ? <LoadScreen /> : <Outlet />} */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/guards",
        element: <Guards/>
      },
      {
        path:"/mobile-security",
        element: <MobileSecurity/>
      },
      {
        path:"/site-detection",
        element: <SiteDetection/>
      },
      {
        path:"/services",
        element: <Services/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
   
      

    ]
  },

]);

function App() {
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
