import React from "react";

const ManagementTeam = () => {
  const teamMembers = [
    {
      src: "/Management/Manoj%20Gautam.jpg",
      name: "Manoj Gautam",
      description: "Executive Director, Educator, Conservationist, PR",
    },
    {
      src: "/Management/Dakshina%20Khadka.png",
      name: "Dakshina Khadka",
      description: "Program Designer and Coordinator, Conservationist",
    },
    {
      src: "/Management/Niraj%20Gautam.jpg",
      name: "Niraj Gautam",
      description: "Logistics and Operation",
    },
    {
      src: "/Management/Tejaskar%20Rana.png",
      name: "Tejaskar Rana",
      description: "Logistics and Operation",
    },
    {
      src: "/Management/Rojit%20Karki.jpg",
      name: "Rojit Karki",
      description: "Digital Media (Photos and Videos)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
        Management Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {teamMembers.map(({ src, name, description }, idx) => (
          <div
            key={idx}
            className="shadow rounded-lg overflow-hidden border border-gray-200 bg-white flex flex-col items-center p-4"
          >
            <img
              src={src}
              alt={name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4 text-center text-gray-800 font-semibold">
              {name}
            </p>
            <p className="mt-1 text-center text-gray-600 italic text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;
