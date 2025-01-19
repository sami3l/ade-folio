"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/d.jpeg",
    jobTitle: "Full Stack Developer",
    company: "OCP Group·",
    jobType: "Internship",
    duration: "August 2023 - October 2023",
    stuffIDid: [
      "Developed a web-based inventory management application to optimize stock tracking and control operations.",
      "Enabled efficient management of products, categories, and users through intuitive CRUD (Create, Read, Update, Delete) features.",
      "Ensured data protection and consistency throughout the application.",
      "Significantly improved inventory management efficiency, addressing business needs for accuracy and workflow optimization.",
      "Technologies used : Express.js, Next.js, TypeScript, Prisma ORM.",
      
    ],
  },
 
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3 bg-navy-blue">
        <div className="w-3 h-auto " />

        <div className="flex flex-col gap-10 text-dark-gray">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
