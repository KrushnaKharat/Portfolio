import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartresi from "../../Assets/Projects/Smart resi.png"
import ais from "../../Assets/Projects/ais.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartresi}
              isBlog={false}
              title="Smart Residential Services"
              description="This is a full-stack web application for managing apartment service requests between residents and workers (e.g.
electricians, plumbers)."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://residential-services.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ais}
              isBlog={false}
              title="Course website"
              description="A site offering courses and internships in AI, ML, Data Science and related technologies. Implemented a dynamic quiz module within the learning platform, allowing students to take structured, topic-specic assessments after completing lessons. Integrated quiz access control, automatic scoring."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://appliedinsights.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
