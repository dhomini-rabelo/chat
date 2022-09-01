import styled  from 'styled-components'


export const Div = {
    container: styled.div`
        width: 90%;

        .chat-icon {
            position: fixed;
            right: 12px;
            bottom: 16px;
        }
    `,

    chat: styled.div`
        border-block: 1px solid var(--pGray-200);
    
        strong {
            font-weight: 600;
            line-height: 1.062rem;
        }
    `,
}