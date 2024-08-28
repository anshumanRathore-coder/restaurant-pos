import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {categories.map((category, index) => (
        <View
          key={index}
          className="w-[100px] h-[100px] bg-white mr-[10px] shadow-sm rounded-xl shadow-black"
        >
          <Image source={category.img} />
          <Text className="p-[6px] text-[14px] font-bold">{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
