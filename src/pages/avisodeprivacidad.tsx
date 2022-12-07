import { Meta } from '../layout/Meta';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Footer } from '../templates/Footer';

const AvisoDePrivacidad = () => (
    <div className="min-h-screen flex flex-col justify-between">
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
        <p className='text-md text-4xl font-bold'>Aviso de Privacidad</p>
        <br/>
        <br/>
        <h2 className='font-bold text-xl'>DATOS DEL RESPONSABLE </h2>
        <p className='text-md'>VALI WEALTH TECH, S.A.P.I. DE C.V.  (en lo sucesivo, “VALI”) hace de su conocimiento sus derechos y obligaciones previstos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, y que será responsabilidad de esta sociedad el uso y tratamiento de los mismos. VALI tiene su domicilio social y fiscal ubicado en Lázaro Garza Ayala 1214, Interior 1, Colonia Palo Blanco, C.P. 66230, San Pedro Garza García, Nuevo León y nos puede contactar vía correo electrónico en: privacidad@heyvali.com</p>
        <br/>
        <br/>
        <h2 className='font-bold text-xl'>RESPONSABILIDAD </h2>
        <p className='text-md'>VALI se obliga y compromete a proteger aquellos Datos Personales que sean proporcionados y/o recabados de cualquier usuario (en lo sucesivo, “TITULAR”) de la plataforma https://heyvali.com ; ya sea, a través de cualquier medio electrónico, formato en papel, formato electrónico de la página de internet de VALI, teléfono u otro que tenga como finalidad la obtención de Datos Personales; así mismo, se compromete a solamente utilizar dichos datos por el período que sea requerido; o bien, tan pronto las legislaciones que regulen la relación entre VALI y el TITULAR de los datos  permita su eliminación, de conformidad y en cumplimiento a las obligaciones contenidas en las Leyes correspondientes. </p>
        <br/>
        <h2 className='font-bold text-xl'>DATOS PERSONALES QUE SE RECABAN</h2>
        <p className='text-md'>Se consideran “Datos Personales” cualquier información que acredite la personalidad e identidad de su persona tal y como son: Nombre(s) y apellido(s), fecha de nacimiento, sexo, descripción física, nacionalidad, estado civil, domicilio(s), número telefónico (casa o celular), correo electrónico, Registro Federal de Contribuyente (RFC), Número de Seguro Social, Clave Única de Registro de Población (CURP), así como los que permitan identificar de manera plena la personalidad del TITULAR. </p>
        <br/>
        <h2 className='font-bold text-xl'>DATOS PERSONALES SENSIBLES, PATRIMONIALES Y FINANCIEROS QUE SE RECABAN </h2>
        <p className='text-md'>VALI hace del conocimiento del TITULAR que también podrán ser recabados Datos Personales financieros y/o patrimoniales relacionados con su situación económica, resultado de estudios económicos, entre otros documentos cuyo objeto sea identificar el estatus económico del TITULAR. Aunado a todo lo anterior, VALI informa al TITULAR que de ser necesario, solicitará referencias laborales a las empresas en las que el TITULAR haya trabajado y/o llevará a cabo investigaciones relacionadas con sus antecedentes judiciales, crediticias  y de conducta social. </p>
        <br/>
        <h2 className='font-bold text-xl'>FINALIDADES </h2>
        <p className='text-md'>Siendo estos Datos Personales y Datos Personales Sensibles recabados única y exclusivamente para contactarlo y por ser necesarios para los procesos de selección, evaluación, valoración, de los TITULARES y a fin de determinar el apego del perfil de la relación contractual del TITULAR, en su caso la probable relación de servicios entre el TITULAR y VALI¸ adicional a la elaboración del expediente del TITULAR dentro de VALI.</p>
        <p className='text-md'>VALI se compromete a que todos los Datos Personales y/o Datos Personales Sensibles que el TITULAR le proporcione, o que VALI obtenga de él, serán tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad y buen uso para las finalidades descritas en el presente Aviso de Privacidad. </p>
        <br/>
        <p className='text-md'>TRATAMIENTO DE LA INFORMACIÓN. </p>
        <p className='text-md'>VALI garantiza que los Datos Personales y/o Datos Personales Sensibles que recabe u obtenga del TITULAR serán utilizados única y exclusivamente para los fines mencionados en el presente aviso de privacidad, que dicha información no estará al alcance ni se podrá acceder a ella por personas ajenas a los procesos mencionados, que estarán protegidos con las medidas de seguridad físicas, administrativas y técnicas suficientes para su protección y confidencialidad y que dichos datos serán tratados solamente por el período de tiempo que sea requerido para el cumplimiento de los fines mencionados en el presente aviso de privacidad y una vez cumplidos estos fines se procederá a la cancelación, bloqueo y eliminación de los mismos en los tiempos y formas que las Leyes respectivas lo indiquen. </p>
        <br/>
        <p className='text-md'>De igual manera, y por ser necesario para el cumplimiento de los fines mencionados por este aviso de privacidad, VALI podrá transferir sus Datos Personales y/o Datos Personales Sensibles a clínicas, autoridades federales, o locales y/o prestadores de servicios de VALI cuando los procesos de selección, evaluación, valoración y la probable contratación del TITULAR requieran del análisis, opinión o antecedente de dichos organismos y en cuyo caso, la información que sea transferida será tratada con apego a lo estipulado por este aviso de privacidad. VALI se compromete a no transferir sus Datos Personales y/o Datos personales sensibles a ningún tercero sin el consentimiento del TITULAR, salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, así como a realizar esta transferencia con apego a los términos que fija dicha Ley que a la letra dice:</p>
        <br/>
        <p className='text-md'>“Artículo 37.- Las transferencias nacionales o internacionales de datos podrán llevarse a cabo sin el consentimiento del titular cuando se dé alguno de los siguientes supuestos: I. Cuando la transferencia esté prevista en una Ley o Tratado en los que México sea parte; II. Cuando la transferencia sea necesaria para la prevención o el diagnóstico médico, la prestación de asistencia sanitaria, tratamiento médico o la gestión de servicios sanitarios; III. Cuando la transferencia sea efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el control común del responsable, o a una sociedad matriz o a cualquier sociedad del mismo grupo del responsable que opere bajo los mismos procesos y políticas internas; IV. Cuando la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar en interés del titular, por el responsable y un tercero; V. Cuando la transferencia sea necesaria o legalmente exigida para la salvaguarda de un interés público, o para la procuración o administración de justicia; VI. Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial, y VII. Cuando la transferencia sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre el responsable y el titular.” </p>
        <br/>
        <p className='text-md'>Así como a realizar esta transferencia con apego a los términos que fija dicha Ley.</p>
        <br/>
        <h2 className='font-bold text-xl'>DERECHO A LIMITAR EL USO Y DIVULGACIÓN DE SUS DATOS PERSONALES </h2>
        <p className='text-md'>Si el TITULAR desea limitar el uso o divulgación de sus Datos Personales y/o Datos Personales Sensibles podrá ejercer de manera gratuita y en cualquier momento dichos derechos estipulados en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente, para lo cual podrá solicitar un formato para la delimitación de uso y divulgación, por el siguiente medio: Para el ejercicio de dichos derechos el TITULAR podrá llenar el formato correspondiente que será proporcionado por VALI en la siguiente dirección: </p>
        <br/>
        <p className='text-md'>∙ Lázaro Garza Ayala 1214, Interior 1, Colonia Palo Blanco, C.P. 66230, San Pedro Garza García, Nuevo León</p>
        <br/>
        <p className='text-md'>El formato deberá ir acompañado de una copia simple de un documento oficial que acredite la identidad del TITULAR e incluir una descripción clara y precisa de los Datos Personales y/o Datos Personales Sensibles respecto de los cuales ejercitará cualquiera de los derechos que le confiere la Ley, así mismo deberá proporcionar un correo electrónico, número telefónico y dirección para oír y recibir notificaciones a fin de comunicarle la respuesta a su petición y cualquier otra información que facilite la búsqueda y localización de sus datos para los fines requeridos. Así mismo con objeto de que el TITULAR pueda limitar el uso y divulgación de su información personal, le ofrecemos el siguiente medio: </p>
        <br/>
        <p className='text-md'>∙ Su registro en el Listado de Exclusión de VALI, a fin de que sus datos personales no sean tratados para fines mercadotécnicos, publicitarios o de prospección comercial por nuestra parte. Para mayor información se podrá dirigirse a los datos de contacto establecidos en el presente documento. </p>
        <br/>
        <h2 className='font-bold text-xl'>DERECHO A LA REVOCACIÓN DEL CONSENTIMIENTO PARA EL USO DE SUS DATOS PERSONALES</h2>
        <p className='text-md'>El TITULAR puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus Datos Personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros. Para el ejercicio de dicho derecho el TITULAR podrá llenar el formato correspondiente que será proporcionado por VALI en la siguiente dirección:</p>
        <br/>
         <p className='text-md'>∙ Lázaro Garza Ayala 1214, Interior 1, Colonia Palo Blanco, C.P. 66230, San Pedro Garza García, Nuevo León</p>
        <br/>
        <p className='text-md'>El formato deberá ir acompañado de una copia simple de un documento oficial que acredite la identidad del TITULAR e incluir una descripción clara y precisa de los Datos Personales y/o Datos Personales Sensibles respecto de los cuales ejercitará cualquiera de los derechos que le confiere la Ley, así mismo deberá proporcionar un correo electrónico, número telefónico y dirección para oír y recibir notificaciones a fin de comunicarle la respuesta a su petición y cualquier otra información que facilite la búsqueda y localización de sus datos para los fines requeridos.</p>
        <br/>
        <p className='text-md'>DERECHO AL ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN DE SUS DATOS PERSONALES. </p>
        <p className='text-md'>Si el TITULAR desea acceder, rectificar, cancelar u oponerse al uso de sus Datos Personales y/o Datos Personales Sensibles podrá ejercer de manera gratuita y en cualquier momento su derecho de acceso, rectificación, cancelación u oposición de sus Datos Personales y/o Datos Personales Sensibles (Derechos ARCO estipulados en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente), por el siguiente medio: Para el ejercicio de dichos derechos el TITULAR podrá llenar el formato correspondiente que será proporcionado por VALI en la siguiente dirección:</p>
        <br/>
        <p className='text-md'>∙ Lázaro Garza Ayala 1214, Interior 1,  Colonia Palo Blanco, C.P. 66230, San Pedro Garza García, Nuevo León</p>
        <br/>
        <p className='text-md'>El formato deberá ir acompañado de una copia simple de un documento oficial que acredite la identidad del TITULAR e incluir una descripción clara y precisa de los Datos Personales y/o Datos Personales Sensibles respecto de los cuales ejercitará cualquiera de los derechos que le confiere la Ley, así mismo deberá proporcionar un correo electrónico, número telefónico y dirección para oír y recibir notificaciones a fin de comunicarle la respuesta a su petición y cualquier otra información que facilite la búsqueda y localización de sus datos para los fines requeridos. VALI tendrá un plazo de máximo veinte días hábiles contados a partir de la fecha en que se reciba la solicitud del TITULAR para informar al TITULAR sobre la procedencia de su solicitud, en caso afirmativo se atenderá lo solicitado por el TITULAR en un plazo no mayor a quince días hábiles siguientes a la fecha de la que se acepte la procedencia de la solicitud llevada a cabo por el TITULAR. VALI podrá negar el acceso total o parcial de los Datos Personales y/o Datos Personales Sensibles o a la realización de cualquier tipo de rectificación, cancelación u oposición al tratamiento de los mismos, cuando se encuentre dentro de los supuestos enmarcados en la Ley. </p>
        <br/>
        <p className='text-md'>EL USO DE LAS TECNOLOGÍAS DE RASTREO EN NUESTRO PORTAL DE INTERNET. </p>
        <p className='text-md'>Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle nuevos productos y servicios basados en sus preferencias. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: horario de navegación, tiempo de navegación en nuestra página de Internet, secciones consultadas, y páginas de Internet accedidas previo a la nuestra. Así mismo, le informamos que sus Datos Personales que se obtienen a través de estas tecnologías no serán compartidos con personas, empresas, organizaciones o autoridades distintas a nosotros. Estas tecnologías podrán deshabilitarse siguiendo las instrucciones establecidas en el procedimiento de eliminación de cookies y web beacons establecidas más adelante.</p>
        <br/>
        <p className='text-md'>MODIFICACIONES AL AVISO DE PRIVACIDAD. </p>
        <p className='text-md'>VALI se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, en cumplimiento de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado; de ser así, VALI lo dará a conocer a través de su publicación en la recepción de nuestra oficina ubicada en Avenida Lázaro Cárdenas 1007, Residencial Santa Bárbara, San Pedro Garza García, Nuevo León 66266. </p>
        <br/>
        <br/>
        <br/>
        <p className='text-md font-bold text-xl text-center'>Eliminación y cancelación de uso de Cookies</p>
        <br/>
        <p className='text-md'>A continuación se muestra la forma de como eliminar y cancelar el registro de cookies para los navegadores de Internet Explorer, Mozilla Firefox, Google Chrome y Safari</p>
        <br/>
        <p className='text-md font-bold'>Internet Explorer</p>
        <br/>
        <p className='text-md'>Eliminar los cookies actualmente almacenados.</p>
        <p className='text-md'>1. Inicie el programa Internet Explorer.</p>
        <p className='text-md'>2. Seleccionar en la barra de menú la opción de Herramientas y posteriormente la opción de Opciones de Internet.</p>
        <p className='text-md'>3. En el apartado de Historial de Navegación se deberá presionar el botón de Eliminar.</p>
        <p className='text-md'>4. Se abrirá una ventana con varias opciones para eliminar, aquí solo se deberá seleccionar (recuadro seleccionado) la opción de Cookies.</p>
        <p className='text-md'>5. Se presionará el botón de Eliminar, se cerrará automáticamente la ventana.</p>
        <p className='text-md'>6. Finalmente se debe presionar el botón de OK para finalizar con la operación.</p>
        <p className='text-md'>Toda la información de cookies almacenada se habrá eliminado.</p>
        <br/>
        <p className='text-md'>Cancelar el uso futuro de cookies.</p>
        <p className='text-md'>1. Inicie el programa Internet Explorer.</p>
        <p className='text-md'>2. Seleccionar en la barra de menú la opción de Herramientas y posteriormente la opción de Opciones de Internet.</p>
        <p className='text-md'>3. Se abrirá una ventana y se deberá seleccionar la pestaña de Privacidad.</p>
        <p className='text-md'>4. En la sección de Configuración se deberá presionar el botón de Avanzado.</p>
        <p className='text-md'>5. En el apartado de Cookies se deberá presionar el recuadro Sobrescribir el manejo automático de cookies.</p>
        <p className='text-md'>6. Se deberá seleccionar la opción de Bloquear tanto para Cookies primarios y Cookies Terceros.</p>
        <p className='text-md'>7. Se deberá presionar el botón de OK para guardar la nueva configuración.</p>
        <p className='text-md'>8. Finalmente se debe presionar el botón de OK para finalizar con la operación.</p>
        <p className='text-md'>A partir de este momento y en el futuro ya no se almacenará información dentro de los cookies.</p>
        <br/>
        <p className='text-md font-bold'>Mozilla Firefox</p>
        <br/>
        <p className='text-md'>Eliminar los cookies actualmente almacenados.</p>
        <p className='text-md'>1. Inicie el programa Mozilla Firefox.</p>
        <p className='text-md'>2. Presionar el botón de Firefox en la esquina superior izquierda.</p>
        <p className='text-md'>3. Seleccionar Opciones y posteriormente Opciones.</p>
        <p className='text-md'>4. Aparecerá una ventana con varias opciones en la parte de arriba, se deberá seleccionar la opción de Privacidad.</p>
        <p className='text-md'>5. En el apartado de Historia se deberá presionar el texto remover cookies individuales.</p>
        <p className='text-md'>6. Aparecerá una ventana en donde se podrá seleccionar el sitio al cual se le desean eliminar los cookies, al seleccionar el sitio se deberá presionar el botón de Eliminar Cookie. También se podrá seleccionar el botón de Eliminar Todos los Cookies, con se eliminarán todos los cookies de todas los sitios.</p>
        <p className='text-md'>7. Finalmente se deberá seleccionar el botón de OK para terminar la operación.</p>
        <p className='text-md'>La información de cookies almacenada se habrá eliminado.</p>
        <br/>
        <p className='text-md'>Cancelar el uso futuro de cookies.</p>
        <p className='text-md'>1. Inicie el programa Mozilla Firefox.</p>
        <p className='text-md'>2. Presionar el botón de Firefox en la esquina superior izquierda.</p>
        <p className='text-md'>3. Seleccionar Opciones y posteriormente Opciones.</p>
        <p className='text-md'>4. Aparecerá una ventana con varias opciones en la parte de arriba, se deberá seleccionar la opción de Privacidad.</p>
        <p className='text-md'>5. En el apartado de Historial en el botón seguido del texto Firefox hará:, se deberá seleccionar.</p>
        <p className='text-md'>Utilizar configuración para el historial.</p>
        <p className='text-md'>6. Se deberán de‐seleccionar los recuadros Aceptar cookies de los sitios.</p>
        <p className='text-md'>7. Finalmente se deberá seleccionar el botón de OK para terminar la operación.</p>
        <p className='text-md'>A partir de este momento y en el futuro ya no se almacenará información dentro de los cookies.</p>
        <p className='text-md'>Esta información tiene solo fines para ayudar al usuario a eliminar el uso de cookies. La información podrá variar basado en las diferentes versiones de los navegadores.</p>
        <br/>
        <p className='text-md font-bold'>Google Chrome</p>
        <br/>
        <p className='text-md'>Eliminar los cookies actualmente almacenados.</p>
        <p className='text-md'>1. Inicie el programa Google Chrome.</p>
        <p className='text-md'>2. Localice dentro de la barra del Navegador el ícono de tareas en la esquina superior derecha (con tres líneas horizontales) y al darle Clic se despliega un menú emergente, dentro del cual se selecciona Configuración.</p>
        <p className='text-md'>3. Busque la opción Mostrar opciones avanzadas, moviendo la barra de desplazamiento hacia abajo.</p>
        <p className='text-md'>4. De clic en Mostrar opciones avanzadas y se desplegaran otras opciones en el menú.</p>
        <p className='text-md'>5. En el menú de Privacidad, de clic en Borrar datos de navegación.</p>
        <p className='text-md'>6. Posteriormente se desplegará un sub menú, en la parte de Eliminar elementos almacenados “desde:”; escoja desde cuando quiere eliminarlos, si quiere eliminarlo todo escoja desde el inicio de los tiempos.</p>
        <p className='text-md'>7. De clic en Borrar datos de navegación. Asegurándose de que este seleccionada la opción de Eliminar cookies y otros datos de sitios y de complementos</p>
        <p className='text-md'>8. Salga del sitio dando clic en la x de la pestaña y regresará a la página donde estaba trabajando. La información de cookies almacenada se habrá eliminado.</p>
        <br/>
        <p className='text-md'>Cancelar el uso futuro de cookies.</p>
        <p className='text-md'>1. Inicie el programa Google Chrome.</p>
        <p className='text-md'>2. Localice dentro de la barra del Navegador el ícono de tareas en la esquina superior derecha (con tres líneas horizontales) y al darle Clic se despliega un menú emergente, dentro del cual se selecciona Configuración.</p>
        <p className='text-md'>3. Busque la opción Mostrar opciones avanzadas, moviendo la barra de desplazamiento hacia abajo.</p>
        <p className='text-md'>4. De clic en Mostrar opciones avanzadas y se desplegaran otras opciones en el menú.</p>
        <p className='text-md'>5. En el menú de Privacidad, de clic en Configuración de contenido…</p>
        <p className='text-md'>6.  Seleccionar las opciones No permitir que se guarden datos de los sitios y  Bloquear los datos de sitios y las cookies de terceros.</p>
        <p className='text-md'>7. Finalmente se deberá seleccionar el botón de OK para terminar la operación.</p>
        <p className='text-md'>A partir de este momento y en el futuro ya no se almacenará información dentro de los cookies.</p>
         <p className='text-md'></p>
         <p className='text-md'></p>
        <p className='text-md font-bold'>Safari</p>
        <br/>
        <p className='text-md'>Eliminar los cookies actualmente almacenados.</p>
        <p className='text-md'>1. Inicie el programa Safari</p>
        <p className='text-md'>2. Seleccione el menú de Safari que se encuentra en la esquina superior izquierda del navegador, este despliega un menú emergente, del cual se selecciona el ítem Preferencias.</p>
        <p className='text-md'>3. Se abrirá una ventana en la cual seleccionará el ítem de Privacidad.</p>
        <p className='text-md'>4. De clic en Eliminar todos los datos de los sitios web</p>
        <p className='text-md'>5. Aparecerá una ventana preguntándole ¿Seguro que desea eliminar todos los datos guardados en el ordenador por los sitios web? Haga clic en Eliminar ahora.</p>
        <p className='text-md'>6.- finalmente de clic en la x de color rojo en la esquina superior izquierda de la pantalla y regresará a la página donde estaba trabajando. La información de cookies almacenada se habrá eliminado.</p>
        <br/>
        <p className='text-md'>Cancelar el uso futuro de cookies.</p>
        <p className='text-md'>1. Inicie el programa Safari</p>
        <p className='text-md'>2. Seleccione el menú de Safari que se encuentra en la esquina superior izquierda del navegador, este despliega un menú emergente, del cual se selecciona el ítem Preferencias.</p>
        <p className='text-md'>3. Se abrirá una ventana en la cual seleccionará el ítem de Privacidad.</p>
        <p className='text-md'>4. En el apartado Bloquear cookies, asegúrese de seleccionar la opción Siempre</p>
        <p className='text-md'>5. Finalmente de clic en la x de color rojo en la esquina superior izquierda de la pantalla y regresará a la página donde estaba trabajando. A partir de este momento y en el futuro ya no se almacenará información dentro de los cookies.</p>
        <br/>
        <br/>
        </div>
        <Footer/>
    </div>
)

export default AvisoDePrivacidad;
