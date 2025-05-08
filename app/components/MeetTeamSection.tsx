import React from "react";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  twitterUrl?: string;
  linkedinUrl?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "David Dobryk",
    title: "Founder & CEO",
    image: "/images/team/team1.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Milena Graz",
    title: "Founder & CEO",
    image: "/images/team/team2.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mike Nelson",
    title: "Head of Technology",
    image: "/images/team/team3.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const MeetTeamSection: React.FC = () => {
  return (
    <section className="bg-gray-950 pb-56 pt-32">
      <div className="container mx-auto px-4">
        <p className="uppercase text-sweetBlue-400 tracking-widest text-xs mb-4">
          diverse and world-class
        </p>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-20">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">
            Meet our team
          </h1>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.27232 5.86195L9.50687 6.42602L10.1158 6.47481L13.4188 6.73946L10.9024 8.89524L10.4387 9.29254L10.5803 9.88656L11.3486 13.1096L8.52091 11.3826L7.99968 11.0642L7.47844 11.3826L4.65075 13.1096L5.41909 9.88656L5.56069 9.29254L5.09694 8.89524L2.58054 6.73946L5.88355 6.47481L6.49248 6.42602L6.72703 5.86195L7.99968 2.80137L9.27232 5.86195Z"
                  fill="#6691FF"
                  stroke="#6691FF"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-blue-500 font-semibold">We are hiring!</p>
            </div>
            <a
              className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
              href="#"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
              <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                <p className="mr-2 text-blue-900">Careers</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.43032 8.28857L9.42602 8.29284L6.45312 11.2657V8.20662V4.7275L8.11268 6.38706L9.42602 7.70039C9.59121 7.86558 9.58501 8.13574 9.43032 8.28857Z"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full lg:w-1/3 p-4">
              <div className="relative bg-blue-500 rounded-2xl pt-7 mb-12 lg:mb-0">
                <img
                  className="mx-auto h-72 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute -bottom-12 left-4 right-4">
                  <div className="bg-blue-950 rounded-xl p-4">
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
