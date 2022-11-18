import { useReducer, useState, useEffect } from 'react'
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
                Las próximas preguntas ayudarán a segmentar las que más se ajusten a tu perfil.
            </div>
        </div>
    )
}


const getThumbCoordinates = () => {
    const elem = document.querySelector('.slider__thumb')
    if(elem)
        return elem.getBoundingClientRect()
    else
        return {
            top: 0,
            y: 0,
            x: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: 0,
            height: 0,
        }
}

const QuestionCount: React.FC<{state: QuestionnaireState}> = ({state}) => {
    let width = state.currentQuestion/(state.questions.length  - 1)
    // if(state.currentQuestion != state.questions.length - 1 && state.currentQuestion >= 0) 
    //     width = `w-${state.currentQuestion}/${state.questions.length -1}`


    return (
        <>
        <div className="text-md text-center my-3 bg-gray-200 rounded-full flex items-center justify-between overflow-hidden relative">
            {state.questions.map((_, idx) => (
                <div className="rounded-full w-4 h-4 bg-gray-500 border border-1 border-gray-500"></div>
            ))}
            <div className={` progress-bar bg-purple-500 absolute left-0 top-0 h-full`} style={{width: width*100 + '%'}}>
                <div className="rounded-full w-4 h-4 bg-purple-300 border border-1 border-purple-500 absolute right-0" style={{transform: `translateX(${state.currentQuestion > 0 ? state.currentQuestion == state.questions.length -1 ? '0%' : '75%' : '100%'})`}}></div>
            </div>
        </div>
        <div className="flex items-center justify-between">
            {state.questions.map((_, idx) => (
                <div className={`text-md ${state.currentQuestion == idx ? 'text-purple-500' : ''}`}>{idx + 1}</div>
            ))}
        </div>
        </>
    )
}

const QuestionComponent: React.FC<{question: Question, state: QuestionnaireState, dispatch: any, onSubmit: (arg0: any) => void}> = ({question, dispatch, onSubmit, state}) => {
    const [sliderValue, setSliderValue] = useState<any>([5000])
    const [thumbCoordinates, setThumbCoordinates] = useState<any>(getThumbCoordinates())
    if(question.questionType === 'slider')
        return (
            <div className="flex flex-col md:mx-0 mx-6 mt-6">
                <div className={` my-2 text-lg text-purple-500 font-bold absolute`}
            style={{
                top: thumbCoordinates.top - thumbCoordinates.height - 5,
                left: thumbCoordinates.left,
                transform: `translateX(${sliderValue == 0 ? '0%' : sliderValue == 500000 ? '-75%' : '-25%'})`
            }}
                >${numberWithCommas(sliderValue)} {sliderValue == 500000 ? 'o más' : ''}</div>
                <Range
                    step={5000}
                    values={sliderValue}
                    min={Number(question.min)}
                    max={Number(question.max)}
                    onChange={(values: any) => {
                        setSliderValue(values)
                        setThumbCoordinates(getThumbCoordinates)
                    }}
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
                            className='slider__thumb rounded-md bg-purple-500'
                            style={{
                                ...props.style,
                                height: '28px',
                                width: '28px',
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
        <div className="flex flex-row flex-wrap">
            {question.answers?.map(opt => (
                <div 
                    key={`${question.id}-${opt.id}`}
                    onClick={() => dispatch({type: 'submitQuestion', payload: {questionId: question.id, answerId: opt.id, answerValue: opt.text}})}
                    style={{flexBasis: '48%', margin: '1%'}}
                    className={`my-1 border border-1 border-gray-300  rounded-md p-4 cursor-pointer hover:bg-purple-300 hover:text-white duration-300 transition-all ${state.answers.find(a => a.questionId == question.id)?.answerId == opt.id ? ' bg-purple-500 text-white': 'bg-white'}`}
                  >{opt.text}</div>
            ))}
            <div className='mt-8 flex items-center justify-between w-full'>
                           <button className="float-right inline-block bg-gray-200 p-4 rounded-md text-slate-800 hover:text-white hover:bg-purple-500 duration-300 transition-all" onClick={() => dispatch({type: 'prevQuestion'})}>
                                Regresar
                           </button>
                    {state.currentQuestion == Object.keys(Questions).length - 1 ? (
                            <button className="transition-all duration-300 hover:bg-purple-700 ml-4 float-right inline-block bg-purple-500 p-4 rounded-md text-white" onClick={onSubmit}>
                                Finalizar
                            </button>

                    ): (<></>)}
                    {state.answers.find(a => a.questionId == question.id) && (state.currentQuestion != Object.keys(Questions).length - 1) &&(
                            <button className="cursor-pointer ml-2 float-right inline-block bg-gray-200 p-4 rounded-md text-slate-800 hover:text-white hover:bg-purple-500 duration-300 transition-all" onClick={() => dispatch({type: 'nextQuestion'})}>
                                Siguiente
                           </button>
                    )}
            </div>
        </div>

    )
}




const QuestionnaireForm: React.FC<{question: Question, state: QuestionnaireState, dispatch: any, onSubmit: (arg0: any) => void}> = ({question, dispatch, onSubmit, state}) => {
    return (
        <div className="border-1 border-gray-300 rounded-md flex flex-col">
            <QuestionCount state={state}/>
            <div className="text-2xl mb-4 my-20 max-w-4xl">{question.text}</div>
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
