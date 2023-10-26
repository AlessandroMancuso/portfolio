import React from "react";

// ICONS
import {
  faComputer,
  faFolder,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import Card from "./Card.component";

import oltrevitaImage from "../assets/images/projects/oltrevita.png";
import unitoLogo from "../assets/images/projects/logo-unito.png";

import { useNavigate } from "react-router-dom";

import Section from "./Section.component";

export default function ProjectsSection() {
  const info = {
    title: "My Projects",
    icon: faFolder,
    description:
      "Discover my projects that are the result of practice and experience in different contexts, subject areas and technologies. In this section you will find four cards based on the thematic areas in which I have challenged myself over the years.",
  };

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <Section title={info.title} icon={info.icon} description={info.description}>
      <div className="flex flex-wrap gap-3 justify-around">
        <Card
          image={unitoLogo}
          alt="University"
          label="University"
          classes="w-[9em] h-[9em]"
          onClick={() => handleClick('/projects/0')} 
        />
        <Card icon={faComputer} label="Work" onClick={() => handleClick('/projects/1')}  />
        <Card
          image={oltrevitaImage}
          alt="Scholarships"
          label="Scholarships"
          classes="w-[10em] h-[3em]"
          onClick={() => handleClick('/projects/2')} 
        />

        <Card icon={faPencil} label="Freetime" onClick={() => handleClick('/projects/3')} />
      </div>
    </Section>
  );
}
