const Questions = [
    {id: 1, text: 'Cuanto dinero te gustaría invertir?', type: 'slider', min: 0, max: 100000},
    {id: 2, text: 'Cuanto tiempo te gustaría dejar ese dinero invertido? (en meses)', options: [
        {id: 1, text: '<3 meses'},
        {id: 2, text: '3-6 meses'},
        {id: 3, text: '12-36 meses'},
        {id: 4, text: '>36 meses'},
        {id: 5, text: 'Sin Preferencia'}
    ]},
    {id: 3, text: 'Cada cuanto te gustaría disponer de los intereses (ganancias) que genere tu inversion?', options: [
        {id: 1, text: 'Cuando quiera'},
        {id: 2, text: 'Semanal'},
        {id: 3, text: 'Mensual'},
        {id: 4, text: 'Trimestral'},
        {id: 5, text: 'Anual'},
    ]},
    {id: 4, text: 'Si tuvieras una inversión de $10,000 y en un mes perdieras $500 pesos, ¿qué harías?', options: [
        {id: 1, text: 'Salir del fondo'},
        {id: 2, text: 'Sacar una parte del fondo'},
        {id: 3, text: 'Invertir más'},
    ]}
]

export default Questions

