import { View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';

export default function AddPostScreen() {

  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="p-10">
        <Text className="text-2xl font-bold mt-8 text-gray-800">New Product</Text>
        <Text className="mt-1 mb-2 text-sm leading-6 text-gray-600">This information will be displayed publicly.</Text>
        <Formik initialValues={{name:'', desc:'', category:'', price:'' }} onSubmit={value=>console.log(value)}>
          {({handleChange, handleBlur, handleSubmit, values})=>(
            <View>
              <TextInput
                className="mt-3 border border-gray-300 rounded-md h-12 px-4 bg-gray-200 text-gray-600 text-sm"
                placeholder="Name"
                values={values.name}
                onChangeText={handleChange('name')}
              />
              <TextInput
                className="mt-3 border border-gray-300 h-28 rounded-md py-3 px-4 bg-gray-200 text-gray-600 text-sm"
                placeholder="Description"
                multiline={true}
                values={values.desc}
                onChangeText={handleChange('desc')}
              />
              <TextInput
                className="mt-3 border border-gray-300 rounded-md h-12 px-4 bg-gray-200 text-gray-600 text-sm"
                placeholder="Price"
                values={values.price}
                keyboardType='numeric'
                onChangeText={handleChange('price')}
              />
              <Picker
                selectedValue={values.category}
                onValueChange={handleChange('category')}
                itemStyle={{ borderColor: "#d1d5db", backgroundColor:"#e5e7eb", borderWidth: 1, marginTop:12, borderRadius:6}}

              >
                {categoryList&&categoryList.map((item,index)=>(
                  <Picker.Item
                    key={index}
                    label={item.name}
                    value={item.name} />
                ))}
              </Picker>
              <TouchableOpacity onPress={handleSubmit} className="bg-marcha p-4 mt-3 rounded-md">
                <Text className="text-white text-center text-base font-bold">Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}
