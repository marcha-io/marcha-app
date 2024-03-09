import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Feather } from '@expo/vector-icons';

export default function Header() {

  const { user } = useUser();

  return (
    <View>
      <View className="flex flex-row items-center gap-x-3">
        <Image source = {{uri:user.imageUrl}} className="rounded-full h-12 w-12"/>
        <View>
          <Text className="text-gray-800 text-base -mb-1">Welcome,</Text>
          <Text className="text-gray-800 text-lg font-semibold">{ user.fullName }</Text>
        </View>
      </View>
      <View className="bg-stone-100 border border-stone-200 flex flex-row items-center space-x-2 rounded-lg h-12 px-5 mt-4">
        <Feather name="search" size={16} color="grey" />
        <TextInput placeholder="Search"
        className="text-base w-full mb-1"
        onChangeText={(value)=>console.log(value)}
        />
      </View>
    </View>
  )
}
