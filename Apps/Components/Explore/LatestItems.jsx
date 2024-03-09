import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ListingItem from './ListingItem'

export default function LatestItems({latestItemList, heading}) {
  return (
    <View className="mt-5 px-6">
      <Text className="text-gray-900 mb-2 font-bold text-base">{heading}</Text>
      <FlatList
        data={latestItemList}
        numColumns={2}
        renderItem={({item,index})=>(
          <ListingItem item={item}/>
        )}
      />
    </View>
  )
}
