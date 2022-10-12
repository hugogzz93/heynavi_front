import { useState } from 'react'
import { ThemeTextFieldElement, Button } from 'components/baseComponents'

const ConfigView = () => {
    const [value, setValue] = useState('')
    const onSubmit = () => {
        if(value=='tasp.capr') {
            localStorage.setItem('tasp.capr', 'true')
            window.location.href = '/form'
        }
    }
    return (
        <div className="container mx-auto" style={{padding: '5em'}}>
            <div className="flex flex-col">
                <ThemeTextFieldElement
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    errors={{prompt: null}}
                    name='prompt'
                    label='Password'
        type='password'
                />
                <div className='my-2'>
                    <Button onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfigView
