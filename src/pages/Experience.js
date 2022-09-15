import React from 'react'
import { 
  VerticalTimeline, 
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ambrose Alli University, Ekpoma Edo State Nigeria.
          </h3>
          <p> Bachelor of Science in Education B.Sc Ed Economics Education</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2017 - 2019"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             National Open University of Nigeria, Abuja Nigeria.
          </h3>
          <p> Masters in Educational Adiminstration and planing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="April 2016 - Dec 2021"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Service Officer - CapitalMagne Nigeria Ltd. Abuja Nigeria.
          </h3>
          <p> Customer Service Delivery for client </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="Feb 2022 - July 2022"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Front-End Developer - Processia Solution Ltd. Abuja Nigeria.
          </h3>
          <p> Developed and Modified software modules base on bussiness Requirement </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="Aug 2022 - Present"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Engineer - Decagon. Lagos Nigeria.
          </h3>
          <p> Curremtly undergoing MERN Stack Software Engineering Training </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;