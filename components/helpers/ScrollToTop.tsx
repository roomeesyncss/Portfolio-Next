"use client";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const scrollToTop = () => {
    typeof window !== undefined &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      onClick={() => scrollToTop()}
      className="fixed bottom-4 right-4 bg-primary text-white rounded-full size-14 center shadow-md"
    >
      <ChevronUp className="size-7" />
    </button>
  );
};
