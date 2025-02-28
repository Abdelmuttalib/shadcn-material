"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button
      type="button"
      variant={"secondary"}
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
