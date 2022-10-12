import React from 'react'
import clsx from 'clsx'
import resolvePath from 'object-resolve-path'

export const ThemeTextFieldElement = ({name = '', onChange, value, label, errors = {}, type='text', readOnly, disabled, isLoading = false}) => {
    // try {
    // resolvePath(errors, name)
    // } catch(e) {
    //     debugger
    // }
    return (
        <>
            <div className="theme__form-controller flex flex-col p-5">
                <input className={clsx('theme__text-field outline-0 border border-slate-300 rounded-md', resolvePath(errors, name) && 'border-red-500 text-red-500')}
                    placeholder=' ' type={type} name={name} value={value} onChange={onChange} readOnly={readOnly} disabled={disabled}/>

                <label className={clsx('theme__text-field-label text-slate-600', errors[name] && 'border-red-500 text-red-500')} htmlFor={name}>{label}</label>
                {isLoading && <div className="mx-2 loader loader--blue absolute top-0 right-0" style={{fontSize: '2px', position: 'absolute', top: 'calc(50% - 5em)', right: '5%'}}/>}
            </div>
            {resolvePath(errors, name) && (
                <div className="text-base text-red-400">{resolvePath(errors, name).message || resolvePath(errors, name).type}</div>
            )}
        </>
    )
} 

export const ThemePwdFieldElement = ({name = '', onChange, value, label, errors = {}, type='password', readOnly, disabled, isLoading = false}) => {
    return (
        <>
            <div className="theme__form-controller flex flex-col p-5">
                <input className={clsx('theme__text-field outline-0 border border-slate-300 rounded-md', resolvePath(errors, name) && 'border-red-500 text-red-500')}
                    placeholder=' ' type={type} name={name} value={value} onChange={onChange} readOnly={readOnly} disabled={disabled}/>

                <label className={clsx('theme__text-field-label text-slate-600', errors[name] && 'border-red-500 text-red-500')} htmlFor={name}>{label}</label>
                {isLoading && <div className="mx-2 loader loader--blue absolute top-0 right-0" style={{fontSize: '2px', position: 'absolute', top: 'calc(50% - 5em)', right: '5%'}}/>}
            </div>
            {resolvePath(errors, name) && (
                <div className="text-base text-red-400">{resolvePath(errors, name).message || resolvePath(errors, name).type}</div>
            )}
        </>
    )
} 


export const ThemeNumberFieldElement = props => {
    return <ThemeTextFieldElement {...props} type='number'/>
}
