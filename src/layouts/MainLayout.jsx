import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <main className="max-w-[1440px] mx-auto p-5 md:p-12 min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
