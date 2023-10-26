import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaWordpress, FaGraduationCap } from "react-icons/fa"
import {MdComputer} from "react-icons/md";
import {GiDiploma} from "react-icons/gi";

export default function VerticalTimelineComponent(){

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="10 / 2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdComputer />}
            >
                <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Fragment S.R.L. Turin, Italy</h4>
                <p>
                    Web Designer, Web developer, Javascript, React, Angular, React Native, HTML5, CSS3, Bootstrap
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - 2021"
                iconStyle={{ background: 'rgb(150,21,32)', color: '#fff' }}
                icon={<FaGraduationCap />}
            >
                <h3 className="vertical-timeline-element-title">ICT Graduation</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Turin</h4>
                <p>
                    Partecipation on React Web pages development with Tutor's help
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdComputer />}
            >
                <h3 className="vertical-timeline-element-title">Web Developer (Training)</h3>
                <h4 className="vertical-timeline-element-subtitle">Getapper, Turin</h4>
                <p>
                    Web developing training and tutored partecipation on React.js web development projects
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(41,150,24)', color: '#fff' }}
                icon={<GiDiploma />}
            >
                <h3 className="vertical-timeline-element-title">IT High School Diploma</h3>
                <h4 className="vertical-timeline-element-subtitle">I.T.I.S. A. Artom, Asti, Italy</h4>
                <p>
                    Information Technologies
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(41,150,24)', color: '#fff' }}
                icon={<FaWordpress />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaWordpress />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaWordpress />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaWordpress />}
            />
        </VerticalTimeline>
    )
}

