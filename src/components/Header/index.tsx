import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>Montagem de Dieta Rápida (tdee):</h1>
      <p>
        Digite sempre valores inteiros, arredonde se precisar. Alguns valores
        podem já vir preenchidos, com dados da última avaliação e de seu perfil.
      </p>
    </Container>
  )
}

