import styled from 'styled-components'

type messageType = 'my' | 'other'

export const Div = {
  /* eslint-disable */
  container: styled.div(({ type }: { type: messageType }) => `
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    border-radius: 8px;
    max-width: 84%;

    ${ type === 'my' ? `
          background-color: var(--pBlue-300);
          align-self: flex-end;
          color: var(--pGray-100);
      `: `
          background-color: var(--pGray-300)};
          align-self: flex-start;
          color: var(--pBlack-600);
      `
    }

    .time {
      font-size: 0.6rem;
    }
    
  `)
  /* eslint-enable */
}
