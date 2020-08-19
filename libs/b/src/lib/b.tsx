import React from 'react';

import './b.css';
import { C } from '@teste/c';

/* eslint-disable-next-line */
export interface BProps {}

export const B = (props: BProps) => {
  return (
    <div>
      <h1>Welcome to b!</h1>

      <p>B uses C</p>
      <C />
    </div>
  );
};

export default B;
