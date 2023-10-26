import {useEffect, useState} from "react";
import "./style.scss"
import React from "react";

export default function SkillsBar(props){
    const [collapsed, setCollapsed] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setCollapsed(false)
        }, 2000);
    })

    const { hue, saturation, skills } = props;

    return(
        <div id="app" className={`containerSkillBars ${collapsed ? 'collapsed' : ''}`}>
            <h2 style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 25}}>{props.title}</h2>
            <hr/>
            <ul className="skills">
                {skills.map((skill, index) =>
                    <li
                        key={skill.type}
                        style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
                    >
                        <p>{skill.type}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}