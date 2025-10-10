

const Error = () => {
  return (
    <div>
     
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
          The App you are searching is not found on our store. please try
          another apps{" "}
        </p>
       
      </div>
   
    </div>
  );
};

export default Error;
