import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {FilterComponent} from './FilterComponent';
import {Item} from '../types';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'), // This retains other exports of the module
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('FilterComponent', () => {
  const mockSetFilteredItems = jest.fn();
  const items: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      category: 'Category 1',
      model: '',
      variant: '',
      price: 100,
      brand: '',
      image: '',
      rating: 5,
    },
    {
      id: 2,
      name: 'Item 2',
      category: 'Category 2',
      model: '',
      variant: '',
      price: 150,
      brand: '',
      image: '',
      rating: 4,
    },
  ];

  it('renders correctly', () => {
    const {getByText} = render(
      <FilterComponent items={items} setFilteredItems={mockSetFilteredItems} />,
    );
    expect(getByText('All Categories')).toBeTruthy();
    // Check for a specific category button
    expect(getByText('Category 1')).toBeTruthy();
  });

  it('filters items by category when a category is pressed', () => {
    const {getByText} = render(
      <FilterComponent items={items} setFilteredItems={mockSetFilteredItems} />,
    );

    fireEvent.press(getByText('Category 1'));
    // Expect setFilteredItems to have been called with filtered items
    expect(mockSetFilteredItems).toHaveBeenCalledWith([items[0]]);
  });

  it('shows all items when "All Categories" is pressed', () => {
    const {getByText} = render(
      <FilterComponent items={items} setFilteredItems={mockSetFilteredItems} />,
    );

    fireEvent.press(getByText('All Categories'));
    expect(mockSetFilteredItems).toHaveBeenCalledWith(items);
  });
});
