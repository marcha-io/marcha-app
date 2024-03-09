import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import LatestItems from '../Components/Explore/LatestItems';

export default function ItemList() {
  const {params} = useRoute();
  const db = getFirestore(app);
  const [itemList, setItemList] = useState([]);

  useEffect(()=>{
    params&&getItemListByCategory();
  },[params])

  const getItemListByCategory = async()=>{
    setItemList([]);
    const q = query(collection(db, 'UserPost'),where('category','==',params.category))
    const snapshot = await getDocs(q);
    snapshot.forEach(doc=>{
      console.log(doc.data());
      setItemList(itemList=>[...itemList,doc.data()]);
    })
  }

  return (
    <View>
      {itemList.length>0? <LatestItems latestItemList={itemList} heading={''}/>
      : <Text className="p-20 mt-20 mx-auto text-lg font-medium text-gray-400">No posts found</Text>}
    </View>
  )
}
