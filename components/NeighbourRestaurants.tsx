import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import { Link } from "expo-router";
import { neighbourhoodRestaurant } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

const NeighbourRestaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {neighbourhoodRestaurant.map((restaurant, index) => (
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
            <View className="w-[200px] h-[200px] bg-white mr-[10px] shadow-lg  shadow-black rounded-2xl flex mb-20">
              <Image
                source={restaurant.img}
                className="object-contain rounded-2xl w-full h-full"
              />
              <View className="">
                <Text className="text-xl font-bold">{restaurant.name}</Text>
                <View className="flex-row items-center gap-2">
                  <Ionicons name="star-outline" color={"gold"} size={16} />
                  <Text className="text-green-500">{restaurant.rating}</Text>
                  <Text className="font-semibold">
                    {restaurant.delivery_time}.
                  </Text>
                </View>
                <Text className="text-gray-500">{restaurant.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default NeighbourRestaurants;
