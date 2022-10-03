import React from 'react'
import clsx from 'clsx'
import resolvePath from 'object-resolve-path'


export const ThemeFileInputElement = ({
  name = '',
 onChange, 
 label, 
 errors = {},
 type='file',
 readOnly,
 disabled
}) => {

    const _onChange = (e) => {
        onChange(e.target.files[0])
    }
    
    return (
        <>
            <div className="theme__form-controller flex flex-col">
                <label className="block" htmlFor={name}>
                    <span className="sr-only">{label}</span>
                    <input 
                      className={`block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:text-black-700
                      hover:file:bg-blue-500
                      transition-all duration-300`}
                      placeholder=' ' 
                      type={type} 
                      name={name} 
                      onChange={_onChange}
                      readOnly={readOnly}
                      disabled={disabled}
                      />
                  </label>
              </div>
                  {resolvePath(errors, name) && (
                    <div className="text-base text-red-400">{resolvePath(errors, name).message || resolvePath(errors, name).type}</div>
                  )} 
            </>
    )
} 



