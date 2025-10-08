import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";


const CardDetails = () => {
   const { id } = useParams();
  const { data, loading } = useFetch("/data.json");
  if (loading) return <Loading />;
const singleCard = data?.find(item => item.id === parseInt(id));

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings
  } = singleCard;
    
  

  return <section className="w-11/12 mx-auto mb-20">

 <div className="pt-24 pb-10 mb-10 flex gap-20  items-center border-b border-gray-300  ">
    <section >
    <img className="w-87" src={image} alt="" />
   </section>

   <div className="space-y-6 w-11/12   ">
     <section className=" w-11/12 border-b pb-5 border-gray-300 ">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="">Developed by <span className="text-[#8c00ff] font-semibold">{companyName}</span></p>
     </section>
     <section className="flex gap-10">
      <div className="space-y-2">
        <img className="w-6" src="/pics/icon-downloads.png" alt="" />
        <p className="text-sm text-gray-500">Downloads</p>
        <p className="text-2xl font-bold">{downloads}M</p>
      </div>
      <div className=" space-y-2">
        <img className="w-6" src="/pics/icon-ratings.png" alt="" />
        <p className="text-sm text-gray-500">Average Ratings</p>
        <p className="text-2xl font-bold">{ratingAvg}</p>
      </div>
      <div  className=" space-y-2">
        <img className="w-6" src="/pics/icon-review.png" alt="" />
        <p className="text-sm text-gray-500">Total Reviews</p>
        <p className="text-2xl font-bold">{reviews}K</p>
      </div>
      
     </section>
      <div>
        <button className="w-50 h-11 bg-[#00D390] rounded-sm text-white cursor-pointer font-semibold hover:bg-[#03a572]">Install Now ({size} MB)</button>
      </div>
   </div>
 </div>


     <div className="charts border-b border-gray-300 pb-5">
        <h1 className="text-2xl font-bold mb-4">Ratings Breakdown</h1>
        <BarChart
          layout="vertical"
          width={1100}
          height={300}
          data={ratings}
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip contentStyle={{ background: '#f9f9f9', borderRadius: '8px' }} />
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#FF9800" barSize={25} radius={2} />
        </BarChart>
      </div>

      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-2xl mb-6 mt-6 ">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
  </section>;
};

export default CardDetails;
