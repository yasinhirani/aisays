import React, { useContext } from "react";
import ThemeContext from "../context";
import ThemeColors from "../model/themeColor.model";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="px-6 md:px-12 py-6">
      <h2 className="text-base sm:text-xl font-medium text-center">
        Made With ❤️ By •{" "}
        <span className={`${ThemeColors[theme]}`}>Yasin Hirani</span> • &copy;{" "}
        {new Date().getFullYear()}
      </h2>
    </div>
  );
};

export default Footer;
