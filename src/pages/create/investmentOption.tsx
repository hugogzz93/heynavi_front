// import { useState, useEffect } from 'react'
import { FormComponent, TFormConfiguration } from 'components/baseComponents'

import { useMutation } from 'react-query'
import { useCreateInvestmentOptionMutation} from '../../api'

// export async function getServerSideProps() {
    // await queryClient.prefetchQuery('investmentOption', () => GetOption())


// }

const FormConfiguration: TFormConfiguration = {
    actions: [
        {
            render: () => 
            <div className="flex">
                <button className='py-2 px-4 rounded-md bg-blue-500 text-white text-md'>Submit</button>
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
				id: 'nombreEmpresa',
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
				id: 'nombreEmpresa',
                label: 'Nombre Empresa',
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
			},

    ]
};

const ViewCreateInvestmentOption = () => {
    const [mutate] = useCreateInvestmentOptionMutation({
        onCompleted: () => {
            window.location.href = '/form'
        }
    })
    let isAdmin = false
    try {
        isAdmin = localStorage.getItem('tasp.capr') == 'true'
    }catch {
        return <div></div>
    }

    if(!isAdmin)
        return <div>404</div>

    return (
        <div className="container mx-auto">
            <div className="border border-1 border-neutral-700">
                <FormComponent
                    configuration={FormConfiguration} 
                    onSubmit={(data: any) => {
                        mutate({variables: {input: data}})
                    }}
                />
            </div>
        </div>

    )
}

export default ViewCreateInvestmentOption;
