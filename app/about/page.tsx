import * as motion from "framer-motion/client";
import { DATA } from "@/data/content";
import Image from "next/image";
import WordPullUp from "@/components/ui/word-pull-up";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { MarqueeDemo } from "@/components/values-marquee";
import { ArrowDownRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between w-full py-24 h-full gap-4 md:flex-row"
      >
        <div className="md:w-1/2 md:pb-0 pb-6">
          <h1
            className="md:text-[72px] text-[52px] tracking-[-4px]  md:tracking-[-5px] font-medium md:leading-[68px] leading-[48px]"
            style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
          >
            {DATA.aboutUs[0].heading}
          </h1>
        </div>

        <div className="md:w-1/2 relative  md:h-[560px] h-[400px]">
          <Image src="/illustration2.svg" fill sizes="100vw" alt={""} />
        </div>
      </motion.div>
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <MarqueeDemo />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col justify-between w-full  h-[300px] gap-4 md:flex-row"
      >
        <div>
          <AnimatedShinyText>
            <div className="flex items-center">
              <WordPullUp
                className="md:text-[92px] font-medium tracking-[-0.02em]  text-[52px]"
                words={"+15"}
              />
            </div>
            <p className="text-[24px] md:pb-0  pb-4 tracking-[-1px] font-medium leading-[14px]">
              Combined years of experience
            </p>
          </AnimatedShinyText>
        </div>
        <div>
          <AnimatedShinyText>
            <div className="flex items-center">
              <WordPullUp
                className="md:text-[92px] font-medium tracking-[-0.02em]  text-[52px]"
                words={"+20"}
              />
            </div>
            <p className="text-[24px] md:pb-0  pb-4 tracking-[-1px] font-medium leading-[14px]">
              Projects Completed
            </p>
          </AnimatedShinyText>
        </div>
        <div>
          <AnimatedShinyText>
            <div className="flex items-center">
              <WordPullUp
                className="md:text-[92px] font-medium tracking-[-0.02em]  text-[52px]"
                words={"+5"}
              />
            </div>
            <p className="text-[24px] md:pb-0  pb-4 tracking-[-1px] font-medium leading-[14px]">
              Years in operation
            </p>
          </AnimatedShinyText>
        </div>
      </motion.div>
      <section>
        <AnimatedSection>
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
                {DATA.weStartedBack[0].heading}
              </h1>
            </div>

            <div className="md:w-1/2 flex flex-col md:justify-between">
              <p
                className="text-[14px] md:pb-0  pb-4 mb-8"
                style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
              >
                {DATA.weStartedBack[1].subheading}
              </p>
              <Link
                href={""}
                className="flex items-center tracking-[-1px] font-medium text-[14px]"
              >
                <ArrowDownRight /> {DATA.weStartedBack[2].buttonCTA}
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
      <section>
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col py-24 h-full gap-4 md:flex-row"
          >
            <div className="rounded-[32px] w-1/3 bg-howbg1 p-8">
              <h2 className="md:text-[52px] text-[32px] tracking-[-3px] text-my_grey  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]">
                01
              </h2>
              <h4 className="text-[32px] tracking-[-2px] font-medium">
                Wireframing
              </h4>
              <p>
                Before diving into design, we start with wireframes to lay out
                the structure and flow of your project. This step helps
                visualize the user experience and ensures that all elements are
                strategically positioned to achieve your business goals.
                Wireframing sets the foundation for a seamless and intuitive
                user journey.
              </p>
            </div>
            <div className="rounded-[32px] w-1/3 bg-howbg2 p-8">
              <h2 className="md:text-[52px] text-[32px] tracking-[-3px] text-my_grey  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]">
                02
              </h2>
              <h4 className="text-[32px] tracking-[-2px] font-medium">
                Designing
              </h4>
              <p>
                Once the wireframes are approved, we move on to the design
                phase, where creativity meets functionality. Our team crafts
                visually compelling and user-centric designs that not only look
                great but are also easy to navigate. Every detail, from colors
                to typography, is chosen to align with your brand identity and
                enhance the user experience.
              </p>
            </div>
            <div className="rounded-[32px] w-1/3 bg-howbg3 p-8">
              <h2 className="md:text-[52px] text-[32px] tracking-[-3px] text-my_grey  md:tracking-[-3px] font-medium md:leading-[68px] leading-[48px]">
                03
              </h2>
              <h4 className="text-[32px] tracking-[-2px] font-medium">
                Development
              </h4>
              <p>
                With the design finalized, our development team brings
                everything to life. Using the latest technologies and best
                practices, we build responsive, high-performance solutions that
                work flawlessly across all devices. Our goal is to deliver a
                product that is robust, scalable, and ready to help your
                business thrive.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
      <section>
        <AnimatedSection>
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
                {DATA.weStartedBack[0].heading}
              </h1>
            </div>

            <div className="md:w-1/2 flex flex-col md:justify-between">
              <p
                className="text-[14px] md:pb-0  pb-4 mb-8"
                style={{ whiteSpace: "pre-line" }} // This will render \n as line breaks
              >
                {DATA.weStartedBack[1].subheading}
              </p>
              <Link
                href={""}
                className="flex items-center tracking-[-1px] font-medium text-[14px]"
              >
                <ArrowDownRight /> {DATA.weStartedBack[2].buttonCTA}
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}
