import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
    return (
      <div>
        <Header />
       <div className=" container mx-auto pb-6">
       <Outlet />
       </div>
        <Footer />
      </div>
    );
  };



export default Layout;