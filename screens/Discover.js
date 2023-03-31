import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Robert  from '../assets/Robert.jpg';
import Hotels from '../assets/hotel.png';
import Attractions from '../assets/Tourist.png';
import Restaurants from '../assets/restaurant-icon.png';
import MenuContainer from '../components/MenuContainer';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';


const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("attractions")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white mt-2">
    <View className="flex-row items-center justify-between px-8">
    <View>
        <Text className="text-[38px] text-[#081718] font-bold">Discover</Text>
        <Text className="text-[31px] text-[#081718]">the beauty of Africa</Text>
    </View>

    <View className="w-12 h-12 bg-black rounded-full items-center justify-center shadow-lg">
        <Image
        source={Robert}
        className="w-full h-full rounded-full object-cover"
        />
    </View>
    </View>

    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
    <GooglePlacesAutocomplete
    GooglePlacesDetailsQuery={{fields: "geometry"}}
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
            // Details is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
        }}
        query={{key: "AIzaSyB1cKllPGLDpEfp5K8Hz3dXk-lblaqumr0",
        language: 'en',
        }}
      />
    </View>

{/* MENU CONTAINER */}

<ScrollView>
<View className="flex-row items-center justify-between px-8 mt-8">
<MenuContainer
  key={"restaurants"}
  title="RESTAURANT"
  imgSrc={Restaurants}
  type={type}
  setType={setType}
/>

<MenuContainer
  key={"hotel"}
  title="HOTELS"
  imgSrc={Hotels}
  type={type}
  setType={setType}
/>

<MenuContainer
  key={"attractions"}
  title="ADVENTURE"
  imgSrc={Attractions}
  type={type}
  setType={setType}
/>
</View>

<View>
  <View className="flex-row items-center justify-between px-4 mt-8">
    <Text className="text-black text-[26px] font-bold">Top Trends</Text>
    <TouchableOpacity className="flex-row items-center justify-center space-x-2">
    <Text className="text-black text-[18px] font-bold">Explore</Text>
    <FontAwesome name="long-arrow-right" size={24} color="black" />
    </TouchableOpacity>
  </View>
  <View className="flex-row flex-wrap px-3 justify-between items-center mt-8">
  <ItemCard key={101} imgSrc={"https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg"} title="Nairobi Park" location="Nairobi, Kenya"/>
  <ItemCard key={102} imgSrc={"https://cdn.pixabay.com/photo/2018/11/22/18/17/elephant-3832516_1280.jpg"} title="Palm Tree Park" location="Windhoek, Namibia"/>
  </View>



</View>
</ScrollView>
    </SafeAreaView>
  )
}

export default Discover