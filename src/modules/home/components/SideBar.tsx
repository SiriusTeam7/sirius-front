import {
  platzi,
  home,
  routes,
  progress,
  chat,
  SiriusMenu
} from '@/assets/images';

const Sidebar = () => {
  return (
    <div>
      <div className="hidden sm:flex flex-col bg-primary h-screen w-48 items-start px-4 py-6 space-y-6 text-white">
        <div className="flex items-center justify-center w-full">
          <img src={platzi} alt="Logo" className="h-24" />
        </div>

        <nav className="flex flex-col space-y-6 w-full">
          <a
            href="/inicio"
            className="flex items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={home} alt="Inicio" className="h-6 w-6" />
            <span className="ml-3">Inicio</span>
          </a>
          <a
            href="/mis-rutas"
            className="flex items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={routes} alt="Mis Rutas" className="h-6 w-6" />
            <span className="ml-3">Mis Rutas</span>
          </a>
          <a
            href="/mi-progreso"
            className="flex items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={progress} alt="Mi Progreso" className="h-6 w-6" />
            <span className="ml-3">Mi Progreso</span>
          </a>
          <a
            href="/chat-ada"
            className="flex items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={chat} alt="Chat ADA" className="h-6 w-6" />
            <span className="ml-3">Chat ADA</span>
          </a>
          
          <a
            href="/"
            className="flex items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={SiriusMenu} alt="Sirius" className="h-6 w-6" />
            <span className="ml-3">Mis retos</span>
          </a>


        </nav>
      </div>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-primary h-16 flex items-center justify-around text-white">
    
        <nav className="flex justify-around w-full">
          <a href="/mis-rutas" className="flex justify-center items-center hover:bg-[#1E293B] rounded-md p-2 w-full">

            <img src={home} alt="Inicio" className="h-6 w-6" />
          </a>
          <a
            href="/mis-rutas"
            className="flex justify-center items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={routes} alt="Mis Rutas" className="h-6 w-6" />
          </a>
          <a
            href="/mi-progreso"
            className="flex justify-center items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={progress} alt="Mi Progreso" className="h-6 w-6" />
          </a>
          <a
            href="/chat-ada"
            className="flex justify-center items-center hover:bg-[#1E293B] rounded-md p-2 w-full"
          >
            <img src={chat} alt="Chat ADA" className="h-6 w-6" />
          </a>

        </nav>
      </div>
    </div>
  );
};
export default Sidebar;