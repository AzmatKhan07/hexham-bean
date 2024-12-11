import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">VISIT US</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
         <form className="space-y-4" action={"https://getform.io/f/bejjzxna"} method="POST">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              name="name"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              name="phone"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              name="email"
            />

            <textarea
              placeholder="How can we serve you?"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              name="message"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">SPECIAL REQUESTS?</h3>
            <p className="text-gray-600">
              Do you have dietary concerns? Questions about an upcoming event?
              Drop us a line, and we'll get back to you soon!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">YAMM BUFFET</h4>
            <p className="text-gray-600">
              7-9 Whitehall Street, Dundee, DD1 4AA, United Kingdom
            </p>
            <p className="text-gray-600">01382 227759</p>
            <p className="text-gray-600">yammbuffet@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">OPENING HOURS</h4>
            <p className="text-gray-600">Open today 12:00 – 22:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
