import React, {useState} from "react";

// COMPONENTS
import Section from "./Section.component";
import Timeline from "../components/Timeline.component";

// ICONS
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal.component";

export default function EdAndWorkSection() {

  const info = {
    title: "My Ed & Work",
    icon: faGraduationCap,
    description:
      "Discover my journey in education and work within the dynamic ICT and software development field. This section provides insights into my academic and professional growth, achievements, and experiences that have shaped my career.",
  };

  return (
    <Section title={info.title} icon={info.icon} description={info.description}>
      <Timeline />
    </Section>
  );
}
