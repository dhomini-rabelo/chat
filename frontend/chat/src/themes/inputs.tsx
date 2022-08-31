import { InputHTMLAttributes } from "react";


export function InputForm({name, moreClasses, ...attributes}: {name: string, moreClasses: string, attributes: InputHTMLAttributes<HTMLInputElement>}) {
    return (
        <input type="text" name={name} id={name} placeholder="Digite seu username" className={`h-14 sm:h-12 d-block mx-auto input-form ${moreClasses}`} {...attributes} />
    )
}