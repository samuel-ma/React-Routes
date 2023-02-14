import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextApi } from "../State/context";
import { RxCross2 } from "react-icons/rx";

const Detail = () => {
  const [show, setShow] = useState(false);
  const {
    state: { tv },
  } = useContext(contextApi);

  // box array for seat
  const box = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <section
      className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center pt-10 gap-4 ${
        show ? "overflow-hidden" : ""
      }`}
    >
      {/* img section  */}
      <div className="h-[25rem] md:h-[35rem]">
        <img
          src={
            tv.show.image
              ? tv.show.image.original
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={tv.show.name}
          className="rounded-xl"
        />
      </div>

      {/* summary section  */}
      <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
        <Link
          to="/"
          className="text-para_text transition duration-200 ease-in hover:text-white hover:tracking-wider"
        >
          Home / {tv.show.id}
        </Link>
        <h1 className="text-6xl font-bold text-center py-2">{tv.show.name}</h1>
        <div className="flex justify-between items-center gap-4">
          <div>
            {tv.show.genres.map((genre) => (
              <span
                key={genre}
                className="border border-white/50 rounded-lg px-3 py-1 mr-3"
              >
                {genre}
              </span>
            ))}
          </div>

          <button
            className="bg-blue px-4 py-1 text-xl font-semibold rounded-2xl hover:bg-blue/80 active:scale-90"
            onClick={() => setShow(true)}
          >
            Book Now
          </button>
        </div>
        <div className="px-2">
          <h1 className="font-bold text-xl mb-1">STORY:</h1>
          <p className="text-para_text">
            {tv.show.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="text-para_text px-2 pb-10">
          <h1 className="text-white font-bold text-xl mb-1">DETAILS:</h1>
          <p>Status: {tv.show.status}</p>
          <p>First air date: {tv.show.premiered || "Unknown"}</p>
          <p>Spoken language: {tv.show.language}</p>
          <p>Runtime: {tv.show.runtime || "Unknown"} minute</p>
        </div>
      </div>

      {/* booking model  */}
      {show && (
        <form className="absolute top-0 bg-black/95 w-full h-full grid place-items-center">
          <div
            className="absolute top-3 right-3 text-4xl cursor-pointer"
            onClick={() => setShow(false)}
          >
            <RxCross2 />
          </div>
          <section className="max-w-[40rem] mx-auto border border-para_text rounded-lg p-5 ">
            <h1 className="text-center font-bold text-4xl pb-5 ">
              Booking Details
            </h1>
            <div className="flex gap-1">
              <h1>Movie Name:</h1>
              <span className="text-blue">{tv.show.name}</span>
            </div>
            <div className="flex gap-4 max-w-[20rem] flex-wrap justify-center mx-auto py-10">
              {box.map((item) => (
                <span
                  key={item}
                  className="w-[2rem] h-[2rem] bg-white hover:bg-para_text border border-white rounded-md cursor-pointer"
                />
              ))}
            </div>
            <Link to="/">
              <button className="bg-blue rounded-2xl px-4 py-1 w-full">
                Submit
              </button>
            </Link>
          </section>
        </form>
      )}
    </section>
  );
};

export default Detail;
