import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import NavbarBanner from "./components/Navbar/NavbarBanner";
import Home from "./components/Home/Home";
import WebDevelopment from "./pages/web-development";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import Digitalpage from "./pages/Digitalmarketing/Digitalpage";
import Businessconsulting from "./pages/Business-consulting/Business-consulting";
import Aboutus from "../src/pages/About-us/About-us";
import Contactus from "./pages/Contact-us/Contactus";
import Mobiledev from "./pages/Software-Solutions/Mobile-dev";
import UiUx from "./pages/Software-Solutions/Ui&Ux";
import Hosting from "./pages/Software-Solutions/Hosting";
import CloudService from "./pages/Software-Solutions/Cloud-Service";
import Seo from "./pages/Digitalmarketing/Seo";
import Ppc from "./pages/Digitalmarketing/Ppc";
import Socialmediaclick from "./pages/Digitalmarketing/Social-media-click";
import Contentmarketing from "./pages/Digitalmarketing/Content-marketing";
import Emailmarketing from "./pages/Digitalmarketing/Email-marketing";
import Marketinganalytics from "./pages/Digitalmarketing/Marketing-analytics";
import Affiliatemarketing from "./pages/Digitalmarketing/Affiliate-marketing";
import Education from "./pages/Business-consulting/Education";
import Financial from "./pages/Business-consulting/Financial";
import HumanResource from "./pages/Business-consulting/Human-Resource";
import Management from "./pages/Business-consulting/Management";
import Marketing from "./pages/Business-consulting/Marketing";
import Operation from "./pages/Business-consulting/Operation";
import Career from "./pages/Career/Career";
import Mobilemarketing from "./pages/Digitalmarketing/Mobile-marketing";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Aboutussection from "./components/About-us/About-us";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      {/* <NavbarBanner /> */}
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* Software Solution Page-Routes*/}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-development" element={<Mobiledev />} />
        <Route path="/services/ui-ux-development" element={<UiUx />} />
        <Route path="/services/hosting-service" element={<Hosting />} />
        <Route path="/services/cloud-service" element={<CloudService />} />

        {/* Digital Marketing Page-Routes*/}
        <Route path="/services/digital-marketing" element={<Digitalpage />} />
        <Route path="/services/digital-marketing/SEO" element={<Seo />} />
        <Route path="/services/digital-marketing/Pay-per-click" element={<Ppc />} />
        <Route path="/services/digital-marketing/Social-media-marketing" element={<Socialmediaclick />} />
        <Route path="/services/digital-marketing/content-marketing" element={<Contentmarketing />} />
        <Route path="/services/digital-marketing/Email-marketing" element={<Emailmarketing />} />
        <Route path="/services/digital-marketing/mobile-marketing" element={<Mobilemarketing />} />
        <Route path="/services/digital-marketing/marketing-analytics" element={<Marketinganalytics />} />
        <Route path="/services/digital-marketing/affiliate-marketing" element={<Affiliatemarketing />} />

        {/* Business Consulting */}
        <Route path="/services/business-consulting" element={<Businessconsulting />} />
        <Route path="/services/business-consulting/Education" element={<Education />} />
        <Route path="/services/business-consulting/Financial" element={<Financial />} />
        <Route path="/services/business-consulting/Human-resource" element={<HumanResource />} />
        <Route path="/services/business-consulting/Management" element={<Management />} />
        <Route path="/services/business-consulting/marketing" element={<Marketing />} />
        <Route path="/services/business-consulting/operation" element={<Operation />} />

        {/* Career page-Routes */}
        <Route path="/Career-page" element={<Career />} />
        {/* About-Us Page-Routes */}
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
      <Aboutussection />
      <Contactus />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
