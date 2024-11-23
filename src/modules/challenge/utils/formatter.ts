export const parseTime = (time: string): number => {
    // Eliminar espacios y convertir a minúsculas para facilitar la comparación
    const normalizedTime = time.trim().toLowerCase();
  
    // Si es solo un número, lo tratamos como minutos
    if (/\d+/.test(normalizedTime)) {
        console.log("ENTRA AQUI", parseInt(normalizedTime, 10))
      return parseInt(normalizedTime, 10);
    }
  
    // Si es en formato "30 minutos" o similar, extraemos el número
    const match = normalizedTime.match(/(\d+)\s*(minutes?|mins?)/);
    if (match) {
        console.log("ENTRA AQUI 2")
      return parseInt(match[1], 10); // Devuelve el número de minutos
    }
    console.log("ENTRA 3")
    // Si no coincide con ningún formato válido, devolvemos un valor predeterminado (ej. 0)
    return 0;
  };
  