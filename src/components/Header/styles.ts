import styled from 'styled-components';

export const Container = styled.header`
margin-top: 50px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 25px;
  h1{
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Roboto",sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    text-align: center;
  }
  p{
    text-align: center;
    max-width: 400px;
    line-height: 1.2;
  }
`;
