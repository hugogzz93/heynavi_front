import React, { useState, useContext, useReducer, useEffect } from 'react'


import { ACTIONS,
 ITableFilter,
 TableReducer,
 TableConfiguration,
 TableStore,
} from './TableReducer'

import { ThemeTextFieldElement } from '../Inputs'

export const ThemeTableElement = ({id, TableHead, TableBody, FilterComponents, TableActions, TableFooter}) => {
    return (
        <div className="w-full bg-transparent" id={id}>
            <FilterComponents/>
            <TableActions/>
            <table cellSpacing='0' cellPadding='0' className='theme__table w-full rounded-md shadow-md bg-white'>
                <thead>
                    <TableHead/>
                </thead>
                <tbody>
                    <TableBody/>
                </tbody>
            </table>
                <TableFooter/>
        </div>
    )
}

export const ThemeHeadElement = ({columnNames}) => {
    return (
        <tr>
            {columnNames.map(name => 
                <th className='px-6 py-3 text-left text-sm font-medium bg-blue-500 text-white capitalize tracking-wider' style={{background: '#3E3EC9'}}
                    key={name}>

                    {name}
                </th>
            )}
        </tr>
    )
}

const ThemeRowElement = ({cells}) => {
    return (
        <tr>
            {cells.map((Cell, idx) => (
                <td key={idx} className={"py-2 px-5"}>
                    { typeof(Cell) == 'function' ? <Cell/> : Cell}
                </td>
            ))
            }
        </tr>
    )
}

const FilterComponent = ({
    Component = ThemeTextFieldElement,
    columnId
}) => {
    const context = useContext(TableContext)
    const configuration = context.configuration.getFilterConfigById(columnId)
    const value = context.state.getFilterValueById(columnId)
    const filterFn = configuration.filterFn

    const onChange = (e) => {
        context.dispatch({
            type: ACTIONS.ON_FILTER_CHANGE,
            payload: new ITableFilter({filterFn,
                                       id: columnId,
                                       filterValue: e.target.value,
                                      })
        })
        
    }

    return (
        <Component
            key={configuration.id}
            name={configuration.id}
            label={configuration.label}
            value={value}
            onChange={onChange}
        />
    )
}

const FilterComponents = () => {
    const {configuration} = useContext(TableContext)
    const filterCount = configuration.columns.filter(f => f.filterable).length
    if(filterCount == 0) return (<span></span>)
    return (
        <div className="w-full flex flex-wrap mb-5">
            {configuration.columns.filter(f => f.filterable).map(c => 
                <div className="grow basis-2 mr-3 last-of-type:mr-0" style={{maxWidth: '15em'}} key={c.id}>
                    <FilterComponent key={c.id} columnId={c.id}/>
                </div>
            )}
        </div>
    )
}

const DataFilter = ({rowData, children}) => {
    const {state} = useContext(TableContext)
    const filteredData = state.filterValues.reduce((filteredData, fv) => (
        filteredData.filter(fv.filterFn)
    ), rowData)
    return children(filteredData)
}

const ThemeFooterElement = ({state: {pagination, rowData}, dispatch}) => {
    const first = pagination.length * pagination.page
    const last = pagination.length * (pagination.page + 1)

    return (
        <div className="flex item-center my-2 float-right">
        {rowData.length > pagination.length && (
            <>
                <div>
                    <span className="material-symbols-outlined text-slate-500 hover:text-slate-800 text-md cursor-pointer" onClick={() => dispatch({type: ACTIONS.SET_PAGE, payload: pagination.page - 1})}> arrow_left </span>
                </div>
                <div className="text-md text-slate-500 mx-2">{first} - {last} ({rowData.length})</div>
                <div>
                    <span className="material-symbols-outlined text-slate-500 hover:text-slate-800 text-md cursor-pointer" onClick={() => dispatch({type: ACTIONS.SET_PAGE, payload: pagination.page + 1})}> arrow_right </span>
                </div>
            </>
        )}
        </div>
    )
}

const TableComponent = ({
    TableElement = ThemeTableElement,
    HeadElement = ThemeHeadElement,
    RowElement = ThemeRowElement,
    FooterElement = ThemeFooterElement,
    rowData,
}) => {
    const {configuration, state, dispatch} = useContext(TableContext);

    const TableHead = () => (
        <HeadElement
            columnNames={configuration.columns.map(col => col.label)}
            columns={configuration.columns}
        />
    )

    const TableBody = () => (
        <>
            {
                
            rowData.map(row => (
                <RowElement 
                    key={configuration.header.getId(row)}
                    data={row}
                    cells={configuration.rowToArray(row)} 
                />
            ))}
        </>
    )


    const ActionElements = () => (
        <div className="w-full flex my-2 justify-end">
            {configuration.header.tableActions.map((Action, idx) => (
                <Action key={idx} configuration={configuration}/>
            ))}
        </div>
    )

    const TableFooter = () => (
        <FooterElement state={state} dispatch={dispatch}/>
    )
    


    return (
        <TableElement
            id={configuration.header.id}
            FilterComponents={FilterComponents}
            TableActions={ActionElements}
            TableHead={TableHead}
            TableBody={TableBody}
            TableFooter={TableFooter}
        />
    )
}

const TableContext = React.createContext()

export const Table = ({configuration: _configuration, rowData, RowElement, HeadElement, TableElement, FooterElement }) => {
    const configuration = new TableConfiguration(_configuration)
    const [state, dispatch] = useReducer(TableReducer, new TableStore({rowData, pagination: configuration.header.pagination}))

    useEffect(() => {
        dispatch({type: ACTIONS.SET_ROW_DATA, payload: rowData})
    }, [rowData])

    const pagination = state.pagination

    return (
        <TableContext.Provider value={{state, dispatch, configuration}}>
            <DataFilter rowData={state.rowData}>
            {(rowData) => <TableComponent
                                rowData={rowData.slice(pagination.length * pagination.page, pagination.length * (pagination.page + 1))}
                                RowElement={RowElement}
                                HeadElement={HeadElement}
                                TableElement={TableElement}
                                FooterElement={FooterElement}
                            />
            }
            </DataFilter>
        </TableContext.Provider>
    )
}

