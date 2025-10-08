import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";


const AllApps = ({card}) => {
  const navigate = useNavigate()
 if (!card) return <Loading/>;
  const { title,image,downloads,ratingAvg,id } = card;
  const handleNav = () => {
    navigate(`/card_details/${id}`); 
  }


  return (
    <div onClick={()=>handleNav()} className="card w-76 lg:w-full mx-auto shadow-lg p-4 rounded-lg transition-all hover:scale-103 duration-200 mb-10 border border-gray-300">
      <figure>
        <img  className="w-60 object-cover border-b border-gray-300"
          src={image}
          alt="app pic"
        />
      </figure>
      <div className="card-body p-0 mt-5 mb-2">
        <h2 className="card-title mx-auto font-semibold text-2xl ">{title}</h2>
        <div className="card-actions justify-between">
         <button className="btn border-none bg-[#44ce5b15]"><img className="w-3" src="/pics/icon-downloads.png" alt="" /><p className="text-green-500 ">{downloads}M</p></button>
         <button className="btn border-none  bg-[#f39a6734]"><img className="w-3" src="/pics/icon-ratings.png" alt="" /><p className="text-orange-500 ">{ratingAvg}</p></button>
        
        </div>
      </div>
    </div>
  );
}

export default AllApps