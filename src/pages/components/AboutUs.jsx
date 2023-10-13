import aboutUs from "../../assets/aboutUs.png";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="hero place-items-start">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 flex justify-center">
            {" "}
            <img src={aboutUs} className="w-full rounded-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="py-6">
              At Tiffin, we are passionate about delivering delicious and
              high-quality meals to your doorstep. Our mission is to make
              mealtime easy and convenient. With a wide variety of menu options
              and speedy delivery, we aim to provide you with a seamless dining
              experience.
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
