import React from 'react';
import {render} from '@testing-library/react-native';
import DetailScreen from './DetailScreen';
import {NavigationContainer} from '@react-navigation/native';

// Define a mock route prop
const mockRoute = {
  params: {
    category: 'SampleCategory',
  },
};

describe('DetailScreen', () => {
  it('renders correctly with initial route params', () => {
    const screen = render(
      <NavigationContainer>
        {/* Pass the mock route prop to DetailScreen */}
        <DetailScreen route={mockRoute} />
      </NavigationContainer>,
    );

    // Assertions...
    expect(screen.getByText('Filters')).toBeTruthy();
  });
});
