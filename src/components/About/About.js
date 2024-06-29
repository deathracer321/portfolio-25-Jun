import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

const summaryStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
  color: "#333",
};

const titleStyle = {
  color: "#2c3e50",
  fontSize: "24px",
  borderBottom: "2px solid #2c3e50",
  paddingBottom: "5px",
  marginBottom: "10px",
};

const paragraphStyle = {
  marginBottom: "15px",
};

const highlightStyle = {
  color: "#2980b9",
  fontWeight: "bold",
};

const PortfolioSummary = () => {
  return (
    <div style={summaryStyle}>
      <div>
        <h2 style={titleStyle}>Professional Summary</h2>
        <p style={paragraphStyle}>
          I am a dedicated{" "}
          <span style={highlightStyle}>Full Stack R&D Developer</span> with over
          5 years of experience, known for leading high-performing teams and
          delivering excellence in web development. With a keen focus on
          customer satisfaction and team development, I have a strong track
          record of building and maintaining long-term client relationships. My
          expertise spans across a diverse set of technologies including React,
          Node.js, Firebase, and more. I thrive in environments that value hard
          work, dedication, and innovation.
        </p>
      </div>

      <div>
        <h2 style={titleStyle}>Skills and Expertise</h2>
        <p style={paragraphStyle}>
          I excel in a wide range of technical skills, with primary expertise in{" "}
          <span style={highlightStyle}>React</span> and{" "}
          <span style={highlightStyle}>R&D</span>. I am proficient in frontend
          technologies like CSS, Redux, and JavaScript, as well as backend
          development with Node.js and Express JS. I have experience in
          utilizing Firebase for hosting, FirestoreDB, RTDB, and authentication.
          My technical arsenal also includes tools like Git (GitHub), VS Code,
          Figma, and Docker, among others. Additionally, I am adept at using
          various APIs, including the OpenAI API for integrating AI capabilities
          into projects.
        </p>
      </div>

      <div>
        <h2 style={titleStyle}>Professional Experience</h2>
        <p style={paragraphStyle}>
          I have worked with prominent companies such as{" "}
          <span style={highlightStyle}>HCL Technologies</span> and{" "}
          <span style={highlightStyle}>Photon Infotech</span>. At HCL
          Technologies, I specialized in frontend development for the largest
          banking client in the US, engaging in market product analysis and
          React development. My role involved designing backend server code
          using Node.js and implementing REST APIs. At Photon Infotech, I
          focused on frontend development for TonikBank India and Samsung
          Electronics, building responsive applications, integrating APIs, and
          ensuring robust security measures.
        </p>
      </div>

      <div>
        <h2 style={titleStyle}>Education and Certifications</h2>
        <p style={paragraphStyle}>
          I hold a{" "}
          <span style={highlightStyle}>Bachelor of Science in Computing</span>{" "}
          from BITS Pilani and a{" "}
          <span style={highlightStyle}>Diploma in Computer Science</span> from
          SSN University. I am currently pursuing a{" "}
          <span style={highlightStyle}>Master of Computer Applications</span>{" "}
          from SRM University. I have earned certifications in React, HTML and
          CSS for modern web development, Responsive Web Design, and CompTIA IT
          Fundamentals from various prestigious platforms like Udemy and Free
          Code Camp.
        </p>
      </div>

      <div>
        <h2 style={titleStyle}>Personal Interests</h2>
        <p style={paragraphStyle}>
          My professional interests revolve around the convergence of
          electronics and software, with a particular focus on cutting-edge
          technologies such as drone development, DIY projects, and
          Arduino-based initiatives. I am deeply passionate about leveraging
          flight controllers, innovative gadgets, and exploring emerging
          technologies to create impactful solutions. The pursuit of
          technological innovation not only drives my professional endeavors but
          also serves as a constant source of motivation, providing me with a
          profound sense of fulfillment and satisfaction.
        </p>
      </div>
    </div>
  );
};

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Harish S</strong>. I'm from India for
              the past twenty five years. During my time here, I gained valuable
              experience through various advanced-level positions, which greatly
              enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              <PortfolioSummary />
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            <br />
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
