import React from "react"
import resolvePath from 'object-resolve-path'

export const ThemeTextAreaElement = ({value, onChange, label, name, readOnly}) => {
    return(
        <>
            <div className="flex flex-col theme__form-controller h-20 min-h-full">
                <textarea className={`theme__text-field rounded-md pt-2 outline-0 border border-slate-300 `}
                        name={name} value={value} onChange={onChange} readOnly={readOnly}
                />
                <label className='theme__text-field-label' htmlFor={name}>{label}</label>
            </div>
        </>
    )
}

