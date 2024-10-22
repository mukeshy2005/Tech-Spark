import React from "react";
import "./CoreMembers.css"; // Import the CSS for styling

const teamMembers = [
  {
    name: "Rahul Chaudhary",
    role: "President",
    linkedin: "https://www.linkedin.com/in/rahul-chaudhary-b31b2a297/",
    github: "https://github.com/Rahulchaudharyji2",
  },
  {
    name: "Sarthak Sharma",
    role: " Vice President",
    linkedin: "https://www.linkedin.com/in/sarthak-sharma-3511731a7/",
    github: "https://github.com/Sarthak2568",
  },
  {
    name: "Yash Sagar",
    role: " Technical Head",
    linkedin: "https://www.linkedin.com/in/yash-sagar-7a56332b2/",
    github: "https://github.com/sagarji1",
  },
  {
    name: "Shivam Kumar ",
    role: "General secretary",
    linkedin: "https://www.linkedin.com/in/shivam-kumar-b83971292/",
    github: "https://github.com/Shivam-Developer01",
  },
  {
    name: "Mukesh Yadav",
    role: "Designing Head",
    linkedin: "https://www.linkedin.com/in/mukesh-yadav-b53a58242/",
    github: "https://github.com/Shivam-Developer01",
  },
  {
    name: "Manish",
    role: "Development Head",
    linkedin: "https://www.linkedin.com/in/manis-p?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/manisprasad",
  },
  {
    name: "Mohd Faizan",
    role: "DSA Head",
    linkedin: "https://www.linkedin.com/in/mohd-faizan-3837142b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/muhammadfaizan1641",
  },
  {
    name: "Yash Sehgal",
    role: "Management Head",
    linkedin: "https://www.linkedin.com/in/yash-sehgal-46b938210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/RahulChahar2004",
  },
  {
    name: "Rahul Chahar",
    role: "Coordinator",
    linkedin: "https://www.linkedin.com/in/rahul-chahar-b95a34321/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/RahulChahar2004",
  },
  {
    name: "Tanay",
    role: "Coordinator",
    linkedin: "https://www.linkedin.com/in/tanay-kumar-a581102b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "hhttps://github.com/acode-42",
  },
  {
    name: "Rajat",
    role: "Coordinator",
    linkedin: "https://in.linkedin.com/in/rajat-trehan-92a304332",
    github: "https://github.com/sai_kamal",
  },
  {
    name: "Rishab",
    role: "Coordinator",
    linkedin: "https://www.linkedin.com/in/rishabh-patel-9175a9315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Rishabh2005exe",
  },
  {
    name: "Sourav Thakur",
    role: "Coordinator",
    linkedin: "https://www.linkedin.com/in/sourav-thakur-a5a7a4283/",
    github: "https://github.com/sourav0190",
  },
  {
    name: "Kanhiya Kumar",
    role: "Coordinator",
    linkedin: "https://www.linkedin.com/in/kanhiya-kumar-ba6a46288/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/GitHubKanahiya",
  },
  {
    name: "Muhammad Suhail ",
    role: "Executive",
    linkedin: "https://www.linkedin.com/in/muhammad-suhail-1st-8aa331258/",
    github: "https://github.com/MSuhail7860",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-section">
      <h2 className="section-title">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card border-2 border-blue-400 shadow-md shadow-lg transition-shadow duration-300 glass" key={index}>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <div className="social-links">
              {member.linkedin !== "#" && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="social-icon"
                  />
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                    alt="GitHub"
                    className="social-icon"
                    style={{backgroundColor:"white", backgroundSize:"23px"}}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
