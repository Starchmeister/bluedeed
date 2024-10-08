import { DATA } from "@/data/content";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { MarqueeDemo } from "@/components/values-marquee";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col py-24 h-full gap-4 md:flex-row"
      >
        <div className="md:w-1/2 md:pb-0 pb-6">
          <h1
            className="md:text-[72px] text-[52px] tracking-[-4px]  md:tracking-[-5px] font-medium md:leading-[68px] leading-[48px]"
            style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
          >
            {DATA.section1[0].heading}
          </h1>
        </div>

        <div className="md:w-1/2 flex flex-col md:justify-between">
          <p
            className="text-[14px] md:pb-0  pb-4 tracking-[-1px] font-medium leading-[14px]"
            style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
          >
            <span className="text-bluedeed_fg">BLUEDEED STUDIOS</span>
            {DATA.section1[1].subheading}
          </p>
          <Link
            href={""}
            className="flex items-center tracking-[-1px] font-medium text-[14px]"
          >
            <ArrowDownRight /> {DATA.section1[2].buttonCTA}
          </Link>
        </div>
      </motion.div>
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <MarqueeDemo />
        </motion.div>
      </section>
      <section className="pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative w-full md:h-[800px] h-[300px]">
            <Image src="/illustration1.svg" fill sizes="100vw" alt={""} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:items-start items-center flex flex-col w-full"
        >
          <div className="py-4">
            <h2 className="md:text-[52px] text-[32px] tracking-[-2px]  md:tracking-[-3px] font-medium ">
              Bringing your ideas to life.
            </h2>
          </div>
          <p className="w-full text-left text-[14px] md:pb-0  pb-4  tracking-[-1px] font-medium leading-[14px]">
            Tools we use:
          </p>
          <div className="flex  relative w-[400px] h-[62px]">
            <Image src="/tools.svg" fill sizes="100vw" alt={""} />
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col py-24 h-full gap-4 md:flex-row"
        >
          <div className="md:w-1/2 md:pb-0 pb-6">
            <h1
              className="md:text-[52px] text-[32px] tracking-[-3px]  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]"
              style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
            >
              {DATA.whoAreWe[0].heading}
            </h1>
          </div>

          <div className="md:w-1/2 flex flex-col md:justify-between">
            <p
              className="text-[14px] md:pb-0  pb-4 mb-8"
              style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
            >
              {DATA.whoAreWe[1].subheading}
            </p>
            <Link
              href={""}
              className="flex items-center tracking-[-1px] font-medium text-[14px]"
            >
              <ArrowDownRight /> {DATA.whoAreWe[2].buttonCTA}
            </Link>
          </div>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full gap-4"
        >
          <div className="">
            <h1
              className="md:text-[52px] text-[32px] tracking-[-3px]  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]"
              style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
            >
              What We Do
            </h1>
          </div>

          <div className=" flex flex-col md:justify-between">
            <Accordion type="single" collapsible>
              {DATA.whatWeDo.map((service, index) => (
                <AccordionItem value={`item-${index}`} key={service.item}>
                  <AccordionTrigger>{service.item}</AccordionTrigger>
                  <AccordionContent>{service.itemDescription}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col py-24 h-full gap-4 md:flex-row"
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
      </section>
    </main>
  );
}
