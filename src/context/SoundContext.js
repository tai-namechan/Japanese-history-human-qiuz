import React, { createContext, useState, useContext } from "react";

const SoundContext = createContext();

export function useSoundContext() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  // 音声のOn/Offの元のstate
  const [isSoundOn, setIsSoundOn] = useState(true);

  const value = {
    isSoundOn,
    setIsSoundOn
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}
