import { ReactElement } from "react";

export function ButtonForm({children}: {children: JSX.Element | string}) {

    return (
        <button className="d-block text-white py-4 mx-auto button-form w-full">
            {children}
        </button>
    )
}