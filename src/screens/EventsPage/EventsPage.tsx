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

const upcomingEvents = [
  {
    title: "Valentines Fund Rager",
    date: "2/6/26",
    description: "",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/img-3209-1.png",
  },
];

const pastEvents = [
  {
    title: "IPO white lies",
    date: "11/22/25",
    description: "",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/img-3209-1.png",
  },
{
    title: "IPO Early Frights",
    date: "10/25/25",
    description: "",
    image: "https://c.animaapp.com/mkas4pjnjyv6ek/img/img-3209-1.png",
  },

];

export const EventsPage = (): JSX.Element => {
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
              EVENTS
            </div>

            <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          </div>

          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[48px] text-center tracking-[0] leading-[67.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            I-PSI Events → Where Social Meets
            <br />
            Startup Space
          </h1>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative border border-solid border-[#2841ff]">
              <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                UPCOMING EVENTS
              </div>

              <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            </div>

            <div className="flex flex-col items-start gap-4 w-full max-w-[820px]">
              <h2 className="font-semibold text-[40px] leading-[56px] w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
                The next room you walk into can change your path.
              </h2>

              <p className="font-normal text-xl leading-8 w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
                Our upcoming events are designed to connect ambitious UCLA students with founders, mentors, and peers who move fast and take ownership.
                <br />
                 Expect speaker sessions, practical build focused workshops, and recruitment events that are more about fit and mission than hype.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="relative w-full border border-solid border-[#2841ff] bg-transparent overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${index * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-0 relative h-[500px]">
                  <div className="relative w-full h-full bg-[#4f4f4f] overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      alt={event.title}
                      src={event.image}
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[381px] bg-[linear-gradient(0deg,rgba(1,0,27,0.75)_0%,rgba(1,0,27,0)_100%)]" />

                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 px-8 pb-8">
                      <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                        {event.title}
                      </h3>

                      <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px]">
                        {event.date}
                      </p>

                      <Button className="w-fit h-auto px-6 py-3 bg-white text-black hover:bg-white/90 rounded-[999px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-sm tracking-[0] leading-[normal]" asChild>
                        <a href="https://example.com/event-details">
                          Details
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="relative w-full bg-[#01001a] py-20">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative border border-solid border-[#2841ff]">
              <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                PAST EVENTS
              </div>

              <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
              <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            </div>

            <div className="flex flex-col items-start gap-4 w-full max-w-[820px]">
              <h2 className="font-semibold text-[40px] leading-[56px] w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
                Moments that created real momentum.
              </h2>

              <p className="font-normal text-xl leading-8 w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
                From Meet the Founders to rush events and community sessions, I PSI has built a track record of bringing together driven students who care about craft, leadership, and impact.
                <br />
                Past events have focused on building products, learning how startups operate, and forming relationships that last beyond a single quarter. We measure success by what members go on to create.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="relative flex flex-col border-[#2841ff] bg-transparent rounded-none translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden"
                style={
                  {
                    "--animation-delay": `${index * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-0 relative h-[400px]">
                  <div className="relative w-full h-full bg-[#4f4f4f] overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      alt={event.title}
                      src={event.image}
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[250px] bg-[linear-gradient(0deg,rgba(1,0,27,0.75)_0%,rgba(1,0,27,0)_100%)]" />

                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 px-6 pb-6">
                      <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[28px]">
                        {event.title}
                      </h3>

                      <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[19.6px]">
                        {event.date}
                      </p>

                      <Button className="w-fit h-auto px-4 py-2 bg-white text-black hover:bg-white/90 rounded-[999px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xs tracking-[0] leading-[normal]" asChild>
                        <a href="https://example.com/event-details">
                          Details
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                </CardContent>
              </Card>
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
