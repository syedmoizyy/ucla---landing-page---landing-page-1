import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const missionCards = [
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-22.svg",
    title: "Launch Ventures While You Learn",
    description:
      "Turn your ideas into real startups with the support of peers, mentors, and structured workshops.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-27.svg",
    title: "Access UCLA & VC Networks",
    description:
      "Connect with founders, alumni, and top investors from firms like YC, a16z, and more.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-27-1.svg",
    title: "Social + Professional Balance",
    description:
      "Build a network where friendships and late night brainstorms matter just as much as career growth.",
  },
  {
    icon: "https://c.animaapp.com/mkas4pjnjyv6ek/img/frame-28.svg",
    title: "Mentorship & Big-Little Program",
    description:
      "Learn directly from experienced members through 1 on 1 guidance and lifelong connections.",
  },
];

const CornerDots = () => (
  <>
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
  </>
);

export const PartnerLogosSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#01001a] py-[164px] px-4">
      <div className="max-w-[820px] mx-auto flex flex-col items-center gap-[26px] translate-y-[-1rem] animate-fade-in opacity-0">
        <Badge
          variant="outline"
          className="relative inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 border-[#2841ff] bg-transparent text-white [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[0] leading-[22.4px] whitespace-nowrap h-auto rounded-none"
        >
          MISSION
          <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
        </Badge>

        <div className="flex flex-col items-start gap-3 px-0 py-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
            Building the Next Wave of Founders
          </h2>

          <p className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8">
            Empowering UCLA students to turn their bold ideas into prosperous
            ventures that shape the future, here in LA.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-[152px] flex flex-col items-start gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full">
          {missionCards.map((card, index) => (
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
                  alt={card.title}
                  src={card.icon}
                />

                <div className="flex flex-col items-start gap-3 w-full">
                  <h3 className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-[38.4px]">
                    {card.title}
                  </h3>

                  <p className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[25.6px]">
                    {card.description}
                  </p>
                </div>
              </CardContent>

              <CornerDots />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
