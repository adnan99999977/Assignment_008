import React from "react";

const Card = ({ card }) => {
  // console.log(card)
  const { title,image } = card;
  return (
    <div className="card w-76 lg:w-60 mx-auto shadow-md p-4 rounded-lg transition-all hover:scale-103 duration-200 ">
      <figure>
        <img  className="w-60 object-cover border-b border-gray-300"
          src={image}
          alt="app pic"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto font-semibold text-2xl ">{title}</h2>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>
  );
};

export default Card;
