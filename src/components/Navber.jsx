import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { RiHome9Line } from "react-icons/ri";
import { TbBrandAppstore } from "react-icons/tb";
import { GrInstall } from "react-icons/gr";




const Navber = () => {
  return (
    <>
      <div className="navbar bg-base-100  px-5 lg:px-13 border-b border-gray-200 ">
        <div className="navbar-start ">
          <div className="dropdown pr-22 lg:pr-0">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"home"}>Home</Link>
              </li>
              <li>
                <Link to={"apps"}>Apps</Link>
              </li>
              <li>
                <Link to={"installation"}>Installation</Link>
              </li>
            </ul>
          </div>
          <Link to={"/home"} className="flex items-center justify-center">
            <img className="w-10" src="/pics/logo.png" alt="" />
            <p className=" font-bold text-xl text-[#632EE3] ml-2">HERO.IO</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-8 font-semibold">
            <li className="flex">
              <NavLink
                className="hover:text-[#632EE3] flex justify-center items-center gap-1"
                to={"home"}
              >
                <RiHome9Line />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-[#632EE3] flex justify-center items-center gap-1 "
                to={"apps"}
              ><TbBrandAppstore />


                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-[#632EE3] flex justify-center items-center gap-1 "
                to={"installation"}
              ><GrInstall />

                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to={"https://github.com/adnan99999977 "}
            target="blank"
            className="lg:w-33 w-10 flex justify-center items-center h-10 rounded-sm gap-2  text-white bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] transition-all duration-300 hover:w-35 hover:rounded-l-full"
          >
            {" "}
            <FaGithub />
            <span className="hidden lg:flex">Contribute</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navber;
