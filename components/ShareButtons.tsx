import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface IProps {
  copy: (text: string) => void;
  bookmark: (text: string) => void;
  text: string;
}

const ShareButtons = ({ copy, text, bookmark }: IProps) => {
  return (
    <>
      <div className="flex items-center space-x-8 mt-6">
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Copy"
          onClick={() => copy(text)}
        >
          <figure>
            <Image src="/images/copy.svg" alt="" width={25} height={25} />
          </figure>
        </button>
        <a
          href={`https://wa.me/send?text=${text}`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Share on Whatsapp"
          data-action="share/whatsapp/share"
          target="_blank"
        >
          <figure>
            <Image src="/images/whatsapp.svg" alt="" width={25} height={25} />
          </figure>
        </a>
        {/* <a
          href={`whatsapp://send?text=${text}`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Share on Facebook"
          target="_blank"
        >
          <figure>
            <Image src="/images/facebook.svg" alt="" width={35} height={35} />
          </figure>
        </a> */}
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Save for later"
          onClick={() => bookmark(text)}
        >
          <figure>
            <Image src="/images/bookmark.svg" alt="" width={22} height={22} />
          </figure>
        </button>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default ShareButtons;
