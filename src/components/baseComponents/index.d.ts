import { UseFormReturn, RegisterOptions } from 'react-hook-form'
interface IButtonProps {
    onClick: (any) => void,
    children: React.ReactNode
}

type TSelectOption = {
    label: string,
    value: string,
}

type TFieldTypes = 'text' | 'number' | 'select' | 'textarea' | 'date' | 'checkbox' | 'file' | 'nested' | 'multi-file' | 'multi-image';

type TFormConfigurationField = {
    id: string,
    type: TFieldTypes,
    label: string,
    optionsFn?: (any) => TSelectOption[],
    onChange?: (any) => unknown,
    rules?: RegisterOptions,
    display?: boolean,
    readOnly?: boolean,
    disabled?: boolean,
    defaultValue?: any,
    configuration?: any
}

type TFieldLayout = {
    id: string,
    cols: number,
    rows?: number,
}

type TFormConfiguration = {
    layout: {
        type: string,
        cols: number,
        fieldLayout: TFieldLayout[]
    },
    fields: TFormConfigurationField[],
    actions: {
        render: () => JSX.Element 
    }[]
}


class CFormConfigurationField {
    constructor(TFormConfigurationField);
}

class CFormConfiguration {
    constructor(TFormConfiguration);
    getFieldConfigurationById(id: string): CFormConfigurationField;
    getFieldLayoutById(id: string): TFieldLayout;
}

export type TonSubmit = (any) => unknown;

interface IFormComponentProps {
    configuration: TFormConfiguration,
    onSubmit: TonSubmit,
    data?: any
}

export type TFormLayout = React.FC<{
    children: React.ReactElement
}>

interface IFormProps extends IFormComponentProps {
    formMethods: useFormReturn,
    configuration: CFormConfiguration,
    onSubmit?: TonSubmit,
    FormLayout?: TFormLayout
}

export interface IInputProps {
    name: string,
    label: string,
    onChange: (any) => unknown,
    value: any,
    errors?: any,
    type?: string,
    readOnly?: boolean,
    disabled?: boolean,
}

export interface ISelectInputProps extends IInputProps {
    options: Array<TSelectOption>,
    isMulti?: boolean,

}

export interface ITableColumnConfiguration {
    id: string;
    label: string;
    valueFn?: (any) => string | number;
    renderFn?: (any) => any;
    filterable?: boolean;
    filterFn?: (any) => boolean;
    display?: boolean;
}

export interface ITableConfiguration {
    header: {
        id: string,
        idColumn: string,
        getId: (d: any) => any,
        tableActions: Array<ReactElement>
        pagination?: {
            page: number;
            length: number;
        }
    },
    columns: Array<ITableColumnConfiguration>
}

export interface ITableProps {
    configuration: ITableConfiguration;
    rowData: Array<any>;
    RowElement?: ReactElement;
    HeadElement?: ReactElement;
    TableElement?: ReactElement;
    FooterElement?: ReactElement;
}

export interface ITableElementProps {
    id: string;
    TableHead: ReactElement;
    TableBody: ReactElement;
    FilterComponents: ReactElement;
    TableActions: ReactElement;
    TableFooter: ReactElement;
}

export interface ITableRowElementProps {
    key: string;
    data: any;
    cells: Array<string | number>;
}

export interface ITableHeadElementProps {
    columnNames: Array<string>;
    columns: Array<ITableColumnConfiguration>;
}



declare module 'baseComponents' {
    export const Button: React.FC<IButtonProps>;
    export const FormComponent: React.FC<IFormComponentProps>;
    export const Form: React.FC<IFormProps>;
    export const FormConfiguration: typeof CFormConfiguration;
    export const Table: React.FC<ITableProps>;
    export const ThemeSelectElement: React.FC<ISelectInputProps>;
}

declare const Table: React.FC<ITableProps>;
declare const ThemeSelectElement: React.FC<ISelectInputProps>;
declare const ThemeCheckboxElement: React.FC<IInputProps>;
