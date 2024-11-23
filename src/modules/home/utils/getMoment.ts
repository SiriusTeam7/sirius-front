export const getMomentStatus = (isCompleted: boolean, momentDate: string): number => {
    const today = new Date();
    const targetDate = new Date(momentDate);
  
    if (isCompleted) {
      return 1; // Completado
    }
  
    if (targetDate <= today) {
      return 2; // Disponible
    }
  
    return 3; 
  };

 export const getTimeRemaining = (date: string) => {
    const now = new Date();
    const targetDate = new Date(date);

    const diffInMs = targetDate.getTime() - now.getTime();
    if (diffInMs <= 0) return "0d 0h";

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);

    return `${days}d ${hours}h`;
  };

  export const getRepasoLabel = (index: number) => {
    const labels = ["PRIMER REPASO", "SEGUNDO REPASO", "TERCER REPASO"];
    return labels[index] || "Repaso";
  };
