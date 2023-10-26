import React, { useState } from "react";

import Modal from "./Modal.component";

// ICONS
import {
  faBook,
  faGraduationCap,
  faCode,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "./Accordion.component";

export default function Timeline() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const events = [
    {
      id: 0,
      title: "IT Technician Stage",
      subtitle: "DaVite di Massimiliano Rasero, Asti",
      year: "07/2017",
      description:
        "During this school-to-work internship course, I performed tasks that included computer and IT equipment maintenance, repairs, customer support, maintenance for operating systems and computer networks, and the sale of IT equipment and related accessories.",
      skills: ["Hardware & Software", "Networks", "Help-desk"],
      icon: faComputer,
      type: "work",
    },
    {
      id: 1,
      title: "IT Diploma",
      subtitle: "I.T.I.S. A. Artom, Asti",
      year: "2013 - 2018",
      description: "IT Diploma with grade 89/100",
      skills: [
        "General Knowledge",
        "IT bases",
        "Programming bases",
        "HTML & CSS",
        "C++",
        "Java",
        "PHP",
        "DB & SQL bases",
        "English",
      ],
      icon: faBook,
      type: "ed",
    },
    {
      id: 2,
      title: "IT Technician",
      subtitle: "Conbipel S.P.A. Cocconato d'Asti",
      year: "06/2019 - 09/2019",
      description:
        "In this position, I was responsible for technical support for on-site and off-site users, including assisting Conbipel's offices in Cocconato d'Asti, maintaining the company's computer network and hardware, and offering remote technical assistance via phone and remote control.",
      skills: ["Hardware", "Operative systems", "Networks", "Help-desk"],
      icon: faComputer,
      type: "work",
    },
    {
      id: 3,
      title: "Junior Frontend Developer",
      subtitle: "Getapper, Turin",
      year: "2018",
      description:
        " Educational training and direct participation in front-end Web Applications development projects through occasional services in which I received education and hands-on experience in front-end web development",
      skills: ["Javascript", "React", "HTML & CSS", "Material UI", "GIT"],
      icon: faCode,
      type: "work",
    },
    {
      id: 4,
      title: "ICT Bachelor Degree",
      subtitle: "University of Turin",
      year: "2018 - 2022",
      description:
        "Bachelor's degree in social innovation, communication, new technologies (ICT) with grade 107/110",
      thesis:
        "Personalising user experience: design and prototyping of a mobile application for cinematic content recommendation",
      fields: [
        {
          title: "IT and Web",
          skills: [
            "HTML & CSS",
            "Java",
            "Javascript",
            "JS frameworks bases",
            "PHP",
            "CMS",
            "SEO",
          ],
        },
        {
          title: "Design",
          skills: [
            "UX/UI Design",
            "User Centered Design",
            "Mockup & Prototypes realisation",
            "Web Design & Graphic",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe XD",
          ],
        },
        {
          title: "Economy & Marketing",
          skills: [
            "Macroeconomy & Microeconomy bases",
            "Marketing",
            "Private and commercial law",
            "Sociology and social research",
          ],
        },
        { title: "Languages", skills: ["English", "Spanish (base)"] },
      ],
      icon: faGraduationCap,
      type: "ICT",
    },
    {
      id: 5,
      title: "Software Developer",
      subtitle: "Fragment S.R.L., Turin",
      year: "10/2021 - Current",
      description:
        "As a software developer, I develop Javascript code for the realisation of web applications using libraries such as React JS and Redux or Angular and write markup elements for the creation of user-friendly user interfaces using HTML5, CSS3, Bootstrap and other libraries. I am currently an external consultant at Fincons Group, my duties in this position involve the front-end development of web applications for public administration and the management of the flow of information between front-end and back-end. In addition to writing Javascript code (React and Redux or Angular JS), my duties include the realisation of user interfaces using markup languages and the management of relevant aspects in terms of usability and accessibility in the same portals.",
      skills: [
        "Javascript",
        "React",
        "Angular",
        "HTML & CSS",
        "Bootstrap",
        "Tailwind",
        "Redux",
        "Zustand",
        "GIT",
        "Teamwork",
        "Problem Solving",
      ],
      icon: faCode,
      type: "work",
    },
    {
      id: 5,
      title: "Web Developer & Designer",
      subtitle: "Scholarship, University of Turin",
      year: "04/2022 - Current",
      description:
        "Responsible for web design and development in 'Oltrevita - Afterlife' project following the awarding of the scholarship offered by the University of Turin, Department of Historical Studies by resolution of the Department Council of 28/03/2022. Announcement no. 2022/DSS/10/BS. My role within the project team was to conceive, design and develop with a full-stack and user-centred approach the 'Oltrevita - Afterlife' platform and take care of its graphic, functional and design aspects. My project will continue over time with the application of several QR codes inside the main museums of the city of Turin such as the Egyptian Museum, the Museum of Oriental Arts and the Royal Museums to allow visitors to access new narrative forms related to the works.",
      skills: [
        "UX/UI Design",
        "Javascript",
        "React",
        "HTML & CSS",
        "Tailwind",
        "Zustand",
        "PHP",
        "Database Managment",
        "Linux",
        "Teamwork",
        "Problem Solving",
      ],
      icon: faCode,
      type: "work",
    },
  ];

  const edDot = (data) => (
    <div className="flex flex-col items-center w-[11em]">
      <div
        className="w-[2em] h-[2em] bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-[#b898f6]"
        onClick={() => openModal(data)}
      >
        <FontAwesomeIcon icon={data.icon} color="#000" size="lg" />
      </div>
      <div className="flex flex-col items-center mt-[-8em]">
        {data.year && (
          <span className="text-white opacity-70 text-sm">{data.year}</span>
        )}
        {data.title && (
          <div className="text-center">
            <span className="text-[#b898f6] cursor-pointer hover:opacity-70 font-semibold">
              {data.title}
            </span>
          </div>
        )}
        {data.subtitle && (
          <div className="text-center">
            <span className="text-white text-sm">{data.subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );

  const workDot = (data) => (
    <div className="flex flex-col items-center w-[11em]">
      <div
        className="w-[2em] h-[2em] bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-[#b898f6]"
        onClick={() => openModal(data)}
      >
        <FontAwesomeIcon icon={data.icon} color="#000" size="lg" />
      </div>
      <div className="flex flex-col items-center mt-[1em]">
        {data.year && (
          <span className="text-white opacity-70 text-sm">{data.year}</span>
        )}
        {data.title && (
          <div className="text-center">
            <span
              className="text-[#b898f6] cursor-pointer hover:opacity-70 font-semibold"
              onClick={() => openModal(data)}
            >
              {data.title}
            </span>
          </div>
        )}
        {data.subtitle && (
          <div className="text-center">
            <span className="text-white text-sm">{data.subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );

  const modalContent = (data) => (
    <div className="flex flex-col mx-[3em] gap-2">
      <span className="text-white opacity-70 text-md">{data?.year}</span>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={data.icon} color="#fff" size="xl" />
        <span className="text-white text-2xl"> {data?.title} </span>
      </div>
      <span className="text-white opacity-70 text-lg">{data?.subtitle}</span>
      <hr className="my-5 " />

      <span className="text-white text-lg"> {data.description} </span>

      {data.type === "ICT" ? (
        <>
          <div className="flex flex-col my-3">
            <span className="text-[#b898f6] text-xl">Thesis</span>
            <span className="text-white text-lg italic"> {data.thesis} </span>
          </div>
          <div className="my-3">
            <span className="text-[#b898f6] text-xl">Skills</span>
            <div className="mt-2 flex flex-col gap-5">
              {data?.fields?.map((field) => (
                <>
                  <span className="text-[#b898f6] text-lg">{field.title}</span>

                  <div className="flex flex-wrap gap-3">
                    {field?.skills?.map((skill, i) => (
                      <>
                        <span className="text-white text-lg">{skill}</span>
                        {i !== field.skills.length - 1 && (
                          <span className="text-white text-lg">·</span>
                        )}
                      </>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-3">
            <span className="text-[#b898f6] text-xl">Skills</span>

            <div className="mt-2 flex flex-wrap gap-5">
              {data?.skills?.map((skill, i) => (
                <>
                  <span className="text-white text-lg">{skill}</span>
                  {i !== data.skills.length - 1 && (
                    <span className="text-white text-lg">·</span>
                  )}
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

  const desktopTimeline = (
    <div className="hidden sm:block mt-[10em] p-5">
      <div className="w-full border-2 border-white" />
      <div className="w-full flex justify-between mt-[-1.2em]">
        {events.map((event) =>
          event?.type === "ed" || event?.type === "ICT"
            ? edDot(event)
            : workDot(event)
        )}
      </div>

      {showModal && (
        <Modal onClose={closeModal}> {modalContent(modalData)} </Modal>
      )}
    </div>
  );

  const accordionContent = (event) => (
    <div className="flex flex-col py-2">
      <span className="text-white text-md">{event.description}</span>
      <div className="my-3">
        <span className="text-[#b898f6] text-lg">Skills</span>

        <div className="mt-2 flex flex-wrap gap-3">
          {event?.skills?.map((skill, i) => (
            <div className="bg-[#222] flex justify-center items-center px-4 py-2 rounded-lg">
              <span className="text-white text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const accordionContentICT = (event) => (
    <div className="flex flex-col py-2">
      <span className="text-white text-md">{event.description}</span>
      <div className="flex flex-col my-3">
        <span className="text-[#b898f6] text-lg">Thesis</span>
        <span className="text-white text-sm italic">{event.thesis}</span>
      </div>
      <div className="my-3">
        <span className="text-[#b898f6] text-lg">Skills</span>

        <div className="mt-2 flex flex-wrap gap-5">
          {event?.fields?.map((field) => (
            <div className="flex flex-col gap-2">
              <span className="text-[#b898f6] text-md">{field.title}</span>
              <div className="flex flex-wrap gap-3">
                {field.skills?.map((skill, i) => (
                  <div className="bg-[#222] flex justify-center items-center px-4 py-2 rounded-lg">
                    <span className="text-white text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const mobileTimeline = (
    <div className="flex sm:hidden flex-col gap-5">
      <div>
        <span className="text-2xl text-[#b898f6]">Ed</span>

        <div className="flex flex-col gap-2 mt-2">
          {events.map((event) =>
            event.type === "ed" ? (
              <Accordion
                icon={event.icon}
                preTitle={event.year}
                title={event.title}
                subTitle={event.subtitle}
              >
                {accordionContent(event)}
              </Accordion>
            ) : (
              event.type === "ICT" && (
                <Accordion
                  icon={event.icon}
                  preTitle={event.year}
                  title={event.title}
                  subTitle={event.subtitle}
                >
                  {accordionContentICT(event)}
                </Accordion>
              )
            )
          )}
        </div>
      </div>

      <div>
        <span className="text-2xl text-[#b898f6]">Work</span>

        <div className="flex flex-col gap-2 mt-2">
          {events.map(
            (event) =>
              event.type === "work" && (
                <Accordion
                  icon={event.icon}
                  preTitle={event.year}
                  title={event.title}
                  subTitle={event.subtitle}
                >
                  {accordionContent(event)}
                </Accordion>
              )
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopTimeline}
      {mobileTimeline}
    </>
  );
}
