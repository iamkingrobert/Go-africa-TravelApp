import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const MenuContainer = ({title, imgSrc, type, setType}) =>{

    const handlePress =()=>{
        setType(title.toLowerCase());
    };

  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
    <View className={`w-16 shadow-sm p-1 rounded-full h-16 items-center justify-center ${type === title.toLowerCase() ? "bg-gray-300" : ""}`}>
        <Image
            source={imgSrc}
            className="w-full h-full object-contain"
        />
    </View>
        <Text className="text-[13px] text-black font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer 