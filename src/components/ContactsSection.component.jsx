import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section from "./Section.component";

// ICONS
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Functional Component
export default function ContactsSection() {
  const contacts = [
    { id: 0, contact: "+39 3485875329", icon: faPhone },
    { id: 1, contact: "alessandro.mancuso99@gmail.com", icon: faEnvelope },
    {
      id: 2,
      contact: "www.linkedin.com/in/alessandro-mancuso-5678681bb",
      icon: faLinkedin,
    },
  ];

  const contactSection = ({ icon, contact }) => (
    <div className="flex items-center gap-3 text-white hover:text-[#8C52FF] cursor-pointer">
      <FontAwesomeIcon icon={icon} size="xl" />
      <span className="text-md sm:text-lg">{contact}</span>
    </div>
  );

  const info = { title: "My Contacts", icon: faEnvelope, description: "" };

  return (
    <Section title={info.title} icon={info.icon} description={info.description}>
      <div className="flex flex-col gap-3">
        {contacts.map((contact) => contactSection(contact))}
      </div>
    </Section>
  );
}
