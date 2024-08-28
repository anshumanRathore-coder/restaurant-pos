import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getDishById } from "@/assets/data/restaurant";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import useBasketStore from "@/store/basketStore";

const Dish = () => {
  const { id } = useLocalSearchParams();
  const item = getDishById(+id)!;
  const router = useRouter();
  const { addProduct } = useBasketStore();

  const addToCart = () => {
    addProduct(item);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.back();
  };
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <View className="flex-1 bg-white">
        <Animated.Image
          entering={FadeIn.duration(400).delay(200)}
          source={item?.img}
          className="w-full h-72"
        />
        <View className="p-5">
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(200)}
            className="text-xl font-bold mb-2"
          >
            {item?.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(400)}
            className="text-base text-[#424242]"
          >
            {item?.info}
          </Animated.Text>
        </View>

        <View className="absolute bottom-0 left-0 w-full bg-white p-5 shadow-lg shadow-black">
          <TouchableOpacity
            className="bg-[#20E1B2] p-4 rounded-lg items-center"
            onPress={addToCart}
          >
            <Text className="text-white font-bold text-base">
              Add for ${item?.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dish;
