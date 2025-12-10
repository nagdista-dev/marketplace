import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";

const LatestListings = () => {
  const { listings } = useSelector((state) => state.listing);
  return (
    <div className="mt-20">
      <Title
        title="Latest Listings"
        description="Discover the hottest social profiles available right now."
      />
      {/* Div */}
      <div className="flex flex-col gap-6 px-6">
        {listings.slice(0, 4).map((list, idx) => (
          <div key={idx} className="mx-auto w-full max-w-3xl rounded-xl">
            <h1 className="">{list.title}</h1>
            <h1>{list.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestListings;
