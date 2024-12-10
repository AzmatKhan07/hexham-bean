import React from "react";

const InfoSection = () => {
  return (
    <section className="mb-32">
      <div className="container flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img className="rounded-xl" src="/hero.jpeg" alt="" />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl mb-3 font-bold">Gift Vouchers</h1>
          <p className="text-neutral-600 mb-3">
            LSend a gift voucher to friends and family or buy it now for your
            future use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
