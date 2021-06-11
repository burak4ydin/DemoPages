import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from "native-base";
import 'react-native-gesture-handler';


//Screens

import First from './screens/first'
import Second from './screens/second'



//Navigators
const Stack = createStackNavigator();






const main = ()=>{
  return (
    <Root>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Second">
        <Stack.Screen name="First" component={First} options={{headerShown:false}}  />
        <Stack.Screen name="Second" component={Second} options={{headerShown:false}}  />
      </Stack.Navigator>
      </NavigationContainer>
    </Root>
  )



}

export default main




