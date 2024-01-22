import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar.component";
import Modal from "../components/Modal.component";
import Loader from "../components/Loader.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import oltrevitaImage from "../assets/images/projects/oltrevita.png";
import unitoLogo from "../assets/images/projects/logo-unito.png";

import { useParams } from "react-router-dom";

// ICONS
import {
  faDesktop,
  faGear,
  faGraduationCap,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../components/Card.component";

// Functional Component
export default function Project(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const params = useParams();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const openModal = (project) => {
    setModalData(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const id = params.id;

  const projectFields = [
    {
      id: 0,
      title: "University",
      icon: faGraduationCap,
      description:
        "Explore my university projects I have done during my university years for exams, initiatives and thesis. ",
      contexts: [
        {
          id: 0,
          title: "University exams",
          image: unitoLogo,
          projects: [
            {
              id: 0,
              title: "Web Graphic",
              description:
                "Design and realisation of the layout and graphic mockup of a landing page in dekstop and mobile format using graphic software such as Adobe Photoshop and Adobe XD.",
              link: "https://drive.google.com/drive/folders/1eirpczSdP2HCPsQ4zL8TP71a1NqKB-09?usp=drive_link",
              skills: [
                "Adobe Photoshop",
                "Adobe XD",
                "Prototyping",
                "Web Design",
                "Graphic Design",
                "Responsive Design",
              ],
            },
            {
              id: 1,
              title: "Java - Introduction to the Future Internet",
              description:
                "Programming through Java code for the realisation of a software to manage vending machines by implementing, through inheritance and overriding Java classes, different solutions for specific vending machine",
              skills: ["Java", "Object-oriented programming"],
            },
            {
              id: 3,
              title: "Web Design and Programming",
              description:
                "Design and creation of a database and realisation of a website using HTML5 and CSS3, Javascript, AJAX (JS + JSON / XML) and PHP that allows the user to retrieve and modify data in the database via SQL queries.",
              skills: [
                "HTML & CSS",
                "Javascript",
                "AJAX",
                "JSON & XML",
                "PHP",
                "SQL",
                "Creation and managment of database",
              ],
            },
            {
              id: 4,
              title: "Design of Web Applications",
              description:
                "Realisation of a website through the use of Bootstrap and use of the Angular Javascript library to manage certain dynamic aspects of the application.",
              skills: [
                "HTML & CSS",
                "Bootstrap",
                "Javascript",
                "Angular",
                "Teamwork",
              ],
            },
            {
              id: 5,
              title: "Interaction Design",
              description:
                "Conception and design of an innovative solution based on a technological tool to support the user in activities of daily living by playing the role of UX Researcher and undertaking the activities of problem analysis and requirements definition, user research, solution design and prototyping of a User Interface.",
              link: "https://drive.google.com/drive/folders/11bXSv6Olcow7p5H4LJB7T4URCAZfydVY?usp=drive_link",
                skills: [
                "UX/UI Design",
                "User research",
                "Brainstorming",
                "Teamwork",
                "Prototyping",
                "Mockups",
              ],
            },
          ],
        },
        {
          id: 1,
          title: "Bachelor Thesis",
          image: unitoLogo,
          projects: [
            {
              id: 0,
              title:
                "Personalising user experience: design and prototyping of a mobile application for cinemaic content recommendation",
              description: "",
              link: "https://drive.google.com/drive/folders/15glH0T4VukXyEtoGYSGNRB8pG_pvK7My?usp=drive_link",
              skills: [
                "UX/UI Design",
                "User Research",
                "React Native",
                "Redux",
                "Prototyping",
                "Mockups",
                "Mobile Design",
                "AJAX",
                "API Restful",
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Scholarships",
          image: oltrevitaImage,
          projects: [
            {
              id: 0,
              title: "Oltrevita - Afterlife",
              description:
                "Participation in the 'Oltrevita - Afterlife' project as the person in charge of the design and development of the information systems following the awarding of the scholarship offered by the University of Turin, Department of Historical Studies by resolution of the Department Council of 28/03/2022. Announcement no. 2022/DSS/10/BS. See 'Work' section.",
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
            },
          ],
        },
        {
          id: 3,
          title: "Initiatives",
          image: unitoLogo,
          projects: [
            {
              id: 5,
              title: "Innovative solutions in the COVID19 emergency situation",
              description:
                "Design and realisation of an innovative solution to help society in one of the aspects affected by the pandemic. The project for this workshop was realised in a team of three students, the technologies used were HTML, CSS, Bootstrap, PHP and MySQL.",
              skills: [
                "HTML & CSS",
                "Bootstrap",
                "SQL",
                "Web Design",
                "PHP",
                "Teamwork",
                "Brainstorming",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Work",
      icon: faGear,
      description:
        "Explore the projects I have worked on during my years of work. ",
      contexts: [
        {
          id: 0,
          title: "Fincons SPA",
          projects: [
            {
              id: 0,
              title: "AGID - Agenzia per l'Italia Digitale",
              description: "",
              skills: [
                "HTML & CSS",
                "Bootstrap",
                "Javascript",
                "React",
                "Redux",
                "Bootstrap",
                "Teamwork",
                "Meetings with customers",
              ],
            },
            {
              id: 1,
              title: "DCD - Difensore Civico Digitale",
              description: "",
              skills: [
                "HTML & CSS",
                "Bootstrap",
                "Javascript",
                "React",
                "Redux",
                "Bootstrap",
                "Teamwork",
                "Meetings with customers",
              ],
            },
            {
              id: 2,
              title: "Pharmaprime",
              description: "",
              skills: [
                "HTML & CSS",
                "Javascript",
                "React",
                "Tailwind",
                "Zuestand",
                "Teamwork",
              ],
            },
            {
              id: 3,
              title: "INPS - Iscrizioni Agricole",
              description: "",
              skills: [
                "HTML & CSS",
                "Javascript",
                "Angular",
                "Bootstrap",
                "Teamwork",
                "Meetings with customers",
              ],
            },
            {
              id: 4,
              title: "INPS - Compilazione Manuale",
              description: "",
              skills: [
                "HTML & CSS",
                "Javascript",
                "Angular",
                "Bootstrap",
                "Teamwork",
                "Meetings with customers",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Scholarships",
      icon: faStamp,
      description:
        "Explore the projects I have worked on as scholarship holder. ",
      contexts: [
        {
          id: 0,
          title: "Oltrevita - Afterlife",
          projects: [
            {
              id: 0,
              title: "Oltrevita - Afterlife",
              description:
                "Role in 'Oltrevita - Afterlife' project as the professional in charge of the design and development of the information systems following the awarding of the scholarship offered by the University of Turin, Department of Historical Studies by resolution of the Department Council of 28/03/2022. Announcement no. 2022/DSS/10/BS. My role within the project team was to conceive, design and develop with a full-stack and user-centred approach the 'Oltrevita - Afterlife' platform and take care of its graphic, functional and design aspects. My project will continue over time with the application of several QR codes inside the main museums of the city of Turin such as the Egyptian Museum, the Museum of Oriental Arts and the Royal Museums to allow visitors to access new narrative forms related to the works. Link to the platform below.",
              link: "https://www.oltrevita.unito.it/",
              skills: [
                "HTML & CSS",
                "Javascript",
                "React",
                "Tailwind",
                "Zuestand",
                "PHP",
                "API Restful",
                "SQL",
                "Deploy environment (configuration, maintenance & deploy)",
                "Linux",
                "Teamwork",
                "Brainstorming",
                "Collaborators & Associates meetings",
                "QR codes",
                "Web design",
                "Prototyping",
                "Responsive Design",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Freetime",
      icon: faDesktop,
      description: "Explore the projects I have worked on in my freetime. ",
      contexts: [
        {
          id: 0,
          title: "Comitato Palio Borgo Don Bosco (committee Don Bosco, Palio of Asti)",
          projects: [
            {
              id: 0,
              title: "Foulard 20th anniversary",
              description:
                "This is the foulard I have designed and created with graphic softwares for the 20th anniversary of the commitee",
              link: "https://drive.google.com/drive/folders/1Fwaa7vs6OMbIRJ0lJtQsIF_toxxRe2AV?usp=drive_link",
                skills: [
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Prototyping",
                "Mockups",
              ],
            },
          ],
        },
      ],
    },
  ];

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

  const [projectField, setProjectField] = useState(
    projectFields.find((field) => field?.id == id)
  );

  const projectFieldDescriptionSection = (
    <>
      <div className="flex items-center gap-3">
        {projectField?.icon && (
          <FontAwesomeIcon
            icon={projectField?.icon}
            color="#8C52FF"
            size="xl"
          />
        )}
        <span className="text-[#8C52FF] text-2xl">{projectField?.title}</span>
      </div>
      <hr className="border-[1px] border-[#8C52FF]" />

      <span className="text-white text-lg">{projectField?.description}</span>
    </>
  );

  const projectFielsSection = (
    <>
      {projectField?.contexts?.map((context) => (
        <>
          <span className="text-[#b898f6] text-xl">{context?.title}</span>
          <div className="flex flex-wrap gap-5">
            {context?.projects?.map((project) => (
              <Card
                size="lg"
                labelSm={project?.title}
                image={context?.image}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        </>
      ))}
    </>
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

      <span className="text-white text-lg"> {data?.description} </span>

      {data?.link && (
        <div className="flex flex-col my-3">
          <span className="text-[#b898f6] text-xl">Link</span>
          <a href={data?.link} target="_blank">
            <span className="text-white text-lg italic cursor-pointer hover:underline">
              {data?.link}
            </span>
          </a>
        </div>
      )}

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
    </div>
  );

  const content = (
    <div className="p-10 sm:p-0">
      <Sidebar activeTab={5} isNotHome />

      <div className="w-full flex flex-col justify-center sm:pl-[15em] sm:pr-[10em] pt-[2em] sm:pt-[5em] pb-[5em] gap-5">
        {projectFieldDescriptionSection}

        <div className="w-full py-[3em] flex flex-col gap-5">
          {projectFielsSection}
        </div>
      </div>

      {showModal && (
        <Modal onClose={closeModal}> {modalContent(modalData)} </Modal>
      )}
    </div>
  );

  return (
    <>
      {content}
      {isLoading && <Loader />}
    </>
  );
}
