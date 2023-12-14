"use client";

import { useTheme } from "next-themes";
import GetIcon from "./GetIcons";

const SwitchTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const themeCurrent = theme === "system" ? systemTheme : theme;

  return themeCurrent === "dark" ? (
    <button onClick={() => setTheme("light")}>
      <GetIcon icon="PiSunLight" className="text-2xl md:text-xl" />
    </button>
  ) : (
    <button onClick={() => setTheme("dark")}>
      <GetIcon icon="PiMoonStarsLight" className="text-2xl md:text-xl" />
    </button>
  );
};

export default SwitchTheme;
