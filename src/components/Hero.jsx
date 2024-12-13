import React from "react";

const Hero = () => {
  return (
    <section className="heroBanner flex justify-center items-center min-h-[100vh]">
      <div className="container text-center md:w-[50%] bg-white/90 p-10 rounded-xl">
        <h1 className="text-6xl mb-3 font-bold text-black">The Tasty House</h1>
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          aspernatur tenetur autem, ea totam aut temporibus iusto, unde maiores
          qui a. Quos numquam officiis exercitationem excepturi perferendis,
          ipsum placeat. Blanditiis.
        </p>
        <button className="mainBtn mt-5">Book Now!</button>
      </div>
    </section>
  );
};

export default Hero;
