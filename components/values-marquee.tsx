import Marquee from "@/components/ui/marquee";
import { Asterisk, MoveRight } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

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
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
