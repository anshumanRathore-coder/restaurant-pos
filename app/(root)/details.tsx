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

const Details = () => {
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

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: "/(modal)/dish", params: { id: item.id } }} asChild>
      <TouchableOpacity className="bg-white p-4 flex-row">
        <View className="flex-1">
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="text-sm text-gray-600 py-1">{item.info}</Text>
          <Text className="text-sm text-gray-600 py-1">${item.price}</Text>
        </View>
        <Image source={item.img} className="h-20 w-20 rounded" />
      </TouchableOpacity>
    </Link>
  );

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
        <View className="bg-gray-100">
          <Text className="text-2xl m-4">{name}</Text>
          <Text className="text-base m-4 leading-6 text-gray-500">
            {restaurant.delivery} ·{" "}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? " · " : ""}`
            )}
          </Text>
          <Text className="text-base m-4 leading-6 text-gray-500">
            {restaurant.about}
          </Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 50 }}
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            sections={DATA}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View className="mx-4 h-px bg-gray-400" />
            )}
            SectionSeparatorComponent={() => (
              <View className="h-px bg-gray-400" />
            )}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text className="text-xl font-bold mt-10 mx-4">{title}</Text>
            )}
          />
        </View>
      </ParallaxScrollView>

      {/* Sticky segments */}
      <Animated.View style={[styles.stickySegments, animatedStyles]}>
        <View className="bg-white justify-center shadow-md w-full h-full">
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.segmentScrollview}
          >
            {restaurant.food.map((item, index) => (
              <TouchableOpacity
                ref={(ref) => (itemsRef.current[index] = ref!)}
                key={index}
                className={`px-4 py-1 rounded-full ${
                  activeIndex === index ? "bg-primary" : ""
                }`}
                onPress={() => selectCategory(index)}
              >
                <Text
                  className={`text-lg ${
                    activeIndex === index
                      ? "text-green-400   font-bold"
                      : "text-primary"
                  }`}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>

      {/* Footer Basket */}
      {items > 0 && (
        <View className="absolute bg-white bottom-0 left-0 w-full p-2 shadow-md">
          <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#fff" }}>
            <Link href="/basket" asChild>
              <TouchableOpacity className="bg-primary w-full bg-green-300 px-4 py-2 rounded flex-row justify-between items-center h-12">
                <Text className="text-white bg-green-600 font-bold p-2 rounded">
                  {items}
                </Text>
                <Text className="text-white font-bold text-lg">
                  View Basket
                </Text>
                <Text className="text-white font-bold text-lg">${total}</Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )}
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
export default Details;
