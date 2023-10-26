import NavBar from "../../components/NavBar/NavBar";
import VerticalTimelineComponent from "../../components/VerticalTimeline/VerticalTimeline";

export default function EdJobs(){

    return (
        <div>
            <NavBar active="EdJobs" />

            <div style={{ width: '100%', backgroundColor: '#0e0f11', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                <h1 className="text-light text-center p-5">Education & Jobs</h1>

                <VerticalTimelineComponent />
            </div>

        </div>
    )
}