import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { Button } from '../button/Button'
import { Section } from '../layout/Section';
import Database, { IDBType } from '../lib/database'
import { TAnswerType } from '../questions/Questionnaire'
import { TFormResults } from './form'


// const TableRow: React.FC<{rowElement: any}> = ({rowElement}) => (
//     <div className="p-4 rounded-md flex">
//         {
//             Object.keys(d).map((k: string) => (
//                 <td>{d[k]}</td>
//             ))
//         }
//     </div>

// )


const Row: React.FC<{rowElement: IDBType}> = ({rowElement}) => {
    const keys = Object.keys(rowElement).filter(e => !['fijaVariable', 'generales', 'apertura', 'recurrencia'].includes(e))
    return (
        <tr>
            {keys.map(k => {
                if(k == 'descripcion' || k == 'generales' || k == 'respaldado' || k == 'apertura')
                    if(rowElement[k] == 'N/A')
                        return (
                            <td>N/A</td>
                        )
                    else
                        return (
                            <td data-tip={rowElement[k]}>
                                <span className="material-symbols-outlined"> info </span>
                                <ReactTooltip/>
                            </td>
                        )
                return (
                    <td>{rowElement[k]}</td>
                )
            })}
            <td>
                <a className='text-blue-500 cursor-pointer' href="https://api.whatsapp.com/send/?phone=5218132647979&text=Hola%2C+me+podr%C3%ADan+apoyar+a+resolver+mis+dudas%3F&type=phone_number&app_absent=0">Contacto</a>
            </td>
        </tr>
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


const plazoMinimoValid = ({row, plazoMinimo}) => {
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

const disponibilidadValid = ({row, disponibilidad}) => {
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

const riesgoValid = ({row, riesgo}) => {
    let value = false
    if(riesgo == 1)
        value = row.riesgo == 'Bajo'
    else if(riesgo == 2)
        value = row.riesgo == 'Moderado' || row.riesgo == 'Bajo'
    else if(riesgo == 3)
        value = row.riesgo == 'Alto'
    return value
}


const Table: React.FC<TFormResults> = ({answers}) => {
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

    return (
        <div>
                    <Section title='Base de Inversiones México'>
                        <div className="flex justify-center flex-col">
                            <div className='w-full' onClick={() => setFiltering(!isFiltering)}>
                                <Button>{isFiltering ? 'Ver todas las opciones' : 'Ver opciones filtradas'}</Button>
                            </div>
                            <table className='content__table shadow-lg rounded-md'>
                                <thead>
                                    <tr className='bg-gray-200 font-bold'>
                                        <td>Tipo</td>
                                        <td>Nombre</td>
                                        <td>Descripción</td>
                                        <td>Rentabilidad</td>
                                        <td>Riesgo</td>
                                        <td>Tiempo Mínimo</td>
                                        <td>Monto Mínimo (en pesos)</td>
                                        <td>Garantías</td>
                                        <td>Contacto</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(d => (
                                        <Row rowElement={d}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>
        </div>
    )

}

export default Table
