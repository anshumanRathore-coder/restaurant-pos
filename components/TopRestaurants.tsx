import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import { Link } from "expo-router";
import { neighbourhoodRestaurant, topRestaurants } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

const TopRestaturants = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
      }}
    >
      {topRestaurants.map((restaurant, index) => (
        <Link
          href={{
            pathname: "/details",
            params: {
              name: restaurant.name,
              img: restaurant.img,
            },
          }}
          key={index}
          asChild
        >
          <TouchableOpacity>
            <View className="w-[180px] h-[200px] bg-white  shadow-lg  shadow-black rounded-2xl flex-row mb-5">
              <Image
                source={restaurant.img}
                className="object-contain rounded-2xl w-full h-full"
              />
              <View className="ml-2 mt-1">
                <Text className="text-xl font-bold">{restaurant.name}</Text>
                <Text className="text-sm pr-7">{restaurant.description}</Text>
                <View className="flex-row items-center gap-2">
                  <Ionicons name="star-outline" color={"gold"} size={16} />
                  <Text className="text-green-500">{restaurant.rating}</Text>
                  <Text className="font-semibold">
                    {restaurant.delivery_time}.
                  </Text>
                </View>
                <Text className="text-gray-500">{restaurant.location}</Text>
                <View className="px-5 mt-7 mr-5 py-3 bg-yellow-300 rounded-2xl">
                  <Text className="text-sm font-bold text-orange-700">
                    {restaurant.offer}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default TopRestaturants;
