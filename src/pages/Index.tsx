import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import ConnectedInstitutions from "../components/home/ConnectedInstitutions";
import AssetTracking from "../components/home/AssetTracking";
import AIYieldPredictions from "../components/home/AIYieldPredictions";
import RealtimeMarketData from "../components/home/RealtimeMarketData";
import MultiCurrency from "../components/home/MultiCurrency";
import DashboardPreview from "../components/home/DashboardPreview";
import AppPromo from "../components/home/AppPromo";
import ManagedAssets from "../components/home/ManagedAssets";
import FinTechBlog from "../components/home/FinTechBlog";
import BankGradeSecurity from "../components/home/BankGradeSecurity";
import UserReviews from "../components/home/UserReviews";
import CTAFooter from "../components/home/CTAFooter";

const Index = () => (
  <div className="crosshair-cursor">
    <Navbar />
    <Hero />
    <ConnectedInstitutions />
    <AssetTracking />
    <AIYieldPredictions />
    <RealtimeMarketData />
    <MultiCurrency />
    <DashboardPreview />
    <AppPromo />
    <ManagedAssets />
    <FinTechBlog />
    <BankGradeSecurity />
    <UserReviews />
    <CTAFooter />
  </div>
);

export default Index;
