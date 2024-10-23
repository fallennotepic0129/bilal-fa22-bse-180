import React from 'react';
import QuranScreen from "./screens/QuranScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quran">
        <Stack.Screen name="Quran" component={QuranScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
