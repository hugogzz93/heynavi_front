import React from 'react'
import resolvePath from 'object-resolve-path'

const getErrors = (errors, name) => {
    try {
        const hasErrors = !!resolvePath(errors, name)
        return hasErrors;
    } catch(e) {
        return false
    }
}

export const ThemeCheckboxElement = ({name = '', onChange, value, label, errors = {}, readOnly, disabled}) => {
    const hasErrors = getErrors(errors, name)
    return (
        <div className="flex items-center space-x-3" style={{minHeight: '2.5em'}}>
        <input
            name={name}
            readOnly={readOnly}
            disabled={disabled}
            checked={value}
            onChange={onChange}
            type="checkbox"
            className={` rounded h-5 w-5 ${disabled ? '' : 'cursor-pointer'} ${hasErrors ? '!border-red-500' : '!border-gray-300' }`}
        />

        {label && (
          <div className="flex flex-col">
            <div className={`${hasErrors ? 'text-red-500' : 'text-slate-500' } text-md font-medium leading-none`}>{label}</div>
                {hasErrors && (
                    <p className="text-xs text-red-500 mt-2 leading-4">{resolvePath(errors, name).message || resolvePath(errors, name).type}</p>
                )}
          </div>
        )}
        </div>
    )

}
