import { InputHTMLAttributes } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string, 
    type?: string, 
    moreClasses?: string,
}

export function InputForm({name, type="text", moreClasses="", ...attributes}: Props) {
    return (
        <input 
            type={type} name={name} id={name}
            className={`h-14 sm:h-12 d-block mx-auto input-form ${moreClasses}`} 
            {...attributes} 
        />
    )
}