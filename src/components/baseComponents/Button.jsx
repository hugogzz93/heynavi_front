import React from 'react'

export const Button = ({onSubmit, children, type, isLoading, disabled, onClick, danger = false}) => {
    const classNames = `flex mr-2 items-center justify-center p-3 
    ${disabled ? 'text-slate-500 bg-gray-200 border border-1 border-slate-500' : 'text-white bg-blue-500 hover:bg-blue-700'}
    ${danger ? 'bg-red-500 hover:bg-red-700' : ''}
    rounded-md cursor-pointer`
    return <button className={classNames} 
        type={type} 
        disabled={disabled}
        onClick={e => {!isLoading && onClick(e)}}
        onSubmit={onSubmit}>
            {children}  
            {isLoading && <div className="mx-2 loader" style={{fontSize: '3px'}}/>}
        </button>
}

export const Chip = ({children, onClick, type = null}) => {
    let colorSet = null;
    switch(type) {
        case 'success':
            colorSet = {bg: 'bg-green-100', color: 'text-green-500'}
            break;
        case 'error':
            colorSet = {bg: 'bg-red-100', color: 'text-red-500'}
            break;
        case 'info':
            colorSet = {bg: 'bg-blue-100', color: 'text-blue-500'}
            break;
        case 'warning':
            colorSet = {bg: 'bg-orange-100', color: 'text-orange-500'}
            break;
        case null:
            colorSet = {bg: 'bg-slate-100', color: 'text-slate-500'}
            break;
        default:
            throw {message: 'Invalid type given to Chip'}
    }
    return (
        <div style={{display: 'inherit'}}>
            <div className={`${colorSet.bg} ${colorSet.color}
                rounded-xl p-1 px-4 inline text-center text-md
                `
            } onClick={onClick}>
                {children}
            </div>
        </div>
    )
}
