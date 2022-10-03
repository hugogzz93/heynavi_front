import React, {useReducer, useEffect} from 'react'
import resolvePath from 'object-resolve-path'
import { Table } from '../Table'
import { baseUrl } from 'api'

const reducer = (state, action) => {
    switch(action.type) {
        case 'setOldFiles':
            return {...state, oldFiles: action.payload}
        case 'addFiles':
            return {...state, files: [...state.files, ...Array.from(action.payload)]}
        case 'removeFile':
            return {...state, files: state.files.filter(f => f.name != action.payload)}
        default:
            throw {message: 'Invalid action dispatched to MultiFile reducer'}
    }
}


const configuration = {
    header: {
        id: 'multi-file-table',
        idColumn: 'main',
        getId: d => d.name,
    },
    columns: [
        {
            id: 'main',
            label: 'Documentos',
        }
    ]
}

export const ThemeMultiFileInputElement = ({
 name = '',
 onChange, 
 label, 
 errors = {},
 type='file',
 readOnly,
 disabled,
 value = []
}) => {
    const [state, dispatch] = useReducer(reducer, {files: [], oldFiles: value ? value : []})
    const inputField = React.useRef(null)

    useEffect(() => {
        onChange(state.files)
    }, [state.files])

    useEffect(() => {
        if(value)
            dispatch({type: 'setOldFiles', payload: value.filter(v => v.id)})
    }, [value])

    configuration.header.tableActions = [
            () => (
                <i className="fa-solid fa-plus text-lg cursor-pointer" onClick={() => inputField.current.click()}></i>
            )
    ]

    configuration.columns[0].render = (d) => {
        if(d.docId)
            return (
                <div className="flex items-center justify-between">
                    <div className='flex item-center'>
                        <a className={`flex items-center text-zinc-600 hover:text-zinc-900 cursor-pointer`} href={baseUrl+ 'documentos/downloads?id=' + d.docId}>
                            <i className="fa-solid fa-file-arrow-down text-lg"></i>
                            <div className="ml-3 text-md">{d.nombreDocumento}</div>
                        </a>
                        <div className="text-md">{d.name}</div>
                    </div>
                </div>
            )
        else 
            return (
                <div className="flex items-center justify-between">
                    <div className="text-md">{d.name}</div>
                    <i className="fa-solid fa-trash-can text-slate-800 hover:text-red-500 text-lg cursor-pointer" 
                        onClick={() => dispatch({type: 'removeFile', payload: d.name})}/>
                </div>
            )
    }
            


    configuration.columns[0].label = label;
    return (
        <>
            <div className="hidden" style={{display: 'none'}}>
                <input type="file"
                    name={name}
                    onChange={(e) => dispatch({type: 'addFiles', payload: e.target.files})}
                    ref={inputField}
                />
            </div>
            <Table
                configuration={configuration}
                rowData={[...state.files, ...state.oldFiles.map(f => ({name: f.nombreDocumento, docId: f.id}))]}
            />
        </>
    )
}

