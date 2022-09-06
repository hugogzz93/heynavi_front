export type IDBType = {
    tipo: string;
    nombre: string;
    descripcion: string;
    rentabilidad: string;
    riesgo: string;
    tiempo: string;
    montoMin: number;
    recurrencia: string;
    generales: string;
    fijaVariable: string;
    respaldado: string;
    apertura: string;
}

const database: Array<IDBType> = [
    { tipo: 'Fondo de Capital Privado', nombre: 'Fondo Monei 50K', descripcion: 'Grupo 100% mexicano líder en el manejo de inversiones, que a través de especialistas, te ofrecen la información necesaria para mantener y aumentar tus inversiones.', rentabilidad: '12%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 50000, recurrencia: 'Mensual, Trimestral o Anual', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Garantías hipotecarias y prendarias por parte de las empresas financiadas', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Fondo Monei 500K', descripcion: 'Grupo 100% mexicano líder en el manejo de inversiones, que a través de especialistas, te ofrecen la información necesaria para mantener y aumentar tus inversiones.', rentabilidad: '13%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 500000, recurrencia: 'Mensual, Trimestral o Anual', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Garantías hipotecarias y prendarias por parte de las empresas financiadas', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Fondo Monei 1M', descripcion: 'Grupo 100% mexicano líder en el manejo de inversiones, que a través de especialistas, te ofrecen la información necesaria para mantener y aumentar tus inversiones.', rentabilidad: '14%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 1000000, recurrencia: 'Mensual, Trimestral o Anual', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Garantías hipotecarias y prendarias por parte de las empresas financiadas', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Peak Capital 6M', descripcion: 'Portafolio de inversión diversificado y conservador con sede en San Pedro Garza García, Nuevo León', rentabilidad: '12%', riesgo: 'Moderado', tiempo: '6 meses', montoMin: 50000, recurrencia: 'Semestral', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Contrato firmado ante notario y pagaré', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Peak Capital 12M', descripcion: 'Portafolio de inversión diversificado y conservador con sede en San Pedro Garza García, Nuevo León', rentabilidad: '18%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 50000, recurrencia: 'Anual', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Contrato firmado ante notario y pagaré', apertura: 'N/A' },
    { tipo: 'Prestamos', nombre: 'Yotepresto', descripcion: '"Conectamos directamente a personas que necesitan un préstamo con personas que quieren invertir su dinero. De esta manera logramos que el que pide prestado pague menos intereses y que el que invierte su dinero gane buenos rendimientos."', rentabilidad: '16.50%', riesgo: 'Alto', tiempo: '12 meses', montoMin: 200, recurrencia: 'Mensual', generales: 'Primero tienes que registrarte. Después deberás fondear tu cuenta con los recursos que quieras invertir. Una vez que lo hayas hecho, podrás decidir en qué préstamos deseas invertir.', fijaVariable: 'Fija', respaldado: 'N/A', apertura: '1% sobre los pagos que recibes de cada préstamos en el que hayas invertido.' },
    { tipo: 'Fondos de Inversión', nombre: 'HeyBanco!', descripcion: 'Banco digital que te ofrece lo mismo que un banco tradicional y más. Todo desde tu celular.', rentabilidad: '5.12%', riesgo: 'Bajo', tiempo: 'No hay', montoMin: 1000, recurrencia: 'Semanal', generales: 'Trámite de apertura 100% en línea desde la App de Hey Banco. Aportar una identificación oficial y tomarse una selfie para solicitar la tarjeta. Sin monto mínimo de apertura. No exige saldo promedio mensual.', fijaVariable: 'Fija', respaldado: 'Respaldados por el IPAB', apertura: 'N/A' },
    { tipo: 'Fondos de Inversión', nombre: 'HeyBanco!', descripcion: 'Banco digital que te ofrece lo mismo que un banco tradicional y más. Todo desde tu celular.', rentabilidad: '8.32%', riesgo: 'Bajo', tiempo: 'No hay', montoMin: 1000, recurrencia: 'Semanal', generales: 'Trámite de apertura 100% en línea desde la App de Hey Banco. Aportar una identificación oficial y tomarse una selfie para solicitar la tarjeta. Sin monto mínimo de apertura. No exige saldo promedio mensual.', fijaVariable: 'Fija', respaldado: 'Respaldados por el IPAB', apertura: 'N/A' },
    { tipo: 'Fondos de Inversión', nombre: 'Banco Base: Inverbase pagaré', descripcion: 'Banca empresarial y patrimonial', rentabilidad: '8.27%', riesgo: 'Bajo', tiempo: 'Depende del plazo elegido', montoMin: 10000, recurrencia: 'Depende del plazo', generales: 'Tener Cuenta Amarilla con Banco Base Identificación oficial vigente Designación de beneficiarios', fijaVariable: 'Fija', respaldado: 'Respaldados por el IPAB', apertura: 'N/A' },
    { tipo: 'Prestamos', nombre: 'Supertasas', descripcion: 'Institución que ofrece préstamos e inversiones en el sector popular.', rentabilidad: '7.66%', riesgo: 'Bajo', tiempo: 'A la vista', montoMin: 1, recurrencia: 'Diaria', generales: 'Ser mexicano, mayor de edad, tener una cuenta bancaria, presentar identificación oficial y comprobante de domicilio.', fijaVariable: 'Fija', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Prestamos', nombre: 'Supertasas 3M', descripcion: 'Institución que ofrece préstamos e inversiones en el sector popular.', rentabilidad: '8.77%', riesgo: 'Bajo', tiempo: '3 meses', montoMin: 1, recurrencia: 'Trimestral', generales: 'Ser mexicano, mayor de edad, tener una cuenta bancaria, presentar identificación oficial y comprobante de domicilio.', fijaVariable: 'Fija', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Prestamos', nombre: 'Supertasas 6M', descripcion: 'Institución que ofrece préstamos e inversiones en el sector popular.', rentabilidad: '9.20%', riesgo: 'Bajo', tiempo: '6 meses', montoMin: 1, recurrencia: 'Semestral', generales: 'Ser mexicano, mayor de edad, tener una cuenta bancaria, presentar identificación oficial y comprobante de domicilio.', fijaVariable: 'Fija', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Prestamos', nombre: 'Supertasas 12M', descripcion: 'Institución que ofrece préstamos e inversiones en el sector popular.', rentabilidad: '10.00%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 1, recurrencia: 'Anual', generales: 'Ser mexicano, mayor de edad, tener una cuenta bancaria, presentar identificación oficial y comprobante de domicilio.', fijaVariable: 'Fija', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Bonos de Gobierno', nombre: 'Cetesdirecto', descripcion: 'cetesdirecto® es un producto y marca registrada propiedad de Nacional Financiera S.N.C., que cuenta con una plataforma gratuita en internet para que cualquier persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de bolsa u otras instituciones.', rentabilidad: '8.05%', riesgo: 'Bajo', tiempo: '1 mes', montoMin: 100, recurrencia: 'Diaria', generales: 'Ser de nacionalidad mexicana y mayor de 18 años, en caso de ser extranjero será necesario contar con residencia fija en México y tener el documento que apruebe su estancia legal en el país. (FM2 o FM3)', fijaVariable: 'Fija', respaldado: 'Bonos gubernamentales respaldados por el Gobierno Federal', apertura: 'N/A' },
    { tipo: 'Bonos de Gobierno', nombre: 'Cetesdirecto', descripcion: 'cetesdirecto® es un producto y marca registrada propiedad de Nacional Financiera S.N.C., que cuenta con una plataforma gratuita en internet para que cualquier persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de bolsa u otras instituciones.', rentabilidad: '8.62%', riesgo: 'Bajo', tiempo: '3 meses', montoMin: 100, recurrencia: 'Diaria', generales: 'Ser de nacionalidad mexicana y mayor de 18 años, en caso de ser extranjero será necesario contar con residencia fija en México y tener el documento que apruebe su estancia legal en el país. (FM2 o FM3)', fijaVariable: 'Fija', respaldado: 'Bonos gubernamentales respaldados por el Gobierno Federal', apertura: 'N/A' },
    { tipo: 'Bonos de Gobierno', nombre: 'Cetesdirecto', descripcion: 'cetesdirecto® es un producto y marca registrada propiedad de Nacional Financiera S.N.C., que cuenta con una plataforma gratuita en internet para que cualquier persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de bolsa u otras instituciones.', rentabilidad: '9.34%', riesgo: 'Bajo', tiempo: '6 meses', montoMin: 100, recurrencia: 'Diaria', generales: 'Ser de nacionalidad mexicana y mayor de 18 años, en caso de ser extranjero será necesario contar con residencia fija en México y tener el documento que apruebe su estancia legal en el país. (FM2 o FM3)', fijaVariable: 'Fija', respaldado: 'Bonos gubernamentales respaldados por el Gobierno Federal', apertura: 'N/A' },
    { tipo: 'Bonos de Gobierno', nombre: 'Cetesdirecto', descripcion: 'cetesdirecto® es un producto y marca registrada propiedad de Nacional Financiera S.N.C., que cuenta con una plataforma gratuita en internet para que cualquier persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de bolsa u otras instituciones.', rentabilidad: '9.66%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 100, recurrencia: 'Diaria', generales: 'Ser de nacionalidad mexicana y mayor de 18 años, en caso de ser extranjero será necesario contar con residencia fija en México y tener el documento que apruebe su estancia legal en el país. (FM2 o FM3)', fijaVariable: 'Fija', respaldado: 'Bonos gubernamentales respaldados por el Gobierno Federal', apertura: 'N/A' },
    { tipo: 'Criptomonedas', nombre: 'Bitso+', descripcion: 'Bitso+ es un producto en la app de Bitso. Con él, puedes obtener rendimientos anuales de hasta un 6% en BTC, y hasta un 15% en USD stablecoins, que se te acreditarán semanalmente. Los BTC y Stablecoins, a diferencia de los criptos tradicionales, se encuentran respaldados por el dólar.', rentabilidad: '10%', riesgo: 'Moderado', tiempo: 'No hay', montoMin: 100, recurrencia: 'Diaria', generales: 'Tener a la mano CURP (Clave única de Registro de Población) y RFC (Registro Federal de Contribuyentes)', fijaVariable: 'Variable', respaldado: 'Respaldados por el dólar americano.', apertura: 'N/A' },
    { tipo: 'Venture Capital', nombre: 'Arkangeles: Cha`Pay', descripcion: 'Arkangeles es una plataforma de crowdfunding, donde todos pueden invertir en compañías que se encuentran en diferentes etapas de su crecimiento En este caso estamos viendo una oportunidad con un Startup llamado Cha`Pay que ellos buscan dar una solución digital a sus aliados comerciales como: hospitales, clínicas, doctores independientes, laboratorios y/o farmacias de poder ofrecer financiamiento a sus pacientes sin ningún riesgo de fraude, crédito, pago ni contra-cargos.', rentabilidad: '*', riesgo: 'Muy Alto', tiempo: 'No hay', montoMin: 5000, recurrencia: 'No aplica', generales: 'Crear una cuenta Evaluar compañías Acreditate e invierte', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Venture Capital', nombre: 'Arkangeles: NUDOS', descripcion: 'Arkangeles es una plataforma de crowdfunding, donde todos pueden invertir en compañías que se encuentran en diferentes etapas de su crecimiento En este caso estamos viendo una oportunidad con un Startup llamado NUDOS plataforma que permite a las empresas proporcionar a sus trabajadores remotos todas las herramientas y equipos que necesitan para trabajar seguros, cómodos y productivos en casa, como lo harían en una oficina.', rentabilidad: '*', riesgo: 'Muy Alto', tiempo: 'No hay', montoMin: 5000, recurrencia: 'No aplica', generales: 'Crear una cuenta Evaluar compañías Acreditate e invierte', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Venture Capital', nombre: 'Arkangeles: Wihom', descripcion: 'Arkangeles es una plataforma de crowdfunding, donde todos pueden invertir en compañías que se encuentran en diferentes etapas de su crecimiento En este caso estamos viendo una oportunidad con un Startup llamado Wihom software de gestión de propiedades de alquiler a través de WhatsApp. A través de su solución de API de Whatsapp, las empresas de gestión de propiedades de alquiler y los inquilinos pueden gestionar pagos, enviar facturas y cobrar tarifas de alquiler en lugar de ocuparse de los pagos manuales o del sitio web.', rentabilidad: '*', riesgo: 'Muy Alto', tiempo: 'No hay', montoMin: 5000, recurrencia: 'No aplica', generales: 'Crear una cuenta Evaluar compañías Acreditate e invierte', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Venture Capital', nombre: 'Arkangeles: Cincel', descripcion: 'Arkangeles es una plataforma de crowdfunding, donde todos pueden invertir en compañías que se encuentran en diferentes etapas de su crecimiento En este caso estamos viendo una oportunidad con un Startup llamado Cincel la suite de multifirma, certificación de documentos, notarización con blockchain y validación de identidad de LATAM.   La suite de CINCEL permite que las empresas puedan acelerar sus procesos de firma, onboarding o cierre de cualquier contrato de forma personalizada y escalable con plena validez legal. ', rentabilidad: '*', riesgo: 'Muy Alto', tiempo: 'No hay', montoMin: 3000, recurrencia: 'No aplica', generales: 'Crear una cuenta Evaluar compañías Acreditate e invierte', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Bienes Raíces', nombre: 'Grupo Veq', descripcion: 'empresa mexicana especializada en la construcción, gestión, comercialización y promoción de desarrollos inmobiliarios', rentabilidad: '20%', riesgo: 'Moderado', tiempo: '24 meses', montoMin: 500000, recurrencia: 'No aplica', generales: 'Ser persona física mayor de edad Entregar documentaciòn general Firmar contrato', fijaVariable: 'Variable', respaldado: 'Garantías hipotecarias', apertura: 'N/A' },
    { tipo: 'Planes de Retiro/Ahorro', nombre: 'GBM+ Wealth management', descripcion: 'Con base en tu perfil, te recomiendan estrategias de inversión adaptadas a lo que tú necesitas.', rentabilidad: '8%', riesgo: 'Moderado', tiempo: 'No hay', montoMin: 1000, recurrencia: 'Depende', generales: '- Crea tu registro con un correo y contraseña. - Verifica tu correo electrónico. - Crea tu contrato, necesitarás tu correo y contraseña. - Deberás verificar tu identidad con una selfie y la foto de tu INE, IFE o pasaporte. - Ingresa tus datos personales como nacionalidad, domicilio y actividad económica. - Firma tu contrato digital a través de SignNow - Deposita a tu cuenta', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'El arancel se cobra de acuerdo al monto invertido en cada fondo del que esta compuesta tu estrategia. Este arancel es anual (arancel + IVA), se resta a diario al final de las operaciones del fondo y los puedes consultar aquí' },
    { tipo: 'Bolsa de Valores', nombre: 'GBM Trading', descripcion: 'Compra y venta de acciones en la bolsa de valores de distintos países alrededor del mundo.', rentabilidad: '-', riesgo: 'Alto', tiempo: 'No hay', montoMin: 20, recurrencia: 'Cada 48 horas', generales: '', fijaVariable: 'Variable', respaldado: 'N/A', apertura: '•  De MX$1,000 a $1,000,000 se cobra 0.25% de comisión  •  De MX$1,000,001 a $3,000,000 se cobra 0.20% de comisión  •  De MX$3,000,001 a $5,000,000 se cobra 0.15% de comisión  •  De MX$5,000,001 a $10,000,000 se cobra 0.125% de comisión  •  Más de MX$10,000,000 se cobra 0.10% de comisión' },
    { tipo: 'Bonos de Gobierno', nombre: 'GBM+ Smart cash', descripcion: 'Tu dinero se invierte en un instrumento de bajo riesgo (CETES y bonos gubernamentales) que genera rendimientos diarios.', rentabilidad: '6.5%', riesgo: 'Bajo', tiempo: 'No hay', montoMin: 100, recurrencia: 'Diaria', generales: '', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'N/A' },
    { tipo: 'Planes de Retiro/Ahorro', nombre: 'Kubo Ahorro', descripcion: 'Plataforma multiproducto para ahorrar, invertir sin plazos forzosos.', rentabilidad: '2%', riesgo: 'Muy Bajo', tiempo: 'No hay', montoMin: 50, recurrencia: 'Diaria', generales: '- Crea tu cuenta Kubo - Verifica tu correo electrónico - Deberás tener a la mano una ID vigente (puede ser Credencial de Elector, Pasaporte, Licencia de Conducir o Cartilla Militar) y Comprobante de Domicilio - Deberás verificar tu identidad con una selfie - Deposita a tu cuenta', fijaVariable: 'Fijo', respaldado: 'Es necesario firmar contrato de garantía de servicios', apertura: 'N/A' },
    { tipo: 'Planes de Retiro/Ahorro', nombre: 'Kubo Fijo', descripcion: 'Plataforma multiproducto para ahorrar, invertir con Plazo Fijo.', rentabilidad: '11%', riesgo: 'Bajo', tiempo: '7 días', montoMin: 50, recurrencia: 'Depende el plazo de tu inversión', generales: '', fijaVariable: 'Fijo', respaldado: '', apertura: 'N/A' },
    { tipo: 'Bolsa de Valores', nombre: 'e-Vector', descripcion: 'Casa de Bolsa con servicios y productos especializados, que cubre las necesidades de inversionistas individuales, empresas, fondos institucionales, gobiernos e inversionistas extranjeros.', rentabilidad: '-', riesgo: 'Moderado', tiempo: 'No hay', montoMin: 10000, recurrencia: 'Diaria', generales: '- Comprobante de domicilio - CURP o RFC - Deberás tener a la mano una ID vigente (puede ser Credencial de Elector, Pasaporte, Licencia de Conducir o Cartilla Militar) - Es necesario contar con chequera de Banco Nacional', fijaVariable: 'Ambas', respaldado: 'N/A', apertura: 'Renta Variable y Fondos de Inversión: - Hasta el 1,7% del monto si es por medio de un asesor  Para consultar resto de productos y sus comisiones da click aquí' },
    { tipo: 'Bolsa de Valores', nombre: 'Value: Fondo V6', descripcion: 'Casa de Bolsa con distintos fondos de instrumentos de deuda para personas físicas. Brinda rendimientos muy atractivos equiparables a los que se obtendrían por inversiones de largo plazo. ', rentabilidad: '7%', riesgo: 'Bajo', tiempo: '3 días', montoMin: 25000, recurrencia: 'Diaria', generales: '- Elaborar contrato con Datos Personales directamente con Equipo de Asesores Value ', fijaVariable: 'Variable', respaldado: 'N/A', apertura: '1,41% de comisión por gastos de gestión, distribución, custodia, entre otros.' },
    { tipo: 'Bienes Raíces', nombre: 'Briq', descripcion: 'Plataforma de fondeo colectivo que permite invertir en proyectos de bienes raíces en México.', rentabilidad: '16%', riesgo: 'Bajo', tiempo: '6 meses', montoMin: 1000, recurrencia: 'Trimestral', generales: '- Eliges la oportunidad inmobiliaria a invertir directamente en la plataforma de la empresa - Hacer transferencia bancaria para invertir en la oportunidad - Firmar contrato digital', fijaVariable: 'Variable', respaldado: 'Se garantiza a traves de la inversión en inmuebles y bienes raíces', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Yox', descripcion: 'Trading de apuesta deportiva', rentabilidad: '-', riesgo: 'Alto', tiempo: '3 meses', montoMin: 10000, recurrencia: 'Trimestral', generales: '- Llenar el formato de nuevo cliente (Tu asesor te lo compartirá) y firmarlo - Enviar documentos a tu asesor  - Foto de INE cliente por ambos lados - Foto de INE beneficiario por ambos lados - Firma tu contrato', fijaVariable: 'Variable', respaldado: 'N/A', apertura: 'ND' },
    { tipo: 'Derivados y Divisas', nombre: '4X Capital', descripcion: '4X Capital es una empresa la cual hace trading única y exclusivamente en el Mercado de divisas(Forex). Realizamos operaciones únicamente a corto plazo con estrategias bien fundamentadas con el fin de minimizar el riesgo y generar el mayor rendimiento posible por operación.', rentabilidad: '17%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 50000, recurrencia: 'Trimestral', generales: '- Cedula de ID Fiscal - Credencial de Elector o Pasaporte - Comprobante de Domicilio', fijaVariable: 'Fijo', respaldado: 'Pagaré El fondo cuenta con reservas del 20% del capital total levantado.', apertura: 'N/A' },
    { tipo: 'Planes de Retiro/Ahorro', nombre: 'netWorth', descripcion: 'netWorth analiza en segundos entre 4399 Fondos de inversión que cotizan en bolsa y que estén disponibles en tu plan para tus objetivos de inversión. Inversiones en fondos de acciones, bonos, bienes raíces, metales preciosos, y energía, de todo el mundo. Nos enfocamos en elegir lo que es mejor para ti.', rentabilidad: '12%', riesgo: 'Bajo', tiempo: '', montoMin: 0, recurrencia: '', generales: '', fijaVariable: '', respaldado: '', apertura: '' },
    { tipo: 'Prestamos', nombre: 'Amifin', descripcion: 'Financiera con mas de 10 años de experiencia en el otorgamiento de créditos para vivienda. Los créditos que otorgamos cuentan con garantías inmobiliarias. ', rentabilidad: '16', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 250000, recurrencia: 'Mensual', generales: 'Ser persona física o moral con información general. INE CURP C. DOMICILIO CIF  ', fijaVariable: 'Fijo', respaldado: 'Contrato de crédito con sesión de garantías hipotecarias o fiduciarias y pagaré', apertura: 'No' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Rottor', descripcion: 'Plataforma especializada en compra venta de motos . Inspeccionamos en más de 100 puntos todas las motos que vendemos. Otorgamos garantía en todas nuestras motos. Ofrecemos prueba de 5 días o cambio de moto. ', rentabilidad: '30%', riesgo: 'Alto', tiempo: '3 años', montoMin: 500000, recurrencia: 'Trimestral', generales: 'Se realiza investigación de procedencia de fondos. ', fijaVariable: 'Variable', respaldado: 'Se firma contrato de préstamo, pagarés y activos. En caso de ser un inversionista que pueda aportar algo extra al negocio se puede ver la posibilidad de otorgamiento accionario.', apertura: 'No' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Guarderías Empresariales', descripcion: 'Nos enfocamos en implementar guarderías incorporadas al IMSS al interior de las empresas para uso exclusivo de sus empleados', rentabilidad: '20%', riesgo: 'Bajo', tiempo: '2.5 años', montoMin: 500000, recurrencia: 'Mensual', generales: 'Aplicar como interesado y se le tomará en cuenta para el próximo proyecto con empresa', fijaVariable: 'Fijo', respaldado: 'El contrato que se firma con la empresa a la que se financiará', apertura: 'Si decide retirarlo antes de tiempo, deja de percibir la utilidad del tiempo restante' },
    { tipo: 'Bienes Raíces', nombre: 'Arces', descripcion: 'Plataforma inmobiliaria enfocada en crowdfunding de proyectos en pre-venta. En este caso compartimos una de sus opciones llamada "Proyecto M10 Departamento C18"', rentabilidad: '23%', riesgo: 'Alto', tiempo: '24 meses', montoMin: 30878, recurrencia: 'Al final del plazo', generales: '-', fijaVariable: 'Variable', respaldado: '-', apertura: '-' },
    { tipo: 'Bienes Raíces', nombre: 'Arces', descripcion: 'Plataforma inmobiliaria enfocada en crowdfunding de proyectos en pre-venta. En este caso compartimos una de sus opciones llamada "Proyecto M10 Departamento B16"', rentabilidad: '23%', riesgo: 'Alto', tiempo: '24 meses', montoMin: 23296, recurrencia: 'Al final del plazo', generales: '-', fijaVariable: 'Variable', respaldado: '-', apertura: '-' },
    { tipo: 'Bolsa de Valores', nombre: 'Citibanamex', descripcion: 'Banca Privada', rentabilidad: '10.00%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 15000000, recurrencia: 'Trimestral', generales: 'Aperturando un contrato de inversion - INE - Comprobante de domicilio no mayor a 3 meses - RFC  - Curp', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'Comisión por compra y venta de acciones' },
    { tipo: 'Bolsa de Valores', nombre: 'Citibanamex', descripcion: 'Banca Privada', rentabilidad: '21.00%', riesgo: 'Muy Alto', tiempo: '1 año', montoMin: 15000000, recurrencia: 'Depende del tipo de portafolio que se construya con el cliente', generales: 'Aperturando un contrato de inversion - INE - Comprobante de domicilio no mayor a 3 meses - RFC  - Curp', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'Comisión por compra venta de acciones' },
    { tipo: 'Bolsa de Valores', nombre: 'Citibanamex', descripcion: 'Banca Privada', rentabilidad: '15.00%', riesgo: 'Alto', tiempo: '12 meses', montoMin: 15000000, recurrencia: 'Depende del portafolio que se construya con el cliente', generales: 'Aperturando un contrato de inversion - INE - Comprobante de domicilio no mayor a 3 meses - RFC  - Curp', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'Comisión por compra venta de acciones' },
    { tipo: 'Bolsa de Valores', nombre: 'Citibanamex ', descripcion: 'Banca Privada', rentabilidad: '12.50%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 15000000, recurrencia: 'Diario, mensual o anual', generales: 'Abrir un contrato de inversion', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'Comision por cpa/vta de acciones' },
    { tipo: 'Bienes Raíces', nombre: 'Ainara Valle', descripcion: 'Equity en proyecto de jardín de bodas en Valle de Bravo, con participación en la empresa y en el terreno. Ya contamos con todo el anteproyecto listo y permisos. Estamos invitando inversionistas a la fase de construcción. ', rentabilidad: '28%', riesgo: 'Moderado', tiempo: '3 años', montoMin: 840000, recurrencia: 'Anuales (a partir del 2o año)', generales: 'Persona física o persona moral, puede ser mexicano o extranjero.', fijaVariable: 'Variable', respaldado: 'Sociedad en la empresa y en el terreno', apertura: 'No' },
    { tipo: 'Fondos de Inversión', nombre: 'Goldman Capital', descripcion: 'Firma de Inversiones en donde manejamos portafolios de inversión con altos rendimientos', rentabilidad: '23%', riesgo: 'Moderado', tiempo: '2 años, menor dependiendo del monto ', montoMin: 500000, recurrencia: 'Depende del monto inicial', generales: 'RFC, ID oficial, Caratula de estado de cuenta para comprobar persona física, numero de teléfono celular y correo electrónico', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'Por retiro, un 20% trimestral sobre rendimientos' },
    { tipo: 'Fondo de Capital Privado', nombre: 'LA LEYENDA | Los Clasicos Nunca Mueren ', descripcion: 'Estamos en el negocio de crear, exportar y distribuir Destilado de Agave (Mezcal) de super alta calidad que crean experiencias únicas y Legendarias. 100% PURO De Agave Azul   En conjunto con proyecto de NFT (membresía) para adquirir el producto y tener acceso a los beneficios y experiencias que ofrecemos.', rentabilidad: '20.00%', riesgo: 'Moderado', tiempo: '2 años', montoMin: 1000000, recurrencia: 'Anual', generales: 'Invertir en la empresa ', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'NA' },
    { tipo: 'Derivados y Divisas', nombre: 'Spartan Blue Capital', descripcion: 'Provee servicios de consultoría financiera con la finalidad de aprovechar el potencial de los mercados financieros, obteniendo un rendimiento por encima de lo que ofrece el mercado. Opera en el mercado de divisas mediante brokers, para poder realizar las transacciones de compra y venta de divisas. Garantizan un rendimiento del 27% anual, inversiones en pesos o usd, al igual que el usuario decide si al finalizar el contrato retira en pesos o usd.', rentabilidad: '27%', riesgo: 'Moderado', tiempo: '12 meses', montoMin: 500000, recurrencia: 'Anual', generales: 'Capital', fijaVariable: 'Fijo', respaldado: 'Pagarés', apertura: 'No, no tiene comisión ni cuotas por apertura de contrato ni retiros' },
    { tipo: 'Criptomonedas', nombre: 'Atron Mining', descripcion: 'Empresa de Crypto Mineria en Mexico y Estados Unidos.', rentabilidad: '38.00%', riesgo: 'Alto', tiempo: '36 meses', montoMin: 1100000, recurrencia: 'Mensual', generales: 'Llenar los contratos de Mineria y de Prestamo Mercantil', fijaVariable: 'Variable', respaldado: 'La garantía es un pagare y sus activos. (computadoras)', apertura: 'La comision se genera a partir de que se retorna el 100% del monto invertido, 25% sobre utilidades.' },
    { tipo: 'Bienes Raíces', nombre: 'Visa Desarrollos', descripcion: 'Propiedad en venta en San Pedro con 8 lofts rentados. Recibe flujo mensual a partir del 1er mes. ', rentabilidad: '8%', riesgo: 'Bajo', tiempo: 'N/A', montoMin: 9000000, recurrencia: 'Mensual', generales: 'Comprar la propiedad', fijaVariable: 'Fijo', respaldado: 'La misma propiedad', apertura: 'N/A' },
    { tipo: 'Bienes Raíces', nombre: 'Ciudad Central Merida', descripcion: 'Terrenos residenciales 100% urbanizados dentro de privadas con casa club. ', rentabilidad: '10.00%', riesgo: 'Moderado', tiempo: '5 años', montoMin: 40000, recurrencia: 'Al final del plazo', generales: 'Enganche desde 40,000 pesos y mensualidades desde 2000 pesos', fijaVariable: 'Fijo', respaldado: 'Si, nuestros proyectos tienen fideicomisos y permisos para la realización de proyecto  ', apertura: 'N/A' },
    { tipo: 'Fondos de Inversión', nombre: 'Actinver Casa de Bolsa', descripcion: '5to Grupo Financiero más grande en el país y el 2do Mexicano.', rentabilidad: '12%', riesgo: 'Alto', tiempo: '12 meses', montoMin: 1000000, recurrencia: '72 hrs', generales: 'Abrir contrato de intermediación bursatil', fijaVariable: 'Variable', respaldado: 'Garantía del emisor', apertura: 'Si, existen diferentes tipos de comisiones, ejemplo: corretaje' },
    { tipo: 'Fondos de Inversión', nombre: 'Addem Capital', descripcion: 'Fondo privado que provee líneas alternativas de crédito estructuradas a cinco sectores: fintech, bienes raíces, energía, agricultura/alimentos sustentables y salud.', rentabilidad: '15.80%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 0, recurrencia: 'Anual', generales: 'El monto y el contacto', fijaVariable: 'Fijo', respaldado: 'NA', apertura: 'No' },
    { tipo: 'Fondos de Inversión', nombre: 'Bancrea', descripcion: 'Con Pagaré Ban crea tendrá la certeza de que tus inversiones estarán seguras y tendrán un alto rendimiento. Los beneficios que recibirá con Pagaré Ban crea son muchos, conózcalos aquí.', rentabilidad: '6.00%', riesgo: 'Bajo', tiempo: 'de 1 a 119 días', montoMin: 5000, recurrencia: 'Diario, mensual, o anual', generales: 'Contar con el monto mínimo de apertura. Tener una Cuenta En caso de personas físicas: Identificación oficial vigente. Personas físicas con actividad empresarial agregar el Registro Federal de Contribuyentes y Cedúla de Indetificación Fiscal. En caso de personas morales presentar ademas: Identificación oficial vigente de los representantes legales o apoderados', fijaVariable: 'Fijo', respaldado: 'Respaldo por el IPAB', apertura: 'No' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Doble Digito', descripcion: '"En Doble Dígito conectamos inversionistas conservadores que buscan invertir en créditos privados con personas que necesitan fondear sus proyectos." ', rentabilidad: '11%', riesgo: 'Bajo', tiempo: '12 meses', montoMin: 1000000, recurrencia: 'Mensual', generales: 'Persona física o moral Dar datos generales del inversionista Firmar contrato', fijaVariable: 'Fija', respaldado: 'Garantía inmobiliaria/Garantía de nómina/Garantía en dólares', apertura: 'N/A' },
    { tipo: 'Fondo de Capital Privado', nombre: 'Sabiduría Financiera en alianza comercial con Lagunas Private Fund SAPI DE C.V. ', descripcion: 'Empresa mexicana cuyo objetivo es compartir educación financiera en finanzas personales. Dentro de la asesoría financiera recomendamos un activo financiero propio que es un fondo de inversión privado en mercados bursátiles. El fondo es una SAPI DE CV. https://sabiduria-financiera.com/', rentabilidad: '60%', riesgo: 'Muy Alto', tiempo: '12 meses', montoMin: 100000, recurrencia: 'Trimestral', generales: 'Acta de Nacimiento Acta Constitutiva(Persona Moral) Comprobante de domicilio(Particular o Fiscal) Correo electrónico(para recibir notificaciones) Caratula del estado de cuenta bancario. Constancia de situación fiscal(Persona Moral) Identificación Oficial(credencial para votar o pasaporte vigente). Número telefónico. RFC', fijaVariable: 'Variable', respaldado: 'NA', apertura: 'No hay comisión por apertura, por manejo de esquema de rendimientos o por retiro de rendimientos, y/o capital.  ' },
    { tipo: 'Fondos de Inversión', nombre: 'ICP Funds', descripcion: 'Fondo de inversión mexicano que invierte en Bienes Raíces en EUA', rentabilidad: '8%', riesgo: 'Bajo', tiempo: '-', montoMin:0, recurrencia: 'Trimestral', generales: '-', fijaVariable: 'Fija', respaldado: 'Los inmuebles a los que se invierten', apertura: 'N/A' },
]

export default database;
