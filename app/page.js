import Hero from "./components/Hero";
import SportsStudied from "./components/SportsStudied";
import AboutStudy from "./components/AboutStudy";
import ParticipantsProfile from "./components/ParticipantsProfile";
import InfographicsCarousel from "./components/InfographicsCarousel";
import AmbassadorsSection from "./components/AmbassadorsSection";
import EndingSection from "./components/EndingSection";
import SocialEmbedsSection from "./components/SocialEmbedsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SportsStudied />
      <AboutStudy />
      <ParticipantsProfile />
      <InfographicsCarousel />
      <AmbassadorsSection />
      <EndingSection />
      <SocialEmbedsSection />
    </main>
  );
}
