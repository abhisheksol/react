import React from "react";

const images = [
  { id: 1, title: "DIY - Tips Tricks Ideas", image: "/img1.jpg", likes: 4850 },
  { id: 2, title: "AVIATION", image: "/img2.jpg", likes: 1641 },
  { id: 3, title: "Exceptional Aviation", image: "/img3.jpg", likes: 4209 },
  { id: 4, title: "AEROSPACE", image: "/img4.jpg", likes: 1185 },
  { id: 5, title: "WHEN FLYING WAS WORTH IT", image: "/img5.jpg", likes: 2200 },
  { id: 6, title: "Aircraft Recycled Into Furniture", image: "/img6.jpg", likes: 475 },
];

const ImageCard = ({ image, title, likes }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Aviation Explorer</p>
        <p className="text-gray-700 font-bold">❤️ {likes}</p>
        <button className="mt-2 w-full bg-red-500 text-white py-1 rounded">Follow</button>
      </div>
    </div>
  );
};

const Pinerest = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-6">
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        <h1 className="text-2xl font-bold">Aviation Explorer</h1>
        <div className="flex justify-center space-x-4 mt-2 text-gray-600">
          <span><strong className="text-red-500">37</strong> Boards</span>
          <span>8.9k Pins</span>
          <span>186 Likes</span>
          <span>8.9k Followers</span>
          <span>1.8k Following</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 justify-center">
        {images.map((img) => (
          <ImageCard key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default Pinerest;
