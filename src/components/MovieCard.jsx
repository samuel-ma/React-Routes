import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { contextApi } from "../State/context";

const Card = ({ item }) => {
  const { show } = item;
  const { dispatch } = useContext(contextApi);

  return (
    <Link
      to={`/tv/${show.id}`}
      onClick={() => dispatch({ type: "ADD_TV", payload: item })}
      className="bg-card relative transition duration-200 ease-in transform hover:scale-110 p-2 rounded-lg"
    >
      <div className="h-[20rem] sm:h-[25rem] lg:h-[30rem]">
        <img
          src={
            show.image
              ? show.image.original
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={show.name}
          className="rounded-t-md"
        />
      </div>
      <h1 className="bg-card text-center py-2 text-xl">{show.name}</h1>
      <div className="absolute top-2 right-2 bg-blue rounded-full p-0.5 m-2 px-2 text-sm flex items-center gap-1">
        <span>{Number(show.rating.average || "6.5").toFixed(1)}</span>
        <AiFillStar className="text-lg" />
      </div>
    </Link>
  );
};

export default Card;
