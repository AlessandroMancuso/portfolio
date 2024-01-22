import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.component";
import Presentation from "../components/Presentation.component";
import HomeButton from "../components/HomeButton.component";
import AboutMeSection from "../components/AboutMeSection.component";
import EdAndWorkSection from "../components/EdAndWorkSection.component";
import SkillsSection from "../components/SkillsSection.component";
import ProjectsSection from "../components/ProjectsSection.component";
import ContactsSection from "../components/ContactsSection.component";
import Loader from "../components/Loader.component";

export default function Homepage(props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or images
    const fetchData = async () => {
      // Perform your data fetching or component loading logic here
      // For example, loading images with `img` elements
      // const image = new Image();
      // image.src = 'your-image-url';
      // await image.onload;

      // Simulate a loading delay of at least 3 seconds
      setTimeout(() => {
        // Set loading to false when done
        setIsLoading(false);
      }, 1000);

    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount


  const homepage = (
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
  )

  return (
    <>
      {homepage}
      {isLoading && <Loader />}
    </>
  );
}
