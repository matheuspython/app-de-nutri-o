import React from 'react';

import { Container } from './styles';

export const Form: React.FC = () => {
  return (
    <Container>
      <span className='genero'>
        <h2>Gênero:</h2>
        <input type="radio" name="genero" id="" /> <label htmlFor="">masculino</label>
        <input type="radio" name="genero" id="" /> <label htmlFor="">feminino</label>
      </span>

      <span className='biotipo'>
        <h2>qual o seu biotipo*</h2>
        <img src="https://app.gorgonoid.com/painel/img/biotipo.png" alt="imagem dos biotipos" />
        <input type="radio" name="biotipo" id="" /> <label htmlFor="">Ecto</label>
        <input type="radio" name="biotipo" id="" /> <label htmlFor="">Meso</label>
        <input type="radio" name="biotipo" id="" /> <label htmlFor="">Endo</label>
      </span>

      <span className='dados'>
        <label>Idade:</label>
        <input type="text" placeholder='idade' />

        <label>Altura (cm):</label>
        <input type="text" placeholder='Altura em cm' />

        <label>Peso (kg):</label>
        <input type="text" placeholder='Peso em kg' />

        <h3>Sua Taxa Metabólica Basal é de 2372 Kcal</h3>
      </span>

      <span>
        <label>
          Nível de atividade:
        </label>
        <select id="nivel-atividade">
          <option value="Sedentario">Sedentario</option>
          <option value="ativo">Levemente ativo</option>
          <option value="medio-ativo">Médio ativo</option>
          <option value="muito-ativo">Muito ativo</option>
          <option value="atleta">Extremamente ativo</option>
        </select>

        <h3>Seu gasto diário total de energia (TDEE) é de 0 Kcal</h3>
      </span>
      <span>
        <label>Qual o seu objetivo</label>
        <select id="nivel-atividade">
          <option value="Sedentario">Emagrecer</option>
          <option value="ativo">Emagrecer agressivo</option>
          <option value="medio-ativo">Manter</option>
          <option value="muito-ativo">Ganhos Secos</option>
          <option value="atleta">Ganho agressivo</option>
        </select>
        <h3>De acordo com seu objetivo você deve consumir um total de 0 Kcal por dia.</h3>
      </span>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"><span >Carboidratos</span></th>
            <th scope="col"><span  >Gorduras</span></th>
            <th scope="col"><span >Proteínas</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b><span id="resultadoqtdcarboemdiadedescanso">0 G</span></b></td>
            <td><b><span id="resultadoqtdgordura">0 G</span></b></td>
            <td><b><span id="resultadoqtdproteina">0 G</span></b></td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
