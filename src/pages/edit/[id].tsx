// import { useState, useEffect } from 'react'
import { FormComponent, TFormConfiguration } from 'components/baseComponents'
import { Button } from 'button/Button'
import Database from 'lib/database'

import { dehydrate, useQuery, useMutation } from 'react-query'
import { queryClient, GetInvestmentOptions, UpdateInvestmentOption } from '../../api'

// export async function getServerSideProps() {
    // await queryClient.prefetchQuery('investmentOption', () => GetOption())


// }

const FormConfiguration: TFormConfiguration = {
    actions: [
        {
            render: () => <button className='py-2 px-4 rounded-md bg-blue-500 text-white text-md'>Submit</button>
        }
    ],
    layout: {
        type: 'grid',
        cols: 12,
        fieldLayout: [
            {
				id: 'tipo',
            	cols: 3
			},
            {
				id: 'nombre',
            	cols: 3
			},
            {
				id: 'descripcion',
            	cols: 6
			},
            {
				id: 'rentabilidad',
            	cols: 6
			},
            {
				id: 'riesgo',
            	cols: 3
			},
            {
				id: 'tiempo',
            	cols: 3
			},
            {
				id: 'montoMin',
            	cols: 6
			},
            {
				id: 'recurrencia',
            	cols: 6
			},
            {
				id: 'generales',
            	cols: 6
			},
            {
				id: 'fijaVariable',
            	cols: 6
			},
            {
				id: 'respaldado',
            	cols: 6
			},
            {
				id: 'apertura',
            	cols: 6
			},
        ]

    },
    fields: [
            {
				id: 'tipo',
                label: 'Tipo',
                type: 'text',
			},
            {
				id: 'nombre',
                label: 'Nombre',
                type: 'text',
			},
            {
				id: 'descripcion',
                label: 'Descripcion',
                type: 'text',
			},
            {
				id: 'rentabilidad',
                label: 'Rentabilidad',
                type: 'text',
			},
            {
				id: 'riesgo',
                label: 'Riesgo',
                type: 'text',
			},
            {
				id: 'tiempo',
                label: 'Tiempo',
                type: 'text',
			},
            {
				id: 'montoMin',
                label: 'Monto Minimo',
                type: 'text',
			},
            {
				id: 'recurrencia',
                label: 'Recurrencia',
                type: 'text',
			},
            {
				id: 'generales',
                label: 'Generales',
                type: 'text',
			},
            {
				id: 'fijaVariable',
                label: 'Fija o Variable',
                type: 'text',
			},
            {
				id: 'respaldado',
                label: 'Respaldado',
                type: 'text',
			},
            {
				id: 'apertura',
                label: 'Apertura',
                type: 'text',
			},

    ]
};

export async function getServerSideProps({params}: {params: any}) {
    await queryClient.prefetchQuery("getInvestmentOption", () => GetInvestmentOptions({
        query: {
            id: params.id
        }
    }))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            id: params.id
        }
    }
}

const ViewEditOption = (props) => {
    const {data} = useQuery('getInvestmentOption', () => GetInvestmentOptions({id: props.id}))
    const {mutate} = useMutation(UpdateInvestmentOption)

    return (
        <div className="container mx-auto">
            <div className="border border-1 border-neutral-700">
                <FormComponent
                    configuration={FormConfiguration} 
                    onSubmit={({id, ...data}) => {
                        mutate({input: data, id}, {onSuccess: () => window.location.href = '/form'})
                    }}
                    data={{defaultValues: data?.investmentOptions[0]}}
                />
            </div>
        </div>

    )
}

export default ViewEditOption;
