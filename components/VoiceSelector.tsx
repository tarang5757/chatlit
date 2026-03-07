"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { voiceOptions, voiceCategories } from "@/lib/constants"

interface Props {
    value?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const VoiceSelector = ({ value, onChange, disabled }: Props) => {
    const voiceGroups = [
        {
            group: "Male Voices",
            options: voiceCategories.male.map(id => ({
                id,
                ...voiceOptions[id as keyof typeof voiceOptions]
            }))
        },
        {
            group: "Female Voices",
            options: voiceCategories.female.map(id => ({
                id,
                ...voiceOptions[id as keyof typeof voiceOptions]
            }))
        }
    ]

    return (
        <RadioGroup
            onValueChange={onChange}
            value={value}
            className="space-y-6"
            disabled={disabled}
        >
            {voiceGroups.map((group) => (
                <div key={group.group} className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{group.group}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {group.options.map((option) => (
                            <div key={option.id} className="relative">
                                <RadioGroupItem
                                    value={option.id}
                                    id={option.id}
                                    className="peer sr-only"
                                />
                                <Label
                                    htmlFor={option.id}
                                    className={cn(
                                        "voice-selector-option cursor-pointer flex flex-col items-start h-full",
                                        value === option.id 
                                            ? "voice-selector-option-selected" 
                                            : "voice-selector-option-default"
                                    )}
                                >
                                    <span className="font-bold text-[#212a3b]">{option.name}</span>
                                    <span className="text-xs text-gray-500 line-clamp-2">{option.description}</span>
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </RadioGroup>
    )
}

export default VoiceSelector
