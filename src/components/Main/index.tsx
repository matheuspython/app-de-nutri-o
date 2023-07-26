import React from 'react';

import { Container } from './styles';
import { Header } from '../Header';
import { Form } from '../Form';

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  )
}
