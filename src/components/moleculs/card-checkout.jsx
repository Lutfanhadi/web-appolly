import {Download, Like, Star } from "../atoms/icons";
import ParentCheckout from "../atoms/parent-checkout";
import DownloadSvg from "../../../public/svg/download.svg"

export const CardCheckout1 = () => {
  return (
        <ParentCheckout svg={DownloadSvg} number={"59865"} text={"Download"} />
  );

};

export const CardCheckout2 = () => {
  return ( 
     <ParentCheckout padding={false} svg={DownloadSvg} number={"29852"} text={"Like"} />
  );
};

export const CardCheckout3 = () => {
  return (
    <ParentCheckout svg={DownloadSvg} number={"1500"} text={"5 star rating"} />
  );
};
