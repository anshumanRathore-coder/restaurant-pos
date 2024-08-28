import { Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/Categories";
import NeighbourRestaurants from "@/components/NeighbourRestaurants";
import FoodOptions from "@/components/FoodOptions";
import TopRestaturants from "@/components/TopRestaurants";

const Page = () => {
  return (
    <SafeAreaView className="mt-[50px] bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text className="text-[18px]  font-bold mt-[16px] mb-[8px] px-[16px]">
          What's in your mind
        </Text>
        <FoodOptions />
        <Text className="text-[18px] font-bold mt-[16px] mb-[8px] px-[16px]">
          Top picks in your neighbourhood
        </Text>
        <NeighbourRestaurants />
        <Text className="text-[18px] font-bold mt-[16px] mb-[8px] px-[16px]">
          Top Restaurants
        </Text>
        <TopRestaturants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
