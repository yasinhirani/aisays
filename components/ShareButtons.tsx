import Image from "next/image";
import React from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface IProps {
  copy: (text: string) => void;
  bookmark: (text: string) => void;
  text: string;
  sayingType: string;
}

const ShareButtons = ({ copy, text, bookmark, sayingType }: IProps) => {
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
        <WhatsappShareButton
          title={`${text}`}
          separator=""
          url={`https://aisays.vercel.app/${sayingType}`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Share on Whatsapp"
        >
          <figure>
            <Image src="/images/whatsapp.svg" alt="" width={25} height={25} />
          </figure>
        </WhatsappShareButton>
        <FacebookShareButton
          quote={`${text}`}
          url={`https://aisays.vercel.app/${sayingType}`}
          hashtag="#aisays"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Share on Facebook"
        >
          <figure>
            <Image src="/images/facebook.svg" alt="" width={35} height={35} />
          </figure>
        </FacebookShareButton>
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
