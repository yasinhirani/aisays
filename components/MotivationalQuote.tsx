import ThemeContext from "@/core/context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ShareButtons from "./ShareButtons";
import { IBookmarks } from "@/core/model/bookmarks.model";
import toast from "react-hot-toast";
import bookmarkTypes from "@/core/utils/bookmarkTypes";

const MotivationalQuote = () => {
  const { setTheme } = useContext(ThemeContext);

  const [motivationalQuote, setMotivationalQuote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMotivationalQuote = () => {
    setIsLoading(true);
    setMotivationalQuote("");
    axios.get("/api/getMotivationalQuote").then((res) => {
      setMotivationalQuote(res.data.quote);
      setIsLoading(false);
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard");
  };

  const bookmark = (text: string) => {
    if (localStorage.getItem("bookmarks")) {
      const bookmarks: IBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") as string
      );
      bookmarks.motivationalQuotes.bookmarks.push(text);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      toast.success("Bookmarked");
    }
  };

  useEffect(() => {
    setTheme(2);
    getMotivationalQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-6 md:px-12 flex-grow flex flex-col justify-center space-y-10">
      <div className="w-full h-80 bg-sky-600 p-8 text-white rounded-xl flex flex-col justify-between relative">
        <p className="font-semibold text-2xl">{motivationalQuote}</p>
        <ShareButtons
          copy={copyToClipboard}
          text={motivationalQuote}
          bookmark={bookmark}
          sayingType={bookmarkTypes.MOTIVATIONAL_QUOTE}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 z-10" />
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
        <button
          type="button"
          onClick={getMotivationalQuote}
          className="w-full border bg-sky-600 px-6 py-3 rounded-lg text-white text-xl font-semibold hover:bg-transparent hover:text-sky-600 border-sky-600 transition-all"
        >
          Get another Motivational Quote
        </button>
        <Link
          href="/pickupLine"
          className="w-full border bg-sky-600 px-6 py-3 rounded-lg text-white text-xl font-semibold text-center hover:bg-transparent hover:text-sky-600 border-sky-600 transition-all"
        >
          Get a Pickup Line
        </Link>
      </div>
    </div>
  );
};

export default MotivationalQuote;
