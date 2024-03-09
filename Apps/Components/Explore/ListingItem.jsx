import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ListingItem({item}) {
  return (
    <TouchableOpacity className="flex-1 m-2 border border-gray-700 rounded-md bg-white">
      <View className="flex-row justify-between items-center py-2 px-3 border-b border-gray-700">
        <Text className=" font-medium text-gray-700">{item.name}</Text>
        <Text className="text-base text-gray-700">￡{item.price}</Text>
      </View>
      <Image source={{uri:item.image}} className="w-full h-40"/>
      <View className="rounded-b-md border-t border-gray-700 flex-row justify-between items-center py-2 px-3">
        <Text className=" font-medium text-gray-700">{item.name}</Text>
        <Text className="text-base text-gray-700">￡{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}
