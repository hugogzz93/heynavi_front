// import { useState, useEffect } from 'react'
import { FormComponent, TFormConfiguration } from 'components/baseComponents'

import { dehydrate, useQuery, useMutation } from 'react-query'
// import { queryClient, GetInvestmentOptions, UpdateInvestmentOption, DeleteInvestmentOption} from '../../api'
import { useGetInvestmentOptionsQuery, useUpdateInvestmentOptionMutation, useDeleteInvestmentOptionMutation } from '../../api'
import { InvestmentOptionInput, InvestmentOptionQuery } from 'generated/graphql'

// export async function getServerSideProps() {
    // await queryClient.prefetchQuery('investmentOption', () => GetOption())


// }

const FormConfiguration = ({deleteFn}: {deleteFn: () => void}): TFormConfiguration => ({
    actions: [
        {
            render: () => <div className="flex">
                <button className='mr-2 py-2 px-4 rounded-md bg-blue-500 text-white text-md'>Submit</button>
                <button className='py-2 px-4 rounded-md bg-red-500 text-white text-md' onClick={deleteFn}>Delete</button>
            </div>
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
			},{
				id: 'image',
            	cols: 6
			}
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
			},{
				id: 'image',
                label: 'logo',
                type: 'file',
			}

    ]
});

export async function getServerSideProps({params}: {params: any}) {
    // await queryClient.prefetchQuery("getInvestmentOption", () => GetInvestmentOptions({
    //     query: {
    //         id: params.id
    //     }
    // }))

    return {
        props: {
            // dehydratedState: dehydrate(queryClient),
            id: params.id
        }
    }
}

const ViewEditOption = (props: {id: string}) => {
    const {data, loading} = useGetInvestmentOptionsQuery({variables: {query: {id: props.id}}})
    const [mutate] = useUpdateInvestmentOptionMutation({
        onCompleted: () => {
            window.location.href = '/form'
        }
    })
    const [deleteFn] = useDeleteInvestmentOptionMutation({onCompleted: () => {
        window.location.href = '/form'
    }})

    const handleSubmit = ({id, __typename, ...data}: {id: string, data: any}) => {
        const input: InvestmentOptionInput = {
            ...(data as InvestmentOptionInput),
        }
        if(input.image == '')
            delete input.image

        mutate({variables: {input, id}})
    }


    let isAdmin = false
    try {
        isAdmin = localStorage.getItem('tasp.capr') == 'true'
    }catch {
        return <div></div>
    }

    if(!isAdmin)
        return <div>404</div>

    if(loading)
        return <div>Loading</div>

    return (
        <div className="container mx-auto">
            <div className="border border-1 border-neutral-700">
                <FormComponent
                    configuration={FormConfiguration({deleteFn: () => deleteFn({variables: {id: props.id}})})} 
                    onSubmit={handleSubmit}
                    data={{defaultValues: data?.investmentOptions[0]}}
                />
            </div>
        </div>

    )
}

export default ViewEditOption;
