export function InputForm({name}: {name: string}) {
    return (
        <input type="text" name={name} id={name} placeholder="Digite seu username" className="h-14 sm:h-12 d-block mx-auto input-form" />
    )
}