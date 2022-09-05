import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';

const Table = () => {
    return (
        <div className="flex flex-col antialiased text-gray-600 justify-between" style={{height: '100vh'}}>
            <Background color="bg-gray-100">
                <Section>
                        <table>
                            <tr>
                            </tr>
                        </table>
                </Section>
            </Background>
            <Footer/>
        </div>
    )

}

export default Table
