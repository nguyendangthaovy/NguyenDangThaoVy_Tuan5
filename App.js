import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tuan5 from './components/Tuan5';
import Tuan5a from './components/Tuan5a';
import Tuan5b from './components/Tuan5b';
import Tuan5c from './components/Tuan5c';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tuan5">
        <Stack.Screen name="Tuan5" component={Tuan5}/>
        <Stack.Screen name="Tuan5a" component={Tuan5a}/>
        <Stack.Screen name="Tuan5b" component={Tuan5b} />
        <Stack.Screen name="Tuan5c" component={Tuan5c} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

  
}