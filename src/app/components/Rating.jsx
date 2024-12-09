"use client";
import { useEffect, useState } from "react";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import axios from "axios";
// const puppeteer = require("puppeteer");

export default function Rating() {
  const [cfData, setCfData] = useState({
    rating: null,
    maxRating: null,
  });

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        // Codeforces API
        const cfResponse = await axios.get(
          "https://codeforces.com/api/user.info?handles=raj_adi"
        );
        const cfUser = cfResponse.data.result[0];
        const cfRating = cfUser.rating;
        const cfMaxRating = cfUser.maxRating;

       
        setCfData({
          rating: cfRating,
          maxRating: cfMaxRating,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRatings();
  }, []);

  return (
    <div className="bg-[#121212] text-white py-5 text-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        {/* Codeforces */}
        <div>
          {cfData.rating !== null ? (
            <div className="flex gap-4">
             <SiCodeforces size={30} className="text-[#d93d3d]" />

              <div className="text-[#03A894]">
                <p className="text-lg">
                  Current Rating:{" "}
                  <span className="">{cfData.rating}</span>
                </p>
                <p className="text-xl">
                  Max Rating:{" "}
                  <span className="">{cfData.maxRating}</span>
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    // </div>
  );
}
