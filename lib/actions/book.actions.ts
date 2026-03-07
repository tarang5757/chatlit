"use server"

export async function checkBookExists(title: string) {
    return { exists: false, book: null };
}

export async function createBook(data: any) {
    return { success: true, data: { slug: 'test', _id: '1' } };
}

export async function saveBookSegments(bookId: string, clerkId: string, content: any[]) {
    return { success: true };
}
