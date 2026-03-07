import React from 'react'
import { Loader2 } from 'lucide-react'

const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-soft-lg flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 text-[#663820] animate-spin" />
                <p className="text-xl font-serif font-bold text-[#212a3b]">Synthesizing Book...</p>
                <p className="text-sm text-gray-500">This might take a moment.</p>
            </div>
        </div>
    )
}

export default LoadingOverlay
