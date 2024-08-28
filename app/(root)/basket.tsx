import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import useBasketStore from "@/store/basketStore";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ConfettiCannon from "react-native-confetti-cannon";
import { Link, router } from "expo-router";
import SwipeableRow from "@/components/SwipeabelRow";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { images } from "@/constants";
const Basket = () => {
  const { products, total, clearCart, reduceProduct } = useBasketStore();
  const [order, setOrder] = useState(false);
  const FEES = {
    service: 2.99,
    delivery: 5.99,
  };

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <>
      {order && (
        <ConfettiCannon
          count={1000}
          origin={{ x: -10, y: 0 }}
          fallSpeed={250}
          fadeOut={true}
          autoStart={true}
        />
      )}
      <ReactNativeModal isVisible={order}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] h-[110px] mx-auto my-5"
          />
          <Text className="text-3xl font-JakartaBold text-center">
            Order Placed
          </Text>
          <Text className="text-base text-gray-400 font-bold text-center mt-2">
            Thank you for your order!😊😋
          </Text>
          <CustomButton
            title="Add more"
            onPress={() => router.push(`/(root)/`)}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
      {!order && (
        <>
          <FlatList
            data={products}
            ListHeaderComponent={
              <Text className="text-2xl font-bold mx-4 my-4">Items</Text>
            }
            ItemSeparatorComponent={() => <View className="h-px bg-gray-200" />}
            renderItem={({ item }) => (
              <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View className="flex-row bg-white p-2 gap-5 items-center">
                  <Text className="text-primary text-lg">{item.quantity}x</Text>
                  <Text className="flex-1 text-lg">{item.name}</Text>
                  <Text className="text-lg">${item.price * item.quantity}</Text>
                </View>
              </SwipeableRow>
            )}
            ListFooterComponent={
              <View>
                <View className="h-px bg-gray-200" />
                <View className="flex-row justify-between p-2 bg-white">
                  <Text className="text-lg text-medium">Subtotal</Text>
                  <Text className="text-lg">${total}</Text>
                </View>
                <View className="flex-row justify-between p-2 bg-white">
                  <Text className="text-lg text-medium">Service fee</Text>
                  <Text className="text-lg">${FEES.service}</Text>
                </View>
                <View className="flex-row justify-between p-2 bg-white">
                  <Text className="text-lg text-medium">Delivery fee</Text>
                  <Text className="text-lg">${FEES.delivery}</Text>
                </View>
                <View className="flex-row justify-between p-2 bg-white">
                  <Text className="text-lg text-medium">Order Total</Text>
                  <Text className="text-lg font-bold">
                    ${(total + FEES.service + FEES.delivery).toFixed(2)}
                  </Text>
                </View>
              </View>
            }
          />
          <View className="absolute bg-white bottom-0 left-0 w-full p-2 shadow-lg">
            <SafeAreaView edges={["bottom"]} className="bg-white">
              <CustomButton
                title="Order now"
                bgVariant="success"
                textVariant="success"
                onPress={startCheckout}
              />
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  );
};

export default Basket;
