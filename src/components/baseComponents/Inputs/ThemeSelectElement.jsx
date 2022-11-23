import React, { useState } from "react";
import Select, { createFilter } from 'react-select'
import AsyncSelect from 'react-select/async'
import clsx from 'clsx'
import resolvePath from 'object-resolve-path'

export const ThemeSelectElement = ({options,
    onChange,
    value,
    label,
    name,
    errors = {},
    inputOptions = {}
        }) => {
    if(!!value && !value.hasOwnProperty('value')) {
        value = options.find(o => o.value == value) || undefined
    }

    const [isActive, setIsActive] = useState(false)


    return (
        <>
            <div className="theme__form-controller flex flex-col w-full" 
            style={{minHeight: '2.5em'}} onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}>
                <Select 
                    value={value}
                    options={options}
                    onChange={onChange}
                    filterOption={createFilter({ ignoreAccents: false })}
                    placeholder={''}
                    className={`rounded-md theme__select-container ${ resolvePath(errors, name) ? '!border-red-500' : ''}`}
                    styles={{
                        container: () => ({
                            position: 'absolute',
                            width: '100%'
                        }),
                        control: (provided) => ({
                            ...provided,
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            border: 'none'
                        })
                    }}
                    {...inputOptions}
                />
                <label className={`theme__text-field-label theme__text-field-label--select ${(value?.value || isActive) ? 'active' : 'inactive'}`} htmlFor={name}>{label}</label>
            </div> 
            {resolvePath(errors, name) && (
                <div className="text-base text-red-400">{resolvePath(errors, name).message || resolvePath(errors, name).type}</div>
            )}
        </>
    )
}
