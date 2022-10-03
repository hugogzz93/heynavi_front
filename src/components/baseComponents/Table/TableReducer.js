import { useReducer } from 'react'
import { ErrorObject } from '../ErrorObject'

export class TableConfiguration {
    constructor({header, columns}) {
        if(header == undefined || columns == undefined)
            throw new ErrorObject({
                type: 'TableConfiguration Constructor',
                message: 'Either header or columns where not passed to constructor'
            })

        this.header = header;
        this.columns = columns;
        this.pagination = header.pagination;
    }

    columnLabels = () => this.columns.map(c => c.label)
    getFilterConfigById = (id) => this.columns.find(c => c.id == id)
    rowToArray = (data) => this.columns.reduce((arr, c) => {arr.push(c.renderFn ? () => c.renderFn(data) : c.valueFn(data)); return arr}, [])
}

export class TableStore {
    constructor({rowData, filterValues = [], pagination = {page: 0, length: 15}}) {
        if(!Array.isArray(rowData)) {
            throw new ErrorObject({type: 'Missing Parameters / Misconfiguration',
            message: 'Table was not handed a rowData array'})
        }
       
        this.rowData = rowData;
        this.filterValues = filterValues;
        this.pagination = {
            page: pagination.page,
            length: pagination.length
        }
    }
    getFilterValueById = (id) => this.filterValues[id]?.filterValue
    


}

export const ACTIONS = {
    REGISTER_FILTER: 'register_filter',
    DEREGISTER_FILTER: 'deregister_filter',
    SET_ROW_DATA: 'set_row_data',
    SET: 'set',
    SET_ORIGINAL: 'set_original',
    SET_PAGE: 'set_page',
    SET_PAGINATION_LENGTH: 'set_pagination_length'
}

export class ITableFilter {
    constructor({id, filterFn, filterValue}) {
        this.id = id;
        this.filterValue = filterValue;
        this.filterFn = (dataValue) => filterFn({filterValue: this.filterValue,
                                                 dataValue});
    }
}

export const TableReducer = (state, action) => {
    const updatedStore = (newState) => new TableStore(newState)

    switch(action.type) {
        case ACTIONS.ON_FILTER_VALUE_CHANGE:
            return updatedStore({
                ...state,
                filterValues: [
                    ...state.filterValues.filter(f => f.id != action.payload.id),
                    action.payload
                ]
            })
        case ACTIONS.SET_ROW_DATA:
            return updatedStore({
                ...state,
                rowData: action.payload
            })

        case ACTIONS.SET_PAGE:
            const ceil = Math.ceil(state.rowData.length / state.pagination.length)
            let nextPage = 0
            if(action.payload > 0)
                nextPage = action.payload > ceil ? state.pagination.page : action.payload


            return updatedStore({
                ...state,
                pagination: {
                    ...state.pagination,
                    page: nextPage
                }
            })
        case ACTIONS.SET_PAGINATION_LENGTH:
            return updatedStore({
                ...state,
                pagination: {
                    ...state.pagination,
                    length: action.payload
                }
            })
    }

    
}


export const TableStateReducer = (state, action)  => {
    switch(action.type) {
        case ACTIONS.SET: {
            const {id, key, value} = action.payload
            const original = state.original.find(o => state.getId(o) == id)
            const changedObject = {
                ...state.changes.find(c => c.id == id),
                id,
                [key]: value,
            }

            if(changedObject[key] == original[key]) delete changedObject[key]

            const stateChanges = state.changes.filter(c => c.id != changedObject.id)
            if(Object.keys(changedObject).length > 1) stateChanges.push(changedObject)


            const newState = {
                ...state,
                changes: stateChanges,
                current: state.original.map(o => {
                    const changed = stateChanges.find(c => c.id == state.getId(o))
                    return ({
                        ...o,
                        ...changed ? changed : {}
                    })
                })
            }


            return newState
        }
        case ACTIONS.SET_ORIGINAL: {
            return {
                original: action.payload,
                changes: [],
                current: action.payload,
                getId: r => r.id
            }
        }
    }
}


export const useTableStateReducer = () => {
    return useReducer(TableStateReducer, {original: [], changes: [], current: [], getId: (r) => r.id});
}
