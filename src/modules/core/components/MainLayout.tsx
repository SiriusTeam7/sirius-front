import Sidebar from "@/modules/home/components/SideBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import CourseAvailables from "@/modules/home/components/CourseAvailables";
import { useQueryClient } from "@tanstack/react-query";
import { LoginResponse } from "../interfaces/Api.interface";


function MainLayout() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<LoginResponse>(["user"]);

  if (!user) {
    console.log("No user found, redirecting to login");
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-primary min-h-screen w-full mx-auto flex  flex-col sm:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-y-auto mt-10 px-4">
        {location.pathname === "/" && (
          <>
            <h1 className="text-2xl font-bold">Hola, user Platzi</h1>
            <CourseAvailables section_title={"Repasos disponibles"} />
            <CourseAvailables section_title={"Repasos completados"} />
          </>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
