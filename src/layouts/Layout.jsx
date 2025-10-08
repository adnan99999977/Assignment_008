import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading";
import ScrollToTop from "../hooks/ScrollToTop";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex justify-center flex-col">
       <ScrollToTop /> 
      <Navber />
      <div className="flex-1">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
