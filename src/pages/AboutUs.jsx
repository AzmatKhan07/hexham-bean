import React from "react";

const AboutUs = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

          {/* Our Story */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our restaurant, where food, passion, and community come
              together. Our story began with a simple idea: to share delicious,
              homemade-style cuisine with our neighbors and friends.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to create a warm and inviting space where everyone feels at
              home. Our chefs are dedicated to crafting dishes that not only
              taste amazing but also use only the freshest ingredients, sourced
              locally whenever possible.
            </p>
          </section>

          {/* Our Team */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Meet our talented team of chefs, servers, and managers who work
              together to bring you an exceptional dining experience.
            </p>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>
                <span className="font-semibold">Quality:</span> We're committed
                to serving only the best.
              </li>
              <li>
                <span className="font-semibold">Community:</span> We believe in
                supporting local businesses and events.
              </li>
              <li>
                <span className="font-semibold">Hospitality:</span> We strive to
                make every guest feel welcome and valued.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
