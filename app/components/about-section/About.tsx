import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} text-navy-blue antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-dark-gray text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I thrive on crafting powerful business solutions that drive growth and innovation. Whether it’s designing a website to elevate brand visibility or developing software to automate manual processes, I’m passionate about transforming brands from where they are to where they aspire to be—and continuously refining those solutions over time.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Since writing my first lines of code in late 2019, I’ve honed my development skills while embracing UI/UX design and tackling increasingly complex challenges. Each project is an opportunity to push boundaries, learn, and grow, ensuring I deliver not just my best work, but solutions that businesses are proud to showcase.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Curious to see how I can help your business thrive? Let’s connect—here’s. <br className="hidden md:block" />
            <Link
              className="underline text-electric-blue"
              href={
                "https://drive.google.com/file/d/1hgoOy6zGHWw_chb3plCC0wprpSts9mi7/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2 text-navy-blue"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-dark-gray text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, .NET, TypeScript, Redux, Redux
              Toolkit, Prisma ORM,ExpressJs, Mongodb, Git/GitHub, .
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2 text-navy-blue"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-dark-gray text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2 text-navy-blue"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-dark-gray text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
