import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; 
import DetailScreen from './src/screens/DetailScreen'; 

// Define the types for your navigation stack
export type RootStackParamList = {
  Home: undefined;
  Detail: {category: string};
};


 // Props for the Detail screen.
export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;
// export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen as React.ComponentType<DetailScreenProps>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
