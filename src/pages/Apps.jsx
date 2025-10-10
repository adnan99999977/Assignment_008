
import { useState } from "react";
import AllApps from "../components/AllApps";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import Error from "../Error";





const Apps = () => {
  const { data,loading} = useFetch("/data.json");
  const [value,setValue] = useState('')
       let term = value.trim().toLocaleLowerCase()
       let searchedProducts = term? data.filter(product=>product.title.toLocaleLowerCase().includes(term)):data

  if (loading) return <Loading />; 
  return (
    <div className="pt-15 pb-20 bg-gradient-to-t from-[#fefeffbe] to-[#cccacc3d]">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-4">Our All Applications</h1>
        <p className="text-gray-500 ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-11/12  mx-auto mb-15">
        <h1 className="font-semibold text-2xl pl-8">({searchedProducts.length}) Apps Found</h1>
        <label className="input ">
          <svg
            className="h-[1em]  opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={value} onChange={(e)=>setValue(e.target.value)} type="search" required placeholder="Search Apps  " />
        </label>
      </div>
      <div>
        <section className="cardsBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-3 w-11/12">
       {
        searchedProducts.length===0?<div className="flex justify-center items-center font-bold col-span-4">

          <Error/>
        </div>:searchedProducts.map(card => <AllApps card={card} key={card.id}/>)
      }
        </section>
      </div>
    </div>
  );
};

export default Apps;
