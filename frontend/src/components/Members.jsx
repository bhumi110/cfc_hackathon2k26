import React from "react";
import { membersData, mentors } from "../data/membersData";
import "../styles/members.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Members = () => {
  return (
    <section className="members-section" id="members">
      <div className="members-container fade-in-up">
        <h1 className="glow-text-members">
          MEET THE MINDS BEHIND THE <br /> UPSIDE DOWN
        </h1>
        <br />
        <h2 className="members-title ">CORE TEAM</h2>
        <p className="members-subtitle fade-in-up delay-1">
          The crew that keeps the lights on (and flickering).
        </p>

        <div className="members-grid fade-in-up delay-2">
          {membersData.map((member) => (
            <div className="member-card " key={member.id}>
              <div className="member-avatar">
                <img src={member.image} alt={member.name} />
              </div>

              <h3 className="member-name">{member.name.toUpperCase()}</h3>

              <div className="member-socials">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                )}

                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mentors-section">
          <h2 className="members-title mentors-heading">
            OUR MENTORS FROM THE REAL WORLD
          </h2>

          <p className="members-subtitle">
            Guiding us through the Upside Down of industry.
          </p>

          <div className="mentor-grid">
            {mentors.map((mentor) => (
              <div className="mentor-card" key={mentor.id}>
                <div className="mentor-avatar">
                  <img src={mentor.image} alt={mentor.name} />
                </div>

                <h3>{mentor.name.toUpperCase()}</h3>
                <h4>{mentor.role}</h4>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Members;