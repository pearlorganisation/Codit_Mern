import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/DefaultLayout/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Product from "../pages/ProductListing/ProductListing";
import Contact from "../pages/Contact/Contact";
import ProductListing from "../pages/ProductListing/ProductListing";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<Error/>,
        children:[
          {
            index:true,
            element:<Home/>,
          },
          {
            path:"about_us",
            element:<About/>,
          },
          {
            path:"contact_us",
            element:<Contact/>,
          },
          {
            path:"product",
            element:<ProductListing/>,
          }
          
          
          

        ]
        
      },
]);


export default routes;