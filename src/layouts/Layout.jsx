import Navber from "../components/Navber"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
        <Navber/>
       <div className="flex-1"> <Outlet/></div>
        <Footer/>
    </div>
  )
}

export default Layout