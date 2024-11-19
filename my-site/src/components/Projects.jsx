import React from "react";
import ProjectItem from "./ProjectItem";
import superSetImg from "../assets/superset.jpg";
import f1Img from "../assets/f1.jpg";
import lImg from "../assets/lvlUp.gg.jpg";
import Ag2DIMG from '../assets/Agree2.png';
import dashIMG from '../assets/streamlit.png';
import expenseIMG from '../assets/expenseT.jpg';
import contractorsImg from "../assets/ContractorPro.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        
      </p>
      
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={expenseIMG}
          title="Expense-tracker"
          type="Full stack Application - MERN tech stack"
          link="https://github.com/Thamira2001/Expense-Tracker"
        />
        <ProjectItem
          img={Agree2DIMG}
          title="Agree2Disagree"
          type="R&D - Full stack LLM Application - Langchain, Django and Gemini API"
          link="https://github.com/Thamira2001/Agree2Disagree"
        />
        <ProjectItem
          img={dashIMG}
          title="Analytics-Dashboard"
          type="Full stack - streamlit+Django+SQLite3"
          link="https://github.com/Thamira2001/Analytics-Dashboard"
        />
        <ProjectItem
          img={lImg}
          title="LvlUp.gg"
          type="Full stack Application"
          link="https://github.com/GTZ-STUDIO/LvlUp.gg"
        />
        <ProjectItem
          img={superSetImg}
          title="SuperSet"
          type="Android Application"
          link="https://github.com/Thamira2001/SuperSet"
        />
        <ProjectItem img={f1Img} title="F1Db + UI" type="MS SQL server"  link="https://github.com/Thamira2001/F1-Db-command-line-UI"/>
        <ProjectItem
          img={contractorsImg}
          title="ContractorsPro"
          type="Frontend Prototype"
          link="https://github.com/Thamira2001/ContractorsPro"
        />
      </div>
    </div>
  );
};

export default Projects;
