import { Toaster } from 'react-hot-toast';
import AboutUs from '~/Components/AboutUs/AboutUs';
import AnnouncementBanner from '~/Components/Assets/AnnouncementBanner';
import ScrollToTopButton from '~/Components/Assets/ScrollToTopButton';
import FAQ from '~/Components/FAQ/FAQ';
import Footer from '~/Components/Footer/Footer';
import Hero from '~/Components/Hero/Hero';
import LetsStarted from '~/Components/LetsStarted/LetsStarted';
import MYPE from '~/Components/MYPE/MYPE';
import Navbar from '~/Components/Navbar/Navbar';
import ProjectRoadmap from '~/Components/ProjectRoadmap/ProjectRoadmap';
import Services from '~/Components/Services/Services';
import WhyUs from '~/Components/WhyUs/WhyUs';

export default function Home() {

  return (
    <>
      <div className="relative">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <AnnouncementBanner />
        <Navbar />
        <Hero />
        <WhyUs />
        <AboutUs />
        <Services />
        <MYPE />
        <ProjectRoadmap />
        <FAQ />
        <LetsStarted />
        <Footer />
        <ScrollToTopButton />
      </div >
    </>
  );
}
