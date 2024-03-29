import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './../Screens/ExploreScreen';
import CommunitiesScreen from './../Screens/CommunitiesScreen';
import AddPostScreen from './../Screens/AddPostScreen';
import ProfileScreen from './../Screens/ProfileScreen';
import InboxScreen from './../Screens/InboxScreen';
import { Feather } from '@expo/vector-icons';
import ExploreScreenStackNav from './ExploreScreenStackNav';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#f65e44'}}>
      <Tab.Screen name="Explore-Tab" component={ExploreScreenStackNav} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Explore</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="search" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Communities-Tab" component={CommunitiesScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Communities</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="home" size={size} color={color} />)
      }}/>
      <Tab.Screen name="AddPost-Tab" component={AddPostScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Upload</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="plus-circle" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Inbox-Tab" component={InboxScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Inbox</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="inbox" size={size} color={color} />)
      }}/>
      <Tab.Screen name="Profile-Tab" component={ProfileScreen} options={{
        tabBarLabel:({color})=>(
          <Text className="font-medium" style={{color:color,fontSize:12}}>Profile</Text>),
        tabBarIcon:({color,size})=>(
          <Feather name="user" size={size} color={color} />)
      }}/>
    </Tab.Navigator>
  )
}
