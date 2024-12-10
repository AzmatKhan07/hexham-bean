import React from "react";
import PricingCard from "../components/PricingCard";

const MenuPricing = () => {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        <PricingCard
          price="23"
          name="Lunch"
          startingDay="Mon"
          endingDay="Fri"
          staringTime="12pm"
          endingTime="05pm"
          secondDay="Saturday"
          SecstaringTime="12pm"
          SecendingTime="05pm"
          Secprice="16.99"
          img="/hero.jpeg"
        />
        <PricingCard
          price="23"
          name="Dinner"
          startingDay="Mon"
          endingDay="Fri"
          staringTime="12pm"
          endingTime="05pm"
          secondDay="Saturday"
          SecstaringTime="12pm"
          SecendingTime="05pm"
          Secprice="16.99"
          img="/hero.jpeg"
        />
        <PricingCard
          price="23"
          name="All Day"
          startingDay="Mon"
          endingDay="Fri"
          staringTime="12pm"
          endingTime="05pm"
          secondDay="Saturday"
          SecstaringTime="12pm"
          SecendingTime="05pm"
          Secprice="16.99"
          img="/hero.jpeg"
        />
      </div>
    </main>
  );
};

export default MenuPricing;
