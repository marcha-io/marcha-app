import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from '../Screens/ItemList';
import ExploreScreen from '../Screens/ExploreScreen';

const Stack = createStackNavigator();

export default function ExploreScreenStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen}
        options={{
          headerShown:false
        }}
        />
      <Stack.Screen name="Item List"
        options={({route})=>({title:route.params.category})}
        component={ItemList} />
    </Stack.Navigator>
  )
}
