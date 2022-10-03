import React, {useState} from "react"
import DatePicker from 'react-datepicker'
import resolvePath from 'object-resolve-path'

export const ThemeDatePickerElement = ({value, onChange, label, name, errors = {}, readOnly}) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <>
        <div className="flex flex-col theme__form-controller" style={{minHeight: '2.5em'}}>
            <DatePicker 
                readOnly={readOnly}
                selected={value}
                onChange={onChange}
                onCalendarOpen={() => setIsFocused(true)}
                onCalendarClose={() => setIsFocused(false)}
                className={`theme__text-field outline-0 border border-slate-300 rounded-md ${name && resolvePath(errors, name) ? 'border-red-500' : ''}`}
            />
            <label className={`theme__text-field-label ${isFocused ? 'focused' : ''} ${value ? 'active' : ''}`} htmlFor={name}>{label}</label>
        </div>
        {(name && resolvePath(errors, name)) && (
            <div className="text-base text-red-400">{resolvePath(errors, name).message || resolvePath(errors, name).type}</div>
        )}
        </>
    )
}

