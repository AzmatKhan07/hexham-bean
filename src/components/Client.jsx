import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { review } from "../assets/assets";

const Client = () => {
  return (
    <section className="my-32">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-center text-4xl font-bold">Reviews</h1>

          <div className="flex justify-center items-center gap-3">
            <img className="w-44" src="/four_stars.png" alt="" />
            <p>
              <span className="text-2xl font-bold">4.5</span> Stars
            </p>
            <p>|</p>
            <p>405 Reviews</p>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 slide for mobile screens
            },
            768: {
              slidesPerView: 2, // Show 2 slides for tablets
            },
            1024: {
              slidesPerView: 3, // Show 3 slides for desktops
            },
          }}
        >
          {review.map((item, index) => (
            <SwiperSlide key={index} className="bg-primary/10 p-10 rounded-xl">
              <div className="flex justify-center items-center flex-col gap-3">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src={item.profileImage}
                  alt="profileImage"
                />
                <img className="w-32" src={item.review} alt="review" />
                <p>{item.desc}</p>

                <div className="flex gap-3 items-center">
                  <p className="font-bold text-xl">{item.name}</p>
                  <p>-</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Client;
