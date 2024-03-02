jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: ({children}) => children,
      Screen: ({children}) => children,
    }),
    // Mock other objects or functions as needed
  };
});
