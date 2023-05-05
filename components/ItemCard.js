import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ItemCard = ({imgSrc, title, location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-100 space-y-2 px-2 py-2 shadow-md bg-white w-[180px] my-2">
        <Image 
            source={{uri : imgSrc}}
            className="w-full h-36 rounded-md object-cover"
        />
        {title ? (
          <>
          <Text className="text-[17px] text-black font-bold">{title?.length > 14 ? `${title.slice(0.14)}..` : title}</Text>

          <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={16} color="black" />
          <Text className="text-[14px] text-gray-700 font-bold">{location?.length > 18 ? `${title.slice(0.18)}..` : location}</Text>
          </View>
          </>
        ): <></>}
    </TouchableOpacity>
  )
}

export default ItemCard