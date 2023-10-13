import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import FeaturedContent from "./components/FeaturedContent";
import Testimonials from "./components/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />

      <FeaturedContent />

      <Testimonials />

      <AboutUs />
    </div>
  );
};

export default Homepage;
