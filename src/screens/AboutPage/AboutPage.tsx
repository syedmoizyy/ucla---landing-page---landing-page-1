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

const benefits = [
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-22.svg",
    title: "Launch Ventures While You Learn",
    description: "Network directly and authentically with the power of quality, metrics, and meaningful connections.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-27.svg",
    title: "Access UCLA & VC Networks",
    description: "Connect with founders, alumni, and top investors from firms like YC, a16z, and more.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-27-1.svg",
    title: "Social + Professional Balance",
    description: "Balance school, social life, and professional development in a supportive environment that values all three.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-28.svg",
    title: "Mentorship & Big-Little Program",
    description: "Learn directly from experienced members through 1-on-1 guidance and lifelong connections.",
  },
];

const values = [
  {
    icon: "🚀",
    title: "Innovation",
    description: "We push boundaries and embrace new ideas.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "We build together, not alone.",
  },
  {
    icon: "⚡",
    title: "Execution",
    description: "We turn ideas into reality.",
  },
  {
    icon: "👥",
    title: "Community",
    description: "We support each other's growth.",
  },
  {
    icon: "📈",
    title: "Growth",
    description: "We constantly learn and improve.",
  },
];

export const AboutPage = (): JSX.Element => {
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
              ABOUT I-PSI
            </div>

            <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          </div>

          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[48px] text-center tracking-[0] leading-[67.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            We are more than a fraternity
          </h1>

          <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            We are a startup incubation community and so much more.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="inline-flex items-center justify-start gap-1 pt-1.5 pb-2 px-3 w-fit border border-solid border-[#2841ff]">
                <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                  OUR STORY
                </div>

                <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              </div>

              <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[56px]">
                We were founded at
                <br />
                UCLA in 2025
              </h2>

              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px]">
                Iota Psi Omega (I-PSI) was created to support an emerging era of student entrepreneurs at UCLA. Our goal is to provide both the social support of a fraternity and the professional rigor of a startup incubator.
              </p>
            </div>

            <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="relative w-full h-[400px] border border-solid border-[#2841ff] overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt="I-PSI Team"
                  src="https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1769054033759-0.jpeg"
                />

                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative border border-solid border-[#2841ff]">
              <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                MISSION
              </div>

              <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            </div>

            <h2 className="max-w-[820px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
              Building the Next Wave of Founders
            </h2>

            <p className="max-w-[820px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8">
              Empowering UCLA students to turn their bold ideas into prosperous ventures that shape the future, here in LA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center justify-center gap-4 p-8 border-[#2841ff] bg-transparent rounded-none translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${400 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col items-center gap-4 p-0 w-full">
                  <img
                    className="flex-shrink-0"
                    alt={benefit.title}
                    src={benefit.icon}
                  />

                  <div className="flex flex-col items-start gap-3 w-full">
                    <h3 className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-[38.4px]">
                      {benefit.title}
                    </h3>

                    <p className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[25.6px]">
                      {benefit.description}
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

      {/* Values Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative border border-solid border-[#2841ff]">
              <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                OUR VALUES
              </div>

              <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            </div>

            <h2 className="max-w-[820px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
              A culture built like a startup.
            </h2>

            <p className="max-w-[820px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8">
              I-PSI is a professional community for builders. We value initiative, consistency, and high standards. We believe in ownership over titles, learning by doing, and helping each other win through honest feedback and real support. The expectation is simple. Show up, contribute, and keep getting better.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-center w-16 h-16 text-4xl">
                  {value.icon}
                </div>

                <div className="flex flex-col items-center gap-2">
                  <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[25.2px]">
                    {value.title}
                  </h3>

                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white/80 text-sm text-center tracking-[0] leading-[19.6px]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="relative w-full border border-solid border-[#2841ff]">
            <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(20,18,68,1)_0%,rgba(11,9,43,1)_100%)]">
              <div className="relative flex flex-col items-center justify-center gap-10 py-24 px-4">
                <h2 className="max-w-[993px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
                  Why Join I-PSI? Because it's not just about learning
                  <br />
                  how to build, it's about building together.
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
