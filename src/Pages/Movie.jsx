import React from "react";
import Card from "../components/MovieCard";
import { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);

  // fetch data when page load
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://api.tvmaze.com/search/shows?q=super");
      const res = await req.json();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <header className="max_width px-4 py-10">
      <h1 className="text-5xl font-bold text-center w100 bg-gradient-to-r from-red to-orange to-pink to-yellow p-4 border-4 border-white">Trending Shows</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {data.map((item) => (
          <Card key={item.show.id} item={item} />
        ))}
      </section>
    </header>
  );
};

export default Header;
