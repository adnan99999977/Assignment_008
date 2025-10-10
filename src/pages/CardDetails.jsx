import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";


const RatingsChart = ({ ratings }) => {
  const [chartWidth, setChartWidth] = useState(600);
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setChartWidth(width - 40);
        setChartHeight(250);
      } else if (width < 1024) {
        setChartWidth(width - 80);
        setChartHeight(300);
      } else {
        setChartWidth(1100);
        setChartHeight(300);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="charts border-b border-gray-300 pb-5 w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Ratings Breakdown</h1>
      <BarChart
        layout="vertical"
        width={chartWidth}
        height={chartHeight}
        data={ratings}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip contentStyle={{ background: "#f9f9f9", borderRadius: "8px" }} />
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <Bar dataKey="count" fill="#FF9800" barSize={25} radius={2} />
      </BarChart>
    </div>
  );
};

const CardDetails = () => {
  const [installed, setInstalled] = useState(false);
  const { data, loading } = useFetch("/data.json");
  const { id } = useParams();

  const singleCard = data?.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (!singleCard) return;
    const existing = JSON.parse(localStorage.getItem("install")) || [];
    const isInstalled = existing.some((app) => app.id === singleCard.id);
    setInstalled(isInstalled);
  }, [singleCard]);

  if (loading) return <Loading />;
  if (!singleCard) return <p className="text-center mt-20">App not found</p>;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleCard;

  const handleInstall = () => {
    const existing = JSON.parse(localStorage.getItem("install")) || [];
    const duplicate = existing.some((app) => app.id === singleCard.id);

    if (duplicate) {
      toast.info("Already installed!");
      setInstalled(true);
      return;
    }

    const updated = [...existing, singleCard];
    localStorage.setItem("install", JSON.stringify(updated));
    setInstalled(true);
    toast.success("App Installed Successfully! 🚀");
  };

  return (
    <section className="lg:w-11/12 mx-auto mb-20">
   
      <div className="pt-9 lg:pt-24 pb-10 mb-10 flex flex-col lg:flex-row gap-20 items-center border-b border-gray-300">
        <section>
          <img className="w-40 lg:w-64 shadow-2xl" src={image} alt={title} />
        </section>

        <div className="space-y-6 w-11/12">
          <section className="w-11/12 border-b pb-5 border-gray-300">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p>
              Developed by{" "}
              <span className="text-[#8c00ff] font-semibold">{companyName}</span>
            </p>
          </section>

          <section className="flex gap-10">
            <div className="space-y-2">
              <img className="w-6" src="/pics/icon-downloads.png" alt="" />
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-2xl font-bold">{downloads}M</p>
            </div>
            <div className="space-y-2">
              <img className="w-6" src="/pics/icon-ratings.png" alt="" />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>
            <div className="space-y-2">
              <img className="w-6" src="/pics/icon-review.png" alt="" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}K</p>
            </div>
          </section>

          <div>
            <button
              onClick={handleInstall}
              className={`w-50 h-11 rounded-sm text-white font-semibold ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-[#03a572]"
              }`}
              disabled={installed}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

     
      <RatingsChart ratings={ratings} />

     
      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-2xl mb-6 mt-6">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </section>
  );
};

export default CardDetails;
