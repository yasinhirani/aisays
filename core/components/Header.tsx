import Link from "next/link";
import React, { useContext } from "react";
import ThemeContext from "../context";
import ThemeColors from "../model/themeColor.model";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="px-6 md:px-12 py-6 flex justify-between items-end space-x-5 sticky top-0 bg-white z-20">
      <Link href="/" className={`${ThemeColors[theme]} font-semibold text-3xl`}>
        aisays
      </Link>
      <Link href="/bookmarks" className={`${ThemeColors[theme]} font-semibold text-xl`}>
        My Bookmarks
      </Link>
    </div>
  );
};

export default Header;
