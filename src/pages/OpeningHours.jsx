import React from "react";

const OpeningHours = () => {
  const hours = [
    { day: "Monday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Sunday", open: "Closed", close: "" },
  ];

  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

  return (
    <div className="container min-h-[80vh] flex justify-center items-center">
      <div className="mx-auto p-6 bg-white shadow-lg rounded-md w-[100%]">
        <h1 className="text-2xl font-bold mb-4">Opening Hours</h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Day</th>
              <th className="py-2 px-4">Opening Time</th>
              <th className="py-2 px-4">Closing Time</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, index) => (
              <tr
                key={index}
                className={`border-b ${today === index ? "bg-yellow-100" : ""}`}
              >
                <td className="py-2 px-4">{hour.day}</td>
                <td className="py-2 px-4">{hour.open}</td>
                <td className="py-2 px-4">{hour.close}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-sm mt-4 text-gray-500">
          Note: Please call ahead for holiday hours or special events.
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
