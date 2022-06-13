import { Section } from "components/section/Section";
import DroneImage from "assets/images/Drone.png";

export const HeroSection = () => {
  return (
    <Section navType="one" theme="grey" mainContentId="hero-section">
      <div className="flex flex-col justify-center items-center pt-16">
        <img src={DroneImage} alt="drone" className="w-full md:w-[38%] object-cover" />
        <h1 className="text-7xl md:text-7xl lg:text-xxl font-black text-white tracking-wide mt-6 leading-tight md:leading-none">
          F-210
        </h1>
        <p className="text-[#dbd9d3] text-xxs md:text-sm uppercase tracking-wide">
          "The fastest Drone on the planet"
        </p>
        <p className="text-[#dbd9d3] text-xxs md:text-sm tracking-wide mt-1 mb-20">
          "The- The Wirecutter
        </p>
      </div>
    </Section>
  );
};

