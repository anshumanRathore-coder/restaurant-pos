import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View className="bg-white p-2 rounded-lg mb-4">
      <TouchableOpacity className="flex-row gap-5 items-center bg-white py-2 border-b border-[#EEE9F0]">
        <Ionicons name="arrow-down-outline" size={40} color={Colors.medium} />
        <Text className="flex-1">Sort</Text>
        <Ionicons name="chevron-forward" size={40} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row gap-5 items-center bg-white py-2 border-b border-[#EEE9F0]">
        <Ionicons name="fast-food-outline" size={40} color={Colors.medium} />
        <Text className="flex-1">Hygiene rating</Text>
        <Ionicons name="chevron-forward" size={40} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row gap-5 items-center bg-white py-2 border-b border-[#EEE9F0]">
        <Ionicons name="pricetag-outline" size={40} color={Colors.medium} />
        <Text className="flex-1">Offers</Text>
        <Ionicons name="chevron-forward" size={40} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row gap-5 items-center bg-white py-2">
        <Ionicons name="nutrition-outline" size={40} color={Colors.medium} />
        <Text className="flex-1">Dietary</Text>
        <Ionicons name="chevron-forward" size={40} color={Colors.primary} />
      </TouchableOpacity>
    </View>
    <Text className="text-lg font-bold mb-4">Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }

    setSelected(selectedItems);
  }, [items]);

  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View className="flex w-full flex-row justify-between   p-2 bg-white">
      <Text className="">
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        className=""
        isChecked={items[index].checked}
        fillColor={Colors.primary}
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
          display: "flex",
        }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
        onPress={() => {
          const isChecked = items[index].checked;

          const updatedItems = items.map((item) => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }

            return item;
          });

          setItems(updatedItems);
        }}
      />
    </View>
  );

  return (
    <View className="flex-1 p-6 bg-[#FCF8FF]">
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View className="h-20" />
      <View className="absolute bottom-0 left-0 right-0 h-24 bg-white p-3 shadow-lg shadow-black">
        <View className="flex-row gap-3 justify-center">
          <Animated.View
            className={`${animatedStyles} border border-[#20E1B2] items-center justify-center rounded-lg h-14`}
          >
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text
                className={`text-[#20E1B2] px-5 font-bold text-base ${animatedText}`}
              >
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            className="bg-[#20E1B2] p-4 items-center rounded-lg flex-1 h-14"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold text-base">Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Filter;
