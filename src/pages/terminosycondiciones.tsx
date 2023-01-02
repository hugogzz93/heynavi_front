import { Meta } from '../layout/Meta';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';



const TerminosYCondiciones = () => (
    <div className="min-h-screen flex flex-col justify-between">


    <Meta title={'Vali - El lugar para encontrar tu próxima inversión'} description={'Vali'} />
    <NavbarTwoColumns 
        active
        logo={() => <Logo />}
        links={() => <div></div>}>
        <div></div>
    </NavbarTwoColumns>

        <div className="mt-24 container mx-auto pb-44">
            <div className='text-4xl font-bold'>Términos y condiciones</div>
            <p>1. Aceptación</p>
            <p>Los presentes términos y condiciones de uso (las “Condiciones”) regulan el acceso y/o uso que usted (el “Usuario”) haga de las aplicaciones, páginas web, contenido, productos y servicios (los “Servicios”), incluyendo la aplicación móvil o “App” denominada “Vali” (“Vali App”) y la página de internet disponible en https://heyvali.com ofrecidos por Vali Wealth Tech, S.A.P.I. de C.V. (“Vali”), una sociedad anónima promotora de inversión de capital variable, con domicilio en  Lázaro Garza Ayala 1214, Interior 1, Colonia Palo Blanco, San Pedro Garza García, Nuevo León, C.p. 66236</p>
            <p>Podremos ser referidos a lo largo de las presentes Condiciones como Vali o nosotros, y usted podrá ser referido como Usuario o usted.</p>
            <p>Estas Condiciones se celebran entre Vali y el Usuario y son un contrato legalmente vinculante. El Usuario otorga su consentimiento con las Condiciones al utilizar nuestros Servicios y se encuentra obligado a los mismos. En caso de no aceptar en forma absoluta y completa las Condiciones, el Usuario deberá abstenerse de utilizar los Servicios. La sola descarga de la Vali App implica el reconocimiento y la aceptación de las presentes Condiciones de uso. En caso de que Usted y Vali hayan celebrado otro contrato por separado para regular el uso de los Servicios, dicho contrato tendrá prioridad sobre estas Condiciones de Uso, y será dicho contrato el que regirá la relación entre Usted y Vali.</p>
            <p>2. Registro</p>
            <p>El Usuario deberá registrarse para poder utilizar los Servicios. El Usuario podrá utilizar su cuenta de email para registrarse o crear una cuenta nueva por medio de la Vali App o la página web de Vali.</p>
            <p>El Usuario además manifiesta que al menos tiene 18 (dieciocho) años de edad, para ser elegible a utilizar los Servicios.</p>
            <p>Al realizar el registro y la creación de su cuenta, Usted deberá proporcionar ciertos datos de identificación como su correo electrónico y datos de contacto. Usted está de acuerdo en que la información que se nos provee es precisa y cierta, y que se mantendrá actualizada en todo momento. El Usuario es responsable de toda la actividad que ocurra en su cuenta y se compromete a mantener en todo momento de forma segura y secreta el nombre de usuario y la contraseña de su cuenta. Usted deberá notificar de inmediato a Vali en el caso en que un tercero no autorizado tenga conocimiento de la contraseña o si tiene conocimiento de algún uso no autorizado de su dirección de correo electrónico o cualquier violación de seguridad al siguiente correo electrónico info@heyvali.com . El Usuario acepta que Vali no será responsable ni asumirá responsabilidad alguna en el caso en que a una persona que obtenga su contraseña utilice los Servicios.</p>
            <p>Usted podrá tener derecho a crear cuentas adicionales (“Cuentas Adicionales”) para utilizar los servicios por otros usuarios afiliados con usted o con proyectos que desarrollan en conjunto, y que se gestionan desde su cuenta. En caso de obtener cuentas adicionales, será responsabilidad del Usuario que dichas cuentas adicionales sean utilizadas por las personas que el Usuario autorizó para ello, y el Usuario será el único responsable ante Vali por el uso correcto de su cuenta y las cuentas adicionales que se encuentren bajo su gestión.</p>
            <p>El Usuario no creará más de una cuenta y no creará otra cuenta si ya desactivamos la suya, a menos que cuente con nuestra autorización por escrito para hacerlo.</p>
            <p>3. Privacidad</p>
            <p>El tratamiento y uso que le damos a los datos personales del Usuario se hará conforme a lo dispuesto en el aviso de privacidad de Vali, el “Aviso de Privacidad” disponible en https://heyvali.com</p>
            <p>4. Servicios de terceros</p>
            <p>Por medio de Vali y a través de los Servicios el Usuario podrá utilizar servicios o funcionalidades operadas por terceros o inclusive operados en conjunto por Vali y terceros, por lo tanto el Usuario esta de acuerdo en someterse a los términos y condiciones de los servicios de los terceros. Vali no será responsable por los términos y condiciones de dichos terceros ni por las acciones llevadas a cabo derivadas de dichos términos y condiciones.</p>
            <p>5. Licencia no exclusiva</p>
            <p>Vali le otorga al Usuario una licencia limitada, no exclusiva, no sublicenciable, revocable, no transferible para el acceso y uso de los Servicios y el acceso y uso de cualquier contenido, información y material relacionado que pueda ponerse a disposición a través de los Servicios. Dicha licencia se otorga para su uso comercial.</p>
            <p>Los Servicios y todos los derechos relativos a estos son y permanecerán siendo propiedad de Vali o de sus licenciantes.</p>
            <p>Ninguna de estas Condiciones ni el uso de los Servicios le transfieren u otorgan al Usuario derechos sobre o en relación con los Servicios, con excepción de la licencia otorgada anteriormente.</p>
            <p>Ciertas funciones de los Servicios pueden permitir a los usuarios que publiquen o gestionen diversidad de contenido, incluyendo planos, mapas, cálculos, documentos, mensajes, imágenes, texto, audio y video, así como otro contenido de trabajo (el “Contenido del Usuario”). Entre Usted y Vali, Usted retendrá toda propiedad y responsabilidad sobre el Contenido del Usuario que sea generado o publicado en el Vali App. Salvo por lo previsto en el párrafo siguiente, no habrá ninguna transferencia de propiedad intelectual o industrial respecto del Contenido del Usuario hacia Vali.</p>
            <p>Mediante la publicación de Contenido del Usuario como parte de los Servicios, el Usuario concede a Vali, sus filiales, licenciatarios y sucesores, una licencia no exclusiva, transferible, sublicenciable, gratuita, para:</p>
            <p>a) Copiar, almacenar, reproducir, publicar, grabar, adaptar, modificar y distribuir, total o parcialmente el Contenido del Usuario, en cualquier manera que sea razonablemente necesaria para proporcionar los Servicios;</p>
            <p>b) Agregar información y preparar trabajos derivados del contenido o incorporar el contenido en otros trabajos, incluyendo la facultad de compartir y publicar dicha información, siempre y cuando en dichos trabajos la información del Contenido del Usuario no sea identificado personalmente el Usuario ni sus afiliados;</p>
            <p>c) Promover, difundir, exponer, representar y mostrar públicamente el contenido enviado a los Servicios;</p>
            <p>d) Otorgar sublicencias de lo anterior.</p>
            <p>Dicha licencia se otorga con la finalidad de operar, prestar, promover, desarrollar y mejorar los Servicios así como desarrollar otros nuevos.</p>
             <p></p>
            <p>6. Contenido del Usuario</p>
            <p>El Usuario es el único responsable por el contenido y la información que publique, suba, enlace, transmita, grabe, o ponga a disposición en los Servicios o transmita a otros usuarios, incluyendo mensajes de texto, documentos, planos, conversaciones o “chats”, videos, streaming, fotografías, ya sea de manera pública o privada. Los Usuarios son los únicos responsables sobre el cumplimiento de la legislación aplicable en tema de publicaciones, y reconocen que los Servicios no son más que una plataforma para hacer público y/o comunicar o gestionar el Contenido de los Usuarios.</p>
            <p>El Usuario manifiesta y garantiza que cualquier publicación y uso de su Contenido es propia del Usuario, y que no infringe o viola los derechos de terceros. Asimismo, el Usuario acepta que cualquier contenido que se publica en los Servicios puede ser visto por otros Usuarios y puede ser visto por cualquier persona que visite o participe en el Servicio.</p>
            <p>Gran parte del contenido de nuestros Servicios es producido por Usuarios o terceros. Ya sea que dicho contenido se transmita de manera publica o se envíe de manera privada, el contenido es responsabilidad exclusiva del Usuario o el tercero que lo publicó o envió. Vali se reserva el derecho a revisar todo el contenido que aparece en los Servicios y podrá retirar el que infrinja estas Condiciones, sin embargo no asumimos responsabilidad alguna por el contenido que proporcionan otros Usuarios o terceros a través de los Servicios.</p>
            <p>Vali y sus designados se reservan el derecho de controlar, restringir el acceso a, editar o eliminar cualquier contenido que esté disponible a través de los Servicios.</p>
            <p>El Usuario acepta y reconoce que si bien, el Contenido del Usuario que se almacene utilizando los Servicios está destinado a ser visto y compartido por otros Usuarios autorizados en determinado Proyecto; Vali no puede garantizar la confidencialidad y secrecía de dicho Contenido del Usuario más allá de la implementación de accesos a Usuarios con sus contraseñas. El Usuario acepta expresamente que al publicar Contenido del Usuario utilizando los Servicios, existe el riesgo de que terceros pudieran obtener acceso a dicha información, y acepta y reconoce que Vali no es ni será responsable de mantener la confidencialidad o secrecía del Contenido del Usuario.</p>
            <p>El Usuario será el único responsable de realizar respaldos de la información que integre el Contenido del Usuario y que pueda estar cargada en el Vali App. Vali no será responsable de cualquier daño que el Usuario pueda sufrir por la pérdida o corrupción del Contenido del Usuario que pueda suceder durante el uso de los Servicios.</p>
            <p>7. Reglas de Uso</p>
            <p>La utilización de los Servicios es para uso comercial y gestión de Proyectos del Usuario, incluyendo sus Cuentas Adicionales, en su caso.</p>
            <p>Errores y omisiones: Vali hará esfuerzos razonables para corregir cualquier error u omisión en cuanto sea posible después de haber sido notificado de ellos. Vali se reserva el derecho de cambiar, modificar, sustituir, suspender o eliminar sin previo aviso cualquier servicio, información o anuncio en los Servicios.</p>
            <p>Virus, malware y cosas similares: Vali no otorga ninguna garantía de que los Servicios estén libres de virus, malware o cualquier otra cosa que pueda tener un efecto dañino en cualquier tecnología. Vali no se hace responsable de los daños que este tipo de situaciones puedan ser ocasionadas a los Usuarios.</p>
            <p>Detener el acceso: Aunque trataremos de permitir el acceso ininterrumpido a los Servicios, el acceso al estos puede ser suspendido, restringido o terminado en cualquier momento y por cualquier razón. Vali también se reserva el derecho de bloquear el acceso y/o de editar o eliminar cualquier material que, en su opinión razonable pueda dar lugar a un incumplimiento a cualquiera de las Condiciones.</p>
            <p>Tecnología: Vali no asume ninguna responsabilidad por la funcionalidad que dependa del navegador del Usuario u otro software de terceros para operar. No garantizamos que los Servicios soportarán todos los navegadores, teléfonos celulares o sistemas operativos.</p>
            <p>Retiro: Vali podrá siempre, y en cualquier momento, retirar cualquier información o cualquier aspecto de los Servicios en cualquier momento.</p>
            <p>8. Restricciones de Uso</p>
            <p>Los siguientes usos de los Servicios están expresamente prohibidos y el Usuario se compromete a no hacer (y a no permitir que ninguna persona lo haga) cualquiera de los siguientes:</p>
            <p>a) Utilizar los Servicios para fines fraudulentos;</p>
            <p>b) Utilizar dispositivo, software o técnica para interferir o intentar interferir con el funcionamiento adecuado de los Servicios;</p>
            <p>c) Publicar o transmitir a los Servicios cualquier información ilegal, fraudulenta, difamatoria, obscena o de cualquier tipo, incluyendo cualquier información que contenga un virus, error u otro elemento dañino;</p>
            <p>d) Publicar, ejecutar, distribuir, preparar, copiar, realizar ingeniería inversa, o utilizar el contenido de los Servicios para cualquier propósito que no sea para el cual lo hemos diseñado o los destinados a ser utilizados;</p>
            <p>e) Publicar o transmitir hacia o en los Servicios cualquier información en violación a los derechos de autor o derechos de propiedad intelectual de terceros;</p>
            <p>f) Adoptar medidas que puedan dañar, deshabilitar sobrecargar o deteriorar la infraestructura de los Servicios;</p>
            <p>g) Intentar obtener acceso no autorizado a cualquier software, otras cuentas, sistemas informáticos o redes conectadas a cualquier servidor de Vali a través de la piratería, extracción de contraseñas o cualquier otro medio;</p>
            <p>h) Promover el racismo, la intolerancia, el odio o el daño físico de cualquier tipo contra cualquier grupo o individuo;</p>
            <p>i) Proporcionar contenido que sea difamatorio, calumnioso, odioso, violento, obsceno, pornográfico, ilícito o de otro modo ofensivo;</p>
            <p>j) Tomar cualquier acción que pueda interferir con el uso y disfrute por terceros de los Servicios.</p>
            <p>9. Interacción con otros Usuarios.</p>
            <p>El Usuario es el único responsable de las interacciones con otros Usuarios, por lo tanto Vali, incluyendo sus accionistas o empleados no serán responsables por la conducta de cualquier Usuario y los daños resultantes de las comunicaciones o encuentros con otros Usuarios.</p>
            <p>10. Suspensión y terminación</p>
            <p>Si el Usuario utiliza (o cualquier otra persona con su autorización utiliza) los Servicios en contravención de las presentes Condiciones, podemos suspender su uso de los Servicios (en su totalidad o en parte). Si tomamos dichas medidas, podremos negarnos a permitir su acceso a los Servicios hasta que recibamos una garantía, en una forma que consideremos aceptable, de que no habrá ninguna otra violación a las disposiciones de las Condiciones, o podremos negarnos a permitir el acceso al Usuario a los Servicios en absoluto para lo cual procederemos a eliminar su cuenta. Lo anterior sin el derecho del Usuario a que se le reembolse el pago de Activaciones previamente pagadas.</p>
            <p>Razones particulares para la suspensión: Vali tendrá derecho inmediatamente o en cualquier momento (en su totalidad o en parte) a: i) suspender los Servicios; ii) suspender el uso del Usuario de los Servicios; iii) suspender el uso de los Servicios para las personas que creamos están conectados (de cualquier manera) al Usuario; o iv) suspender el acceso a determinados Proyectos, si el Usuario:</p>
            <p>a) Incumple las presentes Condiciones;</p>
            <p>b) Sospechamos, por motivos razonables, que ha, puede o va a incumplir las presentes Condiciones; o</p>
            <p>c) Sospechamos, por motivos razonables, que pudo haber cometido o estar cometiendo algún fraude en contra de Vali o de cualquier persona.</p>
            <p>11. Acceso a la red, dispositivos y cargos de datos.</p>
            <p>El Usuario es responsable de obtener acceso a la red de datos necesaria para utilizar los Servicios y de adquirir y actualizar el hardware compatible o los dispositivos necesarios para acceder y utilizar los Servicios y cualquier actualización de estos. Vali no garantiza que los Servicios, o cualquier parte de estos, funcionen en cualquier hardware o dispositivo.</p>
            <p>El Usuario es responsable de asumir cualquier gasto de teléfono móvil en el que incurra al utilizar nuestros Servicios, incluidos los cobros aplicados por tráfico de datos y por el envío de mensajes de texto.</p>
            <p>12. Propiedad Intelectual</p>
            <p>El uso de nuestros Servicios no otorga al Usuario ningún derecho de propiedad intelectual sobre nuestros Servicios o contenido al que acceda.</p>
            <p>Todos los derechos de propiedad intelectual (incluidos los derechos de autor, patentes, marcas comerciales, marcas de servicio, nombres comerciales, nombres de dominio, diseños, registrados o no) en los Servicios, el Vali App, los materiales, la información y el contenido de los Servicios, cualquier base de datos operado por Vali, todo el diseño, algoritmos, texto, gráficos, software, fotos, vídeo, música, sonido, datos, todas las compilaciones de software, código fuente subyacente y el software de los Servicios (incluyendo applets y scripts), y toda su selección, coordinación, disposición y mejora es propiedad de Vali. El Usuario no podrá, y no intentará, obtener cualquier propiedad o titularidad de dichos bienes. Todos los derechos están reservados.</p>
            <p>Ninguno de los materiales que se enlistan en el párrafo que antecede, en su totalidad o en parte, podrá ser reproducido, distribuido, copiado, modificado, publicado, descargado, exhibido, publicado, realizado o transmitido en cualquier forma o por cualquier medio, vendido, alquilado, re-vendido, licenciado o sub-licenciado, utilizado para crear trabajos derivados, o de cualquier manera explotado sin la previa autorización expresa por escrito de Vali. Cualquier violación de estas restricciones podrá dar lugar a una infracción en materia de propiedad intelectual e industrial y podría estar sujeto a sanciones civiles y/o penales.</p>
            <p>Los logotipos, diseños y variaciones de ellos que se encuentran en los Servicios son marcas registradas propiedad de Vali o de sus licenciantes y todo el uso de estas marcas redundará en beneficio de Vali. El Usuario no podrá utilizar los nombres, logotipos o marcas propiedad de Vali o sus licenciantes sin la expresa autorización de Vali.</p>
            <p>El Usuario no deberá (y no deberá permitir o facilitar a cualquier otra persona a) descompilar, realizar ingeniería inversa, desmontar o reducir cualquier parte de cualquiera del software de Vali (incluyendo los Servicios) a formato legible.</p>
            <p>13. Modificaciones/actualizaciones</p>
            <p>El Usuario acepta que los Servicios se ofrecen en el estado en que se encuentran. El Usuario acepta que Vali no ha otorgado ninguna garantía específica sobre el funcionamiento de los Servicios para un uso en particular, y Vali no puede garantizar la continuidad ininterrumpida de los Servicios.</p>
            <p>El Usuario esta de acuerdo en que Vali se reserva el derecho en cualquier momento de modificar o interrumpir, temporal o permanentemente, los Servicios (o cualquier parte de los mismos) con o sin previo aviso. El Usuario acepta que Vali no será responsable ante usted o cualquier tercero por cualquier modificación, suspensión o interrupción de los Servicios.</p>
            <p>El Usuario esta de acuerdo en que los Servicios podrán descargar e instalar automáticamente mejoras, actualizaciones y nuevas funcionalidades. El Usuario podrá configurar estas descargas automáticas a través de los ajustes de sus dispositivos.</p>
            <p>El Usuario reconoce y acepta que los Servicios podrán utilizar Cookies (las “Cookies”). Las Cookies son pequeños archivos que se instalan en el disco duro, con una duración limitada en el tiempo que ayudan a personalizar los Servicios. Los Servicios ofrecen ciertas funcionalidades que sólo están disponibles mediante el empleo de Cookies.</p>
            <p>14. Cesión</p>
            <p>El Usuario no podrá ceder ni transferir estas Condiciones, en todo o en parte, sin el consentimiento previo por escrito de Vali. Sin embargo el Usuario autoriza a Vali para ceder o transferir estas Condiciones, en todo o en parte a cualquier tercero.</p>
            <p>15. Ilegalidad de disposiciones</p>
            <p>Cualquier renuncia expresa o la falta de ejercicio con prontitud de cualquier derecho bajo las Condiciones no creará una renuncia continua o cualquier expectativa de no aplicación. Si alguna disposición de las Condiciones es considerada inválida, ilegal, nula o inexigible, ya sea en su totalidad o en parte, por cualquier ley o regulación o por cualquier tribunal o árbitro, el Usuario y Vali acuerdan que dicha disposición será reemplazada por una nueva que cumpla el propósito del negocio original, y las demás disposiciones de las Condiciones permanecerán en pleno vigor y efecto.</p>
            <p>Las presentes Condiciones constituyen el contrato íntegro y sustituyen cualquier acuerdo anterior celebrado por el Usuario y Vali.</p>
            <p>16. Indemnización</p>
            <p>Usted acepta que será responsable por el uso adecuado de los Servicios, y está de acuerdo en indemnizar y sacar en paz y a salvo a Vali, sus empleados, ejecutivos, consejeros, accionistas y/o afiliados, de cualquier reclamación que cualquier tercero pudiera instaurar, incluyendo el costo razonable de los honorarios legales de abogados, y que dicha reclamación provenga o esté conectada con: i) el uso indebido de los Servicios; ii)la violación de las presentes Condiciones; iii) cualquier violación del Usuario de derechos de terceros; iv) el Contenido del Usuario; o de cualquier disputa entre el Usuario y terceras personas. Vali se reserva el derecho de asumir la defensa de cualquiera de las reclamaciones aquí enunciadas, y en ese caso el Usuario se obliga a cooperar con la defensa de dicha reclamación.</p>
            <p>17. Legislación aplicable</p>
            <p>El Usuario y Vali aceptan que las presentes Condiciones se celebran de conformidad con las leyes aplicables en los Estados Unidos Mexicanos. Para la interpretación y ejecución de los mismos el Usuario y Vali están de acuerdo en someterse a la jurisdicción de los tribunales competentes de la ciudad de Monterrey, Nuevo León, renunciando desde este momento a cualquier otra jurisdicción que pudiere resultar aplicable en razón de sus domicilios o de cualquier otra circunstancia.</p>
            <p>18. Modificaciones a las Condiciones</p>
            <p>Vali se reserva el derecho de realizar cambios y modificaciones en cualquier tiempo a las presentes Condiciones, sin necesidad de notificar al Usuario. Será responsabilidad exclusiva del Usuario revisar las Condiciones actualizados, y al continuar con el uso de los Servicios, expresamente acepta que se sigue sometiendo a la última versión actualizada de estas Condiciones.</p>
            <p>19. Consentimiento a recibir comunicaciones electrónicas</p>
            <p>Mediante el uso de los Servicios, usted está de acuerdo en recibir ciertas comunicaciones electrónicas de nosotros y otros usuarios, según se detalla en el Aviso de Privacidad. Adicionalmente, Usted acepta que su correo electrónico podrá ser utilizado como medio para recibir cualquier tipo de aviso, notificación, revelación u otras comunicaciones para satisfacer cualquier requisito legal de notificaciones relacionadas con estas Condiciones, el uso de los Servicios, o cualquier otro contrato que medie entre el Usuario y Vali.</p>
            <p>Dónde contactarnos</p>
            <p>Vali recibirá con gusto tus opiniones, preguntas o sugerencias. Nos puedes contactar enviando un correo a info@vali.com .</p>

        </div>
        <Footer/>
    </div>
)

export default TerminosYCondiciones;