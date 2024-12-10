import React from "react";
import Hero from "../components/Hero";
import Client from "../components/Client";
import InfoSection from "../components/InfoSection";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <main>
      <Hero />
      <Client />
      <InfoSection />
      <ContactForm />
      {/* <MapComponent /> */}
    </main>
  );
};

export default Home;
