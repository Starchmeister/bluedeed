import Marquee from "@/components/ui/marquee";
import { Asterisk, MoveRight } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="w-FULL flex items-center gap-2">
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">
        EFFICIENCY
      </span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">
        RESULT DRIVEN
      </span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">
        INNOVATIVE
      </span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">BESPOKE</span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">
        PRINCIPLED
      </span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
      <Asterisk className="text-bluedeed_fg" />{" "}
      <span className="text-[14px] tracking-[-1px] font-medium ">MODERN</span>
      <Asterisk className="text-bluedeed_fg" />{" "}
      <MoveRight className="text-bluedeed_button_icon" />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[32px] w-full flex-col items-center justify-center overflow-hidden  ">
      <Marquee pauseOnHover className="[--duration:50s]">
        <ReviewCard />
      </Marquee>
    </div>
  );
}
