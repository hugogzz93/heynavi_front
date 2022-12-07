import { Meta } from '../layout/Meta';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';

const DerechosArco = () => (
    <div className='min-h-screen flex flex-col justify-between'>
    <Meta title={'Vali - El lugar para encontrar tu próxima inversión'} description={'Vali'} />
          <NavbarTwoColumns 
            active
            logo={() => <Logo />}
            links={() => <div></div>}
        >
            <div></div>
          </NavbarTwoColumns>
    <div></div>

        <div className="container mx-auto">
            <div className='text-xl font-bold'>Derechos ARCO</div>
            <p>Con la finalidad de dar cumplimiento a lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, les recordamos los derechos que pueden ejercer los titulares de datos personales.</p>
            <p>Acceso: Derecho del titular, a obtener sus datos personales que obran en poder de Vali, así como a conocer el Aviso de Privacidad al que está sujeto el tratamiento.</p>
            <p>Rectificación: Derecho del titular, a solicitar a Vali, la rectificación de sus datos personales cuando estos resulten ser inexactos o incompletos.</p>
            <p>Cancelación: Derecho del titular, en todo momento a solicitar a Vali, la cancelación de sus datos personales.</p>
            <p>Oposición: Derecho del titular, en todo momento a oponerse al tratamiento de sus datos.</p>
            <p>En ese orden de ideas, en caso de que el titular de los datos personales requiera revocar el consentimiento, o ejercer alguno de los derechos antes mencionados, deberá acudir a la oficina de Vali ubicada en Lázaro Garza Ayala 1214, Interior 1, Colonia Palo Blanco, San Pedro Garza García, Nuevo León, C.p. 66236  o bien, contactándonos al teléfono: +52 81 3264 7979 y presentar una solicitud de acceso, rectificación, cancelación u oposición la cual deberá contener y acompañar lo siguiente:</p>
            <p>1. Titular: Original y copia de la Credencial para Votar, Pasaporte o Licencia de Conducir Vigente.</p>
            <p>2. Representante Legal: Original y copia del documento que acredite la representación legal del titular de los derechos, acompañado del original y copia de la Credencial para Votar, Pasaporte o Licencia de Conducir Vigente.</p>
            <p>3. Nombre completo del titular de los datos personales.</p>
            <p>4. La determinación del derecho que desea ejercer: acceso, rectificación, cancelación u oposición.</p>
            <p>5. La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados, o bien, cualquier otro elemento o documento que facilite la localización de los datos personales.</p>
            <p>6. Una dirección de correo electrónico a la que se le hará llegar nuestra respuesta.</p>
            <p>Las solicitudes se atenderán dentro de los siguientes 20 días hábiles contados a partir de la fecha en que se presentó la solicitud.</p>
            <p>El titular podrá elegir recibir la respuesta en nuestro domicilio mediante la recepción de copias simples, o bien, de ser el caso, mediante el envío de documentos electrónicos enviados al correo electrónico que en su caso proporcione.</p>
        </div>
        <Footer/>
    </div>
)

export default DerechosArco;
