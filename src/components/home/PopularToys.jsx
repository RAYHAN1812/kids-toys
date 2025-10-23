import React, { useEffect, useState } from "react";
import toysData from "../../data/popularToys.json";
import ToyCard from "./ToyCard"; 
const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setToys(toysData.slice(0, 6));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {toys.map((toy) => (
        <ToyCard key={toy.toyId} toy={toy} />
      ))}
    </div>
  );
};

export default PopularToys;
