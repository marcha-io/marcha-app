import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './../Components/Explore/Header'
import Slider from '../Components/Explore/Slider'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from '../Components/Explore/Categories'
import LatestItems from '../Components/Explore/LatestItems'

export default function ExploreScreen() {
  const db = getFirestore(app);
  // const getSliders=()=>{
  // }
  const [categoryList, setCategoryList] = useState([]);
  const [latestItemList, setLatestItemList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getLatestItems();
  },[])

  const getCategoryList = async() => {
    setCategoryList([]);
    const querySnapshot=await getDocs(collection(db, 'Category'));
    querySnapshot.forEach((doc)=>{
      console.log("Docs:",doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    })
  }

  const getLatestItems = async() => {
    setLatestItemList([]);
    const querySnapshot=await getDocs(collection(db, 'UserPost'), orderBy('createdAt', 'desc'));
    querySnapshot.forEach((doc)=>{
      setLatestItemList(latestItemList=>[...latestItemList,doc.data()]);
    })
  }
  return (
    <ScrollView>
      <View className="bg-white pt-14 pb-8 px-6">
        <Header/>
      </View>
      {/* <View className="bg-marcha">
        <Slider/>
      </View> */}
      <Categories categoryList={categoryList}/>
      <LatestItems latestItemList={latestItemList} heading={'Recently Uploaded'}/>
    </ScrollView>
  )
}
