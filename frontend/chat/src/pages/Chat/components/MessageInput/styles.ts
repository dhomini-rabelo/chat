import styled from 'styled-components'

export const Div = {
  container: styled.div`
    #room-input {
      width: 100% !important;
      color: var(--pBlack-600) !important;
    }

    #room-input:focus + button path {
      fill: var(--pBlue-300) !important;
    }
  `,
}
