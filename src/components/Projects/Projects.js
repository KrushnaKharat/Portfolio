import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ height: "99vh" }}>
        <h1 className="project-heading h-100">
          <strong className="purple">Curently Working on Project. </strong>
        </h1>
        <p style={{ color: "white" }}></p>
      </Container>
    </Container>
  );
}

export default Projects;
