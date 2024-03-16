import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Sales Associate at Lens Crafters",
    duration: "currently present",
    details: "Effectively communicate with and tend to customer’s eye wear needs to provide a 5-star experience and the best eyewear solutions by leveraging expertise in eye wear and effective communication and sales skills. Actively participate and contribute to a positive strong environment, fostering strong, professional relationships with peers, management, doctors, and support staff",
  },
  {
    year: 2023,
    title:
      "Vice President of Incoming Global Talent and Coporate Relations at AIESEC MB",
    duration: "1 Year",
    details: "Effectively led a team of 10 people which develops and manages external partnerships, while overseeing the realization of the AIESEC Global Talent program in Manitoba. Responsible for executing successful partnership development process at the local level including market research, lead generation, sales meetings, and raising internships. Collaborated with the rest of the executive board to efficiently devise strategies aimed at ensuring the long-term sustainability of the organization",
  },
  {
    year: 2022,
    title: "Incoming Global Talent team member at AIESEC MB",
    duration: "1 Year",
    details: "Actively outreached to local companies to build successful partnerships to provide professional internship opportunities for leadership development for youth from 127 countries around the world primarily through cold calling, messaging and at by attending networking events.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;