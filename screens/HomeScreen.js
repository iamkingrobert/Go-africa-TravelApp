import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import HappyGO from '../assets/HappyGO.png'


const HomeScreen = () => {
// Hide HEADER HERE
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    }, []);


  return (
    <SafeAreaView className="flex-1 bg-white relative">
    {/* Top Section */}
    <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className=" w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-white text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-black text-3xl font-semibold">AFRICA</Text>
    </View>

    {/* Hero Text Section */}

    <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#121e3a] text-[37px] ">Enjoy the trip with</Text>
        <Text className="text-[28px] text-[#121e3a] font-medium">Daily Adventure</Text>

        <Text className="text-[#212425] text-[14px]">Mama Africa, your one-stop leisure, wildlife, music, safari and family holiday destination. Enjoy Africa's captivating magic.</Text>
    </View>


    {/* Traveller Section With Circle */}

    <View className="w-[300px] h-[300px] bg-black absolute rounded-full -right-36 bottom-36"></View>
    <View className="w-[350px] h-[350px] bg-[#0b2243] absolute rounded-full -left-36 -bottom-28"></View>

    {/* Traveller Image Container */}

    <View className="flex-1 relative items-center justify-center">
    <Animatable.Image animation={"fadeIn"} easing="ease-in-out" source={HappyGO} className="w-full h-full object-cover mt-[68px]"/>

    <TouchableOpacity
    onPress={() => navigation.navigate("Discover")}

     className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-black rounded-full items-center justify-center"> 
       <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="h-20 w-20 items-center justify-center bg-black rounded-full">
            <Text className=" text-white text-[36px] font-semibold">Go</Text>
        </Animatable.View>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen