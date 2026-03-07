import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parsePDFFile(file: File) {
    return {
        content: [] as any[],
        cover: ""
    }
}
