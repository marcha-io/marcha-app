import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Categories({categoryList}) {
  const navigation = useNavigation();
  return (
    <View className="mt-5 px-6">
      <Text className="text-gray-900 mb-2 font-bold text-base">Categories</Text>
      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({item,index})=>(
          <TouchableOpacity
          onPress={()=>navigation.navigate('Item List', {category:item.name})}
          className="flex-1 items-center justify-center p-2 border-2 bg-stone-50 border-stone-200 m-1 rounded-lg">
            <Image source={{uri:item.icon}}
            className="h-10 w-10"
            />
            <Text className="text-xs text-center mt-1">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
