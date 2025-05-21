import React from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  twitterUrl?: string;
  linkedinUrl?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mosongo Maosa",
    title: "Team Lead",
    image: "/images/team/team1.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Victor Okinyi",
    title: "Senior Developer",
    image: "/images/team/team3.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Motanya Nyabanga",
    title: "Project Manager",
    image: "/images/team/team5.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  
];

const MeetTeamSection: React.FC = () => {
  return (
    <section className="bg-slate-950 pb-56 pt-32">
      <div className="container mx-auto px-4">
        <p className="uppercase text-slate-400 tracking-widest text-xs mb-4">
          diverse and world-class
        </p>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-20">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">
            Meet the team
          </h1>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-[#6691FF]" size={16} />
              <p className="text-slate-300 font-semibold">We are hiring!</p>
            </div>
            <a
              className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
              href="#"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
              <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                <p className="mr-2 text-slate-900">Careers</p>
                <BsArrowRight className="text-black" size={16} />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full lg:w-1/3 p-4">
              <div className="relative bg-neutral-700  pt-7 mb-12 lg:mb-0">
                <img
                  className="mx-auto h-72 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute -bottom-12 left-4 right-4">
                  <div className="bg-slate-900 rounded-xl p-4">
                    <p className="text-white text-lg font-semibold mb-1">
                      {member.name}
                    </p>
                    <div className="flex flex-wrap justify-between items-center gap-4">
                      <p className="text-white text-opacity-70 text-sm">
                        {member.title}
                      </p>
                      <div className="flex gap-4">
                        {member.twitterUrl && (
                          <a
                            className="inline-block opacity-50 hover:opacity-100 transition duration-200"
                            href={member.twitterUrl}
                          >
                            <img
                              className="h-4"
                              src="/images/logos/twitter-x-logo.svg"
                              alt="Twitter"
                            />
                          </a>
                        )}
                        {member.linkedinUrl && (
                          <a
                            className="inline-block opacity-50 hover:opacity-100 transition duration-200"
                            href={member.linkedinUrl}
                          >
                            <img
                              className="h-4"
                              src="/images/logos/linkedin-logo.svg"
                              alt="LinkedIn"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeamSection;
