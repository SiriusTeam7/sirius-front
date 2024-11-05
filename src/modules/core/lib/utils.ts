import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {Course1, Course2, Course3} from '@/assets/images'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomIcon() {
  const icons = [Course1, Course2, Course3]; 
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
}