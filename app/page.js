import Hero from "./components/Hero";
import SportsStudied from "./components/SportsStudied";
import AboutStudy from "./components/AboutStudy";
// import ParticipantsProfile from "./components/ParticipantsProfile";
import ParticipantsProfileStacked from "./components/ParticipantsProfileStacked";
// import CompetitionsDistancesSection from "./components/CompetitionsDistancesSection";
import CompetitionsDistancesStacked from "./components/CompetitionsDistancesStacked";
// import MindsetSection from "./components/MindsetSection";
import MindsetStackedSections from "./components/MindsetStackedSections";
import AmbassadorsSection from "./components/AmbassadorsSection";
import FAQSection from "./components/FAQSection";
import EndingSection from "./components/EndingSection";
import SocialEmbedsSection from "./components/SocialEmbedsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutStudy />
      <SportsStudied />
      {/* <CompetitionsDistancesSection /> */}
      <CompetitionsDistancesStacked />
      {/* <MindsetSection /> */}
      <MindsetStackedSections />
      {/* <ParticipantsProfile /> */}
      <ParticipantsProfileStacked />
      <AmbassadorsSection />
      <FAQSection />
      <EndingSection />
      <SocialEmbedsSection />
    </main>
  );
}
