import styled from 'styled-components';

export const Container = styled.form`
width: 100%;
  .container{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    h2{
      width: 100%;
      font-weight: 400;
      font-size: 18px;
    }
    .genero{
      width: 100%;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 18px;
        input{
          margin-right: 3px;
        }
        label{
          margin-right: 15px;
        }
      }

    }
    .biotipo{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 300px;
      }
      div{
        display: flex;
        label{
          margin-right: 15px;
        }
      }
    }
    .dados{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      input{
        display: block;
        width: 450px;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #6C7293;
        background-color: #000;
        background-clip: padding-box;
        border: 1px solid #000;
        appearance: none;
        border-radius: 5px;
        transition: .4s;
        outline: none;
        &:focus{
          border: 2px solid #EB1616;
          box-shadow: 0 0 10px rgba(235, 22, 22, 0.7);
        }
      }
      h3{
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-family: "Roboto",sans-serif;
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
      }
      .vermelho{
        color: var(--primary);
      }
    }
    .atividade{
      display: flex;
      flex-direction: column;
      gap: 15px;
      select{
        width: 100%;
        padding: 0.375rem 2.25rem 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #6C7293;
        background-color: #000;
        border: 1px solid #000;
        border-radius: 5px;
        appearance: none;
        transition: .4s;
        outline: none;
        &:focus{
          border: 2px solid #EB1616;
          box-shadow: 0 0 10px rgba(235, 22, 22, 0.7);
        }
      }
      h3{
        margin-top: 10;
        margin-bottom: 0.5rem;
        font-family: "Roboto",sans-serif;
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
      }
      .vermelho{
        color: var(--primary);
      }
    }
    .objetivo{
      display: flex;
      flex-direction: column;
      gap: 15px;
      label{
        text-align: left;
      }
      select{
        width: 450px;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #6C7293;
        background-color: #000;
        background-clip: padding-box;
        border: 1px solid #000;
        appearance: none;
        border-radius: 5px;
        transition: .4s;
        outline: none;
        &:focus{
          border: 2px solid #EB1616;
          box-shadow: 0 0 10px rgba(235, 22, 22, 0.7);
        }
      }
    }
    .estado{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      label{
        text-align: left;
      }
      select{
        width: 450px;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #6C7293;
        background-color: #000;
        background-clip: padding-box;
        border: 1px solid #000;
        appearance: none;
        border-radius: 5px;
        transition: .4s;
        outline: none;
        &:focus{
          border: 2px solid #EB1616;
          box-shadow: 0 0 10px rgba(235, 22, 22, 0.7);
        }
      }
      h3{
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        max-width: 400px;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-family: "Roboto",sans-serif;
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
      }
      .vermelho{
        color: var(--primary);
      }
    }
    table, th, td {
border: 1px solid black;

}
table {
border-collapse: collapse;
margin: auto;
}
  span{
    color: #fff;
  }
  th, td{
    width: 150px;
    height: 50px;
    text-align: center;
  }
  td span{
    color: red;
  }
  }
`;
