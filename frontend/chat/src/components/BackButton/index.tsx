import { Link } from "react-router-dom";
import { Span } from "./styles";



export function BackButton({to}: {to: string}) {
    return (
        <Link to={to}>
            <Span.linkTextContainer className="text-pBlue-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full bg-pBlue-100 inline">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.6001 13.5C18.3732 13.5 19 12.8284 19 12C19 11.1715 18.3732 10.5 17.6001 10.5L9.7797 10.5L11.5897 8.56062C12.1364 7.97487 12.1364 7.02506 11.5897 6.43931C11.0429 5.85356 10.1566 5.85356 9.60975 6.43931L5.40991 10.9393C5.14742 11.2206 5 11.6022 5 12C5 12.3978 5.14742 12.7794 5.40991 13.0606L9.60974 17.5607C10.1566 18.1464 11.0429 18.1464 11.5897 17.5607C12.1364 16.9749 12.1364 16.0251 11.5897 15.4393L9.7797 13.5L17.6001 13.5Z" fill="#377DFF" />
                </svg>
                {' '}Voltar
            </Span.linkTextContainer>
        </Link>
    )
}