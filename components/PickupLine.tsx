import ThemeContext from "@/core/context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ShareButtons from "./ShareButtons";
import { IBookmarks } from "@/core/model/bookmarks.model";
import toast from "react-hot-toast";
import bookmarkTypes from "@/core/utils/bookmarkTypes";

const PickupLine = () => {
  const { setTheme } = useContext(ThemeContext);

  const [pickupLine, setPickupLine] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPickupLine = () => {
    setIsLoading(true);
    setPickupLine("");
    axios.get("/api/getPickupLine").then((res) => {
      setPickupLine(res.data);
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
      bookmarks.pickupLines.bookmarks.push(text);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      toast.success("Bookmarked");
    }
  };

  useEffect(() => {
    setTheme(1);
    getPickupLine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-6 md:px-12 flex-grow flex flex-col justify-center space-y-10">
      <div className="w-full h-80 bg-pink-600 p-8 text-white rounded-xl flex flex-col justify-between relative">
        <p className="font-semibold text-2xl">{pickupLine}</p>
        <ShareButtons
          copy={copyToClipboard}
          text={pickupLine}
          bookmark={bookmark}
          sayingType={bookmarkTypes.PICKUP_LINE}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 z-10" />
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
        <button
          type="button"
          onClick={getPickupLine}
          className="w-full border bg-pink-600 px-6 py-3 rounded-lg text-white text-xl font-semibold hover:bg-transparent hover:text-pink-600 border-pink-600 transition-all"
        >
          Get another Pickup Line
        </button>
        <Link
          href="/motivationalQuote"
          className="w-full border bg-pink-600 px-6 py-3 rounded-lg text-white text-xl font-semibold text-center hover:bg-transparent hover:text-pink-600 border-pink-600 transition-all"
        >
          Get Motivational Quote
        </Link>
      </div>
    </div>
  );
};

export default PickupLine;
