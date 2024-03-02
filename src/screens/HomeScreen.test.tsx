import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {items} from '../data/items';

// Mock @react-navigation/native outside of your test or describe block
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );

    expect(getByText('phones')).toBeTruthy();
  });

  it('renders the "Latest" section with all items', () => {
    const {getByText} = render(<HomeScreen />);

    // Verify the "Latest" section title is present
    expect(getByText('Latest')).toBeTruthy();

    // Optionally, verify that some items from your 'items' data are rendered
    // This assumes your ItemComponent displays the item's name or another identifiable attribute
    expect(getByText(items[0].name)).toBeTruthy();
  });
});
