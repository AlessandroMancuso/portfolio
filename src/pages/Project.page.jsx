import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";

// ICONS
import {
  faCode, faDesktop, faGear, faGraduationCap, faStamp
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card.component";

// Functional Component
export default function Project(props) {
  const params = useParams();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });    
  }, []);

  const id = params.id;

  const projectFields = [
    {
      id: 0,
      title: "University",
      icon: faGraduationCap,
      description:
        "Explore my university projects I have done during my university year for exams, initiatives and thesis. ",
      projects: [
        {id: 0, title: "", description: "", skills: []}
      ]
    },
    {
        id: 1,
        title: "Work",
        icon: faGear,
        description:
          "Explore the projects I have worked on during my years of work. ",
        projects: [
          {id: 0, title: "", description: "", skills: []}
        ]
      },
      {
        id: 2,
        title: "Scholarships",
        icon: faStamp,
        description:
          "Explore the projects I have worked on as scholarship holder. ",
        projects: [
          {id: 0, title: "", description: "", skills: []}
        ]
      },
      {
        id: 3,
        title: "Freetime",
        icon: faDesktop,
        description:
          "Explore the projects I have worked on in my freetime. ",
        projects: [
          {id: 0, title: "", description: "", skills: []}
        ]
      },
  ];

   const [projectField, setProjectField] = useState(projectFields.find((field) => field?.id == id));

  const projectFieldDescriptionSection = (
    <>
      <div className="flex items-center gap-3">
        {projectField?.icon && <FontAwesomeIcon icon={projectField?.icon} color="#8C52FF" size="xl" />}
        <span className="text-[#8C52FF] text-2xl">{projectField?.title}</span>
      </div>
      <hr className="border-[1px] border-[#8C52FF]" />

      <span className="text-white text-lg">
        { projectField?.description }
      </span>
    </>
  );

  const projectFielsSection = (
    <>{projectField?.projects?.map((project) => <Card label={project?.title} />)}</>
  );

  return (
    <div className="p-10 sm:p-0">
      <Sidebar activeTab={5} isNotHome />

      <div className="w-full flex flex-col justify-center sm:pl-[15em] sm:pr-[10em] pt-[2em] sm:pt-[5em] pb-[5em] gap-5">
        {projectFieldDescriptionSection}

        <div className="w-full py-[3em] flex flex-col sm:flex-row gap-5">{projectFielsSection}</div>
      </div>
    </div>
  );
}
