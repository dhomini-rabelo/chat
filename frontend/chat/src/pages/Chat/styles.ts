import styled from 'styled-components'

type messageType = 'my' | 'other'

export const Div = {
  container: styled.div`
    max-width: 20rem;
    max-height: 100vh !important;

    #room-input {
      width: 100% !important;
      color: var(--pBlack-600) !important;
    }

    #room-input:focus + button path {
      fill: var(--pBlue-300) !important;
    }
  `,

  /* eslint-disable */
  message: styled.div(({ type }: { type: messageType }) => `
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    border-radius: 8px;
    max-width: 84%;
    background-color: ${ type === 'my' ? "var(--pBlue-300)" : "var(--pGray-300)"};
    align-self: ${type === 'my' ? "flex-end" : "flex-start"};
    color: ${type === 'my' ? "var(--pGray-100)" : "var(--pBlack-600)"};

    .time {
      font-size: 0.6rem;
    }
    
  `)
  /* eslint-enable */
}

export const Button = {}
