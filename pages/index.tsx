import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/core/components/Header";
import Homepage from "@/components/Homepage";
import Footer from "@/core/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("bookmarks")) {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify({
          pickupLines: {
            bookmarks: [],
          },
          motivationalQuotes: {
            bookmarks: [],
          },
        })
      );
    }
  }, []);
  return (
    <div className="w-full h-full max-w-[65rem] mx-auto flex flex-col space-y-5">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
