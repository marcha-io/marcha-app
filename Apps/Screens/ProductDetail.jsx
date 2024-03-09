import { View, Text, Image, ScrollView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductDetail() {
  const {params} = useRoute();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    setProduct(params.product);
   },[])

   const sendEmailMessage = () => {
    const subject = 'Interested in'+product.name;
    const body = 'Hi'+ product.userName;
    Linking.openURL('mailto:'+product.userEmail+"?subject="+subject+"&body="+body);
   }

  return (
    <ScrollView>
      <Image source={{uri:product.image}} className="w-full h-96"/>
      <View className="p-4">
        <Text className="text-2xl text-gray-900 font-bold">{product?.name}</Text>
        <View className="items-baseline">
          <Text className="mt-1 bg-orange-200 border text-orange-400 px-2 p-1">{product?.category}</Text>
        </View>
        <Text className="mt-4 text-lg text-gray-900 font-bold">Description</Text>
        <Text className="text-base text-gray-600 mt-1 font-normal">{product?.desc}</Text>
      </View>
      <View className="mt-6 px-4 flex border-y-0.5 border-gray-300 bg-gray-50 py-6 flex-row items-center space-x-2">
        <Image source={{uri:product.userImage}} className="w-12 h-12 rounded-full"/>
        <View>
          <Text className="text-base text-gray-700 font-bold">{product?.userName}</Text>
          <Text className="text-md text-gray-700 font-normal">{product?.userEmail}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>sendEmailMessage()} className="my-6 bg-marchaDark py-4 mx-4 rounded-lg">
        <Text className="text-center text-white text-lg font-medium">Message</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
