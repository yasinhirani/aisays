import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/core/components/Header";
import Homepage from "@/components/Homepage";
import Footer from "@/core/components/Footer";
import { useEffect } from "react";
import Head from "next/head";

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
    <>
      <Head>
        <title>aisays</title>
        <link rel="shortcut icon" href="/favicon/homepage.ico" />
      </Head>
      <div className="w-full h-full max-w-[65rem] mx-auto flex flex-col space-y-5">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}
