import React from "react";

const LocalGroundTeam = () => {
  const teamMembers = [
    {
      src: "/Local_Team/Nana.jpg",
      name: "Nana",
      description: "Nature Guide, Wildlife Technician",
    },
    {
      src: "/Local_Team/Kaki%20(Harkali%20Tharuni).jpg",
      name: "Kaki (Harkali Tharuni)",
      description: "Host, Tharu Community Mobilizer, Farmer",
    },
    {
      src: "/Local_Team/Narayan%20Chaudhary.jpg",
      name: "Narayan Chaudhary",
      description: "Camera trap and technical expert, Guide",
    },
    {
      src: "/Local_Team/Sushila%20Mahatara.jpg",
      name: "Sushila Mahatara",
      description: "Naturalist, social Activist",
    },
    {
      src: "/Local_Team/Hemanta%20Acharya.jpg",
      name: "Hemanta Acharya",
      description: "Chair of Buffer Zone Council, Social Leader",
    },
    {
      src: "/Local_Team/Sonia%20Tharu.jpg",
      name: "Sonia Tharu",
      description: "Craftswomen, Handicraft trainer",
    },
    {
      src: "/Local_Team/Manju%20Mahatara.jpg",
      name: "Manju Mahatara",
      description: "Naturalist, Wildlife Photographer",
    },
    {
      src: "/Local_Team/Dinesh%20Acharya.jpeg",
      name: "Dinesh Acharya",
      description: "Rapid Response Team member, Student",
    },
    {
      src: "/Local_Team/Nisha%20Tharu.png",
      name: "Nisha Tharu",
      description: "Community Crisis Group member",
    },
    {
      src: "/Local_Team/Gopal%20Sunar.png",
      name: "Gopal Sunar",
      description: "Community Crisis Group member",
    },
    {
      src: "/Local_Team/Biru%20Chaudhary.png",
      name: "Biru Chaudhary",
      description: "Camera trap and technical expert, Guide",
    },
    {
      src: "/Local_Team/Bandana%20Tharu.png",
      name: "Bandana Tharu",
      description: "Community Crisis Group member",
    },
    {
      src: "/Local_Team/Saroj%20Yogi.png",
      name: "Saroj Yogi",
      description: "Community Crisis Group member",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
        Local Ground Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl w-full">
        {teamMembers.map(({ src, name, description }, idx) => (
          <div
            key={idx}
            className="shadow rounded-lg overflow-hidden border border-gray-200 bg-white flex flex-col items-center p-4"
          >
            <img
              src={src}
              alt={name}
              className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-md"
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

export default LocalGroundTeam;
