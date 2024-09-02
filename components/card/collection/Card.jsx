"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import axios from "axios";

export default function Card({ location }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const item = [
    { id: "1", title: "Luxury" },
    { id: "2", title: "Affordable" },
    { id: "3", title: "Investment" },
    { id: "4", title: "Family" },
    { id: "5", title: "Starter" },
  ];

  const [totalProperties, setTotalProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/project/fetchall/project");
        const properties = response.data.fetch;
        setTotalProperties(properties);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {item.map((category) => {
          // Filter the properties based on both category title and location
          const filteredProperties = totalProperties.filter(
            (property) =>
              property.title === category.title && property.location === location
          );

          return (
            <Link
              key={category.id}
              href={`/page/collectionproject/${category.title},${location}`}
            >
              <div className="mx-2 lg:mb-4">
                <div className="relative group rounded-md overflow-hidden duration-300">
                  <Image
                    className="w-full object-cover"
                    src="/image/property-grid-3.png"
                    alt=""
                    width={400}
                    height={300}
                  />
                  <div className="absolute bg-gradient-to-b from-transparent via-transparent to-black/70 top-0 bottom-0 left-0 right-0 flex justify-center items-center duration-300">
                    <div className="flex overflow-hidden justify-center items-center opacity-0 group-hover:opacity-100 h-0 w-0 group-hover:h-24 group-hover:w-24 rounded-full bg-black/60 text-white duration-300">
                      <span className="duration-300 group-hover:opacity-100 flex flex-col text-center capitalize font-bold">
                        {loading ? "..." : filteredProperties.length}{" "}
                        <span>properties</span>
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 m-1 md:m-0 bg-black/60 md:bg-transparent left-0 right-0 md:text-white rounded-full p-3 text-center">
                    <h4 className="text-white font-semibold">
                      {category.title}
                    </h4>
                    <p className="text-xs text-white">
                      Comfortable homes available for immediate use
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </>
  );
}
