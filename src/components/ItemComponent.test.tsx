import React from 'react';
import {render} from '@testing-library/react-native';
import ItemComponent from './ItemComponent';
import {Item} from '../types';

describe('ItemComponent', () => {
  it('renders correctly', () => {
    const testItem: Item = {
      id: 1,
      name: 'Test Item',
      category: 'Test Category',
      model: 'Test Model',
      variant: 'Test Variant',
      price: 100,
      brand: 'Test Brand',
      image: 'https://example.com/test-image.png',
      rating: 5,
    };

    const {getByText} = render(<ItemComponent item={testItem} />);

    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('Category: Test Category')).toBeTruthy();
  });
});
