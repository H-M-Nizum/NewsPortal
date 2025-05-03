import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-300 px-3 py-2">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
      <Marquee className="space-x-10" pauseOnHover={true}>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          pariatur?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          pariatur?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
