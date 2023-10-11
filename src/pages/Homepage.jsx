import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import AboutUs from "./components/AboutUs";
import FeaturedContent from "./components/FeaturedContent";
import Testimonials from "./components/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Navigation />

      {/* Featured Content Section */}
      <FeaturedContent />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Us Section */}
      <AboutUs />

      <Footer />
    </div>
  );
};

export default Homepage;
