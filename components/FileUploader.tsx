"use client"

import React, { useState, useRef } from 'react'
import { Control, FieldPath, FieldValues } from "react-hook-form"
import { LucideIcon, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    acceptTypes: string[];
    disabled?: boolean;
    icon: LucideIcon;
    placeholder: string;
    hint: string;
}

const FileUploader = <T extends FieldValues>({
    control,
    name,
    label,
    acceptTypes,
    disabled,
    icon: Icon,
    placeholder,
    hint
}: Props<T>) => {
    const [fileName, setFileName] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    return (
        <FormField
            control={control}
            name={name}
            render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                    <div className={cn("upload-dropzone border-2 border-dashed border-[#8B7355]/20", fileName && "upload-dropzone-uploaded")}>
                        <FormControl>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept={acceptTypes.join(',')}
                                className="sr-only"
                                id={`file-upload-${name}`}
                                disabled={disabled}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setFileName(file.name);
                                        onChange(file);
                                    }
                                }}
                                {...field}
                                value={""}
                            />
                        </FormControl>
                        {!fileName ? (
                                <label htmlFor={`file-upload-${name}`} className="flex flex-col items-center justify-center cursor-pointer w-full h-full p-10 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                    <FormLabel className="form-label mb-2 cursor-pointer">{label}</FormLabel>
                                    <Icon className="upload-dropzone-icon" />
                                    <p className="upload-dropzone-text">{placeholder}</p>
                                    <p className="upload-dropzone-hint">{hint}</p>
                                </label>
                            ) : (
                                <div className="flex items-center justify-between w-full px-6 py-10">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <Icon className="h-6 w-6 text-[#663820] shrink-0" />
                                        <span className="text-lg font-medium truncate text-[#663820]">{fileName}</span>
                                    </div>
                                    <button
                                        type="button"
                                        disabled={disabled}
                                        onClick={() => {
                                            setFileName(null);
                                            onChange(null);
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = '';
                                            }
                                        }}
                                        className="upload-dropzone-remove"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                </FormItem>
            )}
        />
    )
}

export default FileUploader
