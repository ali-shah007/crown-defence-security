import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer/Footer";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from './Pages/NotFound';
import JoinOurTeam from "./Pages/JoinOurTeam";
import Construction from './Pages/construction'
import Firemarshal from "./Pages/Firemarshal";
import Trafficmarshal from "./Pages/Trafficmarshal";
import Doghandler from "./Pages/Doghandler";
import Patrolling from './Pages/Patrolling'
import Keyholding from './Pages/Keyholding'
import Cctv from './Pages/Cctv'
import Subcontracting from './Pages/Subcontracting'
import Escort from './Pages/Escort'

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-crown-defence-security-uk",
        element: <About />
      },
      
      
      {
        path: "/security-services-uk",
        element: <Services />
      },
      {
        path: "/contact-crown-security-uk",
        element: <Contact />
      },
      {
        path: "/join-our-team",
        element: <JoinOurTeam />
      },
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/construction-site-security-uk",
        element: <Construction />
      },
      {
        path: "/fire-marshal-uk",
        element: <Firemarshal />
      },
      {
        path: "/traffic-marshal-uk",
        element: <Trafficmarshal />
      },
      {
        path: "/dog-handler-security-uk",
        element: <Doghandler />
      },
      {
        path: "/patrolling-security-uk",
        element: <Patrolling />
      },
      {
        path: "/key-holding-service-uk",
        element: <Keyholding />
      },
      {
        path: "/cctv-monitoring-uk",
        element: <Cctv />
      },
      {
        path: "/escort-services-uk",
        element: <Escort />
      },
      {
        path: "/subcontracting-service-uk",
        element: <Subcontracting />
      }

    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
