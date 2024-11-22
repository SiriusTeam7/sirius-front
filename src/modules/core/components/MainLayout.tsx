import Sidebar from "@/modules/home/components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import CourseAvailables from "@/modules/home/components/CourseAvailables";
import FactsLayout from "@/modules/home/components/FactsLayout";
import { Cohete } from "@/assets/images";

function MainLayout() {
  const location = useLocation();

  return (
    <div className="bg-primary min-h-screen w-full mx-auto flex  flex-col sm:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-y-auto mt-10 px-4">
        {location.pathname === "/" && (
          <section>
            <div className="flex">
              <img src={Cohete} className="p-1 w-10 h-10" />

              <h1 className="text-2xl font-bold">Hola, Platzinauta</h1>
            </div>
            <FactsLayout />
            <CourseAvailables
              type="available"
              section_title={"Repasos disponibles"}
              section_subtitle="Cursos con retos disponibles"
            />
            <CourseAvailables type="completed" section_title={"Repasos completados"} />
          </section>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
