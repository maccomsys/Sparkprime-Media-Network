import HeroSection from '../components/HeroSection';
import LatestNewsSection from '../components/LatestNewsSection';
import AdBanner from '../components/AdBanner';
import CultureMustReadSection from '../components/CultureMustReadSection';
import LifestyleSection from '../components/LifestyleSection';
import VideoNewsSection from '../components/VideoNewsSection';
import MusicSportSection from '../components/MusicSportSection';
import GamesStoreSection from '../components/GamesStoreSection';
import FictionAppSection from '../components/FictionAppSection';
import HealthBusinessSection from '../components/HealthBusinessSection';
import QuoteBanner from '../components/QuoteBanner';
import FashionTravelSection from '../components/FashionTravelSection';

export default function HomePage() {
  return (
    <div className="flex-grow pt-6">
      <HeroSection />
      <LatestNewsSection />
      <AdBanner />
      <CultureMustReadSection />
      <LifestyleSection />
      <VideoNewsSection />
      <MusicSportSection />
      <GamesStoreSection />
      <FictionAppSection />
      <HealthBusinessSection />
      <QuoteBanner />
      <FashionTravelSection />
    </div>
  );
}
