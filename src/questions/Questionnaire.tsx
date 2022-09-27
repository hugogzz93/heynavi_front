import { useReducer, useState } from 'react'
import Questions from './questions'
import { Range } from 'react-range'
import { Question, ClientQuestionAnswerInput } from '../generated/graphql'

export const numberWithCommas = (x: number): String => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)

type ActionType = {
    type: String,
    payload: ClientQuestionAnswerInput
}

type QuestionnaireState = {
    answers: Array<ClientQuestionAnswerInput>,
    questions: Array<Question>,
    currentQuestion: number
}

const reducer = (state: QuestionnaireState, action: ActionType): QuestionnaireState => {
    switch(action.type) {
        case 'submitQuestion': {
            return {
                ...state,
                currentQuestion: state.currentQuestion < state.questions.length - 1 ? state.currentQuestion + 1 : state.currentQuestion,
                answers: [
                    ...state.answers.filter(a => a.questionId != action.payload.questionId),
                    action.payload
                ]

            }
        }
        case 'nextQuestion':
            return {
                ...state,
                currentQuestion: state.currentQuestion < state.questions.length - 1 ? state.currentQuestion + 1 : state.currentQuestion
            }
        case 'prevQuestion': {
            return {
                ...state,
                currentQuestion: state.currentQuestion > 0 ? state.currentQuestion - 1 : state.currentQuestion
            }
        }
        case 'setAnswer': {
            return {
                ...state,
                answers: [
                    ...state.answers,
                    action.payload
                ]
            }
        }
        default: {
            throw new Error('Invalid action type');
        }
    }
}

const InitialState = (input: {questions: Array<Question>}) => ({
    currentQuestion: 0,
    questions: input.questions,
    answers: []
})

const QuestionnaireHeading: React.FC= () => {
    return (
        <div className="flex flex-col mb-8">
            <div className="text-2xl font-bold">
                Nuestra base de datos cuenta con más de 100 opciones de inversión.
            </div>
            <div className="text-md">
                Las próximas preguntas ayudaran a segmentar las que más se ajusten a tu perfil.
            </div>
        </div>
    )
}


const QuestionComponent: React.FC<{question: Question, state: QuestionnaireState, dispatch: any, onSubmit: (arg0: any) => void}> = ({question, dispatch, onSubmit, state}) => {
    const [sliderValue, setSliderValue] = useState<any>([5000])
    if(question.questionType === 'slider')
        return (
            <div className="flex flex-col">
            <div className="my-2 text-5xl text-blue-500 font-bold">${numberWithCommas(sliderValue)} {sliderValue == 100000 ? 'o más' : ''}</div>
            <Range
                step={1000}
                values={sliderValue}
                min={Number(question.min)}
                max={Number(question.max)}
                onChange={(values: any) => setSliderValue(values)}
                renderTrack={({props, children}) => (
                    <div {...props}
                        style={{
                            ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({props}) => (
                    <div 
                        {...props}
                        className='rounded-md bg-blue-500'
                        style={{
                            ...props.style,
                            height: '42px',
                            width: '42px',
                        }}
                    />
                )}
            />

            <div className='mt-8'>
               <button className="float-right inline-block bg-blue-500 p-4 rounded-md text-white" onClick={() => dispatch({type: 'submitQuestion', payload: {questionId: question.id, customValue: sliderValue[0]}})}>
                    Siguiente
                </button>
            </div>
            </div>
        )

    return (
        <div className="flex flex-col">
            {question.answers?.map(opt => (
                <div 
                    key={`${question.id}-${opt.id}`}
                    onClick={() => dispatch({type: 'submitQuestion', payload: {questionId: question.id, answerId: opt.id}})}
                    className={`my-1 border border-1 border-gray-300 bg-white rounded-md p-4 cursor-pointer hover:bg-blue-200 duration-300 transition-all ${state.answers.find(a => a.questionId == question.id)?.answerId == opt.id ? 'bg-blue-400 text-white': ''}`}
                  >{opt.text}</div>
            ))}
            <div className='mt-8'>

        {state.currentQuestion == Object.keys(Questions).length - 1 ? (
                <button className="transition-all duration-300 hover:bg-blue-700 ml-4 float-right inline-block bg-blue-500 p-4 rounded-md text-white" onClick={onSubmit}>
                    Guardar
                </button>

        ): (<div></div>)}
        {state.answers.find(a => a.questionId == question.id) && (state.currentQuestion != Object.keys(Questions).length - 1) &&(
                <button className="ml-2 float-right inline-block bg-gray-200 p-4 rounded-md text-slate-800 hover:text-white hover:bg-blue-500 duration-300 transition-all" onClick={() => dispatch({type: 'nextQuestion'})}>
                    Siguiente
               </button>
        )}
               <button className="float-right inline-block bg-gray-200 p-4 rounded-md text-slate-800 hover:text-white hover:bg-blue-500 duration-300 transition-all" onClick={() => dispatch({type: 'prevQuestion'})}>
                    Regresar
               </button>
            </div>
        </div>

    )
}




const QuestionnaireForm: React.FC<{question: Question, state: QuestionnaireState, dispatch: any, onSubmit: (arg0: any) => void}> = ({question, dispatch, onSubmit, state}) => {
    return (
        <div className="border-1 border-gray-300 rounded-md flex flex-col">
            <div className="text-2xl mb-4">{question.text}</div>
            <QuestionComponent question={question} dispatch={dispatch} onSubmit={onSubmit} state={state}/>
        </div>
    )
}

const Questionnaire: React.FC<{onSubmit: (arg0: any) => void, questions: Array<Question>}> = ({onSubmit, questions}) => {
    const [state, dispatch] = useReducer(reducer, InitialState({questions}))

    return (
        <div className="antialiased">
            <div className="flex flex-col">
                <QuestionnaireHeading/>
                <QuestionnaireForm onSubmit={() => onSubmit({answers: state.answers})} question={state.questions[state.currentQuestion]} dispatch={dispatch} state={state}/>
            </div>
        </div>
    )
}

export default Questionnaire
