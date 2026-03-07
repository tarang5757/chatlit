import {model, Schema, models} from "mongoose";
import {IVoiceSession} from "@/types";

const VoiceSessionSchema = new Schema<IVoiceSession>({
    clerkId: {type: String, required: true},
    bookId: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    startedAt: {type: Date, default: Date.now, required: true},
    endedAt: {type: Date},
    durationSeconds: {type: Number, default: 0, required: true},
    billingPeriodStart: {type: Date, required: true},
}, {timestamps: true});

// Check if the VoiceSession model already exists to prevent re-compilation during hot reloads in Next.js
const VoiceSession = models.VoiceSession || model<IVoiceSession>('VoiceSession', VoiceSessionSchema);

export default VoiceSession;
