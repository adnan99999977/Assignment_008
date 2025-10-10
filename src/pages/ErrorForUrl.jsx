import { NavLink } from "react-router";

const ErrorForUrl = () => {
  return (
    <>
      <div className="w-full mt-2 mb-25 text-center ">
        <img
          className="mx-auto w-40 lg:w-1/3"
          src="/pics/error-404.png"
          alt=""
        />
        <h1 className="text-4xl font-bold mb-3">Oops, page not found!</h1>
        <p className="text-gray-500 mb-4">
          The page you are looking for is not available.
        </p>
        <NavLink
          to={"/home"}
          className="  w-30 flex items-center justify-center h-10 bg-gradient-to-r  from-[#5e31cd] to-[#254fc2] text-center mx-auto rounded-sm text-white"
        >
          Go Back!
        </NavLink>
      </div>
    </>
  );
};

export default ErrorForUrl;
