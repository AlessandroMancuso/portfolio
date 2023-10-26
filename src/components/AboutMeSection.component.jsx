import React from "react";

// ICONS
import { faUser } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import Section from "./Section.component";

export default function AboutMeSection() {

  const info = {title: "About Me", icon: faUser, description: "As an ICT and software developer specialised in web development, I have solid experience in creating websites, single page applications and engaging user interfaces. My passion for UX/UI design combines with my technical skills to provide great solutions to the clients. I have worked with a variety of technologies with a particular expertise in JavaScript and I am constantly updated on the latest trends in the industry."}

  return (
    <Section title={info.title} icon={info.icon} description={info.description} />
  );
}
