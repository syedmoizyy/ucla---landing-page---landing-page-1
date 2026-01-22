import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

const eventData = [
  {
    title: "Sunset Party @ Topanga",
    date: "Aug 23, 2025",
    images: [
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/img-3209-1.png",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959457088-0.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959457096-1.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959457102-2.jpeg",
    ],
  },
  {
    title: "Early Frights",
    date: "October 25th, 2025",
    images: [
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959715968-0.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959715977-1.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768959715986-2.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768960884584-0.jpeg",
      "https://c.animaapp.com/mkas4pjnjyv6ek/img/uploaded-image-1768960884593-1.jpeg",
    ],
  },
];

export const ProgramFeaturesSection = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({
    0: 0,
    1: 0,
  });

  const handleNext = (eventIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventIndex]: ((prev[eventIndex] || 0) + 1) % totalImages,
    }));
  };

  const handlePrev = (eventIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventIndex]: ((prev[eventIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };
  return (
    <section className="relative w-full bg-[#01001a] py-[164px]">
      <div className="container mx-auto max-w-[1240px] px-4">
        <div className="flex flex-col items-center gap-[26px] mb-[134px] translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="relative inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 border border-solid border-[#2841ff]">
            <div className="relative flex items-center justify-center w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              RECENT EVENTS
            </div>

            <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          </div>

          <div className="flex flex-col items-start gap-4 w-full max-w-[820px]">
            <h2 className="font-semibold text-[40px] leading-[56px] w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
              Building founders at UCLA
            </h2>

            <p className="font-normal text-xl leading-8 w-full [font-family:'Plus_Jakarta_Sans',Helvetica] text-white text-center tracking-[0]">
              I-PSI runs high-impact build sessions, founder nights, and career workshops designed to turn ambitious students into real operators. We move fast, learn by doing, and ship projects that matter.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[52px]">
          {eventData.map((event, eventIndex) => {
            const currentIndex = currentImageIndex[eventIndex] || 0;
            return (
              <Card
                key={eventIndex}
                className="relative w-full border border-solid border-[#2841ff] bg-transparent overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${(eventIndex + 1) * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-0 relative h-[720px]">
                  <div className="relative w-full h-full bg-[#4f4f4f] overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                      alt={`${event.title} - Image ${currentIndex + 1}`}
                      src={event.images[currentIndex]}
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[381px] bg-[linear-gradient(0deg,rgba(1,0,27,0.75)_0%,rgba(1,0,27,0)_100%)]" />

                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-8 px-8 pb-[26px]">
                      <div className="flex flex-col items-start gap-4 flex-1 max-w-[820px]">
                        <h3 className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                          {event.title}
                        </h3>

                        <p className="w-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-8">
                          {event.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handlePrev(eventIndex, event.images.length)}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <span className="text-white text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium">
                          {currentIndex + 1} / {event.images.length}
                        </span>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleNext(eventIndex, event.images.length)}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                  <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white border border-solid border-[#2841ff]" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
