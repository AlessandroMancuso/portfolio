import NavBar from "../../components/NavBar/NavBar";
import Man from "../../man.jpg";
import BG from "../../assets/bg-img2.png";
import {FaDownload} from "react-icons/fa"

import {Button} from "react-bootstrap";

function HomePage(){

    return (
        <div>
            <NavBar active="Home" />
            <div style={{height: 610, width: '100%', backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundColor: '#0e0f11', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{height: 300, width: 300, borderRadius: 300, backgroundColor: '#ffffff', backgroundImage: `url(${Man})`, backgroundSize: 'cover', border: '2px solid #3c4249'}} />
                <div className="p-5">
                    <h2 className="mb-4" style={{color: '#3c4249'}}>Alessandro Mancuso</h2>
                    <h5 className="text-light">ICT, Software Developer, UX/UI Designer</h5>
                </div>
            </div>

            <div style={{height: 265, width: '100%', backgroundColor: '#202328', display: 'flex', justifyContent: 'center'}}>
                <div className="text-center w-80">
                    <div style={{width: 1000}}>
                        <h2 className="text-light mb-4">Welcome to my web portfolio!</h2>
                        <p className="text-light" style={{fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,.55)'}}>
                            I'm Alessandro Mancuso, I'm from 1999 and I live in Asti, Italy. I'm an ICT, Web & Software Developer and UX / UI Designer.
                            I graduated in IT in 2018 and graduated in ICT in 2020 from the University of Turin with a score of 107 / 110.
                            Do you want to know more about my professional profile? Download my CV Europass by clicking on the following button.
                        </p>

                        <Button variant="outline-light" style={{padding: 15,marginTop: 15}}>
                            <FaDownload />
                            <span style={{marginLeft: 15}}>My Europass CV </span>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;