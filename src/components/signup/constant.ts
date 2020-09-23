import {propRadioInput } from './typeForm'
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const  gender : propRadioInput[] = [
    {name:"sex",label:"Male",value:"male"},
    {name:"sex",label:"Female",value:"female"}
]
