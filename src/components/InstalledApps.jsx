import React from "react";

const InstalledApps = ({ card, onUninstall }) => {
  if (!card) return null;

  return (
   <div className="cards flex flex-col gap-5 mb-4 items-center justify-center px-4 sm:px-0">
  <div className="w-full sm:w-10/12 lg:w-9/12 bg-white shadow-lg rounded-sm flex flex-col sm:flex-row justify-between p-3 border-t border-gray-300">
    
  
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6">
      
      <div className="p-2 rounded-md bg-blue-200 flex-shrink-0">
        <img className="w-16 sm:w-10" src={card.image} alt={card.title} />
      </div>

      <div className="text-center sm:text-left">
        <p className="font-bold text-lg ml-3 sm:text-base">{card.title}</p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-4 mt-2 lg:ml-2">
          <button className=" border-none lg:flex items-center gap-1  hidden ">
            <img className="w-3" src="/pics/icon-downloads.png" alt="" />
            <p className="text-green-500  ">{card.downloads}M</p>
          </button>
          <button className=" border-none lg:flex items-center gap-1  hidden ">
            <img className="w-3" src="/pics/icon-ratings.png" alt="" />
            <p className="text-orange-500 ">{card.ratingAvg}</p>
          </button>
           <div className=" border-none lg:flex items-center  hidden  gap-1" >
             <p >{card.size} MB</p>
           </div>
        </div>
      </div>
    </div>

    <div className="pt-3 sm:pt-0 flex justify-center sm:justify-end">
      <button
        onClick={() => onUninstall(card.id)}
        className="w-full lg:mt-2 sm:w-24 h-10 sm:h-11 bg-[#00D390] rounded-sm text-white font-semibold hover:bg-red-600"
      >
        Uninstall
      </button>
    </div>

  </div>
</div>

  );
};

export default InstalledApps;
