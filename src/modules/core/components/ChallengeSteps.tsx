import React from "react";

interface ChallengeStep {
  id: number;
  state: "completado" | "disponible" | "pendiente";
}

interface ChallengeStepsProps {
  steps: ChallengeStep[];
}

const ChallengeSteps: React.FC<ChallengeStepsProps> = ({ steps }) => {
  return (
    <nav aria-label="Progreso del desafío">
      <ul className="flex items-center justify-center space-x-4 sm:space-x-8">
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;

          const circleColor =
            step.state === "completado"
              ? "bg-green-500"
              : step.state === "disponible"
              ? "bg-blue-500"
              : "bg-gray-500";

          const lineColor =
            step.state === "completado" ? "bg-green-500" : "bg-gray-500";

          const circleIcon =
            step.state === "completado" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : step.state === "disponible" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            ) : null;

          return (
            <li
              key={step.id}
              className="flex items-center"
              aria-current={step.state === "disponible" ? "step" : undefined}
            >
              {/* Círculo */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${circleColor}`}
                aria-label={
                  step.state === "completado"
                    ? "Paso completado"
                    : step.state === "disponible"
                    ? "Paso disponible"
                    : "Paso pendiente"
                }
              >
                {circleIcon}
              </div>

              {/* Línea de conexión */}
              {!isLastStep && (
                <div
                  className={`w-12 h-1 ${lineColor} sm:w-16`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ChallengeSteps;
