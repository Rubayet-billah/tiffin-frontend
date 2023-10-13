import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
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
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Homepage;
