import NavBar from "../../components/NavBar/NavBar";
import VerticalTimeline from "../../components/VerticalTimeline/VerticalTimeline";
import VerticalTimelineComponent from "../../components/VerticalTimeline/VerticalTimeline";

export default function AboutMe(){

    return (
        <div>
            <NavBar active="AboutMe" />

            <div style={{ width: '100%', backgroundColor: '#0e0f11', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                <h1 className="text-light text-center p-5">About Me</h1>

            </div>
        </div>
    )
}