import { AlumniGallerySection } from "./sections/AlumniGallerySection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { PartnerLogosSection } from "./sections/PartnerLogosSection";
import { ProgramFeaturesSection } from "./sections/ProgramFeaturesSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full items-start relative"
      data-model-id="44:1068"
    >
      <HeroIntroSection />
      <PartnerLogosSection />
      <ProgramFeaturesSection />
      <AlumniGallerySection />
    </main>
  );
};
