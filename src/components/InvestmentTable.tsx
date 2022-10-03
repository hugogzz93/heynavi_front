import { useState } from 'react'
import ReactTooltip from 'react-tooltip';

import { Table, ITableConfiguration, ITableElementProps, ITableHeadElementProps } from 'components/baseComponents'
import Database, { IDBType } from 'lib/database'
import { TFormResults } from 'pages/form'
import { Button } from 'button/Button'
import { Section } from 'layout/Section'
import { TAnswerType } from 'questions/Questionnaire'


const InvestmentTableConfig: ITableConfiguration = {
    header: {
        id: 'list-investment-options',
        idColumn: 'nombre',
        getId: (d) => d.nombre,
        tableActions: []
    },
    columns: [
        { 
            label: 'Tipo',
            id: 'Tipo',
            valueFn: (d) => d.tipo
        },
        {
            label: 'Nombre',
            id: 'Nombre',
            valueFn: (d) => d.nombre
        },
        {
            label: 'Descripción',
            id: 'Descripción',
            renderFn: d => (
                    <td data-tip={d.descripcion}>
                        <span className="material-symbols-outlined">Descripcion</span>
                        <ReactTooltip/>
                    </td>
            )
        },
        {
            label: 'Rentabilidad',
            id: 'Rentabilidad',
            valueFn: (d) => d.rentabilidad
        },
        {
            label: 'Riesgo',
            id: 'Riesgo',
            valueFn: (d) => d.riesgo
        },
        {
            label: 'Tiempo Mínimo',
            id: 'Tiempo',
            valueFn: (d) => d.tiempo
        },
        {
            label: 'Monto Mínimo (en pesos)',
            id: 'Monto',
            valueFn: (d) => d.montoMin
        },
        {
            label: 'Tipo de Inversión ',
            id: 'Tipo',
            valueFn: (d) => d.tipo
        },
        {
            label: 'Contacto',
            id: 'Contacto',
            renderFn: _ => (
                <td>
                    <a className='text-blue-500 cursor-pointer' href="https://api.whatsapp.com/send/?phone=5218132647979&text=Hola%2C+me+podr%C3%ADan+apoyar+a+resolver+mis+dudas%3F&type=phone_number&app_absent=0">Contacto</a>
                </td>
            )
        },
    ]
}

// const ThemeRowElement: React.FC<ITableRowElementProps> = ({cells, data}) => {
//     return (
//         <tr>
//             {cells.map((Cell, idx) => (
//                 <td key={idx} className={"py-2 px-5"}>
//                     { typeof(Cell) == 'function' ? <Cell/> : Cell}
//                 </td>
//             ))
//             }
//         </tr>

//     )
// }

const ThemeTableHeadElement: React.FC<ITableHeadElementProps> = ({columnNames}) => {
    return (
        <tr className='bg-gray-200 font-bold'>
            {columnNames.map(name => 
                <td key={name}>
                    {name}
                </td>
            )}
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
    if(plazoMinimo.value == 1) 
        value = extractPlazoMinimoFromOption(row.tiempo) <= 3
    else if(plazoMinimo.value == 2)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 3 && extractPlazoMinimoFromOption(row.tiempo) <= 6
    else if(plazoMinimo.value == 3)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 12 && extractPlazoMinimoFromOption(row.tiempo) <= 36
    else if(plazoMinimo.value == 4)
        value = extractPlazoMinimoFromOption(row.tiempo) >= 36
    else if(plazoMinimo.value == 5)
        value = true
    return value
}

const disponibilidadValid = ({row, disponibilidad}: {row: any, disponibilidad: any}) => {
    let value = false
    if(disponibilidad.value == 1) 
         value = !!row.recurrencia.match(new RegExp(/Diaria/))
    else if(disponibilidad.value == 2)
         value = !!row.recurrencia.match(new RegExp(/\(Semanal|Diaria|No aplica\)/))
    else if(disponibilidad.value == 3)
         value = !!row.recurrencia.match(new RegExp(/Mensual/))
    else if(disponibilidad.value == 4)
         value = !!row.recurrencia.match(new RegExp(/\(Trimestral|Semestral\)/))
    else if(disponibilidad.value == 5)
         value = !!row.recurrencia.match(new RegExp(/\(Anual|Semestral\)/))

    return value
}

const riesgoValid = ({row, riesgo}: {row: any, riesgo: any}) => {
    let value = false
    if(riesgo == 1)
        value = row.riesgo == 'Bajo'
    else if(riesgo == 2)
        value = row.riesgo == 'Moderado' || row.riesgo == 'Bajo'
    else if(riesgo == 3)
        value = row.riesgo == 'Alto'
    return value
}

const InvestmentTable: React.FC<TFormResults> = ({answers}) => {
    const [isFiltering, setFiltering] = useState(true)
    const filter = (row: IDBType) => {
        const montoMinimo = answers.find(a => a.questionId == 1).value
        const plazoMinimo = answers.find((a: TAnswerType) => a.questionId == 2)
        const disponibilidad = answers.find((a: TAnswerType) => a.questionId == 3)
        const riesgo = answers.find((a: TAnswerType) => a.questionId == 4).value

        if(row.montoMin > montoMinimo) return false
        const disp =  disponibilidadValid({row, disponibilidad}) 
        const riesg = riesgoValid({row, riesgo}) 
        const plaz = plazoMinimoValid({row, plazoMinimo})
        return disp && riesg && plaz
    }

    let rows = Database;
    if(isFiltering)
        rows = rows.filter(filter).slice(0,3)

    if(rows.length < 3)
        rows = Database.slice(0,3)

    return (
        <div>
                    <Section title='Base de Inversiones México'>
                        <div className="flex justify-center flex-col">
                            <div className='w-full' onClick={() => setFiltering(!isFiltering)}>
                                <Button>{isFiltering ? 'Ver todas las opciones' : 'Ver opciones filtradas'}</Button>
                            </div>
                            <Table
                                rowData={rows}
                                configuration={InvestmentTableConfig}
                                TableElement={ThemeTableElement}
                                HeadElement={ThemeTableHeadElement}
                            />
                        </div>
                    </Section>
        </div>
    )

}

export default InvestmentTable;
