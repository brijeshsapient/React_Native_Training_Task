import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "./src/screens/SearchScreen";
import { Provider } from "react-redux";
import Store from "./src/api/Store";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" 
          component={SearchScreen}
          options={{
            title: 'Forecast Search',
            // Center the header title on Android
            headerTitleAlign: 'center',
            orientation:'default'
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>   
  );
}

export default App;