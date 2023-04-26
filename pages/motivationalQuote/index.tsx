import MotivationalQuote from "@/components/MotivationalQuote";
import Footer from "@/core/components/Footer";
import Header from "@/core/components/Header";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full max-w-[65rem] mx-auto flex flex-col space-y-5">
      <Header />
      <MotivationalQuote />
      <Footer />
    </div>
  );
};

export default index;