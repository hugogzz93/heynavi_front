import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';
import Questionnaire from '../questions/Questionnaire'

const Form = () => {
    return (
        <div className="flex flex-col antialiased text-gray-600 justify-between" style={{height: '100vh'}}>
            <Background color="bg-gray-100">
                <Section yPadding="py-6">
                  <NavbarTwoColumns logo={<Logo xl />}>
                    <div></div>
                  </NavbarTwoColumns>
                </Section>
                <Section yPadding="py-6">
                    <div className="text-lg">
                        <Questionnaire/>
                    </div>
                </Section>
            </Background>
            <Footer/>
        </div>
    )

}

export default Form
