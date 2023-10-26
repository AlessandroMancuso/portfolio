import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// ICONS
import {
  faEnvelope,
  faHouse,
  faUser,
  faGraduationCap,
  faGear,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "./MenuIcon.component";

// Functional Component
export default function Sidebar({ activeTab = null, isNotHome = false }) {
  const [activeSection, setActiveSection] = useState(activeTab ? activeTab : 1); // Initialize with the default section

  const navigate = useNavigate();

  const menuTabs = [
    { id: 1, label: "Home", icon: faHouse },
    { id: 2, label: "About Me", icon: faUser },
    { id: 3, label: "My Ed & Work", icon: faGraduationCap },
    { id: 4, label: "My Skills", icon: faGear },
    { id: 5, label: "My Projects", icon: faFolder },
    { id: 6, label: "Contacts", icon: faEnvelope },
  ];

  const scrollTo = (id) => {
    let destination;

    switch (id) {
      case 2:
        destination = 651;
        break;
      case 3:
        destination = 1001;
        break;
      case 4:
        destination = 1501;
        break;
      case 5:
        destination = 1701;
        break;
      case 6:
        destination = 2001;
        break;
      default:
        destination = 0;
        break;
    }
    window.scrollTo({
      top: destination,
      behavior: "smooth", // This adds a smooth scrolling effect
    });
  };

  useEffect(() => {
    if(!activeTab){
      const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY < 550) setActiveSection(1);
        if (scrollY > 650) setActiveSection(2);
        if (scrollY > 1000) setActiveSection(3);
        if (scrollY > 1500) setActiveSection(4);
        if (scrollY > 1700) setActiveSection(5);
        if (scrollY > 2000) setActiveSection(6);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    scrollTo(id);
    if (activeTab) {
      navigate("/");
    }
  };

  const isActiveTab = (id) => {
    return id === activeSection;
  };

  return (
    <div className="hidden sm:flex w-[10em] h-full fixed p-5 flex-col justify-around items-center">
      {menuTabs.map((tab) => (
        <MenuIcon
          id={tab.id}
          key={tab.id}
          icon={tab.icon}
          label={tab.label}
          active={isActiveTab(tab.id)}
          handleClick={handleMenuItemClick}
        />
      ))}
    </div>
  );
}
