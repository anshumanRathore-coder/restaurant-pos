import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { restaurant } from "@/assets/data/restaurant";
import {
  Link,
  router,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import useBasketStore from "@/store/basketStore";
import { SafeAreaView } from "react-native-safe-area-context";
import TopRestaturants from "@/components/TopRestaurants";

const aboutFood = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, img } = useLocalSearchParams();
  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);

  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const { items, total } = useBasketStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-white justify-center items-center"
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="flex-row items-center justify-center space-x-2">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white justify-center items-center">
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white justify-center items-center">
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);

    selected.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
  };

  const onScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 350) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  return (
    <>
      <ParallaxScrollView
        scrollEvent={onScroll}
        backgroundColor={"#fff"}
        className="flex-1"
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => (
          <Image source={img} className="h-[300px] w-full" />
        )}
        contentBackgroundColor={Colors.lightGrey}
        renderStickyHeader={() => (
          <View key="sticky-header" className="bg-white ml-18 h-24 justify-end">
            <Text className="text-xl mb-4 ml-16">{name}</Text>
          </View>
        )}
      >
        <View className="bg-white">
          <Text className="text-2xl m-4">{name}</Text>
          <Text className="text-base m-4 leading-6 text-gray-500">
            {restaurant.delivery} ·{" "}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? " · " : ""}`
            )}
          </Text>
          <Text className="text-base rounded-lg bg-green-300 p-3 m-4 leading-6 text-gray-500">
            we're not just serving food; we're serving up smiles and memories.
            Our dishes are crafted with a dash of love, a sprinkle of passion,
            and a whole lot of flavor. Come hungry, leave happy, and let us take
            your taste buds on a journey they won't forget!
          </Text>
          <View className="">
            <Text className="mt-2 ml-3 mb-3 text-xl font-bold">
              Top {name} Restaurant near you
            </Text>
            <TopRestaturants />
          </View>
        </View>
      </ParallaxScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  stickySegments: {
    position: "absolute",
    height: 50,
    left: 0,
    right: 0,
    top: 100,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingBottom: 4,
  },
  segmentScrollview: {
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
    paddingBottom: 4,
  },
});
export default aboutFood;
