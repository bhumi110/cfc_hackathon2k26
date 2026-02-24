import React from "react";
import { membersData } from "../data/membersData";
import { HoverEffect, CardTitle } from "./ui/card-hover-effect";
import "../styles/members.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Members = () => {
  const formattedMembers = membersData.map((member) => ({
    title: member.name.toUpperCase(),
    link: member.socials.linkedin || "#",
    children: (
      <div className="flex flex-col items-center justify-center">
        <div className="member-avatar-container relative group/avatar mb-4">
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--st-red)] to-red-600 rounded-full blur-2xl opacity-40 group-hover/avatar:opacity-95 transition duration-500 pointer-events-none"></div>
          <img
            src={member.image}
            alt={member.name}
            className="relative rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-2 border-[var(--st-red)] z-10 transition-transform duration-500 group-hover/avatar:scale-105 shadow-[0_0_20px_rgba(228,0,0,0.4)]"
          />
        </div>

        <CardTitle className="mb-2">
          {member.name.toUpperCase()}
        </CardTitle>

        <div className="flex gap-6 mt-4 relative z-30">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[var(--st-red)] transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-none hover:drop-shadow-[0_0_4px_rgba(228,0,0,0.25)]"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[var(--st-red)] transition-all duration-300 transform hover:scale-110 hover:-rotate-1 shadow-none hover:drop-shadow-[0_0_4px_rgba(228,0,0,0.25)]"
            >
              <InstagramIcon fontSize="medium" />
            </a>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <section className="members-section" id="members">
      <div className="members-container">
        <h1 className="glow-text-members text-4xl md:text-6xl mb-4">
          MEET THE MINDS BEHIND THE <br /> UPSIDE DOWN
        </h1>

        <div className="mt-12">
          <h2 className="members-title text-3xl font-bold tracking-[0.2em] mb-2">CORE TEAM</h2>
          <p className="members-subtitle text-zinc-500 italic">
            The crew that keeps the lights on (and flickering).
          </p>
        </div>

        <HoverEffect items={formattedMembers} className="max-w-7xl mx-auto" />
      </div>
    </section>
  );
};

export default Members;
