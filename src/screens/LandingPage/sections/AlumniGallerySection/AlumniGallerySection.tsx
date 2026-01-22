import { Button } from "../../../../components/ui/button";

const decorativeDots = [
  { left: "left-[686px]", bottom: "bottom-[156px]" },
  { left: "left-[1040px]", bottom: "bottom-[120px]" },
  { left: "left-[451px]", bottom: "bottom-[94px]" },
  { left: "left-[625px]", bottom: "bottom-[540px]" },
  { left: "left-[113px]", bottom: "bottom-[492px]" },
  { left: "left-[338px]", bottom: "bottom-[524px]" },
  { left: "left-[908px]", bottom: "bottom-[366px]" },
  { left: "left-[1058px]", bottom: "bottom-[632px]" },
  { left: "left-[912px]", bottom: "bottom-[98px]" },
  { left: "left-[862px]", bottom: "bottom-[553px]" },
  { left: "left-[510px]", bottom: "bottom-48" },
  { left: "left-[1176px]", bottom: "bottom-[484px]" },
  { left: "left-[1010px]", bottom: "bottom-[468px]" },
  { left: "left-[861px]", bottom: "bottom-7" },
  { left: "left-[34px]", bottom: "bottom-[388px]" },
  { left: "left-52", bottom: "bottom-[204px]" },
  { left: "left-[211px]", bottom: "bottom-[34px]" },
  { left: "left-[422px]", bottom: "bottom-[528px]" },
  { left: "left-[535px]", bottom: "bottom-[554px]" },
  { left: "left-[314px]", bottom: "bottom-[621px]" },
  { left: "left-[654px]", bottom: "bottom-[237px]" },
  { left: "left-[456px]", bottom: "bottom-[120px]" },
  { left: "left-[386px]", bottom: "bottom-[339px]" },
  { left: "left-12", bottom: "bottom-[203px]" },
  { left: "left-[1107px]", bottom: "bottom-[143px]" },
  { left: "left-[434px]", bottom: "bottom-[126px]" },
  { left: "left-[512px]", bottom: "bottom-[447px]" },
  { left: "left-[478px]", bottom: "bottom-[280px]" },
  { left: "left-[556px]", bottom: "bottom-[3px]" },
  { left: "left-2.5", bottom: "bottom-[517px]" },
  { left: "left-[1026px]", bottom: "bottom-[526px]" },
  { left: "left-[807px]", bottom: "bottom-32" },
  { left: "left-[793px]", bottom: "bottom-[616px]" },
  { left: "left-[403px]", bottom: "bottom-[457px]" },
  { left: "left-[1010px]", bottom: "bottom-[510px]" },
  { left: "left-[1004px]", bottom: "bottom-[155px]" },
  { left: "left-[711px]", bottom: "bottom-[358px]" },
  { left: "left-[632px]", bottom: "bottom-[159px]" },
  { left: "left-[1008px]", bottom: "bottom-[244px]" },
  { left: "left-[494px]", bottom: "bottom-[53px]" },
  { left: "left-[397px]", bottom: "bottom-[411px]" },
  { left: "left-[803px]", bottom: "bottom-[585px]" },
  { left: "left-[1063px]", bottom: "bottom-[424px]" },
  { left: "left-[409px]", bottom: "bottom-[120px]" },
  { left: "left-[582px]", bottom: "bottom-[550px]" },
  { left: "left-[622px]", bottom: "bottom-[412px]" },
  { left: "left-[1050px]", bottom: "bottom-[475px]" },
  { left: "left-[978px]", bottom: "bottom-[405px]" },
  { left: "left-[1025px]", bottom: "bottom-[415px]" },
  { left: "left-48", bottom: "bottom-[449px]" },
  { left: "left-[1155px]", bottom: "bottom-[87px]" },
  { left: "left-[351px]", bottom: "bottom-[99px]" },
  { left: "left-[762px]", bottom: "bottom-[84px]" },
  { left: "left-[408px]", bottom: "bottom-[554px]" },
  { left: "left-[136px]", bottom: "bottom-[616px]" },
  { left: "left-[509px]", bottom: "bottom-[54px]" },
  { left: "left-[456px]", bottom: "bottom-[545px]" },
  { left: "left-[428px]", bottom: "bottom-[173px]" },
  { left: "left-[262px]", bottom: "bottom-[169px]" },
  { left: "left-[257px]", bottom: "bottom-[421px]" },
  { left: "left-[361px]", bottom: "bottom-[298px]" },
  { left: "left-[123px]", bottom: "bottom-[403px]" },
  { left: "left-[95px]", bottom: "bottom-[148px]" },
  { left: "left-[1091px]", bottom: "bottom-[310px]" },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  // { label: "Events", href: "/events" }, // Hidden for now
  { label: "About", href: "/about" },
];

const socialMediaLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ipoucla" },
  { label: "Instagram", href: "https://www.instagram.com/ipoucla/?__d=1%2F" },
  { label: "TikTok", href: "https://www.tiktok.com/@ipoucla" },
];

export const AlumniGallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#01001a] py-20">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="relative w-full border border-solid border-[#2841ff] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(20,18,68,1)_0%,rgba(11,9,43,1)_100%)]">
            <div className="absolute top-[calc(50%-319px)] left-[calc(50%-599px)] w-[1197px] h-[638px] pointer-events-none">
              {decorativeDots.map((dot, index) => (
                <div
                  key={`dot-${index}`}
                  className={`absolute ${dot.left} ${dot.bottom} w-[7px] h-[7px] bg-[#ffffff40] border-[0.83px] border-solid border-[#2841ff80] opacity-25`}
                />
              ))}
            </div>

            <div className="relative flex flex-col items-center justify-center gap-10 py-24 px-4">
              <h2 className="max-w-[993px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                Join a network where innovation isn&apos;t optional.
                <br />
                It&apos;s the standard.
              </h2>

              <Button 
                className="h-auto px-6 py-3 bg-white text-black hover:bg-white/90 rounded-[999px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base tracking-[0] leading-[normal] transition-transform translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                asChild
              >
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

        <footer className="mt-32 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <div className="flex flex-wrap justify-between items-start gap-8">
            <div className="flex flex-col gap-6">
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
                I-PSI
              </div>
              <p className="max-w-[280px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                I-PSI is UCLA's student builder community. We bring together technical and business talent to build projects, grow leadership, and create real outcomes.
              </p>
            </div>

            <div className="flex gap-16">
              <nav className="flex flex-col gap-6">
                {navigationLinks.map((link, index) => (
                  <a
                    key={`nav-${index}`}
                    href={link.href}
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col gap-6">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={`social-${index}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-12 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#363551] text-sm tracking-[0] leading-[normal]">
            © I-PSI at UCLA | Est. 2025
          </div>
        </footer>
      </div>
    </section>
  );
};
