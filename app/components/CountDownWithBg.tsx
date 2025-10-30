import { EVENT_BG_IMGS } from "../constant";
import CountDown from "./CountDown";
import Image from "next/image";
export default function CountDownWithBg() {
  return (
    <div className="relative w-full">
      <Image
        src={EVENT_BG_IMGS.countdown}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      <CountDown />
    </div>
  );
}
