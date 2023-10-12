import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <main className="max-w-[1440px] mx-auto p-5 md:p-12 min-h-[100vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
