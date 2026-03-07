import {model, Schema, models} from "mongoose";
import {IBookSegment} from "@/types";

/**
 * Schema for individual segments of a book.
 * Each segment represents a chunk of text from the book for processing and playback.
 */
const BookSegmentSchema = new Schema<IBookSegment>({
    clerkId: {type: String, required: true},
    bookId: {type: Schema.Types.ObjectId, ref: 'Book', required: true, index: true},
    content: {type: String, required: true},
    segmentIndex: {type: Number, required: true, index: true},
    pageNumber: {type: Number, index: true},
    wordCount: {type: Number, required: true},
}, {timestamps: true});

// Compound indexing for optimized retrieval and data integrity
// Ensures unique segments per book based on index or page number
BookSegmentSchema.index({ bookId: 1, segmentIndex: 1 }, {unique: true});
BookSegmentSchema.index({ bookId: 1, pageNumber: 1 }, {unique: true});

// Text index for content search within a book
BookSegmentSchema.index({ bookId: 1, content: "text" });

// Check if the BookSegment model already exists to prevent re-compilation during hot reloads in Next.js
const BookSegment = models.BookSegment || model<IBookSegment>('BookSegment', BookSegmentSchema);

export default BookSegment;
