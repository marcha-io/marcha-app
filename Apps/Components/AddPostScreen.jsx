import { View, Text, TextInput, TouchableOpacity, Keyboard, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function AddPostScreen() {
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = (value) => {
    value.image = image;
    console.log(value)
  }

  return (
    <ScrollView onPress={Keyboard.dismiss} accessible={false}>
      <View className="p-10">
        <Text className="text-2xl font-bold mt-8 text-gray-800">New Product</Text>
        <Text className="mt-1 mb-2 text-sm leading-6 text-gray-600">This information will be displayed publicly.</Text>
        <Formik
          initialValues={{name:'', desc:'', category:'', price:'' }}
          onSubmit={value=>onSubmitMethod(value)}
          validate={(values) => {
            const errors = {}
            if (!values.name)
            {
              console.log("Name is required");
              errors.name = 'Name is required';
            }
            if (!values.image) {
              console.log("Image is required");
              errors.image = 'Image is required';
            }
            if (!values.desc) {
              console.log("Description is required");
              errors.desc = 'Description is required';
            }
            if (!values.category) {
              console.log("Category is required");
              errors.category = 'Category is required';
            }
            return errors
            }}>
          {({handleChange, handleBlur, handleSubmit, values, errors})=>(
            <View>
              <TouchableOpacity onPress={pickImage}>
                {image?
                  <Image source={{uri:image}} className="mt-3 h-44 w-44 rounded-md border border-gray-400"/>
                  : <Image source={require('./../../assets/images/placeholder.jpeg')} className="mt-3 h-44 w-44 rounded-md border border-gray-400"/>
                }
              </TouchableOpacity>
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
    </ScrollView>
  )
}
