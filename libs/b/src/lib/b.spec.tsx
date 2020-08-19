import React from 'react';
import { render } from '@testing-library/react';

import B from './b';

describe('B', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<B />);
    expect(baseElement).toBeTruthy();
  });
});
