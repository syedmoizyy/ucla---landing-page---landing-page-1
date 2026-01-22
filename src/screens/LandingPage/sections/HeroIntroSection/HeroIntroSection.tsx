import { Button } from "../../../../components/ui/button";

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
  { left: "left-[787px]", bottom: "bottom-[285px]" },
  { left: "left-[549px]", bottom: "bottom-36" },
  { left: "left-[465px]", bottom: "bottom-[408px]" },
  { left: "left-[57px]", bottom: "bottom-[245px]" },
  { left: "left-[1332px]", bottom: "bottom-[172px]" },
  { left: "left-[522px]", bottom: "bottom-[152px]" },
  { left: "left-[616px]", bottom: "bottom-[538px]" },
  { left: "left-[575px]", bottom: "bottom-[337px]" },
  { left: "left-[668px]", bottom: "bottom-1" },
  { left: "left-3", bottom: "bottom-[622px]" },
  { left: "left-[1234px]", bottom: "bottom-[633px]" },
  { left: "left-[971px]", bottom: "bottom-[153px]" },
  { left: "left-[954px]", bottom: "bottom-[740px]" },
  { left: "left-[484px]", bottom: "bottom-[550px]" },
  { left: "left-[1215px]", bottom: "bottom-[614px]" },
  { left: "left-[1208px]", bottom: "bottom-[187px]" },
  { left: "left-[855px]", bottom: "bottom-[431px]" },
  { left: "left-[760px]", bottom: "bottom-[191px]" },
  { left: "left-[1213px]", bottom: "bottom-[293px]" },
  { left: "left-[594px]", bottom: "bottom-16" },
  { left: "left-[478px]", bottom: "bottom-[495px]" },
  { left: "left-[966px]", bottom: "bottom-[704px]" },
  { left: "left-[1279px]", bottom: "bottom-[510px]" },
  { left: "left-[492px]", bottom: "bottom-[145px]" },
  { left: "left-[700px]", bottom: "bottom-[662px]" },
  { left: "left-[748px]", bottom: "bottom-[496px]" },
  { left: "left-[1263px]", bottom: "bottom-[572px]" },
  { left: "left-[1177px]", bottom: "bottom-[488px]" },
  { left: "left-[1233px]", bottom: "bottom-[499px]" },
  { left: "left-[231px]", bottom: "bottom-[540px]" },
  { left: "left-[1389px]", bottom: "bottom-[105px]" },
  { left: "left-[422px]", bottom: "bottom-[119px]" },
  { left: "left-[917px]", bottom: "bottom-[101px]" },
  { left: "left-[491px]", bottom: "bottom-[667px]" },
  { left: "left-[164px]", bottom: "bottom-[741px]" },
  { left: "left-[612px]", bottom: "bottom-[65px]" },
  { left: "left-[548px]", bottom: "bottom-[656px]" },
  { left: "left-[515px]", bottom: "bottom-52" },
  { left: "left-[315px]", bottom: "bottom-[203px]" },
  { left: "left-[309px]", bottom: "bottom-[507px]" },
  { left: "left-[435px]", bottom: "bottom-[358px]" },
  { left: "left-[148px]", bottom: "bottom-[485px]" },
  { left: "left-[114px]", bottom: "bottom-[178px]" },
  { left: "left-[1312px]", bottom: "bottom-[372px]" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  // { label: "Events", href: "/events" }, // Hidden for now
  { label: "About", href: "/about" },
];

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[768px] bg-[#01001a] overflow-hidden">
      <div className="absolute top-[calc(50.00%_-_384px)] left-[calc(50.00%_-_720px)] w-[1440px] h-[768px]">
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

      <div className="flex flex-col w-[820px] items-center justify-center gap-14 absolute top-[calc(50.00%_-_152px)] left-[calc(50.00%_-_410px)]">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-1 pt-1.5 pb-2 px-3 relative flex-[0_0_auto] border border-solid border-[#2841ff] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              WELCOME TO IOTA PSI OMEGA (I-PSI)
            </div>

            <div className="absolute -top-0.5 -left-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -top-0.5 -right-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -left-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
            <div className="absolute -right-0.5 -bottom-0.5 w-[5px] h-[5px] bg-white border border-solid border-[#2841ff]" />
          </div>

          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[56px] text-center tracking-[0] leading-[78.4px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              UCLA&apos;s Premier Business
              <br />
              Fraternity &amp; Startup Incubator.
            </h1>

            <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              Join a network where innovation isn&apos;t optional. It&apos;s the
              standard.
            </p>
          </div>
        </div>

        <Button className="inline-flex items-center justify-center gap-1 px-6 py-3 relative flex-[0_0_auto] bg-white rounded-[999px] h-auto hover:bg-white/90 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]" asChild>
          <a href="https://docs.google.com/forms/d/1ZoHpVWovFIXIbL4HtS1m4lpJRxy9O-uHnbn5zBFFaB4/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
              Apply Now
            </span>
          </a>
        </Button>
      </div>
    </section>
  );
};
