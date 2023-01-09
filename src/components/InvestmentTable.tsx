import { useState, useReducer, useEffect } from 'react'
import { gsap } from 'gsap'
import { Meta } from '../layout/Meta';
import ReactTooltip from 'react-tooltip';
import Link from 'next/link';
import { Range } from 'react-range'
import { signIn, useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import moment from 'moment'

import Spinner from 'components/Spinner'

import { dehydrate, useQuery, useMutation } from 'react-query'
import { useGetInvestmentOptionsQuery } from '../api'
import { ACTIONS, Table, ITableConfiguration, ITableElementProps, ITableHeadElementProps, ThemeSelectElement, ThemeCheckboxElement } from 'components/baseComponents'
import { IDBType } from 'lib/database'
import { TFormResults, ClientQuestionAnswerInput } from 'pages/form'
import { Button } from 'button/Button'
import { Section } from 'layout/Section'
import { TAnswerType } from 'questions/Questionnaire'
import { InvestmentOption } from 'generated/graphql'

export const numberWithCommas = (x: number): String => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)



const InvestmentTableConfig = ({signIn, session, sliderValue, state, isAdmin = false}: {signIn: (arg0: string) => unknown, session: Session,  sliderValue: number, isAdmin: boolean, state: TInvestmentTableState}): ITableConfiguration => ({
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
                    return <img className='object-contain mx-auto' src={`${d.image.link}`} alt={d.nombre} style={{width: '13em'}}/>
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
			filterable: false,
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
			filterable: false,
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
            label: 'Plazo',
            id: 'tiempo',
            display: false,
			filterable: false,
            filterFn: ({filterValue, dataValue}) => dataValue.tiempo.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.tiempo
        },
        {
            label: 'Monto Mínimo de Inversión (en MXN)',
            id: 'montoMin',
            display: false,
			filterable: false,
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
            renderFn: d => {

                if(session?.user) {
                    return (
                    <Link href={`/view/${d.id}`} passHref>
                        <button>
                            <Button reverseHover>Ver más</Button>
                        </button>
                    </Link>
                    )
                    
                } else 
                    return (
                        <button onClick={() => signIn('google')}>
                            <Button reverseHover>Ver más</Button>
                        </button>

                    )

            }
        }
    ]
})



const InvestmentOptionCard: React.FC<{investmentOption: InvestmentOption, investmentValue: number}> = ({investmentOption, investmentValue}) => {
    return (
        <div className="bg-white border border-1 border-slate-300 rounded-md p-8 flex flex-col">
            <picture>
                <img className="object-contain w-40 mx-auto  h-20" src={`${investmentOption?.image?.link}`} alt={investmentOption.nombre} />
            </picture>

            <div className="flex items-center justify-between w-full">
                <div className="font-bold text-lg">Retorno Anual Promedio</div>
                { rentabilidadToNumber(investmentOption.rentabilidad) + '%'}
            </div>

            <div className="flex items-center justify-between w-full my-4">
                <div className="font-bold text-lg">Ganancia anual estimada</div>
                {'$' + numberWithCommas(Number(getGananciaAnual(investmentOption.rentabilidad, investmentValue).toFixed(2)))}
            </div>

            <div className="flex items-center justify-between w-full mb-4">
                <div className="font-bold text-lg">Riesgo</div>
                {investmentOption.riesgo}
            </div>


            <Link href={`/view/${investmentOption.id}`}>
                <div className="text-xl text-center button border border-2 border-purple-500 text-purple-500 bg-white px-6 py-2 rounded-xl">
                    Ver más
                </div>
            </Link>
        </div>
    )
}


const getGananciaAnual =  (rentabilidad: string, investment: number) => (
    Number(rentabilidadToNumber(rentabilidad)) * investment/100
)

const ThemeTableHeadElement: React.FC<ITableHeadElementProps> = ({columnNames}) => {
    return (
        <>
            <tr className='bg-white font-bold text-lg font-center border-b-1 border-b border-slate-300'>
                {columnNames.map((name: string) => {
                    return <td key={name} className='text-center'> 
                            {name}
                    </td>
                })}
            </tr>
        </>
    )
}

const FooterHOC: (arg0: () => unknown) => React.FC<any> = (cleanFilters) => {

    const ThemeFooterElement: React.FC<any> = ({state: {pagination, rowData}, dispatch}) => {
        // const {data: session} = useSession()
        const session = {
            user: true
        }
        const first = pagination.length * pagination.page
        const last = pagination.length * (pagination.page + 1)

        return (
            <div className="w-full flex flex-col items-center">
                    <div className="w-full">
                        <div className="flex item-center my-2 float-right">
                        {rowData.length > pagination.length && (
                            <>
                                <div>
                                    <span className="material-symbols-outlined text-slate-500 hover:text-slate-800 text-md cursor-pointer" onClick={() => session?.user ? dispatch({type: ACTIONS.SET_PAGE, payload: pagination.page - 1}) : signIn('google')}> arrow_left </span>
                                </div>
                                <div className="text-md text-slate-500 mx-2">{first} - {last} ({rowData.length})</div>
                                <div>
                                    <span className="material-symbols-outlined text-slate-500 hover:text-slate-800 text-md cursor-pointer" onClick={() => session?.user ? dispatch({type: ACTIONS.SET_PAGE, payload: pagination.page + 1}) : signIn('google')}> arrow_right </span>
                                </div>
                            </>
                        )}
                        </div>
                    </div>
                    <button className=' mx-auto bg-purple-500 text-white flex items-center rounded-md py-2 px-4'
                    onClick={cleanFilters}
                    >
                        Ver Todas
                    </button>
            </div>
        )
    }
    return ThemeFooterElement;
}


const ThemeTableElement: React.FC<ITableElementProps> = ({id, TableHead, TableBody, TableFooter}) => {
    return (
        <div className="max-w-full bg-transparent overflowX-scroll" id={id}>
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
        // const isDays = !!str.match(new RegExp(/dia/))
        const isMonths = !!str.match(new RegExp(/mes/))
        const isYears = !!str.match(new RegExp(/año/))
        if(isNaN(amount))
            return 0

        return amount * (isYears ? 12*30 : isMonths ? 30 : 1)
    } catch {
        return 0;
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

export const rentabilidadToNumber = (r: string): number => {
        if(r.indexOf('%') > -1)
            return Number(r.replace(/%/g, ''))
        else return Number(r)
}

export const riesgoToNumber = (riesgo: string) => {
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


export const InvestmentRange = ({value, onChange}: {value: number, onChange: (arg0: number) => unknown}) => {
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
                            className='outline-none'
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

const getRentabilidadOptions = (rows: InvestmentOption[]) => {
    let options = []
    const max = rows.reduce((acc, row) => {
        const rentabilidad = rentabilidadToNumber(row.rentabilidad);
        return acc > rentabilidad ? acc : rentabilidad;
    }, 0)


    const min = rows.reduce((acc, row) => {
        const rentabilidad = rentabilidadToNumber(row.rentabilidad);
        if(isNaN(rentabilidad))
            return acc;
        return acc < rentabilidad ? acc : rentabilidad;
    }, max)

    let count = min

    do {
        options.push({value: count + '%', label: count + '%'})
        if(Math.abs(count - max) < 5)
            options.push({value: max + '%', label: max + '%'})
        count += 5;
    } while(count < max)
    return options;

}

const InvestmentTableHeader = ({rows, state, dispatch}: {dispatch: DispatchType, rows: InvestmentOption[], state: TInvestmentTableState}) => {
    const filterableColumns = InvestmentTableConfig({sliderValue: state.sliderValue, state, isAdmin: false}).columns.filter(c => c.filterable !== false)

    const session = {
        user: true
    }
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
            bg-white rounded-md p-4 w-full flex-col flex mb-4 
            duration-300 transition-all 
            ${state.filterBarVisibility ? 'active' : ''}`}>
            <div className="flex justify-between items-center w-full">
                <div className="text-lg font-bold text-slate-900">
                    Quiero Invertir: ${numberWithCommas(state.sliderValue)} MXN
                </div>
                <button className='bg-purple-500 text-white flex items-center rounded-md py-2 px-4'
                    onClick={() => session?.user ? dispatch({type: "setFilterBarVisibility", payload: !state.filterBarVisibility}) : signIn('google')}
                >
                    Filtros <span className="material-symbols-outlined text-white ">filter_alt</span>
                </button>
            </div>
            <div className={` toggle-section justify-between flex box-border items-center ${state.filterBarVisibility ? 'active' : ''}` }>
                <div className="text-md w-1/3">¿Cuanto dinero te gustaría inverir?</div>
                <div className="w-3/5 md:w-2/3">
                    <InvestmentRange value={state.sliderValue} onChange={(v: number) => dispatch({type: "setSliderValue", payload: v})}/>
                </div>
            </div>
            <div className={` toggle-section items-center box-border grid grid-cols-12 gap-4 w-full ${state.filterBarVisibility ? 'active' : ''}`}>

                        <div className="col-span-12 md:col-span-4">
                            <ThemeSelectElement 
                                label={'Empresa'}
                                name={'empresa'}
                                isMulti
                                value={state.activeFilters['empresa'] || null}
                                options={rows.reduce((acc, r) =>{
                                    if(r.nombreEmpresa == '' || !r.nombreEmpresa)
                                        return acc;
                                    if(acc.memo[r.nombreEmpresa])
                                        return acc
                                    else
                                        return {
                                            memo: {
                                                ...acc.memo,
                                                [r.nombreEmpresa]: r.nombreEmpresa
                                            },
                                            empresas: [...acc.empresas, r.nombreEmpresa]
                                        }
                                }, {empresas: [], memo: {}}).empresas.map(e => ({label: e, value: e}))}
                                onChange={(e) => {
                                    dispatch({type: "setFilterValue", payload: {
                                        id: 'empresa',
                                        value: e
                                    }})
                                }}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-4">
                            <ThemeSelectElement 
                                label={'Retorno anual promedio'}
                                name={'rentabilidad'}
                                value={state.activeFilters['rentabilidad'] || null}
                                options={ [
                                            {value: 'Hasta 5%', label: 'Hasta 5%'},
                                            {value: 'De 6% a 10%', label: 'De 6% a 10%'},
                                            {value: '11% a 18%', label: '11% a 18%'},
                                            {value: 'Más de 18%', label: 'Más de 18%'},
                                        ]
                                }
                                onChange={(e) => {
                                    dispatch({type: "setFilterValue", payload: {
                                        id: 'rentabilidad',
                                        value: e
                                    }})
                                }}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-4">
                            <ThemeSelectElement 
                                label={'Plazo'}
                                name={'tiempo'}
                                value={state.activeFilters['tiempo'] || null}
                                options={[
                                    {value: '0 dias', label:  'Sin plazo mínimo'},
                                    {value: '1 mes', label:  '1 mes'},
                                    {value: '3 meses', label:  '3 meses'},
                                    {value: '6 meses', label:  '6 meses'},
                                    {value: '12 meses', label:  '12 meses'},
                                    {value: 'Más de 12 meses', label:  'Más de 12 meses'},
                                ]}
                                onChange={(e) => {
                                    dispatch({type: "setFilterValue", payload: {
                                        id: 'tiempo',
                                        value: e
                                    }})
                                }}
                            />
                        </div>
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
                {Array.from(valuesPerColumn?.tipo || []).map((name: string) => {
                    return (
                        <div className="col-span-12 md:col-span-4">
                            <ThemeCheckboxElement
                                value={state.investmentTypeFilters.length > 0 && state.investmentTypeFilters[name]}
                                onChange={(e) => dispatch({type: "setInvestmentTypeFilter", payload: {name, value: e.target.checked} })}
                                name={name.replaceAll(' ', '_')}
                                label={name}
                            />
                        </div>
                    )

                })}
            </div>
            <button className={` toggle-section w-full md:w-fit bg-red-500 text-white text-center rounded-md md:m-4 py-2 md:px-8 ${state.filterBarVisibility ? 'active' : ''} `}
                onClick={() => session?.user ? dispatch({type: "cleanFilters"}) : signIn('google')}
            >
                Eliminar Filtros
            </button>
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

const InitialInvestmentTableState = ({answers}: {answers: Array<ClientQuestionAnswerInput>}) => {
    const defaultState = {
            sortValue: 'Empresa',
            filterBarVisibility: false,
            investmentOptions: [],
            isFiltering: false,
            sliderValue: answers?.[0]?.customValue || 5000,
            activeFilters: {},
            filterableColumns: {},
            investmentTypeFilters: []
        }
    try {
        if(localStorage.getItem('filtersCleaned') == 'true')
            return defaultState
        const tiempoInvertidoAns = answers.find(a => a.questionId == '2')?.answerValue
        let tiempoMin = null
        switch(tiempoInvertidoAns) {
            case 'Menos de 3 meses':
                tiempoMin = {value: '3 meses', label:  '3 meses'}
                break;
            case 'De 3 a 6 meses':
                tiempoMin = {value: '6 meses', label: '6 meses'}
                break;
            case 'De 12 a 36 meses':
                tiempoMin = {value: '12 meses', label:  '12 meses'}
                break;
            case 'Más de 36 meses':
                tiempoMin = {value: 'Más de 12 meses', label:  'Más de 12 meses'}
                break;
            default: 
                throw "Invalid answer for default filter tiempoMin"
        }
        const riesgoAns = answers.find(a => a.questionId == '4')?.answerId
        let riesgo = null
        switch(riesgoAns) {
            case '10':
                riesgo = 'Bajo'
                break;
            case '11':
                riesgo = 'Moderado'
                break;
            case '12':
                riesgo = 'Alto'
                break;
            case '13':
                riesgo = 'Alto'
                break;
            default: 
                throw "Invalid answer for default filter tiempoMin"
        }
        let activeFilters = {
            'montoMin':  {value: answers.find(a => a.questionId == '1')?.customValue},
            'tiempo': tiempoMin,
            'riesgo': {value: riesgo, label: riesgo}
        } 
        activeFilters
        return {
            sortValue: 'Empresa',
            filterBarVisibility: false,
            investmentOptions: [],
            isFiltering: false,
            sliderValue: answers?.[0]?.customValue || 5000,
            activeFilters,
            filterableColumns: {},
            investmentTypeFilters: []
        }
    } catch (e) {
        return defaultState

    }
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
        case "cleanFilters": {
            localStorage.setItem('filtersCleaned', 'true')
            return {
                ...state,
                activeFilters: [],
                investmentTypeFilters: [],
            }

        }
        default:
            return state;
    }
}

const filter = (state: TInvestmentTableState) => (row: InvestmentOption): boolean => {
    try {
        if(state.investmentOptions.length > 0 && state.investmentTypeFilters.every(t => t != row.tipo )) {
            return false
        }

        if(state.activeFilters['empresa'] && state.activeFilters['empresa'].length > 0 && !state.activeFilters['empresa'].some(val => val.value == row.nombreEmpresa))
            return false
        if(state.activeFilters['nombre'] && state.activeFilters['nombre'].length > 0 && !state.activeFilters['nombre'].some(val => val.value == row.nombre))
            return false
        if(state.activeFilters['rentabilidad']) {
            switch(state.activeFilters['rentabilidad'].value) {
                case 'Hasta 5%': {
                    return (rentabilidadToNumber(row.rentabilidad) <= 5 )
                }
                case 'De 6% a 10%': {
                    return (rentabilidadToNumber(row.rentabilidad) > 5 && rentabilidadToNumber(row.rentabilidad) <= 10 )
                }
                case '11% a 18%': {
                    return (rentabilidadToNumber(row.rentabilidad) > 10 && rentabilidadToNumber(row.rentabilidad) <= 18 )
                }
                case 'Más de 18%': {
                    return (rentabilidadToNumber(row.rentabilidad) > 18 )
                }
                default:
                    return false
            }

            // if(Number(rentabilidadToNumber(state.activeFilters['rentabilidad'].value)) > Number(rentabilidadToNumber(row.rentabilidad)))
            //     return false
        }
        if(state.activeFilters['riesgo'] && !riesgoValid({ row, riesgo: state.activeFilters['riesgo'].value})) {
            return false
        }
        if(state.activeFilters['tiempo'] && state.activeFilters['tiempo'].length > 0 && state.activeFilters['tiempo'].every(val => plazoMinimoValid({row, plazoMinimo: val.value})))
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

const InvestmentTable: React.FC<TFormResults> = ({answers}) => {
    const [state, dispatch] = useReducer<ReducerType>(reducer, InitialInvestmentTableState({answers}))
    const {data, loading} = useGetInvestmentOptionsQuery()
    // const { data: session } = useSession()
    const session = {user: true}
    if(loading)
        return (
            <div className="container mx-auto flex items-center justify-center py-96">
                <Spinner/>
            </div>
        )


    let rows: InvestmentOption[] = data?.investmentOptions || []

    if(rows.length < 3)
        rows = rows.slice(0,3)

    const tableConfiguration = InvestmentTableConfig({signIn, session, sliderValue: state.sliderValue, state,  isAdmin: localStorage.getItem('tasp.capr') == 'true'});
    const columnNames: string[] = tableConfiguration.columns.filter(t => t.display !== false).map(t => t.label)

    const rowData = rows.filter(filter(state)).sort((a,b) => {
        if(state?.sortValue) {
            switch(state.sortValue) {
                case "Empresa":
                    if(a.nombre[0] == 'A')
                        debugger
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
    })

    return (
        <div className='container mx-auto'>
                    <Meta title={'Vali Investment Options'} description={'Investment Table Options'} />
                    <div className='container mx-auto max-w-screen-lg px-3'>
                        <InvestmentTableHeader 
                            rows={rows}
                            state={state} 
                            dispatch={dispatch}
                        />
                        <div className="flex justify-center flex-col">
                            <div className="md:bg-white rounded-md py-4 overflow-x-hidden">
                                <div className="flex w-full justify-between grid grid-cols-12 gap-4">
                                    <div className='hidden md:col-span-8 md:block'></div>
                                    <div className='bg-white p-4 md:p-0 px-4 col-span-12 md:col-span-4 flex items-center'>
                                        <ThemeSelectElement
                                            name='sortOption' 
                                            label='Ordenar Por'
                                            value={state.sortValue}
                                            options={columnNames.filter((name: string) => name != '' && name != 'Ganancia anual estimada').map((name: string) => ({value: name, label: name}))}
                                            onChange={(sortValue: any) => {
                                                session?.user ? dispatch({type: "setSortOption", payload: sortValue.value as string})
                                                : signIn('google')
                                            }}
                                        />
                                        <span className="mx-4 text-purple-500 material-symbols-outlined text-4xl" style={{transform: 'translateY(-10%)'}}> edit_square </span>
                                    </div>
                                </div>
                                <div className="hidden md:block bg-white w-full overflow-x-scroll md:overflow-visible">
                                        <Table
                                            rowData={rowData}
                                            configuration={tableConfiguration}
                                            TableElement={ThemeTableElement}
                                            HeadElement={ThemeTableHeadElement}
                                            FooterElement={FooterHOC(() => session?.user ? dispatch({type: "cleanFilters"}) : signIn('google'))}
                                        />
                                </div>

                                <div className="flex flex-col block md:hidden w-full">
                                    {rowData.map(row => (
                                        <div className="my-2">
                                            <InvestmentOptionCard investmentValue={state.sliderValue} investmentOption={row}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default InvestmentTable;
