import { useState } from 'react'
import { Meta } from '../layout/Meta';
import ReactTooltip from 'react-tooltip';
import Link from 'next/link';
import { Range } from 'react-range'
import moment from 'moment'

import { dehydrate, useQuery, useMutation } from 'react-query'
import { useGetInvestmentOptionsQuery } from '../api'
import { Table, ITableConfiguration, ITableElementProps, ITableHeadElementProps } from 'components/baseComponents'
import { IDBType } from 'lib/database'
import { TFormResults } from 'pages/form'
import { Button } from 'button/Button'
import { Section } from 'layout/Section'
import { TAnswerType } from 'questions/Questionnaire'

const numberWithCommas = (x: number): String => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)



const InvestmentTableConfig = ({sliderValue, state, setState, isAdmin = false}: {sliderValue: number, isAdmin: boolean, state: {[key: string]: boolean}, setState: (arg0: any) => any}): ITableConfiguration => ({
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
            label: 'Logo',
            id: 'image',
			filterable: false,
            renderFn: (d) => {
                if(d.image?.link)
                    return <img className='object-contain' src={`${d.image.link}`} alt="" style={{width: '13em'}}/>
                return <div></div>
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
            label: 'Rentabilidad Anual Bruta',
            id: 'rentabilidad',
			filterable: !state['rentabilidad'],
            filterFn: ({filterValue, dataValue}) => dataValue.rentabilidad.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => { 
                debugger
                if(d.rentabilidad.indexOf('%') > -1)
                    return Number(d.rentabilidad.replace(/%/g, '')).toFixed(2) + '%'
                else return d.rentabilidad
            }
        },
        {
            label: 'Riesgo',
            id: 'riesgo',
			filterable: !state['riesgo'],
            filterFn: ({filterValue, dataValue}) => dataValue.riesgo.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.riesgo
        },
        {
            label: 'Tiempo Mínimo',
            id: 'tiempo',
			filterable: !state['tiempo'],
            filterFn: ({filterValue, dataValue}) => dataValue.tiempo.match(new RegExp(filterValue, 'i')),
            valueFn: (d) => d.tiempo
        },
        {
            label: 'Monto Mínimo de Inversión (en MXN)',
            id: 'monto',
			filterable: !state['monto'],
            filterFn: ({filterValue, dataValue}) => {try {return Number(dataValue.montoMin) >= Number(filterValue)} catch(e) {return false}},
            valueFn: (d) => '$' + numberWithCommas(d.montoMin)
        },
        {
            label: 'Tipo de Inversión ',
            id: 'fijaVariable',
			filterable: false,
            display: false,
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
            label: 'Mi ganancia anual estimada',
            id: 'profit',
            filterable: !state['profit'],
            filterFn: ({filterValue, dataValue}) => {
                try {
                    const num = Number(dataValue.rentabilidad.replace('%', ''))*sliderValue/100 
                    return num >= Number(filterValue)
                } catch(e) {
                    return false
                }
            },
            renderFn: d => <div className='text-blue-500'>{'$' + numberWithCommas((Number(d.rentabilidad.replace('%', ''))*sliderValue/100).toFixed(2))}</div>
        }
    ]
})


const ThemeTableHeadElement: React.FC<ITableHeadElementProps & {state: any, setState: (arg0: any) => void}> = ({columns, columnNames, state, setState}) => {
    return (
        <tr className='bg-gray-200 font-bold'>
            {columnNames.map((name: string, idx: number) => {
                if(name != 'Descripción' && name != 'Contacto') 
                    return (

                        <td key={name} onClick={() => setState(columns[idx].id)}>
                            <div data-tip={`${state[columns[idx].id] ? 'Quitar' : 'Agregar'} Filtro de ${name}`}>
                                    <div className="flex items-center">
                                        {name}
                                        <span className="material-symbols-outlined"> search </span>
                                    </div>
                                <ReactTooltip/>
                            </div>
                        </td>
                    )
                return (
                    <td key={name}> 
                        <div className="flex items-center">
                            {name}
                        </div>
                    </td>
                )
            })}
        </tr>
    )
}

const ThemeTableElement: React.FC<ITableElementProps> = ({id, TableHead, TableBody, FilterComponents, TableFooter}) => {
    return (
        <div className="w-full bg-transparent" id={id}>
            <FilterComponents/>
            <table className='content__table shadow-lg rounded-md'>
                <thead>
                    <TableHead/>
                </thead>
                <tbody>
                    <TableBody/>
                </tbody>
            </table>
            <div className="text-sm">Información actualizada al {moment(new Date()).format('DD/MM/YYYY')}</div>
            <TableFooter/>
        </div>
    )
}


const extractPlazoMinimoFromOption = (str: string): number => {
    try {
        const amount = Number(str.match(new RegExp(/\d\.*\d*/))?.[0]);
        const isYears = !!str.match(new RegExp(/años/))
        if(isNaN(amount))
            return 999
        return amount * (isYears ? 12 : 1)
    } catch {
        return 999;
    }
}


const plazoMinimoValid = ({row, plazoMinimo}: {row: any, plazoMinimo: any}) => {
    let value = false
    if(plazoMinimo == 1) 
        value = extractPlazoMinimoFromOption(row.tiempo) <= 3
    else if(plazoMinimo == 2)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 3 && extractPlazoMinimoFromOption(row.tiempo) <= 6
    else if(plazoMinimo == 3)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 12 && extractPlazoMinimoFromOption(row.tiempo) <= 36
    else if(plazoMinimo == 4)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 36
    else if(plazoMinimo == 5)
        value = true
    return value
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

const riesgoValid = ({row, riesgo}: {row: any, riesgo: any}) => {
    let value = false
    if(riesgo == 10)
        value = row.riesgo == 'Bajo'
    else if(riesgo == 11)
        value = row.riesgo == 'Moderado' || row.riesgo == 'Bajo'
    else if(riesgo == 12 || riesgo == 13)
        value = row.riesgo == 'Alto'
    return value
}

// export async function getServerSideProps({params}: {params: any}) {
//     await queryClient.prefetchQuery("getInvestmentOption", () => GetInvestmentOptions())
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         }
//     }
// }


const InvestmentTable: React.FC<TFormResults> = ({answers}) => {
    const [sliderValue, setSliderValue] = useState<any>([5000])
    const [isFiltering, setFiltering] = useState(true)
    const [filterableColumns, setFilterableColumns] = useState({})
    const isAdmin = localStorage.getItem('tasp.capr') == 'true'
    // const {data, isLoading} = useQuery('getInvestmentOption', () => GetInvestmentOptions())
    const {data, loading} = useGetInvestmentOptionsQuery()
    if(loading)
        return <div>Loading</div>

    const filter = (row: IDBType) => {
        if(isAdmin)
            return true;


        const montoMinimo = answers.find(a => a.questionId == 1).customValue
        const plazoMinimo = answers.find((a: TAnswerType) => a.questionId == 2).answerId
        const disponibilidad = answers.find((a: TAnswerType) => a.questionId == 3).answerId
        debugger
        const riesgo = answers.find((a: TAnswerType) => a.questionId == 4).answerId

        if(row.montoMin > montoMinimo) return false
        const disp =  disponibilidadValid({row, disponibilidad}) 
        const riesg = riesgoValid({row, riesgo}) 
        const plaz = plazoMinimoValid({row, plazoMinimo})
        return disp && riesg && plaz
    }

    let rows = []
    debugger
    if(data?.investmentOptions)
        rows = [...data?.investmentOptions]

    if(isFiltering)
        rows = rows.filter(filter).slice(0,3)

    if(rows.length < 3)
        rows = rows.slice(0,3)

    const HeadElement: React.FC<ITableHeadElementProps> = (props) => {
        return <ThemeTableHeadElement 
                {...props}
                state={filterableColumns}
                setState={(columnId: string) => {setFilterableColumns({...filterableColumns, [columnId]: !filterableColumns[columnId]})}}
            />
    }

    return (
        <div>
                    <Meta title={'Vali Investment Options'} description={'Investment Table Options'} />
                    <Section title='Base de Inversiones México'>
                        <div className="flex justify-center flex-col">
                            <div className='w-full mb-5' onClick={() => setFiltering(!isFiltering)}>
                                <Button>{isFiltering ? 'Ver todas las opciones' : 'Ver menos opciones'}</Button>
                            </div>
                            <div className="my-4 w-full">
                                <div className="my-2 text-5xl text-blue-500 font-bold">${numberWithCommas(sliderValue)}</div>
                                <Range
                                    step={1000}
                                    values={sliderValue}
                                    min={1000}
                                    max={1000000}
                                    onChange={(values: any) => setSliderValue(values)}
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
                                            className='rounded-md bg-blue-500'
                                            style={{
                                                ...props.style,
                                                height: '24px',
                                                width: '24px',
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <Table
                                rowData={rows.sort((a,b) => Number(a.id) - Number(b.id))}
                                configuration={InvestmentTableConfig({sliderValue, state: filterableColumns, setState: setFilterableColumns, isAdmin: localStorage.getItem('tasp.capr') == 'true'})}
                                TableElement={ThemeTableElement}
                                HeadElement={HeadElement}
                            />
                        </div>
                    </Section>
        </div>
    )

}

export default InvestmentTable;
