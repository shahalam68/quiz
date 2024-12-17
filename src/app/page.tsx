// Home.tsx
// import Footer from "@/components/Footer/Footer";
import Footer from "@/components/Footer/Footer";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import NavBar from "@/components/NavBar/NavBar";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import TimerSection from "@/components/TimerSection/TimerSection";
import TopBar from "@/components/TopBar/TopBar";

export default function Home() {
  const timerSectionProps = [
    {
      title: "MONTHLY Quiz",
      targetDate: "2024-12-31T23:59:59",
      coin: "40",
    },
    {
      title: "DAILY Quiz",
      targetDate: "2024-12-31T23:59:59",
      coin: "10",
    },
  ];

  return (
    <div className="relative">
      <TopBar />
      <NavBar />
      <HeroSlider />
      <TimerSection timerSectionProps={timerSectionProps} />
      {/* <Footer/> */}
      <Footer />
      <div className="fixed bottom-10 right-10 ">
        <ScrollButton />
      </div>
    </div>
  );
}
