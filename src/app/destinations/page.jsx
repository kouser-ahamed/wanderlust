import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log("Destinations:", destinations);
  return (
    <div className="max-w-7xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-3">All Destinations</h2>
      <div className="grid grid-cols-4 gap-5">
        {destinations.map((destination) => <DestinationCard key={destination._id} destination={destination}/>)}
      </div>
    </div>
  );
};

export default DestinationsPage;
