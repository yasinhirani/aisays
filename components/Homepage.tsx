import ThemeContext from "@/core/context";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Homepage = () => {
  const { setTheme } = useContext(ThemeContext);

  const buttonClasses: string =
    "text-xl font-semibold border bg-cyan-600 text-white hover:bg-transparent hover:text-cyan-600 border-cyan-600 transition-all p-5 rounded-lg";

  useEffect(() => {
    setTheme(0);
  }, []);
  return (
    <div className="px-6 md:px-12 flex-grow flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        <Link
          href="/pickupLine"
          className={`w-full h-72 flex justify-center items-center rounded-lg ${buttonClasses}`}
        >
          <span>I want a Pickup Line</span>
        </Link>
        <Link
          href="/motivationalQuote"
          className={`w-full h-72 flex justify-center items-center rounded-lg ${buttonClasses}`}
        >
          <span>I want a Motivational Quote</span>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
