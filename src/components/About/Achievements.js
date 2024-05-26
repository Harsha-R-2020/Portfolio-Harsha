import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mcintern from "../../Assets/Pics/document_page.jpg";
import geons from "../../Assets/Pics/geonslogix2022_page.jpg";
import editor from "../../Assets/Pics/HARSHA R_page.jpg";
import gdsclead from "../../Assets/Pics/1687318354687.jpg";
import ideathon from "../../Assets/Pics/1665331170720.jpg";
import ML from "../../Assets/Pics/CourseraT2BEVHKK4CU6_page0001.jpg";

function Achievements() {
  return (
    <Container >
      <Particle />
      <Container>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdsclead}
              isBlog={false}
              title="GDSC Lead 2022-23"
            //   description="A simple mood bot named baymax developed using RASA framework through python"
            //   ghLink="https://github.com/Harsha-R-2020/Basic-Mood-Bot-using-RASA-Framework"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideathon}
              isBlog={false}
              title="Ideathon Winner"
            //   description="A Native Android Application to schedule doctor appointment, view available appointments and manage appointments.The Doctor user can manage booked appointments and send remainder for the appointments."
            //   ghLink="https://github.com/Harsha-R-2020/Doctor_Appointment_System"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kotlin App Development"
            //   description="Heart disease prediction with a given dataset using machine learning. The given dataset contains the information about Heart disease. The dataset contains 14 columns. The Goal is to predict where the patient is having heart disease or not.Using KNN algorithm achived an acccuracy about 97%"
            //   ghLink="https://github.com/Harsha-R-2020/Heart-Disease-Prediction-ML-Project"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mcintern}
              isBlog={false}
              title="Microsoft Virtual Internship"
            //   description="A Student Result Management System website for students and administrators(Teachers) to publish results, developed using HTML+CSS+Js+php and MS-SQL as a database."
            //   ghLink="https://github.com/Harsha-R-2020/Result-Management-System"
            //   // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Machine Learning"
            //   description="Using 'Machine Learning and Deep Learning' for the forecasting of TCS Stock price"
            //   ghLink="https://github.com/Harsha-R-2020/TCS-Stock-Price-Forecasting"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geons}
              isBlog={false}
              title="Geons Logix ML Internship"
            //   description="Prediction of startup price using machine learning with a given dataset. In the given dataset, R&D Spend, Administration Cost and Marketing Spend of 50 Companies are given along with the profit earned. The target is to prepare an ML model which can predict the profit value of a company if the value of its R&D Spend, Administration Cost and Marketing Spend are given."
            //   ghLink="https://github.com/Harsha-R-2020/Startup_Profit_Prediction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
