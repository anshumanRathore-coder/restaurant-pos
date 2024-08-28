import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheet from "./BottomSheet";

const SearchBar = () => (
  <SafeAreaView className="h-[60px] bg-white">
    <View className="flex-1 flex-row items-center gap-[10px] px-[20px]">
      <View className="flex-1 flex-row items-center bg-[#FCF8FF] rounded-lg">
        <TextInput
          className="p-[10px] text-[#424242]"
          placeholder="Restaurants, groceries, dishes"
        />
      </View>
      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity className="p-[10px] rounded-full">
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </SafeAreaView>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView className="flex-1 mt-10 bg-white">
      <BottomSheet ref={bottomSheetRef} />

      <SafeAreaView className="h-[60px] flex-row items-center justify-between gap-[20px] px-[20px] bg-white">
        <TouchableOpacity onPress={openModal}>
          <Image
            className="w-[30px] h-[30px] mt-2"
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1" onPress={openModal}>
          <Text className="text-[14px] text-[#9F9AA1]">Delivery · Now</Text>
          <View className="flex-row items-center">
            <Text className="text-[18px] font-bold">Jaipur</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#FCF8FF] p-[10px] rounded-full">
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;
