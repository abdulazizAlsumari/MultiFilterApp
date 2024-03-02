import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App'; // Adjust the import path as necessary

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
