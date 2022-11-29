import { useState, useEffect } from 'react'


import { gsap } from 'gsap'
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';
import Questionnaire from '../questions/Questionnaire'
import { useGetQuestionsQuery, GetQuestionsDocument } from 'generated/graphql'
import { client } from 'pages/_app'
// import { queryClient, GetQuestions, SaveAnswers } from '../api'

import Table from 'components/InvestmentTable'
import { ClientQuestionAnswerInput, Question, InvestmentOption } from '../generated/graphql'


export type TFormResults = {
    answers: Array<ClientQuestionAnswerInput>;
    investmentOptions?: Array<InvestmentOption>
}

export async function getServerSideProps() {
    const res = await client.query({query: GetQuestionsDocument})
    return {
        props: {
            questions: res.data.questions
        }
    }
}



const Form = (props: {questions: Array<Question>}) => {
    const [formResult, setFormResult] = useState<TFormResults>({answers: []})
    let isAdmin = false
    let formAnswers: any;

    const submitForm = (result: TFormResults) => {
        localStorage.setItem('formAnswers', JSON.stringify(result))
        setFormResult(result)
    }

    try {
        isAdmin = localStorage.getItem('tasp.capr') == 'true'
        formAnswers = localStorage.getItem('formAnswers')

    }catch {}


    try {
        isAdmin = localStorage.getItem('tasp.capr') == 'true'
    }catch {}

    useEffect(() => {
        try {
            if(formAnswers)
                setFormResult(JSON.parse(formAnswers))
        } catch(e) {

        }
    }, [])

    debugger

    return (
        <div className="flex flex-col antialiased text-gray-600 justify-between bg-purple-100 pt-32" style={{height: '100vh'}}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-purple-100" style={{zIndex: '-1'}}></div>
            <Meta title={'Vali Questionnaire'} description={AppConfig.description} />
                  <NavbarTwoColumns 
                    active
                    logo={() => <Logo />}
                    links={() => <div></div>}
                >
                    <div></div>
                  </NavbarTwoColumns>
                            {
                                (!isAdmin && formResult.answers.length == 0 && !formAnswers)? (
                                    <div className="flex items-center justify-center">
                                        <div className="rounded-md shadow-md p-8 bg-white m-auto">
                                            <div className="text-lg">
                                                <Questionnaire onSubmit={(result: TFormResults) => submitForm(result)} questions={props.questions.slice().sort((a,b) => Number(a.order) - Number(b.order) ) as Array<Question>}/>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Table {...formResult}/>
                                )
                            }
            <Footer/>
        </div>
    )

}

export default Form
