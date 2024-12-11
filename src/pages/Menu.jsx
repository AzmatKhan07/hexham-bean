import React from "react";

const Menu = () => {
  return (
    <section className="py-28 w-full flex justify-center items-center">
      <div>
        <h1 className="mb-5 text-4xl font-bold">Here is our Menu</h1>

        <img src="/menu.webp" alt="menu" />

        <div className="mt-10 text-center">
          <p className="mb-3">Please download the Menu PDF file Here</p>

          <a href="/food_menu.pdf" className="mainBtn" download>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
