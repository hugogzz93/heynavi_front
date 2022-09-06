import ReactTooltip from 'react-tooltip';

import { Section } from '../layout/Section';
import Database, { IDBType } from './database'
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
    const keys = Object.keys(rowElement)
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
    if(!value)
        debugger
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

    if(!value) debugger
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
    if(!value) debugger
    return value
}


const Table: React.FC<TFormResults> = ({answers}) => {
    const filter = (row: IDBType) => {
        const montoMinimo = answers.find(a => a.questionId == 1).value
        const plazoMinimo = answers.find((a: TAnswerType) => a.questionId == 2)
        const disponibilidad = answers.find((a: TAnswerType) => a.questionId == 3)
        const riesgo = answers.find((a: TAnswerType) => a.questionId == 4).value

        if(row.montoMin > montoMinimo) return false
        const disp =  disponibilidadValid({row, disponibilidad}) 
        const riesg = riesgoValid({row, riesgo}) 
        const plaz = plazoMinimoValid({row, plazoMinimo})
        debugger
        return disp && riesg && plaz
    }

    return (
        <div>
                    <Section>
                            <div className="flex justify-center">
                            <table className='content__table shadow-lg rounded-md'>
                                <thead>
                                    <tr className='bg-gray-200 font-bold'>
                                        <td>Tipo</td>
                                        <td>Nombre</td>
                                        <td>Descripcion</td>
                                        <td>Rentabilidad</td>
                                        <td>Riesgo</td>
                                        <td>Tiempo</td>
                                        <td>Monto Minimo</td>
                                        <td>Recurrencia</td>
                                        <td>Generales</td>
                                        <td>FijaVariable</td>
                                        <td>Respaldado</td>
                                        <td>Apertura</td>
                                        <td>Contacto</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Database.filter(filter).slice(0,3).map(d => (
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
