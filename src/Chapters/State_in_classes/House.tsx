import React, { useState } from "react";

const House = () => {
  const [lights, setLights] = useState({
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false,
  });

  const toggleLight = (room: string) => {
    setLights((prev) => ({
      ...prev,
      [room]: !prev[room],
    }));
  };

  return (
    <div className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">🏠 House Lights</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(lights).map((room) => (
          <button
            key={room}
            className={`px-4 py-2 rounded-lg font-semibold ${
              lights[room] ? "bg-yellow-400" : "bg-gray-500"
            } text-white`}
            onClick={() => toggleLight(room)}
          >
            {room.charAt(0).toUpperCase() + room.slice(1)}:{" "}
            {lights[room] ? "ON" : "OFF"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default House;
