import { useState, useReducer, useEffect } from 'react'
import { gsap } from 'gsap'
import { Meta } from '../layout/Meta';
import ReactTooltip from 'react-tooltip';
import Link from 'next/link';
import { Range } from 'react-range'
import moment from 'moment'

import { dehydrate, useQuery, useMutation } from 'react-query'
import { useGetInvestmentOptionsQuery } from '../api'
import { Table, ITableConfiguration, ITableElementProps, ITableHeadElementProps, ThemeSelectElement, ThemeCheckboxElement } from 'components/baseComponents'
import { IDBType } from 'lib/database'
import { TFormResults } from 'pages/form'
import { Button } from 'button/Button'
import { Section } from 'layout/Section'
import { TAnswerType } from 'questions/Questionnaire'
import { InvestmentOption } from 'generated/graphql'

const numberWithCommas = (x: number): String => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)



const InvestmentTableConfig = ({sliderValue, state, isAdmin = false}: {sliderValue: number, isAdmin: boolean, state: TInvestmentTableState}): ITableConfiguration => ({
    header: {
        id: 'list-investment-options',
        idColumn: 'nombre',
        getId: (d) => d.nombre,
        tableActions: [],
        pagination: {
            length: 5,
            page: 0
        }
    },
    columns: [
        { 
            label: 'Link Edit',
            id: 'link',
            display: isAdmin,
			filterable: false,
            renderFn: (d) => {
                return <Link href={`/edit/${d.id}`}>
                    Edit
                </Link>
            }
        },
        { 
            label: 'Empresa',
            id: 'image',
			filterable: false,
            renderFn: (d) => {
                if(d.image?.link)
                    return <img className='object-contain' src={`${d.image.link}`} alt={d.nombre} style={{width: '13em'}}/>
                return <div>{d.nombre}</div>
            },
            filterFn: ({filterValue, dataValue}) => { return dataValue.tipo.match(new RegExp(filterValue, 'i'))},
        },{ 
            label: 'Tipo',
            id: 'tipo',
            display: false,
			filterable: false,
            valueFn: (d) => d.tipo,
            filterFn: ({filterValue, dataValue}) => { return dataValue.tipo.match(new RegExp(filterValue, 'i'))},
        },
        {
            label: 'Nombre Inversión',
            id: 'nombre',
            display: false,
			filterable: !state['nombre'],
            valueFn: (d) => d.nombre,
            filterFn: ({filterValue, dataValue}) => {return dataValue.nombre.match(new RegExp(filterValue, 'i'))},
        },
        {
            label: 'Descripción',
            id: 'descripción',
            display: false,
			filterable: false,
            filterFn: ({filterValue, dataValue}) => dataValue.descripcion.match(new RegExp(filterValue, 'i')),
            renderFn: d => (
                    <div data-tip={d.descripcion}>
                        <span className="material-symbols-outlined"> info </span>
                        <ReactTooltip/>
                    </div>
            )
        },
        {
            label: 'Retorno anual promedio',
            id: 'rentabilidad',
			filterable: !state['rentabilidad'],
            filterFn: ({filterValue, dataValue}) => dataValue.rentabilidad.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => { 
                return rentabilidadToNumber(d.rentabilidad) + '%'
            }
        },
        {
            label: 'Riesgo',
            id: 'riesgo',
            display: false,
			filterable: !state['riesgo'],
            filterFn: ({filterValue, dataValue}) => dataValue.riesgo.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.riesgo
        },
        {
            label: 'Tiempo Mínimo',
            id: 'tiempo',
            display: false,
			filterable: !state['tiempo'],
            filterFn: ({filterValue, dataValue}) => dataValue.tiempo.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.tiempo
        },
        {
            label: 'Monto Mínimo de Inversión (en MXN)',
            id: 'montoMin',
            display: false,
			filterable: !state['monto'],
            filterFn: ({filterValue, dataValue}) => {try {return Number(dataValue.montoMin) >= Number(filterValue)} catch(e) {return false}},
            valueFn: (d) => '$' + numberWithCommas(d.montoMin)
        },
        {
            label: 'Tipo de Inversión ',
            id: 'fijaVariable',
            display: false,
			filterable: false,
            filterFn: ({filterValue, dataValue}) => dataValue.fijaVariable.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.fijaVariable
        },
        {
            label: 'Contacto',
            id: 'contacto',
            display: false,
			filterable: false,
            renderFn: _ => (
                <td>
                    <a className='text-blue-500 cursor-pointer' href="https://api.whatsapp.com/send/?phone=5218132647979&text=Hola%2C+me+podr%C3%ADan+apoyar+a+resolver+mis+dudas%3F&type=phone_number&app_absent=0">Contacto</a>
                </td>
            )
        },
        {
            label: 'Ganancia anual estimada',
            id: 'profit',
            filterable: false,
            filterFn: ({filterValue, dataValue}) => {
                try {
                    const num = Number(getGananciaAnual(dataValue.rentabilidad, sliderValue))
                    return num >= Number(filterValue)
                } catch(e) {
                    return false
                }
            },
            renderFn: d => <div className='text-blue-500'>{'$' + numberWithCommas(getGananciaAnual(d.rentabilidad, sliderValue).toFixed(2))}</div>
        },{
            label: '',
            id: 'viewMore',
            filterable: false,
            renderFn: _ => (
                <Button reverseHover>Ver más</Button>
            )
        }
    ]
})


const getGananciaAnual =  (rentabilidad: string, investment: number) => (
    Number(rentabilidadToNumber(rentabilidad)) * investment/100

)

const ThemeTableHeadElement: React.FC<ITableHeadElementProps> = ({columnNames}) => {
    return (
        <>
            <tr className='bg-white font-bold text-lg font-center border-b-1 border-b border-slate-300'>
                {columnNames.map((name: string) => {
                    return <td key={name}> 
                        <div className="flex items-center text-sm text-center">
                            {name}
                        </div>
                    </td>
                })}
            </tr>
        </>
    )
}

const ThemeTableElement: React.FC<ITableElementProps> = ({id, TableHead, TableBody, FilterComponents, TableFooter}) => {
    return (
        <div className="w-full bg-transparent" id={id}>
            <table className='content__table'>
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


const extractPlazoMinimoFromOption = (str: string): number => {
    try {
        const amount = Number(str.match(new RegExp(/\d\.*\d*/))?.[0]);
        const isDays = !!str.match(new RegExp(/dia/))
        const isMonths = !!str.match(new RegExp(/mes/))
        const isYears = !!str.match(new RegExp(/año/))
        if(isNaN(amount))
            return 99999

        return amount * (isYears ? 12*30 : isMonths ? 30 : 1)
    } catch {
        return 99999;
    }
}


const plazoMinimoValid = ({row, plazoMinimo}: {row: any, plazoMinimo: any}) => {
    return extractPlazoMinimoFromOption(row.tiempo) > extractPlazoMinimoFromOption(plazoMinimo)
    // let value = false
    // if(plazoMinimo == 1) 
    //     value = extractPlazoMinimoFromOption(row.tiempo) <= 3
    // else if(plazoMinimo == 2)
    //     value = extractPlazoMinimoFromOption(row.tiempo) >= 3 && extractPlazoMinimoFromOption(row.tiempo) <= 6
    // else if(plazoMinimo == 3)
    //     value = extractPlazoMinimoFromOption(row.tiempo) >= 12 && extractPlazoMinimoFromOption(row.tiempo) <= 36
    // else if(plazoMinimo == 4)
    //     value = extractPlazoMinimoFromOption(row.tiempo) >= 36
    // else if(plazoMinimo == 5)
    //     value = true
    // return value
}

const disponibilidadValid = ({row, disponibilidad}: {row: any, disponibilidad: any}) => {
    let value = false
    if(disponibilidad == 5) 
         value = !!row.recurrencia.match(new RegExp(/Diaria/))
    else if(disponibilidad == 6)
         value = !!row.recurrencia.match(new RegExp(/\(Semanal|Diaria|No aplica\)/))
    else if(disponibilidad == 7)
         value = !!row.recurrencia.match(new RegExp(/Mensual/))
    else if(disponibilidad == 8)
         value = !!row.recurrencia.match(new RegExp(/\(Trimestral|Semestral\)/))
    else if(disponibilidad == 9)
         value = !!row.recurrencia.match(new RegExp(/\(Anual|Semestral\)/))

    return value
}

const rentabilidadToNumber = (r: string): number => {
        if(r.indexOf('%') > -1)
            return Number(r.replace(/%/g, ''))
        else return Number(r)
}

const riesgoToNumber = (riesgo: string) => {
    switch(riesgo) {
        case "Muy Bajo":
            return 0;
        case "Bajo":
            return 1;
        case "Moderado":
            return 2;
        case "Alto":
            return 3
        case "Muy Alto":
            return 4
        default:
            throw "Invalid Riesgo"
    }
}

const sorters = (type: string) => {
    switch(type) {
        case "nombre":
            return (a: string, b: string) => a.localeCompare(b)
        case "riesgo":
            return (a: string, b: string) => riesgoToNumber(a) - riesgoToNumber(b)
        case "tiempo": 
            return (a: string, b: string) => extractPlazoMinimoFromOption(a) - extractPlazoMinimoFromOption(b)
        case "montoMin":
            return (a: string, b: string) => Number(a) - Number(b)
        case "rentabilidad":
            return (a: string, b: string) => rentabilidadToNumber(a) - rentabilidadToNumber(b)
        default:
            throw "Invalid Sorter key " + type

    }
}

const riesgoValid = ({row, riesgo}: {row: any, riesgo: any}) => {
    return riesgoToNumber(row.riesgo) == riesgoToNumber(riesgo)
}

// export async function getServerSideProps({params}: {params: any}) {
//     await queryClient.prefetchQuery("getInvestmentOption", () => GetInvestmentOptions())
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         }
//     }
// }


const InvestmentRange = ({value, onChange}: {value: number, onChange: (arg0: number) => unknown}) => {


    return (
            <div className="w-full">
                <Range
                    step={5000}
                    values={[value]}
                    min={0}
                    max={500000}
                    onChange={(values: any) => {
                        onChange(values)
                    }}
                    renderTrack={({props, children}) => (
                        <div {...props}
                            style={{
                                ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({props}) => (
                        <div
                            {...props}
                            style={{...props.style}}
                        >
                            <div className={` my-2 text-lg text-purple-500 font-bold absolute top-0`}
                                style={{top: '-120%', transform: 'translateX(-50%)', left: '50%', textAlign: 'center', minWidth: '9em'}}
                                >${numberWithCommas(value)} {value == 500000 ? 'o más' : ''}</div>
                            <div 
                                className='slider__thumb rounded-md bg-purple-500'
                                style={{
                                    height: '28px',
                                    width: '28px',
                                }}
                            />
                        </div>
                    )}
                />
        </div>
    )
}

const InvestmentTableHeader = ({rows, state, dispatch}: {dispatch: DispatchType, rows: InvestmentOption[], state: TInvestmentTableState}) => {
    const filterableColumns = InvestmentTableConfig({sliderValue: state.sliderValue, state, isAdmin: false}).columns.filter(c => c.filterable !== false)
    // const availableInvestmentTypes = Object.keys(rows.reduce((acc: any, curr:  InvestmentOption) => {
    //     if(!acc[curr.tipo])
    //         acc[curr.tipo] = true;
    //     return acc;
    // }, {}))

    const valuesPerColumn = rows.reduce((acc: {[key: string]: Set<string>} , curr: InvestmentOption) => {
        Object.keys(curr).forEach((key: string) => {
            if(["__typename", "id"].includes(key)) {}
            else {
                if(!acc[key])
                    acc[key] = new Set<string>()
                acc[key].add(curr[key])
            }
        })
        return acc;
    }, {} as {[key: string]: Set<string>})

    useEffect(() => {

        if(state.filterBarVisibility)
            gsap.to('#investment-table-header > .toggle-section', {opacity: 1, maxHeight: '100vh', overflowY: 'visible', duration: 0.3})
        else
            gsap.to('#investment-table-header > .toggle-section', {opacity: 0, maxHeight: '0', overflowY: 'hidden', duration: 0.1})
    }, [state.filterBarVisibility])

    return (
        <div id='investment-table-header' className={` 
            bg-white rounded-md p-4 w-full flex-col flex my-4 
            duration-300 transition-all 
            ${state.filterBarVisibility ? 'active' : ''}`}>
            <div className="flex justify-between items-center w-full">
                <div className="text-lg font-bold text-slate-900">
                    Quiero Invertir: ${numberWithCommas(state.sliderValue)} MXN
                </div>
                <button className='bg-purple-500 text-white flex items-center rounded-md py-2 px-4'
                    onClick={() => dispatch({type: "setFilterBarVisibility", payload: !state.filterBarVisibility})}
                >
                    Filtros <span className="material-symbols-outlined text-white ">filter_alt</span>
                </button>
            </div>
            <div className={` toggle-section flex box-border items-center ${state.filterBarVisibility ? 'active' : ''}` }>
                <div className="text-md w-1/3">¿Cuanto dinero te gustaría inverir?</div>
                <div className="w-2/3">
                    <InvestmentRange value={state.sliderValue} onChange={(v: number) => dispatch({type: "setSliderValue", payload: v})}/>
                </div>
            </div>
            <div className={` toggle-section items-center box-border grid grid-cols-12 gap-4 w-full ${state.filterBarVisibility ? 'active' : ''}`}>
                {filterableColumns.map(f => {
                    try {
                    return (
                        <div className="col-span-12 md:col-span-4">
                            <ThemeSelectElement key={f.id} 
                                label={f.label.length > 20 ? `${f.label.substring(0, 20)}...` : f.label}
                                name={f.id}
                                value={state.activeFilters[f.id] || null}
                                options={Array.from(valuesPerColumn[f.id]).sort(sorters(f.id)).map(t => ({label: t, value: t}))}
                                onChange={(e) => {
                                    dispatch({type: "setFilterValue", payload: {
                                        id: f.id,
                                        value: e
                                    }})
                                }}
                            />
                        </div>
                    )
                    } catch(e) {
                        return <div></div>
                    }

                })}
            </div>

            <div className={` toggle-section box-border grid grid-cols-12 gap-4 w-full ${state.filterBarVisibility ? 'active' : ''}`}>
                <div className="text-md col-span-12 text-left">Seleccionar por tipo:</div>
                {Array.from(valuesPerColumn.tipo).map((name: string) => {
                    return (
                        <div className="col-span-12 md:col-span-4">
                            <ThemeCheckboxElement
                                value={state.investmentTypeFilters[name]}
                                onChange={(e) => dispatch({type: "setInvestmentTypeFilter", payload: {name, value: e.target.checked} })}
                                name={name.replaceAll(' ', '_')}
                                label={name}
                            />
                        </div>
                    )

                })}
            </div>
        </div>
    )

}

type ReducerType = (prevState: TInvestmentTableState, action: TActionType) => TInvestmentTableState;
type DispatchType = (arg0: TActionType) => unknown;

type TInvestmentTableState = {
    sortValue: string;
    investmentOptions: InvestmentOption[];
    isFiltering: boolean;
    filterBarVisibility: boolean;
    sliderValue: number;
    activeFilters: {
        label: string;
        value: any;
    }[];
    investmentTypeFilters: string[];
    filterableColumns: {[key: string]: string};
}

const InitialInvestmentTableState = {
    sortValue: '',
    filterBarVisibility: false,
    investmentOptions: [],
    isFiltering: false,
    sliderValue: 5000,
    activeFilters: [],
    filterableColumns: {},
    investmentTypeFilters: []
}

type TActionType = {
    type: string;
    payload: any;
}

const reducer: ReducerType = (state, action) => {
    switch(action.type) {
        case "setSortOption": {
            return {
                ...state,
                sortValue: action.payload
            }
        }
        case "setFilterBarVisibility": {
            return {
                ...state,
                filterBarVisibility: action.payload
            }
        }
        case "setSliderValue": {
            return {
                ...state,
                sliderValue: action.payload
            }
        }

        case "setFiltersActive": {
            return {
                ...state,
                isFiltering: action.payload
            }
        }
        case "setFilterValue": {
            if(action.payload.value)
                return {
                    ...state,
                    activeFilters: {
                        ...state.activeFilters,
                        [action.payload.id]: action.payload.value
                    }
                }
            else {
                let newState = {...state}
                delete newState[action.payload.id]
                return newState

            }
        }
        case "setInvestmentTypeFilter": {
            return {
                ...state,
                investmentTypeFilters: action.payload.value ? [...state.investmentTypeFilters, action.payload.name] : state.investmentTypeFilters.filter(t => t != action.payload.name)
            }
        }
        default:
            return state;
    }
}

const filter = (state: TInvestmentTableState) => (row: InvestmentOption): boolean => {
    try {
        if(state.investmentTypeFilters.some(t => t != row.tipo )) {
            return false
        }

        if(state.activeFilters['nombre'] && state.activeFilters['nombre'].value != row.nombre)
            return false
        if(state.activeFilters['rentabilidad']) {
            if(Number(rentabilidadToNumber(state.activeFilters['rentabilidad'].value)) > Number(rentabilidadToNumber(row.rentabilidad)))
                return false
        }
        if(state.activeFilters['riesgo'] && !riesgoValid({ row, riesgo: state.activeFilters['riesgo'].value})) {
            return false
        }
        if(state.activeFilters['tiempo'] && !plazoMinimoValid({row, plazoMinimo: state.activeFilters['tiempo'].value}))
            return false
        if(state.activeFilters['montoMin'] && Number(state.activeFilters['montoMin'].value) > Number(row.montoMin))
            return false


        return true;
    }
    catch(e) {
        console.log(e)
        return false;
    }
}

const InvestmentTable: React.FC<TFormResults> = () => {
    const [state, dispatch] = useReducer<ReducerType>(reducer, InitialInvestmentTableState)
    const {data, loading} = useGetInvestmentOptionsQuery()
    if(loading)
        return <div>Loading</div>

    // const filter = (): boolean => {
    //         return true;


    //     // const montoMinimo = answers.find(a => a.questionId == 1).customValue
    //     // const plazoMinimo = answers.find((a: TAnswerType) => a.questionId == 2).answerId
    //     // const disponibilidad = answers.find((a: TAnswerType) => a.questionId == 3).answerId
    //     // const riesgo = answers.find((a: TAnswerType) => a.questionId == 4).answerId

    //     // if(row.montoMin > montoMinimo) return false
    //     // const disp =  disponibilidadValid({row, disponibilidad}) 
    //     // const riesg = riesgoValid({row, riesgo}) 
    //     // const plaz = plazoMinimoValid({row, plazoMinimo})
    //     // return disp && riesg && plaz
    // }

    let rows: InvestmentOption[] = data?.investmentOptions || []
    // if(data?.investmentOptions)
    //     rows = [...data?.investmentOptions]

    // if(state.isFiltering)
    //     rows = rows.filter(filter).slice(0,3)

    if(rows.length < 3)
        rows = rows.slice(0,3)

    const tableConfiguration = InvestmentTableConfig({sliderValue: state.sliderValue, state,  isAdmin: localStorage.getItem('tasp.capr') == 'true'});
    const columnNames: string[] = tableConfiguration.columns.filter(t => t.display !== false).map(t => t.label)

    return (
        <div>
                    <Meta title={'Vali Investment Options'} description={'Investment Table Options'} />
                    <Section title='Base de Inversiones México'>
                        <InvestmentTableHeader 
                            rows={rows}
                            state={state} 
                            dispatch={dispatch}
                        />
                        <div className="flex justify-center flex-col">
                            <div className="bg-white rounded-md py-4">
                            <div className="flex w-full justify-between grid grid-cols-12 gap-4">
                                <div className='hidden md:col-span-6 md:block'></div>
                                <div className='px-4 col-span-12 md:col-span-6 flex items-center'>
                                    <ThemeSelectElement
                                        name='sortOption' 
                                        label='Ordenar Por'
                                        value={state.sortValue}
                                        options={columnNames.filter((name: string) => name != '').map((name: string) => ({value: name, label: name}))}
                                        onChange={(sortValue: any) => {
                                            dispatch({type: "setSortOption", payload: sortValue.value as string})
                                        }}
                                    />
                                    <span className="ml-4 text-purple-500 material-symbols-outlined text-4xl" style={{transform: 'translateY(-10%)'}}> edit_square </span>
                                </div>
                            </div>

                                <Table
                                    rowData={rows.filter(filter(state)).sort((a,b) => {
                                        if(state?.sortValue) {
                                            switch(state.sortValue) {
                                                case "Empresa":
                                                    return a.nombre.localeCompare(b.nombre);
                                                case "Retorno anual promedio":
                                                    return Number(rentabilidadToNumber(b.rentabilidad)) - Number(rentabilidadToNumber(a.rentabilidad));
                                                case "Ganancia anual estimada": 
                                                    return getGananciaAnual(b.rentabilidad, state.sliderValue) - getGananciaAnual(a.rentabilidad, state.sliderValue)
                                                default: 
                                                    return a.nombre.localeCompare(b.nombre);
                                            }

                                        } else {
                                            return Number(a.id) - Number(b.id);
                                        }
                                    })}
                                    configuration={tableConfiguration}
                                    TableElement={ThemeTableElement}
                                    HeadElement={ThemeTableHeadElement}
                                />
                            </div>
                        </div>
                    </Section>
        </div>
    )
}

export default InvestmentTable;
