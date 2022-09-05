import { useReducer, useState } from 'react'
import Questions from './questions'
import { Range } from 'react-range'

export const numberWithCommas = (x: number): String => (
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)

type ActionType = {
    type: String,
    payload: any
}

type QuestionnaireState = {
    answers: [any],
    currentQuestion: number
}

type QuestionType = {
    id: number,
    text: String,
    type?: String,
    min?: number,
    max?: number,
    options: [{id: number, text: String}]
}

const reducer = (state: any, action: ActionType): QuestionnaireState => {
    switch(action.type) {
        case 'submitQuestion': {
            return {
                ...state,
                currentQuestion: state.currentQuestion < state.questions.length - 1 ? state.currentQuestion + 1 : state.currentQuestion,
                answers: {
                    ...state.answers,
                    [action.payload.questionId]: action.payload.answer
                }

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
                answers: {
                    ...state.answers,
                    [action.payload.questionId]: action.payload.answer
                }
            }
        }
        default: {
            throw new Error('Invalid action type');
        }
    }
}

const InitialState = {
    currentQuestion: 0,
    questions: Questions,
    answers: []
}

const QuestionnaireHeading: React.FC= () => {
    return (
        <div></div>
    )
}


const QuestionComponent: React.FC<{question: QuestionType, state?: QuestionnaireState, dispatch: any}> = ({question, dispatch}) => {
    const [sliderValue, setSliderValue] = useState<any>([5000])
    if(question.type === 'slider')
        return (
            <div className="flex flex-col">
            <div className="my-2 text-5xl text-blue-500 font-bold">${numberWithCommas(sliderValue)}</div>
            <Range
                step={1000}
                values={sliderValue}
                min={question.min}
                max={question.max}
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
               <button className="float-right inline-block bg-blue-500 p-4 rounded-md text-white" onClick={() => dispatch({type: 'submitQuestion', payload: {questionId: question.id, answer: sliderValue}})}>
                    Siguente
                </button>
            </div>
            </div>
        )

    return (
        <div className="flex flex-col">
            {question.options.map(opt => (
                <div 
                key={opt.id}
                onClick={() => dispatch({type: 'submitQuestion', payload: {questionId: question.id, answer: opt.id}})}
                className="border border-1 border-gray-300 bg-white rounded-md p-4 cursor-pointer hover:bg-blue-200 duration-300 transitiont-all">{opt.text}</div>
            ))}
        </div>

    )
}




const QuestionnaireForm: React.FC<{question: QuestionType, state?: QuestionnaireState, dispatch: any}> = ({question, dispatch}) => {
    return (
        <div className="border-1 border-gray-300 rounded-md flex flex-col">
            <div className="text-2xl mb-4">{question.text}</div>
            <QuestionComponent question={question} dispatch={dispatch}/>
        </div>
    )
}

const Questionnaire: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <div className="flex flex-col">
            <QuestionnaireHeading/>
            <QuestionnaireForm question={Questions[state.currentQuestion]} dispatch={dispatch} state={state}/>
        </div>
    )
}

export default Questionnaire
