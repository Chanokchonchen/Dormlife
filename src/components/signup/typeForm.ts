export interface propTextInput {
    label : string,
    name : string,
    type : string,
    styleLabel? : React.CSSProperties,
    styleinput? : React.CSSProperties,
    styleerror? : React.CSSProperties,
    classNameInput? : string,
    classNameLabel? : string,
    classNameError? : string
}
export interface propRadioInput {
    label : string
    name : string,
    value : string
}
export interface propCheckBoxInput {
    label : string
    name : string,
    type : string
}