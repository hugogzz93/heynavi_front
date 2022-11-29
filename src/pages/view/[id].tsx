import Link from "next/link"
import { useSession } from 'next-auth/react'

import { Meta } from 'layout/Meta'
import { AppConfig } from 'utils/AppConfig';
import { NavbarTwoColumns } from 'navigation/NavbarTwoColumns';
import { Logo } from '../../templates/Logo';
import { Footer} from 'templates/Footer';
import { useGetInvestmentOptionsQuery } from "api"
import { numberWithCommas, rentabilidadToNumber } from 'components/InvestmentTable'
import { InvestmentOption } from 'generated/graphql'



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

const InvestmentOptionCard: React.FC<{investmentOption: InvestmentOption}> = ({investmentOption}) => {

    return (
        <div className="border border-1 border-slate-300 rounded-md p-8 flex flex-col">
            <picture>
                <img className="object-contain w-40 mx-auto  h-20" src={`${investmentOption?.image?.link}`} alt={investmentOption.nombre} />
            </picture>

            <div className="flex w-full mb-4 text-center">
                <div className="flex flex-col px-2">
                    <div className="text-2xl font-bold">{rentabilidadToNumber(investmentOption.rentabilidad)}%</div>
                    <div className="text-sm">Retorno Anual Promedio</div>
                </div>

                <div className="flex flex-col px-2">
                    <div className={` ${investmentOption.montoMin.length > 6 ? 'text-1xl pt-2 mb-1' : 'text-2xl'} font-bold `}>${numberWithCommas(Number(investmentOption.montoMin))}</div>
                    <div className="text-sm">Inversión mínima</div>
                </div>
            </div>

        <Link href={`/view/${investmentOption.id}`}>
            <div className="text-xl text-center button border border-2 border-purple-500 text-purple-500 bg-white px-6 py-2 rounded-xl">
                Ver más
            </div>
        </Link>
        </div>
    )


}


const ViewInvestmentOption = (props: {id: string}) => {
    const {data, loading} = useGetInvestmentOptionsQuery()
    // const { data: session } = useSession({required: true});

    if(loading)
        return (
            <div className="container mx-auto">
                <div className="text-md">Loading</div>
            </div>
        )

    const investmentOption = data.investmentOptions.find(io => io.id == props.id)
    if(investmentOption == undefined) 
        return <div className="container mx-auto">Error</div>

    return (
        <div className="flex flex-col antialiased h-screen justify-between">
        <Meta title={`Vali - ${investmentOption.nombre}`} description={AppConfig.description} />
          <NavbarTwoColumns 
            active
            logo={() => <Logo />}
            links={() => <div></div>}
        >
            <div></div>
          </NavbarTwoColumns>
        <div className="fixed top-0 left-0 w-screen h-screen bg-white" style={{zIndex: '-1'}}></div>

        <div className="container mx-auto w-full px-4 mb-8 md:px-0 flex flex-col md:flex-row justify-between pt-24">

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">

                    <Link href='/form'>
                        <span className="material-symbols-outlined text-blue-500 text-left w-full cursor-pointer"> arrow_back </span>
                    </Link>
                    <picture className='min-w-96 min-h-96 border border-1 border-slate-300 m-2'>
                        <img className="object-contain w-full w-96 h-96" src={`${investmentOption?.image?.link}`} alt={investmentOption.nombre} />
                    </picture>
                    <Link href='https://api.whatsapp.com/send/?phone=5218132647979&text=Hola%2C+me+podr%C3%ADan+apoyar+a+resolver+mis+dudas%3F&type=phone_number&app_absent=0' passHref>
                        <button className="shadow-md bg-purple-500 text-white px-6 py-4 w-96 rounded-xl hidden md:inline-block">
                            Conocer más
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col w-full md:w-2/4 pt-24 items-center md:items-start">
                    <div className="text-md mb-6 text-center md:text-left">
                        {investmentOption.descripcion}
                    </div>
                    <table className='text-left c__table w-full'>
                        <thead>
                            <tr className='bg-purple-100 rounded-md overflow-hidden'>
                                <th>Inversión mínima</th>
                                <th>${numberWithCommas(Number(investmentOption.montoMin))}</th>
                            </tr>
                        </thead>
                        <tbody className='bg-slate-50'>
                            <tr>
                                <td><div className="font-bold">Tiempo mínimo</div></td>
                                <td>{investmentOption.tiempo}</td>
                            </tr>
                            <tr>
                                <td><div className="font-bold">Requisitos: </div></td>
                                <td>{investmentOption.generales}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>

        <div>
                <div className="container mx-auto w-full flex flex-col md:flex-row items-center my-4 items-center">
                    <div className="text-lg font-bold mr-4">También te puede interesar...</div>
                    <div className="hidden md:block grow border-b border-b-1 border-slate-300"></div>
                </div>

                <div className="container mx-auto w-full flex items-center flex-col md:flex-row items-center justify-center">
                    {data?.investmentOptions.slice(0, 5).map(io => (
                        <div className="my-4 md:mx-4 first-of-type:ml-0 last-of-type:mr-0">
                            <InvestmentOptionCard investmentOption={io}/>
                        </div>
                    ))}
                </div>
        </div>

            <Footer/>
        </div>
    )
}

export default ViewInvestmentOption;
