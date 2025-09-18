import Hero from "./components/Hero";
import SportsStudied from "./components/SportsStudied";
import AboutStudy from "./components/AboutStudy";
import ParticipantsProfile from "./components/ParticipantsProfile";
import CompetitionsDistancesSection from "./components/CompetitionsDistancesSection";
import MindsetSection from "./components/MindsetSection";
import AmbassadorsSection from "./components/AmbassadorsSection";
import EndingSection from "./components/EndingSection";
import SocialEmbedsSection from "./components/SocialEmbedsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutStudy />
      <SportsStudied />
      <ParticipantsProfile />
      <CompetitionsDistancesSection />
      <MindsetSection />
      <AmbassadorsSection />
      <EndingSection />
      <SocialEmbedsSection />
    </main>
  );
}
