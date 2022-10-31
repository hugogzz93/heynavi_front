import { useState, useEffect } from 'react'


import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';
import Questionnaire from '../questions/Questionnaire'
import { useGetQuestionsQuery } from 'generated/graphql'
// import { queryClient, GetQuestions, SaveAnswers } from '../api'

import Table from 'components/InvestmentTable'
import { ClientQuestionAnswerInput } from '../generated/graphql'


export type TFormResults = {
    answers: Array<ClientQuestionAnswerInput>;
}

// export async function getServerSideProps() {
//     await queryClient.prefetchQuery("questions", () => GetQuestions())
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient)
//         }
//     }
// }

const Form = () => {
    const [formResult, setFormResult] = useState<TFormResults>({answers: []})
    const {data, loading} = useGetQuestionsQuery();
    // const { data, isLoading } = useQuery(['questions'], () => GetQuestions())
    // const { mutate } = useMutation(() => SaveAnswers({input: formResult.answers}))
    useEffect(() => {
        // if(formResult.answers.length > 0) 
            // mutate()
    }, [formResult])

    let isAdmin = false
    try {
        isAdmin = localStorage.getItem('tasp.capr') == 'true'
    }catch {}
    if(loading)
        return <div>loading</div>


    const questions = data?.questions
    debugger




    return (
        <div className="flex flex-col antialiased text-gray-600 justify-between" style={{height: '100vh'}}>
            <Meta title={'Vali Questionnaire'} description={AppConfig.description} />
            <Background color="bg-gray-100">
                <Section yPadding="py-6">
                  <NavbarTwoColumns logo={<Logo xl />}>
                    <div></div>
                  </NavbarTwoColumns>
                </Section>
                <Section yPadding="py-6">
        {
            !isAdmin && formResult.answers.length == 0 ? (
                    <div className="text-lg">
                        {questions && (
                                <Questionnaire onSubmit={(result: TFormResults) => setFormResult(result)} questions={questions.slice().sort((a,b) => Number(a.order) - Number(b.order) )}/>
                        )}
                    </div>
            ) : (
                <Table {...formResult}/>
            )
        }
                </Section>
            </Background>
            <Footer/>
        </div>
    )

}

export default Form
