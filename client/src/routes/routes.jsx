import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/DefaultLayout/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Product from "../pages/ProductListing/ProductListing";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import Wishlist from "../pages/Wishlist/wishlist";
import ProductListing from "../pages/ProductListing/ProductListing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import OrderHistory from "../pages/Dashboard/OrderHistory";
import TrackOrder from "../pages/Dashboard/TrackOrder";
import ShoppingCart from "../pages/Dashboard/ShoppingCart";
import DashWishlist from "../pages/Dashboard/Wishlist";
import Settings from "../pages/Dashboard/Settings";
import Compare from "../pages/Dashboard/Compare";
import CardsAddresses from "../pages/Dashboard/CardsAddresses";
import BrowsingHistory from "../pages/Dashboard/BrowsingHistory";
import Cart from "../pages/Cart/Cart";
import MensCollection from "../components/MensCollection/mensCollection";
import WomensCollection from "../components/WomensCollection/WomensCollection";
import KidsCollection from "../components/KidsCollection/KidsCollection";
import AccessoriesCollection from "../components/Accessories/Accessories";
import Islamic from "../components/IslamicCollection/Islamic";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about_us",
        element: <About />,
      },
      {
        path: "contact_us",
        element: <Contact />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashorderhistory",
        element: <OrderHistory />,
      },
      {
        path: "dashtrackorder",
        element: <TrackOrder />,
      },
      {
        path: "dashshoppingcart",
        element: <ShoppingCart />,
      },
      {
        path: "dashwishlist",
        element: <DashWishlist />,
      },
      {
        path: "dashsettings",
        element: <Settings />,
      },
      {
        path: "dashcompare",
        element: <Compare />,
      },
      {
        path: "dashcards",
        element: <CardsAddresses />,
      },
      {
        path: "dashbrowsinghistory",
        element: <BrowsingHistory />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path:"mens",
        element: <MensCollection />
      },
      {
        path:"womens",
        element: <WomensCollection />
      },
      {
        path:"kids",
        element: <KidsCollection />
      },
      {
        path: "accessories",
        element: <AccessoriesCollection />
      },
      {
        path: "islamic_collection",
        element: <Islamic />
      }
    ],
  },
]);

export default routes;
