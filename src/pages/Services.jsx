import React from "react";

const Services = () => {
  return (
    <section className="py-28">
      <div className="container">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Online Ordering: Order your favorite dishes from the comfort of your own home and have them delivered or ready for pickup.",
            "Reservations: Book a table in advance to ensure a smooth and hassle-free dining experience.",
            "Takeout: Enjoy our delicious food from the comfort of your own home.",
            "Delivery: Get our dishes delivered right to your doorstep.",
            "Catering: Let us handle the food for your next event or party.",
            "Private Dining: Book our private room for special occasions or events.",
            "Events: Host your next event or party with us, and let us take care of the food and atmosphere.",
            "Loyalty Program: Join our loyalty program and earn rewards and discounts.",
            "Gift Cards: Purchase gift cards for friends and family.",
            "Party Platters: Order large quantities of our dishes for your next gathering or event.",
            "Meal Plans: Sign up for our meal plans and enjoy our food at a discounted rate.",
            "Dietary Options: We offer gluten-free, vegan, and other options to cater to your dietary needs.",
          ].map((service, index) => (
            <div
              key={index}
              className="p-5 border rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-medium">{service}</p>
            </div>
          ))}
        </div>

        {/* Special Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Special Services
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Live music or entertainment</li>
            <li>Outdoor seating or patio dining</li>
            <li>Pet-friendly dining area</li>
            <li>Kids' menu or play area</li>
            <li>Happy hour or special deals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
