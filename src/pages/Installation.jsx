import React, { useEffect, useState } from "react";
import InstalledApps from "../components/InstalledApps";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);

    
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("install")) || [];
      setInstall(existing);
      setLoading(false); 
    }, 300); 
  }, []);

  const handleUninstall = (id) => {
    const existing = JSON.parse(localStorage.getItem("install")) || [];
    const updated = existing.filter((app) => app.id !== id);
    setInstall(updated);
    localStorage.setItem("install", JSON.stringify(updated));
    toast.info("App Uninstalled Successfully!");
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sorted = [...install];
    if (value === "high-low") sorted.sort((a, b) => b.downloads - a.downloads);
    else if (value === "low-high") sorted.sort((a, b) => a.downloads - b.downloads);

    setInstall(sorted);
  };

  if (loading) return <Loading />; 

  return (
    <div className="pt-15 pb-10 bg-gradient-to-t from-[#fefeffbe] to-[#cccacc3d]">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-4">Your Installed Apps</h1>
        <p className="text-gray-500 w-80 lg:w-full ml-7 lg:ml-0">
          Explore all apps you've installed from our marketplace
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-10/12 mx-auto mb-7 items-center gap-4">
        <h1 className="font-semibold text-2xl">
          Apps Found ({install.length})
        </h1>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border rounded-md px-3 py-2 focus:outline-none"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {install.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No installed apps yet.</p>
      ) : (
        install.map((card) => (
          <InstalledApps
            key={card.id}
            card={card}
            onUninstall={handleUninstall}
          />
        ))
      )}
    </div>
  );
};

export default Installation;
