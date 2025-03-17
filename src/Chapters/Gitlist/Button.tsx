import React from "react";

const genres = [
  { name: "Jazz", popularity: 9 },
  { name: "Top 40", popularity: 8 },
  { name: "Country", popularity: 7 },
  { name: "Blues", popularity: 7 },
  { name: "Easy Listening", popularity: 6 },
  { name: "Rock", popularity: 6 },
  { name: "Classical", popularity: 5 },
  { name: "Chillout", popularity: 5 },
  { name: "80s", popularity: 5 },
  { name: "Oldies", popularity: 4 },
  { name: "Dance", popularity: 3 },
  { name: "Hip Hop", popularity: 3 },
  { name: "Pop", popularity: 3 },
  { name: "Reggae", popularity: 2 },
  { name: "Electronic", popularity: 2 },
  { name: "Indie", popularity: 2 },
  { name: "Hardstyle", popularity: 1 },
  { name: "Goth", popularity: 1 },
  { name: "Trance", popularity: 1 },
];

const GenreCloud = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">🎵 Popular Genres</h2>
      <div className="flex flex-wrap gap-2 justify-center max-w-4xl">
        {genres.map((genre) => (
          <button
            key={genre.name}
            className={`px-3 py-1 rounded-full bg-blue-500 text-white font-semibold transition-all 
                        hover:bg-blue-600`}
            style={{
              fontSize: `${genre.popularity * 0.2 + 0.8}rem`,
              padding: `${genre.popularity * 2}px ${genre.popularity * 5}px`,
            }}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};



export default GenreCloud;
