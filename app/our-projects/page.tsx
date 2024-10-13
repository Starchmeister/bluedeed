import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { DATA } from "@/data/content";
import { ArrowDownRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const tabsData = [
  {
    title: "onxui",
    value: "tab1",
    content: (
      <div className="p-4 bg-white  dark:bg-gray-800 rounded-[32px] shadow">
        <Link
          href="https://www.globalcropsales.com/"
          className="hover:underline"
        >
          {" "}
          <h3 className="md:text-[32px] text-[18px] tracking-[-1px]  md:tracking-[-2px] font-medium md:leading-[68px] leading-[48px]">
            onxui
          </h3>
        </Link>
        <div className="relative w-full md:h-[716px] h-[200px]">
          <Image src="/onxui.svg" fill sizes="100vw" alt={""} />
        </div>
      </div>
    ),
  },
  {
    title: "Global Crop Sales",
    value: "tab2",
    content: (
      <div className="p-4 bg-white  dark:bg-gray-800 rounded-[32px] shadow">
        <Link
          href="https://www.globalcropsales.com/"
          className="hover:underline"
        >
          {" "}
          <h3 className="md:text-[32px] text-[18px] tracking-[-1px]  md:tracking-[-2px] font-medium md:leading-[68px] leading-[48px]">
            Global Crop Sales
          </h3>
        </Link>
        <div className="relative w-full top-0 md:h-[716px] h-[200px]">
          <Image src="/gcs.svg" fill sizes="100vw" alt={""} />
        </div>
      </div>
    ),
  },
  {
    title: "SmartPrep",
    value: "tab3",
    content: (
      <div className="p-4 bg-white  dark:bg-gray-800 rounded-[32px] shadow">
        <Link href="https://www.smartprep.co.za/" className="hover:underline">
          {" "}
          <h3 className="md:text-[32px] text-[18px] tracking-[-1px]  md:tracking-[-2px] font-medium md:leading-[68px] leading-[48px]">
            SmartPrep
          </h3>
        </Link>
        <div className="relative w-full top-0 md:h-[716px] h-[200px]">
          <Image src="/smartprep.svg" fill sizes="100vw" alt={""} />
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" h-[900px] py-24">
          <h1 className="md:text-[72px] text-[52px] mb-8 tracking-[-4px]  md:tracking-[-4px] font-medium md:leading-[68px] leading-[48px]">
            Featured Projects
          </h1>
          <p className="text-[14px] md:pb-0  pb-4 mb-8 md:w-1/2">
            Our featured products include web platforms that redefine user
            interaction, mobile applications designed for seamless engagement,
            and robust design systems that enable consistent and scalable design
            across multiple channels. These projects highlight our expertise in
            integrating cutting-edge technology with creative design to deliver
            exceptional digital experiences that drive business success. Explore
            some of our standout projects below to see how we transform ideas
            into impactful solutions.
          </p>

          <Tabs
            tabs={tabsData}
            containerClassName="mb-4"
            tabClassName="text-sm h-full font-medium text-white"
            activeTabClassName="bg-primary"
            contentClassName="mt-4"
          />
        </div>
      </motion.div>

      <section>
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col  md:pt-[400px] md:py-24 h-full gap-4 md:flex-row"
          >
            <div className="md:w-1/2 md:pb-0 pb-6">
              <h1
                className="md:text-[52px] text-[32px] tracking-[-3px]  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]"
                style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
              >
                {DATA.contactUs[0].heading}
              </h1>
            </div>

            <div className="md:w-1/2 flex flex-col md:justify-between">
              <p
                className="text-[14px] md:pb-0  pb-4 mb-8"
                style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
              >
                {DATA.contactUs[1].subheading}
              </p>
              <Link
                href={""}
                className="flex items-center tracking-[-1px] font-medium text-[14px]"
              >
                <ArrowDownRight /> {DATA.contactUs[2].buttonCTA}
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}
