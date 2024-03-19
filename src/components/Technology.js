import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faChartBar, faRobot, faTools, faDatabase } from '@fortawesome/free-solid-svg-icons';
import '../styles/Homepage.css';
const technologies = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Our team excels in building end-to-end solutions, from front-end interfaces to back-end systems, ensuring seamless integration and optimal performance.",
    icon: faCode
  },
  {
    id: 2,
    title: "Mobile Application Development",
    description: "We specialize in creating mobile apps for both iOS and Android platforms, leveraging the latest technologies to deliver engaging and intuitive user experiences.",
    icon: faMobileAlt
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Unlock insights from your data with our advanced analytics solutions. From data collection to visualization, we help you make informed decisions and drive business growth.",
    icon: faChartBar
  },
  {
    id: 4,
    title: "Automation Testing",
    description: "Streamline your testing processes and ensure the quality of your software with our automation testing services. We employ robust frameworks to maximize efficiency and accuracy.",
    icon: faRobot
  },
  {
    id: 5,
    title: "Database Management",
    description: "Managing and optimizing databases to store, retrieve, and analyze data efficiently, ensuring data integrity and security.",
    icon: faDatabase
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Providing expert advice and solutions to enhance your IT infrastructure, optimize processes, and achieve business objectives.",
    icon: faTools
  }
];

const Technology = () => {
  return (
    <section className='technology-section'>
      <div><h2 style={{textAlign:"center",color:"#0c83c8"}}>Tech Training we provide</h2>

<div className="technology-container">
  {technologies.map(tech => (
    <div key={tech.id} style={{backgroundColor:"#fc7a46",color:"white"}} className="technology-card">
      <div className="technology-icon">
        <FontAwesomeIcon icon={tech.icon} />
      </div>
      <h2 className="technology-title">{tech.title}</h2>
      <p className="technology-description">{tech.description}</p>
    </div>
  ))}
</div>    </div>
    </section>
  );
};

export default Technology;
