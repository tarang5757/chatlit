import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parsePDFFile(file: File) {
    // TODO: This is a temporary mock until real PDF parsing is implemented
    return {
        content: [
            {
                text: "This is a mock page of content for development purposes.",
                segmentIndex: 0,
                pageNumber: 1,
                wordCount: 10
            }
        ],
        cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
    }
}
