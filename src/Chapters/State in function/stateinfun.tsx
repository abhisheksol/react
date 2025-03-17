import React, { useState } from "react";

const Room = () => {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="p-4 border rounded text-center">
      <p className="text-lg">{isLit ? "💡 The room is lit" : "🌑 The room is dark"}</p>
      <button
        onClick={() => setIsLit(!isLit)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Light
      </button>
    </div>
  );
};

const RandomList = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addRandomNumber = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 100)]);
  };

  return (
    <div className="p-4 border rounded text-center mt-4">
      <button
        onClick={addRandomNumber}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Random Number
      </button>
      <ul className="mt-2">
        {numbers.map((num, index) => (
          <li key={index} className="text-lg">{num}</li>
        ))}
      </ul>
    </div>
  );
};

// First version: Separate useState variables
const AudioControlsSeparate = () => {
  const [volume, setVolume] = useState(50);
  const [bass, setBass] = useState(50);
  const [mid, setMid] = useState(50);
  const [treble, setTreble] = useState(50);

  const createControl = (label: string, value: number, setValue: any) => (
    <div className="flex items-center justify-center mt-2">
      <button
        onClick={() => setValue(Math.max(value - 1, 1))}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        -
      </button>
      <span className="px-4">{value}</span>
      <button
        onClick={() => setValue(Math.min(value + 1, 100))}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        +
      </button>
      <span className="ml-2">{label}</span>
    </div>
  );

  return (
    <div className="p-4 border rounded text-center mt-4">
      <h3 className="font-bold">🎵 Audio Controls (Separate State)</h3>
      {createControl("VOLUME", volume, setVolume)}
      {createControl("TREBLE", treble, setTreble)}
      {createControl("MID", mid, setMid)}
      {createControl("BASS", bass, setBass)}
    </div>
  );
};

// Second version: Single state object
const AudioControlsObject = () => {
  const [audioSettings, setAudioSettings] = useState({
    volume: 50,
    bass: 50,
    mid: 50,
    treble: 50,
  });

  const adjustSetting = (key: keyof typeof audioSettings, change: number) => {
    setAudioSettings((prev) => ({
      ...prev,
      [key]: Math.min(100, Math.max(1, prev[key] + change)),
    }));
  };

  const createControl = (label: keyof typeof audioSettings) => (
    <div className="flex items-center justify-center mt-2">
      <button
        onClick={() => adjustSetting(label, -1)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        -
      </button>
      <span className="px-4">{audioSettings[label]}</span>
      <button
        onClick={() => adjustSetting(label, 1)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        +
      </button>
      <span className="ml-2">{label.toUpperCase()}</span>
    </div>
  );

  return (
    <div className="p-4 border rounded text-center mt-4">
      <h3 className="font-bold">🎵 Audio Controls (Single State Object)</h3>
      {createControl("volume")}
      {createControl("treble")}
      {createControl("mid")}
      {createControl("bass")}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <Room />
      <RandomList />
      <AudioControlsSeparate />
      <AudioControlsObject />
    </div>
  );
};

export default App;
