import { ThumbsUp, ThumbsDown } from "lucide-react"; // Íconos para "Me gusta" y "No me gusta"

import { FeedbackLayoutProps } from "@interfaces/FeedbackLayout.interface";


export default function FeedbackLayout({
}: FeedbackLayoutProps) {
  return (
    <div className="flex flex-col justify-center h-full bg-gray-800 rounded-lg p-6">
      {/* Timer del reto */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-start">Feedback</h1>
        <div className="border border-secondary px-4 py-2 rounded-lg text-white ">
          9/10
        </div>
      </div>

      {/* Contenido principal: Reto o TextArea */}
      <div className="mt-4 flex flex-col items-center justify-content">
        {/* Título del reto */}
        <div className="p-4 bg-[#1F2127] rounded-lg w-full shadow-md border border-white/70 mx-auto">
          <p className="text-gray-300 font-medium">
            Tu respuesta muestra una comprensión básica del reto al mencionar la
            importancia de las tendencias y las fechas de salida. Sin embargo,
            podrías mejorar ampliando la especificidad de los datos que
            necesitarías. Por ejemplo, sería útil mencionar datos como el género
            de las canciones, la duración, o la frecuencia de escucha. Esto
            enriquecería tu análisis y te permitiría descubrir patrones más
            variados y significativos. Además, para la comunicación efectiva,
            intenta estructurar tus ideas de manera más clara, explicando cómo
            esos datos pueden conectarse para revelar patrones. Profundizar en
            estas áreas no solo fortalecerá tu análisis, sino que también
            permitirá una mejor comprensión de cómo las canciones se relacionan
            entre sí en el contexto que presentas.
          </p>
        </div>
      </div>

      <div className="flex justify-end  mt-4 items-center ">
        <div className="flex flex-row items-center justify-center space-x-2 ">
          <p className="text-sm font-medium text-gray-300">
            ¿Te gustó este reto?
          </p>
          <button
            aria-label="Me gustó"
            onClick={() => {
              console.log("Me gustó el reto");
            }}
            className="flex flex-row items-center justify-center px-1 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-400"
          >
            <ThumbsUp className="h-4 w-4 " />
          </button>

          <button
            aria-label="No me gustó"
            onClick={() => {
              console.log("No me gustó el reto");
            }}
            className="flex  p-1 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400"
          >
            <ThumbsDown className="h-4 w-4 " />
          </button>
        </div>
      </div>

      {/* Flashcards */}
      <div className="mt-5 flex-col justify-center">
        <h1>Refuerza con este contenido</h1>
        <div className="grid sm:grid-cols-3 grid-rows-3 gap-4 w-full mt-2">
          <div className="p-2 bg-[#1F2127] rounded-lg  border border-gray-300 shadow-lg">
            <p className="text-sm	">Clase 16 de x contenido para de repaso</p>
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center space-x-2  hover:underline"
                aria-label="Ir al reto"
              >
                <p className=" bg-[#133962] px-3 py-1 rounded-lg text-sm font-semibold text-[#6CC3EF]">
                  Repasar clase
                </p>
              </button>
            </div>
          </div>
          <div className="p-2 bg-[#1F2127] rounded-lg  border border-gray-300 shadow-lg">
            <p className="text-sm	">Clase 16 de x contenido para de repaso</p>
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center space-x-2  hover:underline"
                aria-label="Ir al reto"
              >
                <p className=" bg-[#133962] px-3 py-1 rounded-lg text-sm font-semibold text-[#6CC3EF]">
                  Repasar clase
                </p>
              </button>
            </div>
          </div>
          <div className="p-2 bg-[#1F2127] rounded-lg  border border-gray-300 shadow-lg">
            <p className="text-sm	">Clase 16 de x contenido para de repaso</p>
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center space-x-2  hover:underline"
                aria-label="Ir al reto"
              >
                <p className=" bg-[#133962] px-3 py-1 rounded-lg text-sm font-semibold text-[#6CC3EF]">
                  Repasar clase
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
