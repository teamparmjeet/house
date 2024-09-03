"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

const PreviousArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="w-9 h-9 p-2 bg-primary text-white absolute top-1/2 -translate-y-1/2 left-5 z-10"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};

const NextArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="w-9 h-9 p-2 bg-primary text-white absolute top-1/2 -translate-y-1/2 right-5 z-10"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export const Carousel = ({ details }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const Images = details || [];

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  const settings = {
    asNavFor: nav2,
    ref: sliderRef1,
    dots: Images.length > 1,
    infinite: Images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: Images.length > 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  const settings2 = {
    asNavFor: nav1,
    ref: sliderRef2,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {Images.map((imageUrl, index) => (
            <div key={index} className=" lg:h-screen h-[250px]  w-full border">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
      {Images.length > 1 && (
        <div className="lg:p-6 bg-[#E1E1E1]">
          <Slider {...settings2}>
            {Images.map((imageUrl, index) => (
              <div className="p-1 lg:p-2 flex" key={index}>
                <Image
                  id="item"
                  src={imageUrl}
                  alt={`view ${index + 1}`}
                  width={331}
                  height={226}
                  className="lg:h-52 h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};
