import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const decorativeDots = [
  { left: "left-[825px]", bottom: "bottom-[188px]" },
  { left: "left-[1251px]", bottom: "bottom-[145px]" },
  { left: "left-[543px]", bottom: "bottom-[113px]" },
  { left: "left-[752px]", bottom: "bottom-[649px]" },
  { left: "left-[136px]", bottom: "bottom-[592px]" },
  { left: "left-[407px]", bottom: "bottom-[631px]" },
  { left: "left-[1093px]", bottom: "bottom-[441px]" },
  { left: "left-[1273px]", bottom: "bottom-[761px]" },
  { left: "left-[1098px]", bottom: "bottom-[118px]" },
  { left: "left-[1037px]", bottom: "bottom-[665px]" },
  { left: "left-[613px]", bottom: "bottom-[231px]" },
  { left: "left-[1415px]", bottom: "bottom-[582px]" },
  { left: "left-[1215px]", bottom: "bottom-[563px]" },
  { left: "left-[1036px]", bottom: "bottom-[33px]" },
  { left: "left-[41px]", bottom: "bottom-[467px]" },
  { left: "left-[250px]", bottom: "bottom-[246px]" },
  { left: "left-[254px]", bottom: "bottom-[41px]" },
  { left: "left-[508px]", bottom: "bottom-[635px]" },
  { left: "left-[644px]", bottom: "bottom-[666px]" },
  { left: "left-[378px]", bottom: "bottom-[747px]" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  // { label: "Events", href: "/events" }, // Hidden for now
  { label: "About", href: "/about" },
];

const teamMembers = [
  {
    name: "Tony",
    role: "President",
    major: "Business Economics",
    year: "4th Year",
    description: "Leading I-PSI's vision and driving a culture of execution, growth, and community.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053186263-0.jpeg",
  },
  {
    name: "Syed",
    role: "Internal Vice President",
    major: "Mathematics of Computation",
    year: "3rd Year",
    description: "Running operations, strengthening member experience, and scaling I-PSI systems across UCLA.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053186271-1.jpeg",
  },
  {
    name: "Jay",
    role: "Secretary",
    major: "Computer Science",
    year: "3rd Year",
    description: "Managing communications and ensuring organizational efficiency.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053500004-0.png",
  },
  {
    name: "Rylee",
    role: "Treasurer",
    major: "Business Economics",
    year: "3rd Year",
    description: "Overseeing finances and resource allocation for I-PSI initiatives.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053186293-2.png",
  },
  // {
  //   name: "Max",
  //   role: "Head of Engineering",
  //   major: "Computer Science",
  //   year: "4th Year",
  //   description: "Leading technical projects and building I-PSI's engineering culture.",
  //   image: undefined,
  // },
  {
    name: "Tazu",
    role: "Head of Media",
    major: "Design | Media Arts",
    year: "2nd Year",
    description: "Crafting I-PSI's visual identity and leading marketing initiatives.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053500046-2.png",
  },
  {
    name: "Teddy",
    role: "Head of Outreach",
    major: "Business Econ",
    year: "3rd Year",
    description: "Expanding I-PSI's outreach and building new connections across campus communities.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769053500021-1.png",
  },
  {
    name: "Maryam",
    role: "HR",
    major: "Business Econ",
    year: "4th Year",
    description: "Supporting member growth, onboarding, and building a strong internal culture.",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769054960382-1.jpeg",
  },
];

const advisorsAlumni = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Faculty Advisor",
    title: "Professor, Anderson School",
    description: "Guiding I-PSI with decades of entrepreneurship experience.",
  },
  {
    name: "Michael Chang",
    role: "Alumni Advisor",
    title: "Founder @ TechVentures",
    description: "Supporting the next generation of UCLA founders.",
  },
  {
    name: "Jessica Park",
    role: "Alumni Advisor",
    title: "Partner @ Sequoia Capital",
    description: "Connecting students with top-tier venture capital networks.",
  },
  {
    name: "Robert Martinez",
    role: "Alumni Advisor",
    title: "CEO @ InnovateLabs",
    description: "Sharing insights from building successful startups.",
  },
  {
    name: "Nina Gupta",
    role: "Alumni Advisor",
    title: "VP Product @ Meta",
    description: "Mentoring on product development and scaling strategies.",
  },
  {
    name: "Daniel Foster",
    role: "Alumni Advisor",
    title: "Founder @ GrowthHub",
    description: "Advising on growth strategies and market expansion.",
  },
];

export const TeamPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full items-start relative bg-[#01001a]">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-[#01001a] overflow-hidden">
        <div className="absolute top-[calc(50.00%_-_250px)] left-[calc(50.00%_-_720px)] w-[1440px] h-[500px]">
          {decorativeDots.map((dot, index) => (
            <div
              key={`dot-${index}`}
              className={`absolute ${dot.left} ${dot.bottom} w-2 h-2 bg-[#ffffff40] border border-solid border-[#2841ff80] opacity-25`}
            />
          ))}
        </div>

        <nav className="flex w-[1440px] items-center justify-between px-[100px] py-6 absolute top-0 left-[calc(50.00%_-_720px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <img
            className="relative w-[85px] h-8"
            alt="Logo"
            src="https://c.animaapp.com/mkas4pjnjyv6ek/img/logo.svg"
          />

          <ul className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            {navLinks.map((link, index) => (
              <li key={`nav-${index}`}>
                <a
                  href={link.href}
                  className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button className="inline-flex items-center justify-center gap-1 px-6 py-3 relative flex-[0_0_auto] bg-white rounded-[999px] h-auto hover:bg-white/90 transition-colors" asChild>
            <a href="https://docs.google.com/forms/d/1ZoHpVWovFIXIbL4HtS1m4lpJRxy9O-uHnbn5zBFFaB4/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
                Join Us
              </span>
            </a>
          </Button>
        </nav>

        <div className="flex flex-col w-[820px] items-center justify-center gap-8 absolute top-[calc(50.00%_-_80px)] left-[calc(50.00%_-_410px)]">
          <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative flex-[0_0_auto] border border-solid border-[#2841ff] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              MEET THE TEAM
            </div>

            <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          </div>

          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[48px] text-center tracking-[0] leading-[67.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            A diverse group of UCLA students
            <br />
            shaping the next wave of founders.
          </h1>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="relative flex flex-col border-[#2841ff] bg-[#0a0820] rounded-none translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden"
                style={
                  {
                    "--animation-delay": `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col p-0">
                  <div className="relative w-full h-[280px] bg-gradient-to-b from-[#2841ff40] to-[#0a0820] overflow-hidden">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[28px]">
                        {member.name}
                      </h3>
                      <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2841ff] text-sm tracking-[0] leading-[19.6px]">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {member.major}
                      </span>
                      <span>•</span>
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica]">
                        {member.year}
                      </span>
                    </div>

                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-[22.4px]">
                      {member.description}
                    </p>
                  </div>
                </CardContent>

                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Alumni Section - COMMENTED OUT FOR NOW */}
      {/* <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative border border-solid border-[#2841ff]">
              <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                ADVISORS & ALUMNI
              </div>

              <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            </div>

            <p className="max-w-[820px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8">
              Learn from experienced mentors who've built successful companies and careers in tech, venture capital, and entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisorsAlumni.map((advisor, index) => (
              <Card
                key={index}
                className="relative flex flex-col border-[#2841ff] bg-[#0a0820] rounded-none translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden"
                style={
                  {
                    "--animation-delay": `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col p-0">
                  <div className="relative w-full h-[280px] bg-gradient-to-b from-[#2841ff20] to-[#0a0820]" />

                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[28px]">
                        {advisor.name}
                      </h3>
                      <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2841ff] text-sm tracking-[0] leading-[19.6px]">
                        {advisor.role}
                      </p>
                    </div>

                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white/60 text-xs tracking-[0] leading-[16.8px]">
                      {advisor.title}
                    </p>

                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-[22.4px]">
                      {advisor.description}
                    </p>
                  </div>
                </CardContent>

                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="relative w-full border border-solid border-[#2841ff]">
            <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(20,18,68,1)_0%,rgba(11,9,43,1)_100%)]">
              <div className="relative flex flex-col items-center justify-center gap-10 py-24 px-4">
                <h2 className="max-w-[993px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
                  Join a network where innovation isn't optional.
                  <br />
                  It's the standard.
                </h2>

                <Button className="h-auto px-6 py-3 bg-white text-black hover:bg-white/90 rounded-[999px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base tracking-[0] leading-[normal] transition-transform" asChild>
                  <a href="https://docs.google.com/forms/d/1ZoHpVWovFIXIbL4HtS1m4lpJRxy9O-uHnbn5zBFFaB4/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-1 -right-0.5 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-1 -bottom-0.5 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
          </div>
        </div>
      </section>
    </main>
  );
};
