import React, { useState } from "react";

const House2 = () => {
  const [House2, setHouse2] = useState({
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  });

  const toggleLight = (room: string) => {
    setHouse2((prev) => ({
      rooms: {
        ...prev.rooms,
        [room]: !prev.rooms[room],
      },
    }));
  };

  return (
    <div className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">🏠 House2 Lights</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(House2.rooms).map((room) => (
          <button
            key={room}
            className={`px-4 py-2 rounded-lg font-semibold ${
              House2.rooms[room] ? "bg-yellow-400" : "bg-gray-500"
            } text-white`}
            onClick={() => toggleLight(room)}
          >
            {room.charAt(0).toUpperCase() + room.slice(1)}:{" "}
            {House2.rooms[room] ? "ON" : "OFF"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default House2;
