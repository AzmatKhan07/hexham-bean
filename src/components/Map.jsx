import React from "react";

const MapComponent = () => {
  return (
    <section className="googleMap mt-10">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.161961078165!2d-2.1001617228339446!3d54.97025885199161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487dc646815a8731%3A0xf90faa91fbc98423!2sPriestpopple%2C%20Hexham%2C%20UK!5e0!3m2!1sen!2s!4v1733914786825!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default MapComponent;
