import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/content";
import { Button } from "@/components/ui/button";
import { CornerUpRight } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full flex items-center py-6">
      <div className="w-full">
        <Link href="/">
          <Image alt="" width={80} height={80} src="/bluedeedlogosvg.svg" />
        </Link>
      </div>
      <div className="flex gap-4 w-auto items-center ">
        <Link href={DATA.header[2].href}>
          <Button className="text-[14px]">
            {" "}
            <CornerUpRight className="text-bluedeed_button_icon size-4 mr-2" />
            {DATA.header[2].label}
          </Button>
        </Link>
      </div>
    </div>
  );
}
