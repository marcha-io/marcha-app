import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './../Components/Explore/Header'
import Slider from '../Components/Explore/Slider'
import { getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from '../Components/Explore/Categories'

export default function ExploreScreen() {
  const db = getFirestore(app);
  // const getSliders=()=>{
  // }
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList();
  },[])

  const getCategoryList = async() => {
    setCategoryList([]);
    const querySnapshot=await getDocs(collection(db, 'Category'));
    querySnapshot.forEach((doc)=>{
      console.log("Docs:",doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    })
  }
  return (
    <View>
      <View className="bg-white pt-14 pb-8 px-6">
        <Header/>
      </View>
      {/* <View className="bg-marcha">
        <Slider/>
      </View> */}
      <Categories categoryList={categoryList}/>
    </View>
  )
}
