import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "OCP StockManagement",
      gitLink: "https://github.com/sami3l/StockManagement",
      liveLink: "",
      about:
        "Developed a web app for inventory management, enabling efficient product, category, and user tracking with intuitive CRUD operations. Ensured data security and consistency, improving inventory accuracy and workflow efficiency for businesses.",
      stack: ["next.js", "typescript", "express.js", "tailwindcss" ,"Prisma ORM"],
      img: "/offset-folio.svg",
    },
    {
      title: "Hotel Mangement System",
      gitLink: "https://github.com/sami3l/HotelBookingBackend",
      liveLink: "",
      about:
        "Developed a back-office hotel management system to streamline operations, including reservations, room management, and guest data tracking, enhancing efficiency and user experience.",
      stack: [".NET", "EntityFrameworkCore", "SQL Server", "Identity" ],
      img: "/shortly.svg",
    },
  
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px] text-navy-blue"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
