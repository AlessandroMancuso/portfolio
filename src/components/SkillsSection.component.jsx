import React from "react";

import { useNavigate } from "react-router-dom";

// COMPONENTS
import Section from "./Section.component";
import Card from "./Card.component";

// ICONS
import { faGear, faCode, faPencil, faBrain, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function SkillsSection() {

  const info = {title: "My Skills", icon: faGear, description: "Learn about my skills and knowledge that I have developed through years of study and work. I always do my best to combine my passions for programming and UX/UI Design and to constantly keep myself updated in these areas to grow professionally."}

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <Section title={info.title} icon={info.icon} description={info.description}>
      <div className="flex flex-wrap gap-3 justify-around">
        <Card icon={faCode} label="Coding" onClick={() => handleClick('/skill/0')} />
        <Card icon={faPencil} label="Design" onClick={() => handleClick('/skill/1')}  />
        <Card icon={faBrain} label="Problem Solving" onClick={() => handleClick('/skill/2')}  />
        <Card icon={faUsers} label="Teamwork & Communication" onClick={() => handleClick('/skill/3')}  />
      </div>
    </Section>
  );
}
