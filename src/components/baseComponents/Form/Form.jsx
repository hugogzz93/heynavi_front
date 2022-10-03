import React, {useContext} from 'react'
import { useForm, useWatch, Controller } from 'react-hook-form'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import clsx from 'clsx'


import { ErrorObject } from '../ErrorObject'
import {ThemeTextFieldElement,
         ThemeTextAreaElement,
         ThemeNumberFieldElement,
         ThemeDatePickerElement,
         ThemeSelectElement,
         ThemeAsyncSelectElement,
         ThemeCheckboxElement,
         ThemeFileInputElement,
         ThemeMultiFileInputElement,
         ThemePwdFieldElement
} from '../Inputs'



const FormContext = React.createContext()

class FormConfigurationField {
    constructor({id,
                 type,
                 label,
                 optionsFn,
                 onChange,
                 rules,
                 display,
                 render,
                 readOnly,
                 disabled,
                 defaultValue,
                 loadOptions,
                 inputOptions,
                 configuration

    }) {
        this.id = id;
        this.type = type;
        this.label = label;
        this.display = display;
        this.configuration = configuration
        this.render = render;
        this.inputOptions = {
            ...inputOptions,
            readOnly,
            disabled,
        }
        if(type == 'select') {
            this.optionsFn = optionsFn
        }
        if(type == 'async-select') {
            this.loadOptions = loadOptions
        }
        this.onChange = onChange;
        switch(type) {
            case 'text':
                defaultValue = ''
                break;
            case 'password':
                defaultValue =''
                break;
            case 'number':
                defaultValue = ''
                break;
            case 'select':
                defaultValue = undefined
                break;
            case 'async-select':
                defaultValue = undefined
                break;
            case 'textarea':
                defaultValue = ''
                break;
            case 'date':
                defaultValue = ''
                break;
            case 'checkbox':
                defaultValue = false
                break;
            case 'file':
                defaultValue = ''
                break;
            case 'nested':
                break;
            case 'multi-file':
                defaultValue = []
                break;
            case 'render':
                break;
            default: 
                throw new ErrorObject({type: 'Misconfiguration', message: 'No valid field type for default value'})
        }

        this.controllerProps={
            rules,
            defaultValue,
            name: id,
        }

    }
}

export class FormConfiguration {
    constructor({fields, layout, actions =[]}) {
        this.fieldInputs = fields;
        this.fields = fields.map(f => new FormConfigurationField(f));
        this.layout = layout;
        this.actions = actions
    }

    getFieldConfigurationById(id) {
        return this.fields.find(f => f.id == id);
    }

    getFieldLayoutById(id) {
        return this.layout.fieldLayout.find(f => f.id == id)
    }

    getDefaultValues() {
        this.fields.reduce((obj, field) => {
            obj[field.id] = field.defaultValue; return obj
        }, {})
    }

    setFieldConfig(id, callback) {
        const newFieldConfig = callback(this.fields.find(f => f.id == id))
        this.fields = [...this.fields.filter(f => f.id != id), newFieldConfig]
    }
}

export const FormLayoutComponent = ({children}) => {
    return (
        <div className="p-3 border border-slate-50 rounded">
            {children}
        </div>
    )
}

export const FieldComponent = ({
    id,
    TextFieldElement = ThemeTextFieldElement,
    NumberFieldElement = ThemeNumberFieldElement,
    PassWordFieldElement = ThemePwdFieldElement,
    SelectElement = ThemeSelectElement,
    AsyncSelectElement = ThemeAsyncSelectElement,
    TextAreaElement = ThemeTextAreaElement,
    DatePickerElement = ThemeDatePickerElement,
    CheckboxElement = ThemeCheckboxElement,
    FileInputElement = ThemeFileInputElement,
    MultiFileInputElement = ThemeMultiFileInputElement,
}) => {
    const {configuration, formMethods, data} = useContext(FormContext)
    const fieldConfig = configuration.getFieldConfigurationById(id)

    let InputElement;
    let otherProps = {}
    switch(fieldConfig.type) {
        case 'text':
            InputElement = TextFieldElement
            break;
            case 'password':
                InputElement = PassWordFieldElement
                break;
        case 'number':
            InputElement = NumberFieldElement
            break;
        case 'textarea':
            InputElement = TextAreaElement
            break;
        case 'date':
            InputElement = DatePickerElement
            break;
        case 'select':
            InputElement = SelectElement
            otherProps.options = fieldConfig.optionsFn(data)
            break;
        case 'async-select':
            InputElement = AsyncSelectElement
            otherProps.loadOptions = fieldConfig.loadOptions
            break;
        case 'checkbox':
            InputElement = CheckboxElement
            break;
        case 'file':
            InputElement = FileInputElement
            break;
        case 'render':
            InputElement = fieldConfig.render
            break;
        case 'multi-file':
            InputElement = MultiFileInputElement
            break;
        default:
            throw new ErrorObject({type: 'misconfiguration', message: 'Invalid field type'})
    }

    return (
        <Controller
            control={formMethods.control}
            {...fieldConfig.controllerProps}
            defaultValue={fieldConfig.controllerProps.defaultValue}
            render={
                ({field, formState}) => <InputElement 
                                onChange={(e) => {
                                    field.onChange(e);
                                    if(fieldConfig.onChange)
                                        fieldConfig.onChange({event: e, data, formMethods})
                                    }}
                                value={field.value}
                                name={field.name}
                                label={fieldConfig.label}
                                formState={formState}
                                formMethods={formMethods}
                                errors={formState.errors}
                                {...otherProps}
                                {...fieldConfig.inputOptions}
                                />
            }
        />
    )

    
}


const GridWrapper = (props) => {
    return (
        <div className={`grid gap-4 grid-cols-${props.configuration.layout.cols}`}>
            {props.children}
        </div>
    )
}

export const FieldComponents = () => {
    const context = useContext(FormContext);
    const configuration = context.configuration


    // TODO: Implement FlexWrapper


    const fields = configuration.fields
        .filter((config) => config.display != false)
        .map(({id}) => {
            const fieldLayout = configuration.getFieldLayoutById(id)
            return <div key={id} className={`col-span-${fieldLayout.cols}`}>
                <FieldComponent id={id}/>
            </div>
    })

    let WrapperComponent;
    switch(configuration.layout.type) {
        case 'grid':
            WrapperComponent = GridWrapper;
            break;
        default:
            throw new ErrorObject({type: 'Misconfiguration',
                               message: 'no valid layout type in configuration'})
    }

    return (
        <>
            <WrapperComponent configuration={configuration}>
                {fields}
            </WrapperComponent>

        </>
    )
}



export const Form = ({onSubmit = _ => {},
                     formMethods,
                     configuration,
                     FormLayout=FormLayoutComponent,
                     data = {}}
                    ) => {

    if(!(configuration instanceof FormConfiguration))
        throw new ErrorObject({type: 'Misconfiguration', message: 'Form was not handed an instance of FormConfiguration'})
    return (
        <FormContext.Provider value={{formMethods, configuration, data}}>
            <form onSubmit={formMethods.handleSubmit(data => onSubmit(data, formMethods))}>    
                <FormLayout>
                        <FieldComponents/>
                        {configuration.actions.length > 0 && (
                            <div className="my-5">
                                {configuration.actions.map((A, idx) => <A.render key={idx}/>)}
                            </div>
                        )}
                </FormLayout>
            </form>
        </FormContext.Provider>
    )


}
export const FormComponent = ({configuration: _config,
                               onSubmit,
                               data,
                               FormLayout,
}) => {
    const configuration = new FormConfiguration(_config);
    const formMethods = useForm({defaultValues: data?.defaultValues});

    return (
        <Form
            formMethods={formMethods}
            configuration={configuration}
            onSubmit={onSubmit}
            FormLayout={FormLayout}
            data={data}
        />
    )
}

