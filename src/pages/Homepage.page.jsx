import React from "react";
import Sidebar from "../components/Sidebar.component";
import Presentation from "../components/Presentation.component";
import HomeButton from "../components/HomeButton.component";
import AboutMeSection from "../components/AboutMeSection.component";
import EdAndWorkSection from "../components/EdAndWorkSection.component";
import SkillsSection from "../components/SkillsSection.component";
import ProjectsSection from "../components/Projects.component";
import ContactsSection from "../components/ContactsSection.component";

export default function Homepage(props) {

  return (
    <div className="absolute w-full h-full">
      <Sidebar />

      <Presentation />

      <AboutMeSection />

      <EdAndWorkSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactsSection />

      <HomeButton />
    </div>
  );
}
