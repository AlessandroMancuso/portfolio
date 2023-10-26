import NavBar from "../../components/NavBar/NavBar";
import SkillsBar from "../../components/SkillsBar/SkillsBar";
import {Col, Row} from "react-bootstrap";


export default function Skills(){

    const IT_SKILLS = [
        {type: "HTML5", level: 99},
        {type: "CSS3 & Bootstrap", level: 99},
        {type: "JavaScript", level: 85},
        {type: "React", level: 90},
        {type: "React Native", level: 80},
        {type: "Angular", level: 75},
        {type: "C++", level: 65},
        {type: "Java", level: 70},
        {type: "PHP", level: 75},
        {type: "SQL & DB ", level: 75}
    ];

    const UX_SKILLS = [
        {type: "UX/UI Design", level: 99},
        {type: "User Research", level: 98},
        {type: "Mockup and Prototype Design", level: 98},
        {type: "Photoshop & Illustrator", level: 87},
        {type: "Adobe XD", level: 92}
    ];

    const C_SKILLS = [
        {type: "Italian", level: 87},
        {type: "English", level: 99},
        {type: "Spanish", level: 98},
        {type: "Teamwork & Brainstorming", level: 92}
    ];

    return (
        <div>
            <NavBar active="Skills" />

            <div style={{height: 850, width: '100%', backgroundColor: '#0e0f11', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                <h1 className="text-light text-center p-5">My Skills</h1>

                <Row className="w-100">
                    <Col className="col-md-4">
                        <SkillsBar hue="80" saturation="80" skills={IT_SKILLS} title="Technical Skills"/>
                    </Col>
                    <Col className="col-md-4">
                        <SkillsBar hue="900" saturation="60" skills={UX_SKILLS} title="UX/UI & Design Skills" />
                    </Col>
                    <Col className="col-md-4">
                        <SkillsBar hue="600" saturation="50" skills={C_SKILLS} title="Communication Skills" />
                    </Col>
                </Row>


            </div>


        </div>
    )
}

