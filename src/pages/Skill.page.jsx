import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";

// ICONS
import {
  faCheck,
  faCode,
  faQuestionCircle,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import reactIcon from "../assets/images/skills/react.png";
import js from "../assets/images/skills/js.png";
import ts from "../assets/images/skills/typescript.png";
import angular from "../assets/images/skills/angular.png";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import tailwind from "../assets/images/skills/tailwind.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import wordpress from "../assets/images/skills/wordpress.png";
import redux from "../assets/images/skills/redux.png";
import git from "../assets/images/skills/git.png";
import zuestand from "../assets/images/skills/zustand.png";
import java from "../assets/images/skills/java.png";
import php from "../assets/images/skills/php.png";
import python from "../assets/images/skills/python.png";
import mysql from "../assets/images/skills/mysql.png";
import c from "../assets/images/skills/c.png";
import photoshop from "../assets/images/skills/photoshop.png";
import illustrator from "../assets/images/skills/illustrator.png";
import adobeXD from "../assets/images/skills/adobeXD.png";
import figma from "../assets/images/skills/figma.png";
import canva from "../assets/images/skills/canva.png";

// Functional Component
export default function Skill(props) {
  const params = useParams();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });    
  }, []);

  const id = params.id;

  const skills = [
    {
      id: 0,
      title: "Coding",
      description:
        "Discover my coding skills in the world of software development. This section provides an in-depth look into my proficiency in various programming languages and technologies. It highlights my passion for developing beautiful, easy-to-use user interfaces and solving complex problems through coding, as well as my dedication to the ongoing journey of learning and growing in the ever-evolving coding landscape.",
      fields: [
        {
          id: 0,
          title: "Web Development",
          contexts: [
            {
              id: 0,
              title: "Basic tools",
              languages: [
                { id: 1, title: "HTML", image: html, level: "Excellent" },
                { id: 2, title: "CSS", image: css, level: "Excellent" },
                { id: 1, title: "GIT", image: git, level: "Good" },
              ],
            },
            {
              id: 1,
              title: "Javascript & Frameworks",
              languages: [
                { id: 0, title: "Javascript", image: js, level: "Excellent" },
                { id: 1, title: "Typescript", image: ts, level: "Very Good" },
                { id: 2, title: "Angular", image: angular, level: "Very Good" },
                { id: 3, title: "React", image: reactIcon, level: "Excellent" },
                { id: 4, title: "Redux", image: redux, level: "Good" },
                { id: 4, title: "Zuestand", image: zuestand, level: "Good" },
              ],
            },
            {
              id: 2,
              title: "CSS Frameworks",
              languages: [
                {
                  id: 0,
                  title: "Bootstrap",
                  image: bootstrap,
                  level: "Excellent",
                },
                {
                  id: 1,
                  title: "Tailwind",
                  image: tailwind,
                  level: "Excellent",
                },
              ],
            },
            {
              id: 3,
              title: "CMS",
              languages: [
                { id: 0, title: "Wordpress", image: wordpress, level: "Base" },
              ],
            },
          ],
        },
        {
          id: 1,
          title: "Other languages",
          contexts: [
            {
              id: 0,
              title: "Title",
              languages: [
                { id: 1, title: "Java", image: java, level: "Good" },
                { id: 2, title: "PHP", image: php, level: "Good" },
                { id: 3, title: "Python", image: python, level: "Good" },
                { id: 4, title: "C++", image: c, level: "Good" },
              ],
            },
            {
              id: 0,
              title: "Database Managment",
              languages: [
                { id: 1, title: "MySql", image: mysql, level: "Very Good" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Design",
      description: "Discover my passion for creating user-centered and visually appealing experiences. This section provides information about my skills and my methodical and creative approach to UI design and my commitment to creating functional and visually appealing designs.",
      fields: [
        {
          id: 0,
          title: "Design Methods",
          contexts: [
            {
              id: 0,
              title: "User Research tools, methodologies and approaches",
            },
            {
              id: 1,
              title: "User Experience & User Interface Design",
            },
            {
              id: 2,
              title: "Creation of prototypes and mockups of UI",
            },
            {
              id: 3,
              title: "Usability and accessibility knowledgies",
            },
          ],
        },
        {
          id: 1,
          title: "Graphic for Web Design",
          contexts: [
            {
              id: 0,
              title:
                "Creation of wireframes, mockups and prototypes. Design and retouching of web and mobile UI or advertising images and use of graphic tools",
              languages: [
                {
                  id: 1,
                  title: "Adobe Photoshop",
                  image: photoshop,
                  level: "Good",
                },
                { id: 2, title: "Adobe XD", image: adobeXD, level: "Good" },
                {
                  id: 3,
                  title: "Adobe Illustrator",
                  image: illustrator,
                  level: "Good",
                },
                { id: 4, title: "Figma", image: figma, level: "Good" },
                { id: 4, title: "Canva", image: canva, level: "Good" },
              ],
            },
          ],
        },
      ],
    },
    { id: 2, title: "Problem Solving", description: ""},
    {
      id: 3,
      title: " Teamwork & Communication",
      description: "",
      fields: [
        {
          id: 0,
          title: "Teamwork & Communication skills",
          contexts: [
            {
              id: 0,
              title: "Good at both team and independent activities",
            },
            {
              id: 1,
              title: "Great communication skills",
            },
            {
              id: 2,
              title: "Brainstorming",
            },
            {
              id: 3,
              title: "Able to work in Agile Envinronment",
            },
            {
              id: 4,
              title: "Proactive and motivated",
            },
          ],
        },
        {
          id: 0,
          title: "Language Knowledge",
          contexts: [
            {
              id: 0,
              title: "Italian (Mother Language)",
            },
            {
              id: 1,
              title: "English",
              fourCols: true,
              languages: [
                { id: 0, title: "Listening", level: "B2" },
                { id: 1, title: "Speaking", level: "B2" },
                { id: 2, title: "Reading", level: "C1" },
                { id: 3, title: "Writing", level: "C1" },
              ],
            },
            {
              id: 2,
              title: "Spanish",
              fourCols: true,
              languages: [
                { id: 0, title: "Listening", level: "B1" },
                { id: 1, title: "Speaking", level: "B1" },
                { id: 2, title: "Reading", level: "B1" },
                { id: 3, title: "Writing", level: "B1" },
              ],
            },
          ],
        },
      ],
    },
  ];

  const [skill, setSkill] = useState(skills.find((skill) => skill?.id == id));

  const getIcon = (level) => {
    switch (level) {
      case "Excellent":
        return faStar;
      case "Good":
        return faThumbsUp;
      case "Very Good":
        return faThumbsUp;
      case "Base":
        return faCheck;
      default:
        return null;
    }
  };

  const fieldSection = ({ title, contexts }) => (
    <div className="flex flex-col sm:flex-1 gap-2">
      <span className="text-[#8C52FF] text-xl">{title}</span>
      <hr className="border-[1px] border-[#8C52FF]" />

      <div className="flex flex-col gap-3 my-5">
        {contexts?.map((context) => contextSection(context))}
      </div>
    </div>
  );

  const contextSection = ({ title, languages, fourCols }) => (
    <div className="flex flex-1 flex-col">
      <span className="text-[#b898f6] text-lg">{title}</span>

      <div className="flex flex-wrap gap-5 my-5">
        {languages?.map((language) =>
          languageSection({ ...language, fourCols: fourCols ? fourCols : null })
        )}
      </div>
    </div>
  );

  const languageSection = ({ title, image, level, fourCols }) => (
    <div className={`flex ${fourCols ? "w-[8em]" : "w-[9em] sm:w-[12em]"} gap-3 my-2 `}>
      {image && <img src={image} className="w-[2.5em] h-[2.5em]" />}
      <div className="flex flex-col justify-center">
        <span className="text-[#b898f6] text-md">
          {title} <FontAwesomeIcon icon={getIcon(level)} size="xs" />
          {level === "Very Good" && (
            <FontAwesomeIcon icon={getIcon(level)} size="xs" className="ml-1" />
          )}
        </span>
        <span className="text-white opacity-70 text-md">{level}</span>
      </div>
    </div>
  );

  const skillDescriptionSection = (
    <>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faCode} color="#8C52FF" size="xl" />
        <span className="text-[#8C52FF] text-2xl">{skill?.title}</span>
      </div>
      <hr className="border-[1px] border-[#8C52FF]" />

      <span className="text-white text-lg">
        { skill.description }
      </span>
    </>
  );

  const skillFielsSection = (
    <>{skill?.fields?.map((field) => fieldSection(field))}</>
  );

  return (
    <div className="p-10 sm:p-0">
      <Sidebar activeTab={4} isNotHome />

      <div className="w-full flex flex-col justify-center sm:pl-[15em] sm:pr-[10em] pt-[2em] sm:pt-[5em] pb-[5em] gap-5">
        {skillDescriptionSection}

        <div className="w-full py-[3em] flex flex-col sm:flex-row gap-5">{skillFielsSection}</div>
      </div>
    </div>
  );
}
