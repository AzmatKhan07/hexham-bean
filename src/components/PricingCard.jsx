import React from "react";

const PricingCard = (props) => {
  return (
    <div className="bg-primary/10 p-10 rounded-lg">
      <img src={props.img} alt="image" className="mb-5 rounded-xl" />

      <h1 className="text-4xl font-bold mb-3 uppercase">{props.name}</h1>
      <p className="text-2xl">
        {props.startingDay} - {props.endingDay}
      </p>

      <p className="text-xl flex justify-between">
        {props.staringTime} - {props.endingTime}{" "}
        <span className="text-3xl font-bold text-primary">£{props.price}</span>
      </p>

      <p className="text-2xl">{props.secondDay}</p>

      <p className="text-xl flex justify-between">
        {props.SecstaringTime} - {props.SecendingTime}{" "}
        <span className="text-3xl font-bold text-primary">
          £{props.Secprice}
        </span>
      </p>
    </div>
  );
};

export default PricingCard;
