import styled from "styled-components";



export const Div = {
  
  inputContainer: styled.div`
    input {
      border: 1px solid var(--pBlack-100);
      border-radius: 8px;
      width: 86%;
      text-indent: 1.25rem;
    }
    input:placeholder {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.125rem;
      color: var(--pBlack-100);
    }
  `,

  container: styled.div`
    max-width: 20rem;

    h3 {
      font-weight: 600;
      font-size: 1.175rem;
      line-height: 1.375rem;
      color: var(--pBlack-700);
    }

    .forgot {
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 0.925rem;
      text-decoration-line: underline;
      color: var(--pBlack-700);
    }

    button {
      background: var(--pBlue-300);
      border-radius: 8px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      width: 86%;
    }
  `,
  
}


export const Button = {

}