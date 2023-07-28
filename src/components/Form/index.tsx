import React from 'react';

import { Container } from './styles';

export const Form: React.FC = () => {
  return (
    <Container>
      <div className="container">

        <span className='genero'>
          <h2>Gênero:</h2>
          <div>
            <input type="radio" name="genero" id="" /> <label htmlFor="">Masculino</label>
            <input type="radio" name="genero" id="" /> <label htmlFor="">Feminino</label>
          </div>
        </span>

        <span className='biotipo'>
          <h2>qual o seu biotipo*:</h2>
          <img src="https://app.gorgonoid.com/painel/img/biotipo.png" alt="imagem dos biotipos" />
          <div>
            <input type="radio" name="biotipo" id="" /> <label htmlFor="">Ecto</label>
            <input type="radio" name="biotipo" id="" /> <label htmlFor="">Meso</label>
            <input type="radio" name="biotipo" id="" /> <label htmlFor="">Endo</label>
          </div>
        </span>

        <span className='dados'>
          <h2>Idade:</h2>
          <input type="number" placeholder='idade' />

          <h2>Altura (cm):</h2>
          <input type="number" placeholder='Altura em cm' />

          <h2>Peso (kg):</h2>
          <input type="number" placeholder='Peso em kg' />

          <h3>Sua Taxa Metabólica Basal é de <span className="vermelho">2372</span> Kcal</h3>
        </span>

        <span className='atividade'>
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

          <h3>Seu gasto diário total de energia (TDEE) é de <span className="vermelho">0</span> Kcal</h3>
        </span>

        <span className='objetivo'>
          <label>Qual o seu objetivo</label>
          <select id="nivel-atividade">
            <option value="Sedentario">Emagrecer</option>
            <option value="ativo">Emagrecer agressivo</option>
            <option value="medio-ativo">Manter</option>
            <option value="muito-ativo">Ganhos Secos</option>
            <option value="atleta">Ganho agressivo</option>
          </select>
        </span>

        <span className='estado'>
          <label>Estado atual</label>
          <select id="nivel-atividade">
            <option value="Sedentario">Magrelo</option>
            <option value="ativo">Massa Magra consideravel e BF não muito alto</option>
            <option value="medio-ativo">falso magro</option>
            <option value="muito-ativo">muito acima do peso</option>
          </select>
          <h3>De acordo com seu objetivo você deve consumir um total de <span className="vermelho">0</span> Kcal por dia.</h3>
        </span>

        <table>
          <thead>
            <tr>
              <th><span >Carboidratos</span></th>
              <th><span  >Gorduras</span></th>
              <th><span >Proteínas</span></th>
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
      </div>
    </Container>
  )
}
