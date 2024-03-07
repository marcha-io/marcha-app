import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../Components/ExploreScreen';
import CommunitiesScreen from '../Components/CommunitiesScreen';
import AddPostScreen from '../Components/AddPostScreen';
import ProfileScreen from '../Components/ProfileScreen';
import InboxScreen from '../Components/InboxScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#f65e44'}}>
      <Tab.Screen name="explore" component={ExploreScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Explore</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="search" size={size} color={color} />)
      }}/>
      <Tab.Screen name="communities" component={CommunitiesScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Communities</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="home" size={size} color={color} />)
      }}/>
      <Tab.Screen name="addPost" component={AddPostScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Upload</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="plus-circle" size={size} color={color} />)
      }}/>
      <Tab.Screen name="inbox" component={InboxScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Inbox</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="inbox" size={size} color={color} />)
      }}/>
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Profile</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="user" size={size} color={color} />)
      }}/>
    </Tab.Navigator>
  )
}
