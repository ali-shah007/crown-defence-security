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
        path: "/about",
        element: <About />
      },
      
      
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/join-our-team",
        element: <JoinOurTeam />
      },
      {
        path: "*",
        element: <NotFound />
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
