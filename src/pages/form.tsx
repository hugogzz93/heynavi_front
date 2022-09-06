import { useState } from 'react'

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';
import Questionnaire, {TAnswerType} from '../questions/Questionnaire'

import Table from '../table/table'


export type TFormResults = {
    answers: Array<TAnswerType>;
}

const Form = () => {
    const [formResult, setFormResult] = useState<TFormResults>({answers: []})
    return (
        <div className="flex flex-col antialiased text-gray-600 justify-between" style={{height: '100vh'}}>
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <Background color="bg-gray-100">
                <Section yPadding="py-6">
                  <NavbarTwoColumns logo={<Logo xl />}>
                    <div></div>
                  </NavbarTwoColumns>
                </Section>
                <Section yPadding="py-6">
        {
            formResult.answers.length == 0 ? (
                    <div className="text-lg">
                        <Questionnaire onSubmit={(result: TFormResults) => setFormResult(result)}/>
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
