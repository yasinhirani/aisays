import ThemeContext from "@/core/context";
import { IBookmarks } from "@/core/model/bookmarks.model";
import bookmarkTypes from "@/core/utils/bookmarkTypes";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Bookmarks = () => {
  const { setTheme } = useContext(ThemeContext);

  const [bookmarks, setBookmarks] = useState<IBookmarks | null>(null);

  const getBookmarks = () => {
    if (localStorage.getItem("bookmarks")) {
      setBookmarks(JSON.parse(localStorage.getItem("bookmarks") as string));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const deleteBookmark = (id: number, bookmarkType: string) => {
    if (localStorage.getItem("bookmarks")) {
      const localBookmarks: IBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") as string
      );
      if (bookmarkType === bookmarkTypes.PICKUP_LINE) {
        localBookmarks.pickupLines.bookmarks.splice(id, 1);
        localStorage.setItem("bookmarks", JSON.stringify(localBookmarks));
        setBookmarks(JSON.parse(localStorage.getItem("bookmarks") as string));
      }
      if (bookmarkType === bookmarkTypes.MOTIVATIONAL_QUOTE) {
        localBookmarks.motivationalQuotes.bookmarks.splice(id, 1);
        localStorage.setItem("bookmarks", JSON.stringify(localBookmarks));
        setBookmarks(JSON.parse(localStorage.getItem("bookmarks") as string));
      }
    }
  };

  useEffect(() => {
    setTheme(3);
    getBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="px-6 md:px-12 flex-grow flex flex-col space-y-10">
      <div className="w-full h-80 bg-indigo-600 p-8 text-white rounded-xl overflow-y-auto">
        <h2 className="text-2xl font-semibold">Pickup Lines:</h2>
        {bookmarks && bookmarks?.pickupLines.bookmarks.length > 0 && (
          <ol className="flex flex-col space-y-5 mt-5 list-decimal ml-5 font-medium text-lg">
            {bookmarks.pickupLines.bookmarks.map((bookmark, id) => {
              return (
                <li className="pl-2" key={Math.random()}>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-3 md:space-y-0">
                    <p>{bookmark}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(bookmark)}
                      >
                        <figure>
                          <Image
                            src="/images/copy.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="w-6 min-w-[22px]"
                          />
                        </figure>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          deleteBookmark(id, bookmarkTypes.PICKUP_LINE)
                        }
                      >
                        <figure>
                          <Image
                            src="/images/delete.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="w-6 min-w-[22px]"
                          />
                        </figure>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
      <div className="w-full h-80 bg-indigo-600 p-8 text-white rounded-xl overflow-y-auto">
        <h2 className="text-2xl font-semibold">Motivational Quotes:</h2>
        {bookmarks && bookmarks?.motivationalQuotes.bookmarks.length > 0 && (
          <ol className="flex flex-col space-y-5 mt-5 list-decimal ml-5 font-medium text-lg">
            {bookmarks.motivationalQuotes.bookmarks.map((bookmark, id) => {
              return (
                <li className="pl-2" key={Math.random()}>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-3 md:space-y-0">
                    <p>{bookmark}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(bookmark)}
                      >
                        <figure>
                          <Image
                            src="/images/copy.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="w-6 min-w-[22px]"
                          />
                        </figure>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          deleteBookmark(id, bookmarkTypes.MOTIVATIONAL_QUOTE)
                        }
                      >
                        <figure>
                          <Image
                            src="/images/delete.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="w-6 min-w-[22px]"
                          />
                        </figure>
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
