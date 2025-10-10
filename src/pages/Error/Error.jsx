import Navber from "../../components/Navber";
import Footer from "../../components/Footer";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div>
      <Navber />
      <div className="w-full mt-2 mb-25 text-center px-9 lg:px-2">
        <img
          className="mx-auto w-40 lg:w-2/7"
          src="/pics/App-Error.png"
          alt=""
        />
        <h1 className="text-4xl font-bold mb-3 mt-5">
          <span className="text-red-500">OPPS!!</span> APP NOT FOUND
        </h1>
        <p className="text-gray-500 mb-4">
          The App you are requesting is not found on our system. please try
          another apps{" "}
        </p>
        <NavLink
          to={"/home"}
          className=" text-white w-30 flex items-center justify-center h-10 bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] text-center mx-auto rounded-sm"
        >
          Go Back!
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
